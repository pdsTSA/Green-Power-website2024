document.addEventListener('DOMContentLoaded', function() {
  const solutions = document.querySelectorAll('.solution');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    solutions.forEach((solution, index) => {
      const solutionPosition = solution.offsetTop;

      if (scrollPosition >= solutionPosition - window.innerHeight / 2) {
        solution.classList.add('active');
      } else {
        solution.classList.remove('active');
      }
    });
  });
});
