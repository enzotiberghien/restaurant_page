function loadContact(div) {
    div.insertAdjacentHTML("afterbegin", `
    <div id="main">
        <div id="container">
            <h1 id="title">Contact</h1>
            <div class="section">
                <div class="contact-items">
                    <h2>Phone Number:</h2>
                    <h2>+33 9 50 29 46 34</h2>
                </div>
                <div class="contact-items">
                    <h2>Facebook:</h2>
                    <h2>@audreericclucdefabron</h2>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.1438666466775!2d7.220657915498809!3d43.68677237912011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd199ed8f38f9%3A0xd7949beb78b08f77!2sClub%20House%20du%20Ciel%20de%20Fabron!5e0!3m2!1sen!2sse!4v1656161601493!5m2!1sen!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>`)
}

export { loadContact };