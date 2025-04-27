
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach((btn) => {
    btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isActive = btn.classList.contains('active');

    // Close all open items
    document.querySelectorAll('.faq-answer').forEach((ans) => ans.classList.remove('show'));
    document.querySelectorAll('.faq-question').forEach((q) => q.classList.remove('active'));

    // Open the clicked one
    if (!isActive) {
        btn.classList.add('active');
        answer.classList.add('show');
    }
});
});
