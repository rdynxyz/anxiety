// FORM CONTACT
// var namaAwal = document.getElementById("namaAwal")
var namaAkhir = document.getElementById("namaAkhir")
var email = document.getElementById("email")
var noTelepon = document.getElementById("noTelepon")
var subject = document.getElementById("subjek")
var pesan = document.getElementById("pesan")

var regEx = /^[A-Za-z]+$/;
var numeric =  /^[0-9]+$/;
var symbol = ('!@#$%^&*()_-{}[]:;<>,./?')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var namaAwal = document.contactForm.namaAwal.value

function validateForm(){   
    if (document.contactForm.namaAwal.value < 1){
        document.contactForm.namaAwal.border = "2px solid red";
        alert("name is required")
        alert("document.contactForm.namaAwal.value");
        return false;
    }
}

let navButton = document.getElementById("navButton")

navButton.addEventListener("click", function() {
    // alert("hi")
  });