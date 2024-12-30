const steps = document.querySelectorAll('.step-number')

for(let i = 0; i < steps.length; i++) {
  steps[i].addEventListener('click', () => {
    for(let j = 0; j < steps.length; j++) {
      steps[j].classList.add('unclicked')
    }

    steps[i].classList.remove('unclicked')
  })
}