const submit = document.getElementsByClassName("sub")[0];
const bor = document.getElementById("mail");
const err = document.getElementById("error");
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const img = document.getElementById("preview");

function refresh(){
    location.reload;
}

window.addEventListener("resize", size)

function size(){
    if(window.innerWidth >= 426){
        img.src = "images/hero-desktop.jpg"
    }
    else if (window.innerWidth <= 426) {
        img.src = "images/hero-mobile.jpg"
    }
}

submit.addEventListener("click", checkmail)

function checkmail(){
    const mail = document.getElementById("mail").value;
    if(emailRegex.test(mail)){
        bor.value = '';
        bor.style.borderColor = 'rgba(245,179,178,255)';
        err.style.visibility = 'hidden';
        err.style.transition = '0.0s';
    }
    else{
        bor.style.borderColor = 'red';
        err.style.visibility = 'visible';
        err.style.transition = '0.5s';
    }
}