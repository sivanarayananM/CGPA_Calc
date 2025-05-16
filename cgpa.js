function generateInputs() {
  const form = document.getElementById("gpa-inputs");
  const count = parseInt(document.getElementById("sem-count").value);
  form.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = `Enter GPA for Semester ${i}`;
    input.min = 0;
    input.max = 10;
    input.step = 0.01;
    input.required = true;
    input.classList.add("gpa-input");
    form.appendChild(input);
  }
}

function calculateCGPA() {
  const inputs = document.querySelectorAll(".gpa-input");
  let total = 0;
  let valid = true;

  inputs.forEach((input) => {
    const val = parseFloat(input.value);
    if (isNaN(val) || val < 0 || val > 10) {
      valid = false;
      input.style.border = "2px solid red";  // highlight invalid input
    } else {
      total += val;
      input.style.border = ""; // reset border if valid
    }
  });

  const resultDiv = document.getElementById("result");

  if (!valid) {
    resultDiv.textContent = "🚫 Please enter GPA values between 0 and 10!";
    resultDiv.style.color = "red";
    return;
  }

  const cgpa = total / inputs.length;

  if (!isNaN(cgpa)) {
    resultDiv.textContent = `📊 Your CGPA is: ${cgpa.toFixed(2)}`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Please enter valid GPA values!";
    resultDiv.style.color = "red";
  }
}


