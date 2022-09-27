function iniciar() {
    const elementoBotonEnviar = document.getElementById("enviar");
    const elementoFormulario = document.getElementById("formulario");
    const elementoInput = document.getElementById("inputEmail");
    const elementoContenedorInputMensajeError = document.querySelector("form > div");
    
    let valido;
    const elementoMensajeError = document.createElement("span");

    elementoMensajeError.innerHTML = "Por favor, forneça um endereço de e-mail válido";

    elementoInput.addEventListener("keydown", (evento) => {
        if (evento.key == "Enter") {
            evento.preventDefault();
        }
    });

    elementoBotonEnviar.addEventListener("click", () => {
        valido = elementoFormulario.checkValidity();
        if (valido) {
            console.log("O formulário é válido.");
            elementoFormulario.submit();
        }else {
            elementoInput.style.border = "solid 1px #B7747D";

            elementoContenedorInputMensajeError.appendChild(elementoMensajeError);
            elementoMensajeError.style.paddingLeft = "30px";
            elementoMensajeError.style.color = "#CB8391";
            elementoMensajeError.style.fontSize = "12px";
            elementoMensajeError.style.fontStyle = "italic";

        }
    })
}

addEventListener("load", iniciar);