function calculategrade(grade, unit) {
  if (grade === 'O') {
    return 10 * unit;
  } else if (grade === "A+") {
    return 9 * unit;
  } else if (grade === "A") {
    return 8 * unit;
  } else if (grade === "B") {
    return 7 * unit;
  } else if (grade === "B+") {
    return 6 * unit;
  } else if (grade === "C") {
    return 5 * unit;
  }else if (grade === "RA") {
    return 0;
  }
}

let count = 0;

function addnewcourse() {
  count++;
  let newForm = document.createElement('form');
  newForm.classList.add(`addNew`, `get-${count}`);

  const courseHTML = `
   
    <select class="course-credits get-${count}" required>
      <option value="" disabled selected>Select Credits</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <select class="grade get-${count}" required>
      <option value="select">Select</option>
      <option value="O">O</option>
      <option value="A+">A+</option>
      <option value="A">A</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="RA">RA</option>
    </select>
  `;

  newForm.innerHTML = courseHTML;
  document.querySelector('.course-div1').appendChild(newForm);
}


function removeForms() {
  const courseForms = document.querySelectorAll(".addNew");
  if (courseForms.length > 0) {
    const lastForm = courseForms[courseForms.length - 1];
    lastForm.remove();
    count--; // Optional: decrease count if needed to manage class naming
  }
}


const reports = [];

function gpacalc() {
  const RESULTBAR = document.getElementById('result');
  const GRADESELECT = document.querySelectorAll('select.grade');
  const UNITSELECT = document.querySelectorAll('select.course-credits');

  const grades = [];
  const units = [];

  let totalUnits = 0;
  let totalEarnedUnits = 0;

  GRADESELECT.forEach((select) => {
    const grade = select.value.toUpperCase();
    grades.push(grade);
  });

  UNITSELECT.forEach((select) => {
    const unit = parseInt(select.value);
    units.push(unit);
    totalUnits += unit;
  });

  for (let i = 0; i < grades.length; i++) {
    totalEarnedUnits += calculategrade(grades[i], units[i]);
  }

  const gpa = totalEarnedUnits / totalUnits;

  if (!isNaN(gpa) && gpa >= 0) {
    RESULTBAR.textContent = 'Your GPA (No cheating!): ' + gpa.toFixed(2);
  } else {
    RESULTBAR.textContent = 'Please Enter Correct Details';
  }
}
