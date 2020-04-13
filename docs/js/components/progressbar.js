// Set default percentage for progress bar examples large, medium and small
progressBar({'percent':50, 'id':'example-progress-bar'});
progressBar({'percent':50, 'id':'example-progress-bar-md'});
progressBar({'percent':50, 'id':'example-progress-bar-sm'});
progressBar({'id':'live-example-c'});
progressBar({'id':'live-example-h', 'type':'horizontal'});

// Live example circle progress bar
let inputCircle = document.querySelector('#live-example-value-c');
if (inputCircle) {
    inputCircle
        .addEventListener('change', function(e) 
        {
            progressBar({
                'percent':inputCircle.value,
                'id':'live-example-c'
            });
        });
}

// Live example horizontal progress bar
let inputHorizontal = document.querySelector('#live-example-value-h');
if (inputCircle) {
    inputHorizontal
        .addEventListener('change', function(e) 
        {
            progressBar({
                'percent':inputHorizontal.value,
                'id':'live-example-h',
                'type':'horizontal'
            });
        });
}