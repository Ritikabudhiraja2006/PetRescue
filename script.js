document.addEventListener('DOMContentLoaded', function () {
  const rescueForm = document.getElementById('rescueForm');
  const volunteerform = document.getElementById('volunteerform');

  if (rescueForm) {
    rescueForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert("Submitted Successfully!");
      rescueForm.reset();
    });
  }

  if (volunteerform) {
    volunteerform.addEventListener('submit', function (event) {
      event.preventDefault();
      alert("Submitted Successfully!");
      volunteerform.reset();
    });
  }
});