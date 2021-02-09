var vacaciones = prompt("¿Mar o montaña?");
vacaciones = vacaciones.toLowerCase();

document.write("<div class='center'>");

if(vacaciones=="mar"){
   document.write("<img class='image'src='https://ec.europa.eu/programmes/horizon2020/sites/horizon2020/files/newsroom/29_05_17_small_22078.jpg'>"); 
   document.write("<img class='image' src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-usa.com/news/suppliers/ck-nutraceuticals-expands-us-footprint-of-its-deep-ocean-minerals-ingredient/8736311-1-eng-GB/CK-Nutraceuticals-expands-US-footprint-of-its-deep-ocean-minerals-ingredient_wrbm_large.jpg'>"); 
   document.write("<img class='image' src='https://inventingself.org/wp-content/uploads/2020/01/ocean2.jpg'>"); 
    } else if(vacaciones=="montaña"){
   document.write("<img class='image' src='https://b3h2.scene7.com/is/image/BedBathandBeyond/27422765332565m?$imagePLP$&wid=256&hei=256.png'>"); 
   document.write("<img class='image' src='https://cdn131.picsart.com/288309469054201.jpg?type=webp&to=crop&r=256'>"); 
   document.write("<img class='image' src='https://photos.jemphotography.com/rocky-mountain-national-park-trail-ridge-notch_256x.png'>"); 
    } else {
    document.write("Pues... pa' tu casa!");
}

document.write("</div>");