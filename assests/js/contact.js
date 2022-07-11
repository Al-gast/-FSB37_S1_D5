function getData() {

    // DOM document object model
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let emailReceiver = "atapreuneur@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Helo, my name ${name}, ${message}, this my phone number ${phone_number}`;
    a.click();
}