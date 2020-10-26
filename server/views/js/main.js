const register = document.getElementById("register");
const inputs = document.querySelectorAll("input");
let userData = {};

async function registerUser(ev) {
  ev.preventDefault();
  console.log({ userData });
  try {
    const res = apiPostRequest(
      `${window.location.href + "api/auth/signup"}`,
      userData
    );
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

function getData(ev) {
  const { name, value } = ev.target;
  userData = { ...userData, [name]: value };
}

async function apiPostRequest(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

inputs.forEach((input) => input.addEventListener("input", getData));
register.addEventListener("submit", (event) => {
  registerUser(event);
});
