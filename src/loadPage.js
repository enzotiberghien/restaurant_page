function loadPage(div) {
    div.insertAdjacentHTML("afterbegin", `
    <div id="main">
            <div id="container">
                <h1 id="title">Club House de Fabron</h1>
                <p id="about" class="section">Le Club House offers menus for Lunch and Dinner. The restaurant has a South of France atmosphere. Within a year of its opening, Le Club house has been recognised for its quality of food and excellent service.</p>
                <div id="hours" class="section">
                    <h2 class="section-title">Hours</h2>
                    <p>Monday: Closed</p>
                    <p>Tuesday: 10:30-21:30</p>
                    <p>Wednesday: 10:30-21:30</p>
                    <p>Thursday: 10:30-21:30</p>
                    <p>Friday: 10:30-21:30</p>
                    <p>Saturday: 10:30-21:30</p>
                    <p>Sunday: 10:30-21:30</p>
                </div>
                <div id="location" class="section">
                    <h2 class="section-title">Location</h2>
                    <p>25 Av. Joseph Giordan, 06200 Nice, France</p>
                </div>
            </div>
        </div>
    `)
}

export { loadPage };