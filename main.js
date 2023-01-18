function includePrincipal() {
    var clinic_tags, c, elmtClin, fileClin, xhttpClin, clinic;
    clinic = document.getElementById("mudar_pag");
    clinic.setAttribute("w3-include-html", "clinica.html");
    clinic_tags = document.getElementsByTagName("*");
    for (c = 0; c < clinic_tags.length; c++) {
        elmtClin = clinic_tags[c];
        fileClin = elmtClin.getAttribute("w3-include-html");
        if (fileClin) {
            xhttpClin = new XMLHttpRequest();
            xhttpClin.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmtClin.innerHTML = this.responseText;}
                    if (this.status == 404) {elmtClin.innerHTML = "Page not found.";}
                    elmtClin.removeAttribute("w3-include-html");
                    //includePrincipal();
                }
            }
            xhttpClin.open("GET", fileClin, true);
            xhttpClin.send();
            console.log("carregou clinica")
            /* Exit the function: */
            return;
        }
    }
}
function includeContato() {
    var contat_tags, i, elemento, file, xhttp, contat;
    contat = document.getElementById("mudar_pag");
    contat.setAttribute("w3-include-html", "contato.html");
    contat_tags = document.getElementsByTagName("*");
    for (i = 0; i < contat_tags.length; i++) {
        elemento = contat_tags[i];
        file = elemento.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elemento.innerHTML = this.responseText;}
                    if (this.status == 404) {elemento.innerHTML = "Page not found.";}
                    elemento.removeAttribute("w3-include-html");
                    //includeContato();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            console.log("carregou contato")
            /* Exit the function: */
            return;
        }
    }
}
