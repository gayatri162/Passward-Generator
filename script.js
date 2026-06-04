function generatePassword() {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 10; i++) {
        const randomIndex =
            Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
    
    const strength = checkStrength(password);
    document.getElementById("strength").innerText =

        "Strength: " + strength;

}

function checkStrength(password) {
    if (password.length < 4) {
        return "Weak";
    } else if (password.length < 8) {
        return "Medium";
    } else {
        return "Strong";
    }
}

function copyPassword() {
    const passwordField =
        document.getElementById("password");

    navigator.clipboard.writeText(passwordField.value);

    alert("Password copied!");
}
