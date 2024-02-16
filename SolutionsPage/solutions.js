document.addEventListener('DOMContentLoaded', function() {
    const solutions = document.querySelectorAll('.solution');
    let currentSolutionIndex = 0;
  
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
  
      solutions.forEach((solution, index) => {
        const solutionPosition = solution.offsetTop;
  
        if (scrollPosition >= solutionPosition - window.innerHeight / 2) {
          currentSolutionIndex = index;
        }
      });
  
      showSolution(currentSolutionIndex);
    });
  
    function showSolution(index) {
      solutions.forEach((solution, i) => {
        if (i === index) {
          solution.style.transform = 'translateY(0)';
        } else {
          solution.style.transform = 'translateY(100vh)';
        }
      });
    }
  });
  