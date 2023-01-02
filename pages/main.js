document.addEventListener("DOMContentLoaded", function (e) {
    const parrafos = document.querySelectorAll('.descp');

    let alturas = [];
    let maxAlt = 0;
    const aplicarAlturas = (function aplicarAlturas() {
        parrafos.forEach(parrafo => {
            if (maxAlt == 0) {
                alturas.push(parrafo.clientHeight);
            } else {
                parrafo.style.height = maxAlt + "px";
            }
        });
        return aplicarAlturas;
    })();

    maxAlt = Math.max.apply(Math, alturas);
    aplicarAlturas();
})