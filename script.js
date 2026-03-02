// Actualización automática en tiempo real
document.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", actualizarCV);
});

function actualizarCV(){

    document.getElementById("previewNombre").innerText = nombre.value;
    document.getElementById("previewProfesion").innerText = profesion.value;
    document.getElementById("previewResumen").innerText = resumen.value;
    document.getElementById("previewExperiencia").innerText = experiencia.value;
    document.getElementById("previewEducacion").innerText = educacion.value;
    document.getElementById("previewEmail").innerText = email.value;
    document.getElementById("previewTelefono").innerText = telefono.value;
    document.getElementById("previewCiudad").innerText = ciudad.value;
    document.getElementById("previewIdiomas").innerText = idiomas.value;
    document.getElementById("previewHabilidades").innerText = habilidades.value;

    // Foto
    let file = document.getElementById("foto").files[0];
    if(file){
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("previewFoto").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

function descargarPDF(){
    const element = document.getElementById("cv");

    html2pdf()
        .set({
            margin: 0,
            filename: "Curriculum_Vitae.pdf",
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(element)
        .save();
}