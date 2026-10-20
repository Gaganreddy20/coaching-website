
const form = document.getElementById("enquiryForm");
const nameInput = document.getElementById("studentName");
const courseInput = document.getElementById("course");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const studentName = nameInput.value.trim();
  const selectedCourse = courseInput.value;

  if (!studentName || !selectedCourse) {
    message.textContent = "Please complete all required fields.";
    return;
  }

  message.textContent =
    `Thank you, ${studentName}! Your demo enquiry for ${selectedCourse} is ready.`;

  form.reset();
});
