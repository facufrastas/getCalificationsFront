export function validateFields() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user.length === 0) {
        alert("Ingrese un legajo!");
        return false;
    } else if (password.length === 0) {
        alert("Ingrese una contraseña!")
        return false;
    } else if (user.length !== 0 && password.length !== null) {
        return true;
    }
}