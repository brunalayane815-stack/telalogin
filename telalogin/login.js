
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (
        usuario === "Pneumoultramicroscopicossilicovulcanoconiótico" &&
        senha === "0987654321"
    ) {
        
        window.location.href = "tela2.html";

    } else {
     
        window.location.href = "tela3.html";
    }
});
