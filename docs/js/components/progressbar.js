// Set default percentage for progress bar examples large, medium and small
progressBar({'percent':50, 'id':'example-progress-bar'});
progressBar({'percent':50, 'id':'example-progress-bar-md'});
progressBar({'percent':50, 'id':'example-progress-bar-sm'});
progressBar({'id':'live-example-c'});
progressBar({'id':'live-example-h', 'type':'horizontal'});
// Live example circle progress bar
let inputCircle = document.querySelector('#live-example-value-c');
inputCircle
    .addEventListener('change', function(e) 
    {
        progressBar({
            'percent':inputCircle.value,
            'id':'live-example-c'
        });
    })

// Live example horizontal progress bar
let inputHorizontal = document.querySelector('#live-example-value-h');
inputHorizontal
    .addEventListener('change', function(e) 
    {
        progressBar({
            'percent':inputHorizontal.value,
            'id':'live-example-h',
            'type':'horizontal'
        });
    })
    
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
function progressBar(params)
{
    if(!params.id) return false;

    var elementId = "#"+params.id;
    var percent = params.percent?params.percent:0;
    var type = params.type?params.type:'circle';

    if(type == 'circle') {
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
    } else {
        // Set percent of horizontal progress bar
        document
            .querySelector(elementId)
            .value = percent;
    }
}
