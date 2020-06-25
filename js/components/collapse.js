const actions = document.getElementsByClassName('collapse__action')

actions.forEach((action) => {
  action.addEventListener('click', (event) => {
    const element = event.currentTarget

    if (
      !(
        element.classList.contains('radio') &&
        element.classList.contains('collapse__action')
      )
    ) {
      event.preventDefault()
    }

    // Show/hidden multiple or single content when action is trigger
    element.dataset.content.split(',').forEach((contentId) => {
      const collapseContent = document.getElementById(contentId)

      // Add class 'is-expanded' to one element at a time if aciton has class 'toggle'

      if (element.classList.contains('toggle')) {
        $(collapseContent)
          .closest('.collapse')
          .find('.collapse__content')
          .removeClass('is-expanded')

        return collapseContent.classList.add('is-expanded')
      }
      if (collapseContent.classList.contains('is-expanded')) {
        return collapseContent.classList.remove('is-expanded')
      }
      return collapseContent.classList.add('is-expanded')
    })

    // Add class 'is-expanded' to one action at a time
    if (element.classList.contains('toggle')) {
      $(element)
        .closest('.collapse')
        .find('.collapse__action')
        .removeClass('is-expanded')

      return element.classList.add('is-expanded')
    }

    if (element.classList.contains('is-expanded')) {
      return element.classList.remove('is-expanded')
    }

    return element.classList.add('is-expanded')
  })
})
