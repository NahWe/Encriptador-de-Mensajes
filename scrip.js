    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const botonCopiar = document.querySelector(".copiar");
    const imagenMuneco = document.querySelector(".imagenMuneco")
    const titleResult = document.querySelector(".titleResult")

    function validarTexto(texto) {
        const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
        return regex.test(texto);
    }

    function btnEncriptar(){
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

    function btnDesencriptar(){
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

    function encriptar(stringEncriptada){
        let matrix = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase(); 
        for (let i = 0 ; i < matrix.length; i++){
            if (stringEncriptada.includes(matrix[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrix[i][0], matrix[i][1]);
            }
        }
        return stringEncriptada;
    }

    function desencriptar(stringDesencriptada){
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
        mensaje.select();  // Selecciona el texto en el textarea
        document.execCommand("copy");  // Copia el texto seleccionado al portapapeles
        alert("Mensaje copiado al portapapeles")
        // imagenMuneco.style.display = "block"
    }

    textArea.addEventListener("input", (e) =>{
        imagenMuneco.style.display = "none";
        titleResult.textContent = "Capturando Mensaje";

    })
