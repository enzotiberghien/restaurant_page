function loadMenu(div) {
    div.insertAdjacentHTML("afterbegin", `
    <div id="main">
            <div id="container">
                <h1 id="title">Menu</h1>

                <div class="menu-items">
                    <img src="https://images.unsplash.com/photo-1577969181928-69c4e557c99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVycmF0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
                    <div class="desc">
                        <h2>Burrata 12€</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi.</p>
                    </div>
                </div>
                <div class="menu-items">
                    <img src="https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsbW9uJTIwdGFydGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="">
                    <div class="desc">
                        <h2>Tartare de Saumon 14€</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi.</p>
                    </div>
                </div>
                <div class="menu-items">
                    <img src="https://images.unsplash.com/photo-1461530927168-44328109da52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                    <div class="desc">
                        <h2>Brochette de poulet 16€</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi.</p>
                    </div>
                </div>
                <div class="menu-items">
                    <img src="https://images.unsplash.com/photo-1595507238835-bff863eb6edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmlic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
                    <div class="desc">
                        <h2>Ribs 12€</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, commodi.</p>
                    </div>
                </div>

            </div>
        </div>
    `)
}

export { loadMenu };