
$.getJSON( "https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
  	console.log(key, val)
  });
});


