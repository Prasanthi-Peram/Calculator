const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

function calculate(btnValue) {
  display.focus(); // Set focus on display for better interaction

  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output); // Evaluate the expression
      display.value = output; // Update display with result
    } catch (error) {
      alert("Invalid Expression!");
      output = ""; // Clear output in case of error
      display.value = "";
    }
  } else if (btnValue === "clear") {
    output = ""; // Clear output on clear button click
    display.value = "";
  } else if (btnValue === "delete") {
    output = output.slice(0, -1); // Remove last character on delete button click
    display.value = output;
  } else {
    output += btnValue; // Append button value to output string
    display.value = output;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button.dataset.value));
});
