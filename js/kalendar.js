let confirm = {
    content: 'применить',
    className: 'default-button',
    onClick: (AirDatepicker) => {
        AirDatepicker.hide()
    }
}

let close = {
    content: 'очистить',
    className: 'default-button',
  onClick: (AirDatepicker)=>{
    AirDatepicker.clear()
    $('#output').val('')
    $('#inputform').val('')
  }
}

new AirDatepicker('#input', {
    range: true,
    multipleDatesSeparator: ' - ',
    onSelect({ formattedDate }) {
        if (formattedDate.length != 0) {

            $("#inputform").val(formattedDate[0].split("-"));

            if (formattedDate.length == 2) {
                $("#output").val(formattedDate[1].split(","));
            }
        }
    $('#input').val('expand_more')
},
    buttons: [close, confirm ],
    autoClose: false,
    inline: true,
    

})
$('#input').on('click', (AirDatepicker) => {
    AirDatepicker.show()
    
})
