let currentIndex = 0;
let isFlipped = false;
let currentUtterance = null;

function updateCard() {
    const card = flashcards[currentIndex];
    document.getElementById('term').innerHTML = `<span class="hind-semibold">${card.term}</span>`;
    // Controlla se esiste un SVG per questa card
    if (card.svg && card.svg !== '') {
        // Se c'è un SVG, mostra quello invece della definizione
        document.getElementById('definition').innerHTML = `
            <img src="${card.svg}" alt="${card.term}" class="card-svg">
        `;
    } else {
        // Altrimenti mostra la definizione normale
        document.getElementById('definition').innerHTML = `
            <span class="hind-semibold">${card.term}</span><br>
            ${card.definition}
        `;
    }
    
    // Gestione del link approfondisci
    const learnMoreLinks = document.querySelectorAll('.card .learn-more');
    learnMoreLinks.forEach(link => {
        if (card.url && card.url.trim() !== '') {
            link.style.display = 'block';  // Mostra il link
            link.href = card.url;
        } else {
            link.style.display = 'none';   // Nascondi il link
        }
    });
    
    document.querySelector('.card').classList.remove('flipped');
}

function flipCard() {
    isFlipped = !isFlipped;
    document.querySelector('.card').classList.toggle('flipped');
}

function shuffleCards() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    // Salva l'indice corrente per evitare di selezionare la stessa carta
    //const currentCard = currentIndex;
    
    // Continua a pescare una carta casuale finché non ne trova una diversa
    //let newIndex;
    //do {
    //    newIndex = Math.floor(Math.random() * flashcards.length);
    //} while (newIndex === currentCard);
    
    //currentIndex = newIndex;
    
    // Disabilita temporaneamente la transizione
    const cardInner = document.querySelector('.card-inner');
    cardInner.style.transition = 'none';
    
    updateCard();
    
    // Assicurati che la card non sia animata quando si passa alla prossima
    if (isFlipped) {
        isFlipped = false;
        document.querySelector('.card').classList.remove('flipped');
    }
    
    // Forza il reflow per applicare immediatamente lo stato senza transizione
    cardInner.offsetHeight; // trigger reflow
    
    // Riabilita la transizione
    cardInner.style.transition = '';
}

function showFlashcards(e) {
    e.preventDefault();
    document.getElementById('flashcards-view').style.display = 'block';
    document.getElementById('list-view').style.display = 'none';
    document.querySelectorAll('.view-link').forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
}

function showList(e) {
    e.preventDefault();
    document.getElementById('flashcards-view').style.display = 'none';
    document.getElementById('list-view').style.display = 'block';
    document.querySelectorAll('.view-link').forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
    
    // Popola la lista se è vuota
    const listContainer = document.querySelector('.terms-list');
    if (!listContainer.children.length) {
        flashcards.forEach(card => {
            const li = document.createElement('li');
            li.textContent = `${card.term} ${card.definition}`;
            listContainer.appendChild(li);
        });
    }
}

function updateList() {
    const listContainer = document.querySelector('.terms-list');
    listContainer.innerHTML = '';
    
    flashcards.forEach(card => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="term-content"><strong>${card.term}</strong> - ${card.definition}</div>
            <a href="#" class="audio-link" onclick="event.preventDefault(); playTerm('${card.term}')">audio 🔈</a>
        `;
        listContainer.appendChild(li);
    });
}

function playTerm(term = null) {
    const textToSpeak = term || flashcards[currentIndex].term;
    
    if (currentUtterance) {
        window.speechSynthesis.cancel();
        currentUtterance = null;
        document.querySelectorAll('.audio-button, .audio-link').forEach(el => {
            el.classList.remove('playing');
        });
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onstart = () => {
        document.querySelectorAll('.audio-button, .audio-link').forEach(el => {
            const onclick = el.getAttribute('onclick') || '';
            if ((!term && el.classList.contains('audio-button')) || 
                (term && onclick.includes(`'${term}'`))) {
                el.classList.add('playing');
            }
        });
        currentUtterance = utterance;
    };
    
    utterance.onend = () => {
        document.querySelectorAll('.audio-button, .audio-link').forEach(el => {
            el.classList.remove('playing');
        });
        currentUtterance = null;
    };
    
    utterance.onerror = () => {
        console.error('Error playing term');
        document.querySelectorAll('.audio-button, .audio-link').forEach(el => {
            el.classList.remove('playing');
        });
        currentUtterance = null;
    };
    
    window.speechSynthesis.speak(utterance);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        flipCard();
    } else if (e.code === 'Enter') {
        e.preventDefault();
        shuffleCards();
    }
});



function toggleView() {
    const checkbox = document.getElementById('toggleFlashcards');
    const termsSection = document.getElementById('terms-section');
    const flashcardsSection = document.getElementById('flashcards-section');
    
    if (checkbox.checked) {
        termsSection.style.display = 'none';
        flashcardsSection.style.display = 'flex';
        //shuffleCards();
        currentIndex = 0;
        updateCard();
    } else {
        termsSection.style.display = 'flex';
        flashcardsSection.style.display = 'none';
    }
}

// Modifica dell'inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Ordina alfabeticamente all'avvio
    flashcards.sort((a, b) => a.term.localeCompare(b.term));
    
    // Aggiorna il numero di flashcards
    document.getElementById('flashcardsCount').textContent = flashcards.length;
    
    // Aggiorna le viste
    updateList();
    updateCard();
    
    // Assicurati che la vista iniziale sia corretta
    toggleView();
});