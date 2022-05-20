var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 15000
    }
});



const inputs = [input0, input1];
slider.noUiSlider.on('update', function (values, handle) { 
    let input0 = document.getElementById('input0');
    let input1 = document.getElementById('input1');
    let lower = Math.round($('.noUi-handle-lower').attr('aria-valuenow'))
     let upper = Math.round($('.noUi-handle-upper').attr('aria-valuenow'))
    $(input0).text(`${lower}₽`) 
    $(input1).text(`${upper}₽`) 
    
 })