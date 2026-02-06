const cvBtn = document.getElementById("cvBtn");
const cvForm = document.getElementById("cvForm");
const interviewBtn = document.getElementById("interviewBtn");
const interviewForm = document.getElementById("interviewForm");

// Toggle forms
cvBtn.addEventListener("click", () => {
  cvForm.style.display = "block";
  interviewForm.style.display = "none";
});

interviewBtn.addEventListener("click", () => {
  interviewForm.style.display = "block";
  cvForm.style.display = "none";
});

// CV Generator
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;

  const aiText = `
${name}
${email}

Professional Summary:
Motivated professional with a strong passion for learning and growth.

Experience:
${experience}

Skills:
- HTML
- CSS
- JavaScript
- Problem Solving
`;

  document.getElementById("cvOutput").innerText = aiText;
});

// Interview Coach
document.getElementById("interview").addEventListener("submit", (e) => {
  e.preventDefault();

  const job = document.getElementById("job").value;
  const answers = document.getElementById("answers").value;

  const feedback = `
Interview Feedback for ${job}:

✔ Strengths:
- Clear communication
- Relevant experience

⚠ Suggestions:
- Use more real-world examples
- Structure answers using the STAR method

Your Answer:
${answers}
`;

  document.getElementById("interviewOutput").innerText = feedback;
});
