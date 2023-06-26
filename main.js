const btn = document.querySelector(".login");
const email = document.querySelector("#iemail");
const senha = document.querySelector("#isen");
const form = document.querySelector("#for-m");
const erro = document.querySelector("#error");

const logins = [
  {
    user: "mateusbrito@gmail.com",
    pass: "strowt68"
  },
  {
    user: "mariana",
    pass: "petrovich",
  },
  {
    user: "admin",
    pass: "admin"
  }
];

btn.addEventListener("click", function (event) {
  event.preventDefault();
  validar();
});

function validar() {
  const getEmail = email.value;
  const getPass = senha.value;

  for (let i in logins) {
    if (getEmail === logins[i].user && getPass === logins[i].pass) {
       return location.href = 'home.html'
    } else {
        erro.innerHTML = 'Usúario ou senha incorretos.'
        break;
    }
  }
}
