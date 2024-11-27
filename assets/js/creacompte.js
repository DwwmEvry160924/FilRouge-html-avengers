document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    alert(`Inscription réussie avec l'email : ${email}`);
});
