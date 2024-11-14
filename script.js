
// Caricamento dinamico degli eventi
window.onload = function() {
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = "col-md-6 mb-4";
        eventDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">Data: ${event.date}</p>
                    <p class="card-text">Luogo: ${event.location}</p>
                </div>
            </div>
        `;
        eventList.appendChild(eventDiv);
    });
};
// Ottieni gli elementi
const mapImage = document.getElementById('mapImage');
const overlay = document.getElementById('mapOverlay');
const closeBtn = document.getElementById('closeBtn');

// Funzione per aprire l'overlay quando si clicca sull'immagine
mapImage.addEventListener('click', function() {
    overlay.style.display = 'flex'; // Mostra l'overlay
});

// Funzione per chiudere l'overlay quando si clicca sulla "X"
closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none'; // Nascondi l'overlay
});
