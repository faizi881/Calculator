const input = document.querySelector(".calculator input");
const buttons = document.querySelectorAll(".calculator button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const btnText = button.innerText;

    if (btnText === "Ac") {
      expression = "";
      input.value = "";
    } else if (btnText === "Del") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (btnText === "=") {
      try {
        expression = eval(expression).toString(); // Unsafe for user inputs from external sources
        input.value = expression;
      } catch {
        input.value = "Error";
        expression = "";
      }
    } else {
      expression += btnText;
      input.value = expression;
    }
  });
});
