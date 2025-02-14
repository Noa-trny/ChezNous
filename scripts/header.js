document.addEventListener("DOMContentLoaded", function () {
  const basePath = window.location.pathname.includes("/pages/") ? "../" : "./";
  const headerHTML = `
        <header>
            <div class="logo">
                <a href="${basePath}index.html">
                    <img src="${basePath}assets/logo_ChezNous.png" alt="Logo" />
                </a>
            </div>
            <div>
                <div class="dropdown">
                    <button class="dropbtn">Menu</button>
                    <div class="dropdown-content">
                        <a href="${basePath}pages/categorie-tendances.html">Tendances</a>
                        <a href="${basePath}pages/categorie-villes.html">Villes</a>
                        <a href="${basePath}pages/categorie-evenements.html">Événements</a>
                        <a href="${basePath}pages/categorie-types.html">Types de biens</a>
                    </div>
                </div>
                <a href="${basePath}support.html">Support</a>
            </div>
        </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
