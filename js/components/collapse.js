var actions = document.getElementsByClassName("collapse__action");

// Prevent access error
for (var i = 0; i < actions.length; i++) {
    actions[i].addEventListener("click", function(event) 
    {
        var element = event.currentTarget;
        
        // Not prevent default event in radio input
        if(!(element.classList.contains('radio') && element.classList.contains('collapse__action'))) {
            event.preventDefault();
        }
        
        //Show/hidden multiple or single content when action is trigger
        element.dataset.content.split(",")
        .forEach(function(content_id)
        {
            var collapse__content = document.getElementById(content_id);

            //Add class 'is-expanded' to one element at a time if aciton has class 'toggle'
            if (element.classList.contains('toggle')) {
                $(collapse__content).closest(".collapse")
                                        .find(".collapse__content")
                                        .removeClass("is-expanded");

                collapse__content.classList.add('is-expanded');
            } else {
                if (collapse__content.classList.contains('is-expanded')) {
                    collapse__content.classList.remove('is-expanded');
                } else {
                    collapse__content.classList.add('is-expanded');
                }
            }
        });

        //Add class 'is-expanded' to one action at a time
        if (element.classList.contains('toggle')) {
            $(element).closest(".collapse")
                    .find('.collapse__action')
                    .removeClass("is-expanded");

            element.classList.add('is-expanded');
        } else {
            if (element.classList.contains('is-expanded')) {
                element.classList.remove('is-expanded');
            } else {
                element.classList.add('is-expanded');
            }
        }
    });
}