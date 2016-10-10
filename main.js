
var domArray = []


$.getJSON( "https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop", function( data ) {
	console.log(data)
	putInDom(data)
});


function putInDom(data) {
   var ourData = data.results.map(function(item){
       return {
           price: item.price,
           shop_name: item.Shop.shop_name,
           title: truncate(item.title),
           img: item.Images[0].url_570xN,
           link: item.url
       }
    console.log(ourData)
   })

   var htmlStr = "";
   ourData.forEach(function(item){
       htmlStr += `
       <a href="${item.link}"><div class="pics">
           <img src="${item.img}" title="${item.title}" />
           <p id="name"> ${item.title} </p>
           <p id="shop_name"> ${item.shop_name} </p>
           <p id="price">$${item.price} </p>
           
       </div>
       </a>
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





