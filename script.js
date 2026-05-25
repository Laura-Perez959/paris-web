document.addEventListener("DOMContentLoaded", () => {

    // ===== GALERÍA =====

    const galeria = document.getElementById("galeriaScroll");

    const izquierda = document.querySelector(".izquierda");

    const derecha = document.querySelector(".derecha");

    if (derecha && izquierda && galeria) {

    derecha.addEventListener("click", () => {

        galeria.scrollLeft += 300;

    });

    izquierda.addEventListener("click", () => {

        galeria.scrollLeft -= 300;

    });
}

    izquierda.addEventListener("click", () => {

        galeria.scrollLeft -= 300;

    });


    // IDIOMAS 

    const selectorIdioma = document.getElementById("selectorIdioma");

    selectorIdioma.addEventListener("change", () => {

        const idioma = selectorIdioma.value;

        // ESPAÑOL
        if (idioma === "es") {

            document.getElementById("titulo").textContent =
                "Bienvenidos a París";

            document.getElementById("historiaTitulo").textContent =
                "Historia";

            document.getElementById("galeriaTitulo").textContent =
                "Galería";

            document.getElementById("contactoTitulo").textContent =
                "Contacto";
        }

        // INGLES
        else if (idioma === "en") {

            document.getElementById("titulo").textContent =
                "Welcome to Paris";

            document.getElementById("historiaTitulo").textContent =
                "History";

            document.getElementById("galeriaTitulo").textContent =
                "Gallery";

            document.getElementById("contactoTitulo").textContent =
                "Contact";
        }

        // FRANCES
        else if (idioma === "fr") {

            document.getElementById("titulo").textContent =
                "Bienvenue à Paris";

            document.getElementById("historiaTitulo").textContent =
                "Histoire";

            document.getElementById("galeriaTitulo").textContent =
                "Galerie";

            document.getElementById("contactoTitulo").textContent =
                "Contact";
        }

    });


    //  RELOJ 

    function actualizarRelojParis() {

        const ahora = new Date();

        const horaParis = ahora.toLocaleTimeString("es-ES", {
            timeZone: "Europe/Paris"
        });

        const fechaParis = ahora.toLocaleDateString("es-ES", {
            timeZone: "Europe/Paris",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        document.getElementById("reloj").textContent = horaParis;

        document.getElementById("fecha").textContent = fechaParis;
    }

    actualizarRelojParis();

    setInterval(actualizarRelojParis, 1000);


    // BOTON ARRIBA 

    const btnArriba = document.getElementById("btnArriba");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            btnArriba.style.display = "block";

        } else {

            btnArriba.style.display = "none";
        }

    });

    btnArriba.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // MENU 

    const menuIcono = document.getElementById("menuIcono");

    const menuLista = document.getElementById("menuLista");

    menuIcono.addEventListener("click", () => {

        menuLista.classList.toggle("activo");

    });
//  MODO OSCURO 

const modoOscuro = document.getElementById("modoOscuro");

if (modoOscuro) {

    modoOscuro.addEventListener("click", () => {

        document.body.classList.toggle("oscuro");

    });
}
// MUSICA

const musica = document.getElementById("musicaParis");

const btnMusica = document.getElementById("btnMusica");

let reproduciendo = false;

musica.volume = 0.3;

btnMusica.addEventListener("click", () => {

    if (reproduciendo) {

        musica.pause();

        btnMusica.textContent = "🎵 Música";

    } else {

        musica.play();

        btnMusica.textContent = "⏸ Pausar";
    }

    reproduciendo = !reproduciendo;

});
});