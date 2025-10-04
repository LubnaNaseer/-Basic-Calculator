document.getElementById("calculate").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    result = "Enter valid numbers";
  } else {
    switch (operator) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "mul":
        result = num1 * num2;
        break;
      case "div":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
        break;
      case "mod":
        result = num1 % num2;
        break;
      default:
        result = "Choose operator";
    }
  }

  document.getElementById("result").value = result;
});
