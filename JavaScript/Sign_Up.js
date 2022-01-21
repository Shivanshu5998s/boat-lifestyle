function signup(e) {
    e.preventDefault();

    let myForm = document.getElementById("myForm");
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let em = document.getElementById("email");
    let pass = document.getElementById("password");

    let firstname = myForm.firstname.value;
    let surname = myForm.lastname.value;
    let email = myForm.email.value;
    let password = myForm.password.value;

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }
    if (
        firstname.length == 0 ||
        lastname.length == 0 ||
        email.length == 0 ||
        password.length == 0
    ) {
        alert("Please fill all the details");
    } else {
        let user = {
            firstname,
            lastname,
            email,
            password,
        };

        let arr = JSON.parse(localStorage.getItem("users"));

        arr.push(user);

        localStorage.setItem("users", JSON.stringify(arr));

        alert("Account created successfully");
    }

    name.value = "";
    lastname.value = "";
    em.value = "";
    pass.value = "";
}