function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let value = document.getElementById("display").value;
  document.getElementById("display").value = value.slice(0, -1);
}

function calculate() {
  try {
    let expr = document.getElementById("display").value;

    expr = expr
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/exp\(/g, 'Math.exp(')
      .replace(/sqrt\(/g, 'Math.sqrt(');

    let result = eval(expr);
    document.getElementById("display").value = result;
  } catch (err) {
    document.getElementById("display").value = "Error";
  }
}

function factorial() {
  let expr = document.getElementById("display").value;
  if (!isNaN(expr) && Number.isInteger(+expr)) {
    let result = 1;
    for (let i = 1; i <= expr; i++) {
      result *= i;
    }
    document.getElementById("display").value = result;
  } else {
    document.getElementById("display").value = "Error";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Keyboard input support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/().".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});