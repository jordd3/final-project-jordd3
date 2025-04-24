document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('volunteerToggle');
  const formSection = document.getElementById('volunteerForm');
  toggleBtn.addEventListener('click', function () {
    formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
  });

  // This part handles the form submission safely:
  const form = document.getElementById('volunteerForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop default behavior

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  alert(`Thank you, ${name}! We'll contact you at ${email}.`);

  // Optional: Clear and hide the form
  form.reset();
  formSection.style.display = 'none';

  // ✅ Redirect to news page after 1 second
  setTimeout(() => {
    window.location.href = 'news.html';
  }, 1000);
});


  // BONUS INTERACTIVE ELEMENT
  const moreInfoBtn = document.createElement('button');
  moreInfoBtn.textContent = 'Learn More';
  moreInfoBtn.className = 'button-link nav-button';
  document.querySelector('.charity-details').appendChild(moreInfoBtn);

  const moreInfo = document.createElement('p');
  moreInfo.textContent = 'We’ve helped over 10,000 people get back on their feet since 2002.';
  moreInfo.style.display = 'none';
  document.querySelector('.charity-details').appendChild(moreInfo);

  moreInfoBtn.addEventListener('click', function () {
    moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
  });
});
