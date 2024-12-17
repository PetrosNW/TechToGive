const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;

    const isAnswerVisible = answer.classList.contains('show');

    document.querySelectorAll('.faq-answer').forEach(answer => {
      answer.classList.remove('show');
    });


    if (!isAnswerVisible) {
      answer.classList.add('show');
    }
  });
});
