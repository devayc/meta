

$('.pluse').on('click', (e) => {
    pluse(e)
})
$('.minus').on('click',(e) => {
    minus(e)
})
$('.enter-date').on('submit',function (e) {
    e.preventDefault()
    slide(e)
   
})


function pluse(a) {
   element = $(a.target).closest('.drop-down__counter')
    number = $(element).find('.count')
    number[0].innerText = parseInt(number[0].innerText) + 1
}
function minus(a) {
   element = $(a.target).closest('.drop-down__counter')
    number = $(element).find('.count')
    if (parseInt(number[0].innerText) != 0) {
        
        number[0].innerText = parseInt(number[0].innerText) - 1
    }
}
function slide(a) {
    element = $(a.target).closest('.search__members-container')
    input = $(element).find('.search__drop-down')
    $(input).slideToggle();
}