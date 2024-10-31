// Eventi di esempio
const events = [
    { title: "Festa della Ferrari", date: "10 Novembre 2024", location: "Centro Storico" },
    { title: "Mercato Locale", date: "15 Novembre 2024", location: "Piazza del Comune" },
];

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
