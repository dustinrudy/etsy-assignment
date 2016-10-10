
var domArray = []


$.getJSON( "https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop", function( data ) {
	console.log(data)
	putInDom(data)
});


function putInDom(data) {
   var ourData = data.results.map(function(item){
       return {
           price: item.price,
           shop_name: item.shop_name,
           title: truncate(item.title),
           img: item.Images[0].url_570xN
       }
    console.log(ourData)
   })

   var htmlStr = "";
   ourData.forEach(function(item){
       htmlStr += `
       <div class="pics">
           <img src="${item.img}" />
           <p id="name"> ${item.title} </p>
           <p id="shop_name"> ${item.shop_name} </p>
           <p id="price"> ${item.price} </p>
           
       </div>
       `
   })

   console.log(htmlStr)

   $("#allpics").html(htmlStr)
}



function truncate(item){
	var truncatedText = item.substring(0, 30) + '...';
	return truncatedText

}

console.log(truncate)





