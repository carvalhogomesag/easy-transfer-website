let currentStep = 1;
const steps = document.querySelectorAll(".step");

const seatCounts = {
    group0p: 0,
    group1: 0,
    group2: 0,
    group3: 0
};

// Language functionality
let lang = 'en';
document.getElementById('enButton').classList.add('active');

document.getElementById('enButton').addEventListener('click', () => setLanguage('en'));
document.getElementById('ptButton').addEventListener('click', () => setLanguage('pt'));

function setLanguage(selectedLang) {
    lang = selectedLang;
    updateLang();
    document.getElementById('enButton').classList.remove('active');
    document.getElementById('ptButton').classList.remove('active');
    document.getElementById(selectedLang + 'Button').classList.add('active');
}

function updateLang() {
    const texts = {
        en: {
            title: 'Easy Transfer Lisbon', // This ID is no longer an H1, but we keep it for the JS to work
            heroTitle: 'Your Private Transfer in Lisbon and Portugal',
            heroSubtitle: 'Enjoy a comfortable and reliable journey with our professional, English-speaking drivers. The perfect alternative to airport taxis and ride-sharing apps.',
            benefit1: '<strong>Fixed price guarantee</strong> - no surge pricing like Uber',
            benefit2: '<strong>Personal meet & greet</strong> - no waiting in taxi queues',
            benefit3: 'Modern, comfortable, and clean vehicles',
            benefit4: 'English & Portuguese speaking drivers',
            formTitle: 'Request a Free Quote',
            originLabel: 'Pick-up Location',
            destinationLabel: 'Drop-off Location',
            dateLabel: 'Pick-up Date',
            timeLabel: 'Pick-up Time',
            nameLabel: 'Passenger Name',
            passengersLabel: 'Number of Passengers',
            seatLabel: 'Child seats needed?',
            signLabel: 'Welcome sign with your name?',
            commentsLabel: 'Special Requests',
            submitBtn: 'Send Quote Request via WhatsApp',
            summaryTitle: 'Confirm Your Request',
            footerText: '© 2025 Easy Transfer Lisbon - Professional transfer service throughout Portugal',
            next: 'Next',
            previous: 'Previous'
        },
        pt: {
            title: 'Easy Transfer Lisbon',
            heroTitle: 'O seu Transfer Privado em Lisboa e Portugal',
            heroSubtitle: 'Desfrute de uma viagem confortável e confiável com os nossos motoristas profissionais que falam inglês. A alternativa perfeita aos táxis de aeroporto e apps como Uber.',
            benefit1: '<strong>Garantia de preço fixo</strong> - sem preços dinâmicos como a Uber',
            benefit2: '<strong>Receção pessoal no aeroporto</strong> - sem filas de espera para táxis',
            benefit3: 'Veículos modernos, confortáveis e limpos',
            benefit4: 'Motoristas que falam português e inglês',
            formTitle: 'Solicite um Orçamento Grátis',
            originLabel: 'Local de Recolha',
            destinationLabel: 'Local de Destino',
            dateLabel: 'Data de Recolha',
            timeLabel: 'Hora de Recolha',
            nameLabel: 'Nome do Passageiro',
            passengersLabel: 'Número de Passageiros',
            seatLabel: 'Precisa de cadeirinhas para crianças?',
            signLabel: 'Placa de boas-vindas com seu nome?',
            commentsLabel: 'Pedidos Especiais',
            submitBtn: 'Enviar Orçamento via WhatsApp',
            summaryTitle: 'Confirme a sua Solicitação',
            footerText: '© 2025 Easy Transfer Lisbon - Serviço profissional de transfer em todo Portugal',
            next: 'Próximo',
            previous: 'Anterior'
        }
    };

    const t = texts[lang];
    // Using .innerHTML to allow for tags like <strong>
    document.getElementById('title').innerHTML = t.title;
    document.getElementById('heroTitle').innerHTML = t.heroTitle;
    document.getElementById('heroSubtitle').innerHTML = t.heroSubtitle;
    document.getElementById('benefit1').innerHTML = t.benefit1;
    document.getElementById('benefit2').innerHTML = t.benefit2;
    document.getElementById('benefit3').innerHTML = t.benefit3;
    document.getElementById('benefit4').innerHTML = t.benefit4;
    document.getElementById('formTitle').innerHTML = t.formTitle;
    document.getElementById('originLabel').innerHTML = t.originLabel;
    document.getElementById('destinationLabel').innerHTML = t.destinationLabel;
    document.getElementById('dateLabel').innerHTML = t.dateLabel;
    document.getElementById('timeLabel').innerHTML = t.timeLabel;
    document.getElementById('nameLabel').innerHTML = t.nameLabel;
    document.getElementById('passengersLabel').innerHTML = t.passengersLabel;
    document.getElementById('seatLabel').innerHTML = t.seatLabel;
    document.getElementById('signLabel').innerHTML = t.signLabel;
    document.getElementById('commentsLabel').innerHTML = t.commentsLabel;
    document.getElementById('summaryTitle').innerHTML = t.summaryTitle;
    
    // The footer is complex, so we handle it separately
    const footerTextElement = document.getElementById('footerText');
    if (footerTextElement) {
        footerTextElement.innerHTML = `
            ${t.footerText}
            <br>
            <a href="faq.html" style="color: white; font-weight: bold;">FAQ</a>
        `;
    }

    // Update placeholders
    if (lang === 'en') {
        document.getElementById('origin').placeholder = 'e.g., Lisbon Airport, Hotel name...';
        document.getElementById('destination').placeholder = 'e.g., Porto, Algarve, Hotel name...';
        document.getElementById('name').placeholder = 'Your full name';
        document.getElementById('email').placeholder = 'Your email address';
        document.getElementById('phone').placeholder = '+351 9xxxxxxxx';
        document.getElementById('comments').placeholder = 'Flight number, special assistance...';
        document.getElementById('prevBtn').innerHTML = texts['en'].previous;
        document.getElementById('nextBtn').innerHTML = texts['en'].next;
        document.querySelector('#submitBtn span').innerHTML = texts['en'].submitBtn;
    } else {
        document.getElementById('origin').placeholder = 'ex., Aeroporto de Lisboa, Nome do hotel...';
        document.getElementById('destination').placeholder = 'ex., Porto, Algarve, Nome do hotel...';
        document.getElementById('name').placeholder = 'Seu nome completo';
        document.getElementById('email').placeholder = 'seuemail@exemplo.com';
        document.getElementById('phone').placeholder = '+351 9xxxxxxxx';
        document.getElementById('comments').placeholder = 'Número do voo, assistência especial...';
        document.getElementById('prevBtn').innerHTML = texts['pt'].previous;
        document.getElementById('nextBtn').innerHTML = texts['pt'].next;
        document.querySelector('#submitBtn span').innerHTML = texts['pt'].submitBtn;
    }
    
    // This logic might be better outside, but for simplicity, we keep it here.
    // Ensure prevBtn is hidden on the first step after language switch.
    if (currentStep === 1) {
        prevBtn.style.display = 'none';
    }
}


function showStep(n) {
    steps.forEach(step => step.style.display = 'none');
    steps[n - 1].style.display = 'block';

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (n === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    } else if (n === steps.length) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        prevBtn.style.display = 'inline-block';
        reviewRequest();
    } else {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}


function nextPrev(n) {
    if (n === 1 && !validateStep(currentStep)) return false;

    currentStep += n;
    if (currentStep > steps.length) currentStep = steps.length;
    if (currentStep < 1) currentStep = 1;

    if (currentStep === 2) {
        calculateAndDisplayRoutePreview();
    }

    showStep(currentStep);
}



function validateStep(n) {
    let valid = true;
    const inputs = steps[n - 1].querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        input.classList.remove('invalid'); // Reset validation
        if (!input.value.trim()) {
            input.classList.add('invalid');
            valid = false;
        } else {
            if (input.type === 'email' && !input.value.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
                valid = false;
                input.classList.add('invalid');
            }
            if (input.id === 'phone' && !input.value.match(/\+351\s?9\d{8}/)) {
                valid = false;
                input.classList.add('invalid');
            }
        }
    });
    if (!valid) {
        alert(lang === 'en' ? 'Please fill in all required fields with valid information.' : 'Por favor, preencha todos os campos obrigatórios com informações válidas.');
    }
    return valid;
}

function reviewRequest() {
    const summaryContent = document.getElementById('summaryContent');
    const name = document.getElementById('name').value || '-';
    const origin = document.getElementById('origin').value || '-';
    const destination = document.getElementById('destination').value || '-';
    const date = document.getElementById('date').value || '-';
    const time = document.getElementById('time').value || '-';
    const adults = passengerCounts.adults;
    const youths = passengerCounts.youths;
    const children = passengerCounts.children;
    const babies = passengerCounts.babies;
    const seatsChecked = document.getElementById('seats').checked;
    const signChecked = document.getElementById('sign').checked ?
        (lang === 'en' ? 'Yes' : 'Sim') :
        (lang === 'en' ? 'No' : 'Não');
    const comments = document.getElementById('comments').value || '-';

    let formattedDate = '';
    if (date) {
        const dateObj = new Date(date + 'T00:00:00'); // Avoid timezone issues
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        formattedDate = dateObj.toLocaleDateString(lang === 'en' ? 'en-US' : 'pt-PT', options);
    }

    let childSeatsInfo = '';
    if (seatsChecked) {
        const group0p = parseInt(document.getElementById('group0pCount').textContent);
        const group1 = parseInt(document.getElementById('group1Count').textContent);
        const group2 = parseInt(document.getElementById('group2Count').textContent);
        const group3 = parseInt(document.getElementById('group3Count').textContent);
        let seatsList = [];
        if (group0p > 0) seatsList.push(`Group 0+: ${group0p}`);
        if (group1 > 0) seatsList.push(`Group I: ${group1}`);
        if (group2 > 0) seatsList.push(`Group II: ${group2}`);
        if (group3 > 0) seatsList.push(`Group III: ${group3}`);
        childSeatsInfo = seatsList.length > 0 ?
            seatsList.join(', ') :
            (lang === 'en' ? 'Yes, but no quantity selected' : 'Sim, mas nenhuma quantidade selecionada');
    } else {
        childSeatsInfo = lang === 'en' ? 'No' : 'Não';
    }

    const summaryLabels = {
        en: {
            origin: 'Pick-up:',
            destination: 'Drop-off:',
            date: 'Date:',
            time: 'Time:',
            adults: 'Adults:',
            youths: 'Youths:',
            children: 'Children:',
            babies: 'Babies:',
            childSeats: 'Child Seats:',
            sign: 'Welcome Sign:',
            comments: 'Requests:'
        },
        pt: {
            origin: 'Recolha:',
            destination: 'Destino:',
            date: 'Data:',
            time: 'Hora:',
            adults: 'Adultos:',
            youths: 'Jovens:',
            children: 'Crianças:',
            babies: 'Bebés:',
            childSeats: 'Cadeirinhas:',
            sign: 'Placa:',
            comments: 'Pedidos:'
        }
    };

    const labels = summaryLabels[lang];

    summaryContent.innerHTML = `
        <div class="summary-item"><span class="summary-label">${labels.origin}</span> ${origin}</div>
        <div class="summary-item"><span class="summary-label">${labels.destination}</span> ${destination}</div>
        <div class="summary-item"><span class="summary-label">${labels.date}</span> ${formattedDate}</div>
        <div class="summary-item"><span class="summary-label">${labels.time}</span> ${time}</div>
        <div class="summary-item"><span class="summary-label">${labels.adults}</span> ${adults}</div>
        <div class="summary-item"><span class="summary-label">${labels.youths}</span> ${youths}</div>
        <div class="summary-item"><span class="summary-label">${labels.children}</span> ${children}</div>
        <div class="summary-item"><span class="summary-label">${labels.babies}</span> ${babies}</div>
        <div class="summary-item"><span class="summary-label">${labels.childSeats}</span> ${childSeatsInfo}</div>
        <div class="summary-item"><span class="summary-label">${labels.sign}</span> ${signChecked}</div>
        ${comments !== '-' ? `<div class="summary-item"><span class="summary-label">${labels.comments}</span> ${comments}</div>` : ''}
    `;
}

function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const adults = passengerCounts.adults;
    const youths = passengerCounts.youths;
    const children = passengerCounts.children;
    const babies = passengerCounts.babies;
    const seatsChecked = document.getElementById('seats').checked;

    let childSeatsMessage = '';
    if (seatsChecked) {
        const group0p = parseInt(document.getElementById('group0pCount').textContent);
        const group1 = parseInt(document.getElementById('group1Count').textContent);
        const group2 = parseInt(document.getElementById('group2Count').textContent);
        const group3 = parseInt(document.getElementById('group3Count').textContent);
        let seatsList = [];
        if (group0p > 0) seatsList.push(`${lang === 'en' ? 'Group 0+' : 'Grupo 0+'}: ${group0p}`);
        if (group1 > 0) seatsList.push(`${lang === 'en' ? 'Group I' : 'Grupo I'}: ${group1}`);
        if (group2 > 0) seatsList.push(`${lang === 'en' ? 'Group II' : 'Grupo II'}: ${group2}`);
        if (group3 > 0) seatsList.push(`${lang === 'en' ? 'Group III' : 'Grupo III'}: ${group3}`);
        childSeatsMessage = seatsList.length > 0 ? ` (${seatsList.join(', ')})` : '';
    }

    const sign = document.getElementById('sign').checked ? (lang === 'en' ? 'Yes' : 'Sim') : (lang === 'en' ? 'No' : 'Não');
    const comments = document.getElementById('comments').value;

    const messageTitle = lang === 'en' ?
        'Easy Transfer Lisbon Quote Request' :
        'Solicitação de Orçamento Easy Transfer Lisbon';

    let formattedDate = '';
    if (date) {
        const dateObj = new Date(date + 'T00:00:00');
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        formattedDate = dateObj.toLocaleDateString(lang === 'en' ? 'en-CA' : 'pt-PT', options); // en-CA gives YYYY-MM-DD
    }

    const message = `
*${messageTitle}*

${lang === 'en' ? 'Passenger' : 'Passageiro'}: ${name}
${lang === 'en' ? 'From' : 'De'}: ${origin}
${lang === 'en' ? 'To' : 'Para'}: ${destination}
${lang === 'en' ? 'Date' : 'Data'}: ${formattedDate}
${lang === 'en' ? 'Time' : 'Hora'}: ${time}
${lang === 'en' ? 'Adults' : 'Adultos'}: ${adults}
${lang === 'en' ? 'Youths' : 'Jovens'}: ${youths}
${lang === 'en' ? 'Children' : 'Crianças'}: ${children}
${lang === 'en' ? 'Babies' : 'Bebés'}: ${babies}
${lang === 'en' ? 'Child seats' : 'Cadeirinhas'}: ${seatsChecked ? (lang === 'en' ? 'Yes' : 'Sim') + childSeatsMessage : (lang === 'en' ? 'No' : 'Não')}
${lang === 'en' ? 'Welcome sign' : 'Placa de boas-vindas'}: ${sign}
${comments ? (lang === 'en' ? 'Comments' : 'Observações') + ': ' + comments : ''}
`;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappNumber = '+351914044836';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function changeSeat(group, delta) {
    seatCounts[group] = Math.max(0, seatCounts[group] + delta);
    document.getElementById(`${group}Count`).textContent = seatCounts[group];
}

// Clear input icons functionality
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const clearOrigin = document.getElementById('clear-origin');
const clearDestination = document.getElementById('clear-destination');

if(clearOrigin) {
    clearOrigin.addEventListener('click', () => {
        originInput.value = '';
        originInput.focus();
    });
}
if(clearDestination) {
    clearDestination.addEventListener('click', () => {
        destinationInput.value = '';
        destinationInput.focus();
    });
}
if(originInput) {
    originInput.addEventListener('input', () => {
        clearOrigin.style.display = originInput.value ? 'block' : 'none';
    });
}
if(destinationInput) {
    destinationInput.addEventListener('input', () => {
        clearDestination.style.display = destinationInput.value ? 'block' : 'none';
    });
}


// Google Maps Autocomplete
let autocompleteOrigin;
let autocompleteDestination;

function initAutocomplete() {
    autocompleteOrigin = new google.maps.places.Autocomplete(
        document.getElementById('origin'), {
            componentRestrictions: {
                country: 'pt'
            },
            fields: ['address_components', 'geometry', 'name']
        });
    autocompleteDestination = new google.maps.places.Autocomplete(
        document.getElementById('destination'), {
            componentRestrictions: {
                country: 'pt'
            },
            fields: ['address_components', 'geometry', 'name']
        });

    autocompleteOrigin.addListener('place_changed', onPlaceChangedOrigin);
    autocompleteDestination.addListener('place_changed', onPlaceChangedDestination);
}

function onPlaceChangedOrigin() {
    const place = autocompleteOrigin.getPlace();
    if (!place.geometry) {
        document.getElementById('origin').placeholder = lang === 'en' ? 'Location not found' : 'Local não encontrado';
    }
}

function onPlaceChangedDestination() {
    const place = autocompleteDestination.getPlace();
    if (!place.geometry) {
        document.getElementById('destination').placeholder = lang === 'en' ? 'Location not found' : 'Local não encontrado';
    }
}

function calculateAndDisplayRoutePreview() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    if (!origin || !destination) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
        if (status === 'OK') {
            const route = response.routes[0];
            const leg = route.legs[0];

            const distanceKm = (leg.distance.value / 1000).toFixed(1);
            const distanceMiles = (distanceKm * 0.621371).toFixed(1);
            const durationMin = leg.duration.value / 60;
            const hours = Math.floor(durationMin / 60);
            const minutes = Math.round(durationMin % 60);
            const formattedDuration = `${hours}h ${minutes < 10 ? '0' : ''}${minutes}m`;

            document.getElementById('distanceKm').innerText = distanceKm;
            document.getElementById('distanceMiles').innerText = distanceMiles;
            document.getElementById('durationFormatted').innerText = formattedDuration;

            const map = new google.maps.Map(document.getElementById('mapPreview'), {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
            map.fitBounds(route.bounds);

            const directionsRenderer = new google.maps.DirectionsRenderer({
                map: map,
                suppressMarkers: false,
                polylineOptions: {
                    strokeColor: '#1e5091',
                    strokeOpacity: 0.9,
                    strokeWeight: 5
                }
            });

            directionsRenderer.setDirections(response);
        } else {
            console.error('Directions request failed due to ' + status);
            alert('Failed to load route preview.');
        }
    });
}

// Passenger Counter Logic
const passengerCounts = {
    adults: 1,
    youths: 0,
    children: 0,
    babies: 0
};

function togglePassengerModal() {
    const modal = document.getElementById('passengerModal');
    if(modal) modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function updatePassengerSummary() {
    const summary = document.getElementById('passengerSummary');
    if (!summary) return; // Exit if on a page without this element
    
    const { adults, youths, children, babies } = passengerCounts;

    let parts = [];
    if (adults > 0) parts.push(`${adults} ${lang === 'en' ? 'Adult(s)' : 'Adulto(s)'}`);
    if (youths > 0) parts.push(`${youths} ${lang === 'en' ? 'Youth(s)' : 'Jovem(ns)'}`);
    if (children > 0) parts.push(`${children} ${lang === 'en' ? 'Child(ren)' : 'Criança(s)'}`);
    if (babies > 0) parts.push(`${babies} ${lang === 'en' ? 'Baby(ies)' : 'Bebé(s)'}`);

    summary.textContent = parts.length > 0 ?
        `👥 ${parts.join(', ')}` :
        (lang === 'en' ? '👥 Select number of passengers' : '👥 Selecione o número de passageiros');

    updateChildSeatVisibility();
}


function changePassengerCount(category, delta) {
    let currentCount = passengerCounts[category];
    let newCount = currentCount + delta;

    if (category === 'adults') {
        newCount = Math.max(1, newCount); // Adults cannot be less than 1
    } else {
        newCount = Math.max(0, newCount); // Other categories can be 0
    }

    passengerCounts[category] = newCount;
    document.getElementById(`${category}Count`).textContent = newCount;
    updatePassengerSummary();
}


function updateChildSeatVisibility() {
    const seatsToggleContainer = document.getElementById('seatsToggleContainer');
    if (!seatsToggleContainer) return; // Exit if not on the main page

    const totalChildrenAndBabies = passengerCounts.children + passengerCounts.babies;
    seatsToggleContainer.style.display = totalChildrenAndBabies > 0 ? 'flex' : 'none';

    // If no children, uncheck and hide the seat options
    if (totalChildrenAndBabies === 0) {
        const seatsCheckbox = document.getElementById('seats');
        const seatOptions = document.getElementById('seatOptions');
        if (seatsCheckbox) seatsCheckbox.checked = false;
        if (seatOptions) seatOptions.style.display = 'none';
    }
}

// Event listener for the child seat toggle
const seatsCheckbox = document.getElementById('seats');
if(seatsCheckbox) {
    seatsCheckbox.addEventListener('change', function () {
        const seatOptions = document.getElementById('seatOptions');
        if (seatOptions) seatOptions.style.display = this.checked ? 'block' : 'none';
    });
}
    
// Initial setup on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    // Only run form-specific logic if the form exists on the page
    if (document.getElementById('wizard')) {
        for (const category in passengerCounts) {
            document.getElementById(`${category}Count`).textContent = passengerCounts[category];
        }
        updateChildSeatVisibility();
        showStep(currentStep);
        updatePassengerSummary();
    }
    // Update language regardless of the page
    updateLang();
});