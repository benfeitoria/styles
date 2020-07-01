/**
 * Progress bar function
 * Parameters:
 * INT percent = percent value
 * STRING id = id of element
 * STRING type = type of progress bar ('circle' or 'horizontal')
 */
window.progressBar = (params) => {
  if (!params.id || !document.getElementById(params.id)) return false

  const element = document.getElementById(params.id)
  const percent = params.percent ? params.percent : 0
  const type = params.type ? params.type : 'circle'

  if (type !== 'circle' && element) {
    // Set percent of horizontal progress bar
    element.value = percent
  } else {
    const text = element.querySelector('.progress-bar__text')
    const circle = element.querySelector('circle')
    let radius = '24'

    if (element.classList.contains('progress-bar--sm')) {
      radius = '9'
    } else if (element.classList.contains('progress-bar--md')) {
      radius = '11'
    }

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
      element.classList.add('progress-bar--done')
    } else {
      element.classList.remove('progress-bar--done')
    }
  }
}
