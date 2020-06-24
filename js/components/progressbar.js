// Set default value r for circle in svg
const progressBars = document.querySelectorAll('.progress-bar')

progressBars.forEach((progressBar) => {
  const circle = progressBar.querySelector('circle').r.baseVal
  if (
    progressBar.classList.contains('progress-bar--sm') &&
    progressBar.querySelector('circle')
  ) {
    circle.value = '9'
  }

  if (
    progressBar.classList.contains('progress-bar--md') &&
    progressBar.querySelector('circle')
  ) {
    circle.value = '11'
  }

  if (
    progressBar.classList.contains('progress-bar') &&
    progressBar.querySelector('circle')
  ) {
    circle.value = '24'
  }
})

/**
 * Progress bar function
 * Parameters:
 * INT percent = percent value
 * STRING id = id of element
 * STRING type = type of progress bar ('circle' or 'horizontal')
 */
window.progressBar = (params) => {
  if (!params.id) return false

  const elementId = `# + ${params.id}`
  const percent = params.percent ? params.percent : 0
  const type = params.type ? params.type : 'circle'

  if (type !== 'circle' && document.querySelector(elementId)) {
    // Set percent of horizontal progress bar
    document.querySelector(elementId).value = percent
  }

  const text = document
    .querySelector(elementId)
    .querySelector('.progress-bar__text')
  const circle = document.querySelector(elementId).querySelector('circle')
  const radius = circle.r.baseVal.value
  const circumference = radius * 2 * Math.PI

  // Defines the default size of green and gray circle around the icon
  circle.style.strokeDasharray = `${circumference} ${circumference}`
  circle.style.strokeDashoffset = `${circumference}`

  // Calculate the green circle size according to the percentage entered
  const offset = circumference - (percent / 100) * circumference
  circle.style.strokeDashoffset = offset

  // Change percentage text
  if (text) {
    text.innerHTML = `${percent}%`
  }

  // Change element color when percent is 100
  if (percent === 100) {
    document.querySelector(elementId).classList.add('progress-bar--done')
  } else {
    document.querySelector(elementId).classList.remove('progress-bar--done')
  }
}
