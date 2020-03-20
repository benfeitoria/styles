
// Set default value r for circle in svg
let progressBars = document.querySelectorAll('.progress-bar');
for(let progressBar of progressBars){
  if(progressBar.classList.contains("progress-bar--sm")){
    progressBar.querySelector('circle').r.baseVal.value = "9";
  } else if(progressBar.classList.contains("progress-bar--md")){
    progressBar.querySelector('circle').r.baseVal.value = "11";
  } else if(progressBar.classList.contains("progress-bar")){
    progressBar.querySelector('circle').r.baseVal.value = "24";
  }
}

// Set default percentage for progress bar examples large, medium and small
progressBar({'percent':50, 'element':'#example-progress-bar'});
progressBar({'percent':50, 'element':'#example-progress-bar-md'});
progressBar({'percent':50, 'element':'#example-progress-bar-sm'});
progressBar({'element':'#example-progress-bar-live'});

const input = document.querySelector('#example-progress-value');
input.addEventListener('change', function(e) 
{
  if (input.value < 101 && input.value > -1) {
    progressBar({'percent':input.value, 'element':'#example-progress-bar-live'});
  }  
})

/**
 * Progress bar function
 * Parameters:
 * INT percent    = percent value
 * STRING element = id of element
*/
function progressBar(params)
{
  if(!params.element) return false;

  var percent = params.percent?params.percent:0;
  var circle = document.querySelector(params.element).querySelector('circle');
  var text = document.querySelector(params.element).querySelector('.progress-bar__text');
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;
  
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Change percentage text
  if(text){
    text.innerHTML = percent+"%";
  }

  // Change element color when percent is complete
  if(percent == 100) {
    document.querySelector(params.element).classList.add("progress-bar--done");
  } else {
    document.querySelector(params.element).classList.remove("progress-bar--done");
  }
}
