var buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button clicked");
    });
});

var loginForm = document.getElementById("loginForm");

if (loginForm) {

    var loginRegister =
        document.getElementById("loginRegister");

    var loginPassword =
        document.getElementById("loginPassword");

    var loginMessage =
        document.getElementById("loginMessage");


    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        var registerValue =
            loginRegister.value;

        var passwordValue =
            loginPassword.value;


        if (
            registerValue === "" ||
            passwordValue === ""
        ) {

            loginMessage.textContent =
                "Please fill all fields";

            loginMessage.style.color =
                "red";

        } else {

            loginMessage.textContent =
                "Login successful";

            loginMessage.style.color =
                "green";

        }

    });

}

var registerForm = document.getElementById("registerForm");

if (registerForm) {

    var studentName =
        document.getElementById("studentName");

    var registerNumber =
        document.getElementById("registerNumber");

    var studentEmail =
        document.getElementById("studentEmail");

    var phoneNumber =
        document.getElementById("phoneNumber");

    var department =
        document.getElementById("department");

    var studentYear =
        document.getElementById("studentYear");

    var gender =
        document.getElementById("gender");

    var registerPassword =
        document.getElementById("registerPassword");

    var registerMessage =
        document.getElementById("registerMessage");


    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (
            studentName.value === "" ||
            registerNumber.value === "" ||
            studentEmail.value === "" ||
            phoneNumber.value === "" ||
            department.value === "" ||
            studentYear.value === "" ||
            gender.value === "" ||
            registerPassword.value === ""
        ) {

            registerMessage.textContent =
                "Please fill all fields";

            registerMessage.style.color =
                "red";

        } else {

            registerMessage.textContent =
                "Student registered successfully";

            registerMessage.style.color =
                "green";

            registerForm.reset();

        }

    });

}

var searchStudent = document.getElementById("searchStudent");

if (searchStudent) {

    searchStudent.addEventListener("keyup", function() {

        var searchValue =
            searchStudent.value.toLowerCase();

        var rows =
            document.querySelectorAll(
                "#studentTableBody tr"
            );

        rows.forEach(function(row) {

            var rowText =
                row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

}


var deleteButtons =
    document.querySelectorAll(".delete-btn");


deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        var confirmDelete =
            confirm(
                "Are you sure you want to delete this student?"
            );

        if (confirmDelete === true) {

            var row =
                button.parentElement.parentElement;

            row.remove();

        }

    });

});

var totalStudentCount =
    document.getElementById("totalStudentCount");

if (totalStudentCount) {

    var studentRows =
        document.querySelectorAll(
            ".recent-students tbody tr"
        );

    totalStudentCount.textContent =
        studentRows.length;

}

var contactForm = document.getElementById("contactForm");

if (contactForm) {

    var contactName = document.getElementById("contactName");
    var contactEmail = document.getElementById("contactEmail");
    var contactSubject = document.getElementById("contactSubject");
    var contactMessage = document.getElementById("contactMessage");
    var contactFormMessage = document.getElementById("contactFormMessage");

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (
            contactName.value === "" ||
            contactEmail.value === "" ||
            contactSubject.value === "" ||
            contactMessage.value === ""
        ) {

            contactFormMessage.textContent = "Please fill all fields";
            contactFormMessage.style.color = "red";

        } else {

            contactFormMessage.textContent = "Message sent successfully";
            contactFormMessage.style.color = "green";

            contactForm.reset();

        }

    });

}