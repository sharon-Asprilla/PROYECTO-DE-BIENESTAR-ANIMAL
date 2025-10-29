
const correo = document.getElementById("correo");

 const contraseña = document.getElementById("contraseña");






function validarLogin() {
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (correo === "sharon@gmail.com" && contraseña === "1724") {
        alert("¡Bienvenido,vas a cambiar vidas ");
        window.location.href = 'api.html';
    } else {
        alert("Correo o contraseña incorrectos");
    }

}
   
    