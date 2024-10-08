document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const botonCopiar = document.querySelector(".copiar");
    const imagenMuneco = document.querySelector(".imagenMuneco");
    const titleResult = document.querySelector(".titleResult");

    // Seleccionar los botones por sus clases
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");

    // Asignar las funciones a los botones
    btnEncriptar.addEventListener("click", btnEncriptarHandler);
    btnDesencriptar.addEventListener("click", btnDesencriptarHandler);
    botonCopiar.addEventListener("click", copiarAlPortapapeles);

    function validarTexto(texto) {
        const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
        return regex.test(texto);
    }

    function btnEncriptarHandler(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const texto = textArea.value.trim(); // Elimina los espacios en blanco al inicio y al final
        if (texto === "") {
            alert("Por favor, ingrese un texto para encriptar.");
            return;
        }
        if (!validarTexto(texto)) {
            alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
            return;
        }
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        titleResult.style.display = "none";
        mensaje.style.display = "block";
        botonCopiar.classList.remove("btnOcultar"); // Mostrar botón copiar
    }

    function btnDesencriptarHandler(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const texto = textArea.value.trim(); // Elimina los espacios en blanco al inicio y al final
        if (texto === "") {
            alert("Por favor, ingrese un texto para desencriptar.");
            return;
        }
        if (!validarTexto(texto)) {
            alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
            return;
        }
        const textoDesencriptado = desencriptar(texto);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        botonCopiar.classList.remove("btnOcultar"); // Mostrar botón copiar
    }

    function encriptar(stringEncriptada) {
        let matrix = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase(); 
        for (let i = 0 ; i < matrix.length; i++){
            if (stringEncriptada.includes(matrix[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrix[i][0], matrix[i][1]);
            }
        }
        return stringEncriptada;
    }

    function desencriptar(stringDesencriptada) {
        let matrix = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase(); 
        for (let i = 0 ; i < matrix.length; i++){
            if (stringDesencriptada.includes(matrix[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrix[i][1], matrix[i][0]);
            }
        }
        return stringDesencriptada;
    }

    function copiarAlPortapapeles() {
        // Selecciona el texto en el textarea de "mensaje"
        mensaje.select();
        mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

        // Copia el texto al portapapeles
        document.execCommand("copy");

        // Alerta al usuario que el texto ha sido copiado
        alert("Mensaje copiado al portapapeles");
    }

    textArea.addEventListener("input", (e) =>{
        imagenMuneco.style.display = "none";
        titleResult.textContent = "Capturando Mensaje";
    });
});
