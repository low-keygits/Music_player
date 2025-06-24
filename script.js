document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").Value.trim();
    const email = document.getElementById("email").Value.trim();
    const age = document.getElementById("age").Value.trim();
    const password = document.getElementById("password").Value;
    const confirmPassword = document.getElementById("comfirmPassword").Value;


    const msg = document.getElementById("formMessage");
    msg.style.color = "red";

    const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/;

    if (!name || !email || !age || !confirmPassword){
        msg.textContent = "All fields are required.";
        return;
    }

    if (!emailPattern.test(email)) {
        msg.textContent = "Invalid email format.";
        return;

    }

    if (isNaN(age)  || age < 18 || age > 99) {
        msg.textContent = "Age must be between 18 and 99.";
        return;
    }

    const passwordErros = [];
    if (password.length <8) passwordErros.push("8+")
    


        }
