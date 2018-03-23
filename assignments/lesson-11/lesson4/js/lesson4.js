/*$(function () {
    // jQuery Code goes here
    var toggleStyle = function() {
        
        var inputFields =  $('input[type="text"]');
        
        if ( inputFields.css('background-color') === 'rgb(255, 0, 0)' ) {
            //set background to white
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            //set background to red
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }
    
    $('#ReqAQuoteBtn').click(toggleStyle);
})*/

//$('.coreValues').append('<li><strong>This is brand new!!</strong></li>');
//$('.coreValues').prepend('<li><strong>This is brand new!!</strong></li>');
//$('<li><strong>This is also new!!</strong></li>').appendTo('.coreValues');
//$('<li><strong>This is also new!!</strong></li>').prependTo('.coreValues');
var nameVal = $('input[name="nameVal"]');

function fillEmpty() {
    if (nameVal.val() == '' ) {
        nameVal.val('John Doe');
    }
}

$('#ReqAQuoteBtn').click(fillEmpty);
                