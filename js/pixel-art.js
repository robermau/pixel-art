var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');
var $ruedaColores = $('#color-personalizado');
var $pincel = $('#indicador-de-color');

//Colores
$.each(nombreColores, function(index, value){
  $paleta.append($('<div>',{"class": 'color-paleta'}).css({'background-color': value}));
});
//Grilla
for(var i = 0; i < 1749; i++){
  $grillaPixeles.append('<div>');
} 

//Fuente https://stackoverflow.com/questions/7700066/check-if-mousedown-with-an-if-statement
var down = false;
$(document).mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;  
});

function pintarClick(elemento){
  $('#grilla-pixeles div').click(function(){
    $color = elemento.css('background-color');
      $(this).css({'background-color': $color}); 
  });
}

function pintarMovimiento(elemento){
  $('#grilla-pixeles div').mousemove(function() {
    if(down){          
      $color = elemento.css('background-color');
      $(this).css({'background-color': $color});   
    } 
  });
}

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $('#color-personalizado').css({'background-color': colorActual}); 
  //Pintar luego de seleccionar el color
  pintarClick($ruedaColores);    
  pintarMovimiento($ruedaColores);
});

//Selección de color y pintar
$('#paleta div').click(function(){
  var value = $(this).css('background-color');   
  $('#indicador-de-color').css({'background-color': value}); 
  //Pintar luego de seleccionar el color
  pintarClick($pincel);    
  pintarMovimiento($pincel);
});

$('#batman').click(function(){
  cargarSuperheroe(batman);
});
$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});

$('#flash').click(function(){      
  cargarSuperheroe(flash);
});

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});

$('#guardar').click(function(){
  guardarPixelArt();
});

$('#borrar').click(function(){
  $('#grilla-pixeles div').animate({'background-color':'white'},1500);
});

