const hbs = require ('hbs');
const fs = require('fs');
const producto = JSON.parse(fs.readFileSync('./data/datos.json'));

hbs.registerHelper('getProductos',function(){
    var prod = "";
    producto.forEach(element => {

  
        prod += '<div class="productos" align="center">';
        prod += '<img src="'+element.url+ '"class="imagen2" width="150px">';
        prod += '<h2>'+ element.nombre +'</h2>';
        prod += '<a>' + element.precio +'</a>';
        prod += '</div>';

    });
    return new hbs.SafeString(prod);
})