// Funções para tratar login - login.html
let x, y, z;

x = document.getElementById("login");
y = document.getElementById("register");
z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

// Função de mostrar e ocultar senha por checkbox (Login)
function showpassword() {
    let type = document.getElementById("password-login");
    if (type.type == "password") {
        type.type = "text";
    } else {
        type.type = "password"
    }
}

// Função de mostrar e ocultar senha por checkbox (Register)
function showpassword2() {
    let type = document.getElementById("password-register");
    if (type.type == "password") {
        type.type = "text";
    } else {
        type.type = "password"
    }
}

// Funções para tratar arquivo home page - index.html
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Função para ver hora em tempo real 
setInterval(function() {

    let hoursnew = new Date();
    let hours = hoursnew.getHours();
    let minutes = hoursnew.getMinutes();
    let seconds = hoursnew.getSeconds();

    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minutes = zero(minutes);
    seconds = zero(seconds);

    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById("hours").textContent = hours+':'+minutes+':'+seconds;
},1000)

// A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}

