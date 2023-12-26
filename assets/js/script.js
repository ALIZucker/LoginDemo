const login = document.getElementById('Login');
const reg = document.getElementById('registration');


const imag = document.getElementById('imag_main');
const imag_in = document.getElementById('imge-side');

const UserLogin = document.getElementById('userName');
const PassLogin = document.getElementById('passwordlogin')

const UserRegist = document.getElementById('userName2');
const EmailRegist = document.getElementById('userName3');
const PassRegist = document.getElementById('passwordlogin2');
const error = document.getElementById('error');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const showme = document.getElementById('show_me');
const showmetext = document.getElementById('showtextme');

//---------------------------function----------------
function create(param) {
    if (param == 1) {
        let textUsername = UserLogin.value;
        let passlogin = PassLogin.value;

        const person = {Username: textUsername, Password: passlogin}
        show("Username:" + person["Username"] + "<br> Password:" + person["Password"], 1)


    } else if (param == 2) {
        let textUsername = UserRegist.value;
        let emailusername = EmailRegist.value
        let passlogin = PassRegist.value;

        const person = {Username: textUsername, EmailUser: emailusername, Password: passlogin}
        show("Username: " + person["Username"] + "<br> Password: " + person["Password"] + "<br> Email: " + person["EmailUser"], 1)

    }
}


//---------------------------function style----------
function SwapRight() {
    imag.style.transform = "translateX(42vw)";
    imag_in.style.borderBottomRightRadius = "0";
    imag_in.style.borderBottomLeftRadius = "360px";
    imag_in.style.transition = "all 1.4s linear";
    imag.style.transition = "all 1.4s  ease-in-out";
    reg.style.visibility = "visible";
    login.style.visibility = "hidden";
    login.style.transition = "all 1s ease-in-out"
}

function Swapleft() {
    imag.style.transform = "translateX(0)";
    imag_in.style.borderBottomRightRadius = "360px";
    imag_in.style.borderBottomLeftRadius = "0";
    imag_in.style.transition = "all 1.4s linear";
    imag.style.transition = "all 1.4s  ease-in-out";
    reg.style.visibility = "hidden";
    login.style.visibility = "visible";
    reg.style.transition = "all 1s ease-in-out"
}

function changetext(part) {
    if (part == 1) {
        if (/^[A-Za-z0-9]*$/.test(UserLogin.value)) {
            error.innerText = "Ok.your username is currently ";
            error.style.display = "inline-block"
            error.style.color = "green"
            UserLogin.style.animation = "none"
        } else {
            error.innerText = "string contains only letters and numbers. ";
            error.style.display = "inline-block"
            error.style.color = "red"
            UserLogin.style.animation = "tilt-shaking";
            UserLogin.style.animationDuration = "0.3s";
            UserLogin.style.animationIterationCount = "infinite";
            UserLogin.style.animationTimingFunction = "linear";
        }

    } else if (part == 2) {
        if (/^[A-Za-z0-9]*$/.test(UserRegist.value)) {
            error1.innerText = "Ok.your username is currently ";
            error1.style.display = "inline-block"
            error1.style.color = "green"
            UserRegist.style.animation = "none"
        } else {
            error1.innerText = "string contains only letters and numbers. ";
            error1.style.display = "inline-block"
            error1.style.color = "red"
            UserRegist.style.animation = "tilt-shaking";
            UserRegist.style.animationDuration = "0.3s";
            UserRegist.style.animationIterationCount = "infinite";
            UserRegist.style.animationTimingFunction = "linear";
        }
    } else if (part == 3) {
        if (EmailRegist.value.includes("@gmail.com")) {
            error2.innerText = "Ok.your Email is currently ";
            error2.style.display = "inline-block"
            error2.style.color = "green"

        } else {
            error2.innerText = "string contains only @gmail.com. ";
            error2.style.display = "inline-block"
            error2.style.color = "red"

        }
    }
}

function show(str, select) {
    if (select == 1) {
        showme.style.display = "block";
        showmetext.innerHTML = str;
    } else {
        showme.style.display = "none";
    }

}


