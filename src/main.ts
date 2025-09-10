const screen = document.getElementById("screen") as HTMLInputElement;
const numbers = document.querySelectorAll<HTMLButtonElement>(".number");
const operators = document.querySelectorAll<HTMLButtonElement>(".operator");
const equals = document.getElementById("equal") as HTMLButtonElement;
const clear = document.getElementById("clear") as HTMLButtonElement;

let currentInput: string = "";

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentInput += btn.dataset.value;
    screen.value = currentInput;
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentInput += btn.dataset.value;
    screen.value = currentInput;
  });
});

equals.addEventListener("click", () => {
  try {
    // 👇 usamos eval para simplificar (no recomendado en proyectos grandes)
    const result = eval(currentInput);
    screen.value = result;
    currentInput = result.toString(); // para seguir operando con el resultado
  } catch (error) {
    screen.value = "Error";
    currentInput = "";
  }
});

clear.addEventListener("click", () => {
  currentInput = "";
  screen.value = "";
});
