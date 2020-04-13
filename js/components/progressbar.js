// Set default value r for circle in svg
let progressBars = document.querySelectorAll('.progress-bar');
for(let progressBar of progressBars){
    if(progressBar.classList.contains("progress-bar--sm") && progressBar.querySelector('circle')){
        progressBar.querySelector('circle').r.baseVal.value = "9";
    } else if(progressBar.classList.contains("progress-bar--md") && progressBar.querySelector('circle')){
        progressBar.querySelector('circle').r.baseVal.value = "11";
    } else if(progressBar.classList.contains("progress-bar") && progressBar.querySelector('circle')){
        progressBar.querySelector('circle').r.baseVal.value = "24";
    }
}

/**
 * Progress bar function
 * Parameters:
 * INT percent = percent value
 * STRING id = id of element
 * STRING type = type of progress bar ('circle' or 'horizontal')
*/
window.progressBar = function (params)
{
    if(!params.id) return false;

    var elementId = "#"+params.id;
    var percent = params.percent?params.percent:0;
    var type = params.type?params.type:'circle';

    if(type == 'circle' && document.querySelector(elementId)) {
        // Circle attributes
        var text = document.querySelector(elementId).querySelector('.progress-bar__text');
        var circle = document.querySelector(elementId).querySelector('circle');
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;

        // Defines the default size of green and gray circle around the icon
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        // Calculate the green circle size according to the percentage entered
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;

        // Change percentage text
        if(text) {
            text.innerHTML = percent+"%";
        }

        // Change element color when percent is 100
        if(percent == 100) {
            document
                .querySelector(elementId)
                .classList
                .add("progress-bar--done");
        } else {
            document
                .querySelector(elementId)
                .classList
                .remove("progress-bar--done");
        }
    } else if(document.querySelector(elementId)) {
        // Set percent of horizontal progress bar
        document
            .querySelector(elementId)
            .value = percent;
    }
}
