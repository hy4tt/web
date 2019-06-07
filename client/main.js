$('#clicker').click( function(){
    var data = 'http://localhost:3000/names';

    $.get(data, function(response){
        response.forEach(function(responseItems){
            var el = document.createElement('p');
            var textNode = document.createTextNode(responseItems.name);
            el.appendChild(textNode);
            $('body').append(el);
        });
    });

});


