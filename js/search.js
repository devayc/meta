
$('.drop-down__buttons').on('submit', function (e)  {
    e.preventDefault()
})
$('#confirm').on('click', (e) => {
    accept(e)
    slide(e)
})
$('#clear').on('click', (e) => {
    clear(e)
    removeOpacity(e)
})
$('.pluse').on('click', (e) => {
    pluse(e)
    removeOpacity(e)
    
})
$('.minus').on('click',(e) => {
    minus(e)
    addOpacity(e)
    
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
function accept(a) {
    let summary = 0
    element = $(a.target).closest('.search__drop-down')
    number = $(element).find('[id = addult]') 
    young = $(element).find('[id = young]')
    inputForm = $(element).closest('.search__members-container')
    placeholedTitle = $(inputForm).find('.input-form')
    $(number).each(function (i) {
        summary += parseInt(this.innerText)
            
    })
    yongIner = parseInt(young[0].innerText)
    if (yongIner === 0) {
        $(placeholedTitle).attr('value',`${summary} гостей`)    
    } else {
        $(placeholedTitle).attr('value',`${summary} гостей ${yongIner} младенцев`)
    }

    
}
function removeOpacity(a) {
   closes = $(a.target).closest('.drop-down__counter')
    minuss = $(closes).find('.minus')[0]
        $(minuss).removeClass('opacuty')
}
function addOpacity(a) {
    closes = $(a.target).closest('.drop-down__counter')
    counter = $(closes).find('.count')[0]
    minuss = $(closes).find('.minus')[0]
    if (parseInt(counter.innerText) === 0) {
           $(minuss).addClass('opacuty')
       }
}
function clear(a) {
    element = $(a.target).closest('.search__drop-down')
    number = $(element).find('.count') 
    inputForm = $(element).closest('.search__members-container')
    placeholedTitle = $(inputForm).find('.input-form') // форма инпута
    $(placeholedTitle).attr('placeholder', 'Cколько гостей')
    $(number).each(function (i) {
        this.innerText = 0  
    })
    c = $(element).find("[id = minus]")
    $(c).each(function (i) {
      $(this).addClass('opacuty')
    })
}