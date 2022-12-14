window.onload=function(){
    document.getElementById("name").addEventListener("blur",Name);
    document.getElementById("mobilni").addEventListener("blur",Phone);
    document.getElementById("emailAdd").addEventListener("blur",Email);
    document.getElementById("date").addEventListener("blur",this.checkDate);
    document.getElementById("buttonClub").addEventListener("blur",clubReadLess);
}
function Name(){
    var ime = document.getElementById("name").value
    var pattern = /^[A-ZČĆŽŠĐ][a-zčćžš]{1,11}(\s[A-ZČĆŽŠĐ][a-zčćžš]{1,11})+$/
    if(pattern.test(ime)){
    $(this).animate({backgroundColor:"#fbf7f7",borderColor:"#99cc33"},330)
    }
    else{
    $(this).animate({backgroundColor:"#b33a3a",borderColor:"#b33a3a"},300)
    }
   }

    function Phone(){
        var mob = document.getElementById("mobilni").value
        var pattern = /^06[0-9]{7,8}$/
        if(pattern.test(mob)){
        $(this).animate({backgroundColor:"#fbf7f7",borderColor:"#99cc33"},330)
        }
        else{
        $(this).animate({backgroundColor:"#b33a3a",borderColor:"#b33a3a"},300)
        }
    }

    function Email(){
        var email = document.getElementById("emailAdd").value
       
        var checking = /^\S+@\S+\.\S+$/
        if(checking.test(email)){
        $(this).animate({backgroundColor:"#fbf7f7",borderColor:"#99cc33"},330)
        }
        else{
        $(this).animate({backgroundColor:"#b33a3a",borderColor:"#b33a3a"},300)
        }
    }
    var dropdown=document.createElement("select");
dropdown.setAttribute("id","timelist");

    for(let i =12 ; i<=22; i++){
        var option=document.createElement("option");
        var txt=document.createTextNode(i+":00");
        
        option.appendChild(txt);
        dropdown.appendChild(option);

        if(i==22){break;}
        option=document.createElement("option");
        txt=document.createTextNode(i+":30");
        
        option.appendChild(txt);
        dropdown.appendChild(option);
    }
document.getElementById("time").appendChild(dropdown);

    function checkDate(){
        var currentDate = new Date();
        var date = new Date(document.getElementById("date").value);
        if(date>=currentDate){
        $(this).animate({backgroundColor:"#fbf7f7",borderColor:"#99cc33"},330)
        }
        else{
        $(this).animate({backgroundColor:"#b33a3a",borderColor:"#b33a3a"},300)
        }
       }
       var dropdown=document.createElement("select");
dropdown.setAttribute("id","peoplelist");

    for(let i =1 ; i<=15; i++){
        var option=document.createElement("option");
        var txt;
        if(i!=1){
            txt=document.createTextNode(i+" people");
        }
        else{
            txt=document.createTextNode(i+" person");
        }
        option.appendChild(txt);
        dropdown.appendChild(option);

    }
document.getElementById("people").appendChild(dropdown);

//kreiranje padajuce liste za broj ljudi
 var buttonClubCounter = 0
   function clubReadLess(){
    var x = document.getElementById("clubContent");
    var b = document.getElementById("buttonClub");
    if (buttonClubCounter == 1) {
    b.setAttribute("value", "READ MORE");
    buttonClubCounter = 0;
    } else {
    b.setAttribute("value", "READ LESS");
    buttonClubCounter = 1;
    }
   }
   



$('form > .row > .column >input').addClass('inputs');
$('form > .row > .column >select').addClass('inputs');

var slike=new Array("assets/images/gallery/bottle.jpg","assets/images/gallery/meat.jpg","assets/images/gallery/menu.jpg","assets/images/gallery/pizza.jpg","assets/images/gallery/plants.jpg","assets/images/gallery/plate.jpg","assets/images/gallery/separe.jpg","assets/images/gallery/table.jpg","assets/images/gallery/vespa.jpg",);
var brojSlike=0;
var duzinaNiza=slike.length;

function Previous(){
    if(document.images){
        brojSlike--;

        if(brojSlike<0)brojSlike=duzinaNiza-1;
        document.slika.setAttribute("src",slike[brojSlike]);
    }
}

function Next(){
    if(document.images && brojSlike<duzinaNiza){
        brojSlike++;
        if(brojSlike>=duzinaNiza)brojSlike=0;
        document.slika.src=slike[brojSlike];
    }
}








var foodArray=["Vegeteriana" , "Capricciosa" , "Quattro Formaggi" , "Pizza \"The Pijaca\" " , "Caesar salad with chicken" , "Carpese salad with San Daniele prosciutto" , "Octopus from the Josper oven" , "Fish plate for 2 person 510g" , "Ćevapi in paprika cream sauce", "Slow oven baked pork ribs in BBQ sauce" , "New York Style baked cheesecake" , "Italian cream pie"];

var foodDesc=["tomato pelati, mushrooms, zucchini, paprika, olives, cherry tomatoes, rocket salad, garlic","tomato pelati, cheese mix,  ham, mushrooms, oregano, olives","mozzarella, gorgonzola, parmesan, smoked cheese","truffle paste, beef prosiutto, mozzarella","deep fried crispy chicken, iceberg salad, tomatoes, olives, parmesan, crispy bacon, dressing, croutons","San Daniele prosciutto, reduced balsamico, mozzarella, tomatoes, rocket salad, basil","grilled octopus, grilled vegetables, potatoes, garlic, red onion","yellow risotto with red shrimp, prawns, calamari, octopus, fresh tuna, salmon, garlic","pure beef minced meat, cream sauce, paprika, potatoes","marinated pork ribs, BBQ sauce, potatoes","hazelnut, white chocolate, cream cheese, caramel dressing, raspberry sauce","vanilla cream, puff pastry, seasonal fruit"];

var foodPrice=["759 RSD","759 RSD","779 RSD","989 RSD","789 RSD","699 RSD","1899 RSD","2999 RSD","799 RSD","899 RSD","379 RSD","359 RSD"];

let foodList="";
foodList+="<ul>";
for(let i =0;i<foodArray.length;i++){
    foodList+= '<li><div class="foodItemsList"> <div><h3>' + foodArray[i] + "</h3><p>" + foodDesc[i]+ "</p></div></div><span>" + foodPrice[i]+"</span></div></div></li>";

}
foodList+="</ul>";
document.getElementById("food").innerHTML=foodList;

var wineArray=["Sauvignon Blanc, Rubin 0.75l" , "Pinot Grigio & Chardonnay, Doja 0.75l" , "Ex cathedra, Erdevik 0.75l" , "Tamjanika, Doja 0,75l" , "Pinot Grigio, Masottina 0.75l" , "Santa Cristina Blanco, M. Antinori 0.75l" , "Vale De Judia, Pegues 0.75l" , "Vronsky, Rubin 0.15l" , "Cinzano Pro Spitz 0.15l", "Prosecco 0.15l" , "Cinzano Prosecco 0.15l" , "Moët & Chandon 0.15l"];
var wineDesc=["Serbia","Serbia","Serbia","Serbia","Italy","Italy","Portugal","Serbia","Italy","Italy","Italy","France"];
var winePrice=["2499 RSD","3499 RSD","5049 RSD","3149 RSD","3399 RSD","3749 RSD","2749 RSD","519 RSD","769 RSD","699 RSD","769 RSD","849 RSD"];

let wineList="";
wineList+="<ul>";
for(let i =0;i<wineArray.length;i++){
    wineList+= '<li><div class="foodItemsList"> <div><h3>' + wineArray[i] + "</h3><p>" + wineDesc[i]+ "</p></div></div><span>" + winePrice[i]+"</span></div></div></li>";

}
wineList+="</ul>";
document.getElementById("wine").innerHTML=wineList;





var cocktailsArray=["B-52" , "Caipirinha" , "Negroni" , "Cosmopolitan" , "Melon Martini" , "Aperol Spritz" , "Hugo" , "Mojito" , "Moscow Mule", "La Isabella Perita" , "Devil's Ice Tea" , "Blue Lagoon"];
var cocktailsDesc=["kahlua, carolans cream, triple sec","cahcaca, lime, brown sugar","bankes gin, cinzano rosso, campari","finlandia vodka, triple sec, lemon juice, blueberry juice","finlandia vodka, melon liqueur, lemon juice, apple juice","aperol, soda water, prosecco","prosecco, mint, lime, elder sirup","rum, lime, mint, brown sugar, soda water","Finlandia, lemon, ginger beer, mint","finlandia vodka mango, ginger syrup, lemon juice, sprite","finlandia, bankes, El jimador, triple sec, brugal blanco, puschkin vodka, absinth, sprite","finlandia vodka, blue curacao, lemon juice, sprite"];
var cocktailsPrice=["519 RSD","589 RSD","709 RSD","609 RSD","589 RSD","709 RSD","709 RSD","689 RSD","729 RSD","609 RSD","829 RSD","649 RSD"];

let cocktailsList="";
cocktailsList+="<ul>";
    for(let i =0;i<cocktailsArray.length;i++){
    cocktailsList+= '<li><div class="foodItemsList"> <div><h3>' + cocktailsArray[i] + "</h3><p>" + cocktailsDesc[i]+ "</p></div></div><span>" + cocktailsPrice[i]+"</span></div></div></li>";
    }
cocktailsList+="</ul>";
document.getElementById("cocktails").innerHTML=cocktailsList;

$('#mainMenu > li').addClass('mainLi');
$('form > div').addClass('row');
$('form > div > div').addClass('column');

//menjanje  slider slika

var bgImageArray = ["cover1.jpg","cover2.jpg", "cover3.jpg"],
base = "assets/images/",
secs = 4;
bgImageArray.forEach(function(img){
new Image().src = base + img;
});
function backgroundSequence(){
 window.clearTimeout();
 var k = 0;

 for (i = 0; i < bgImageArray.length; i++) {

 setTimeout(function(){
 document.getElementById('intro').style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center";
 document.getElementById('intro').style.backgroundSize ="cover";
 document.getElementById('intro').style.backgroundColor = "#3a3433";
 document.getElementById('intro').style.backgroundBlendMode ="multiply";
    if ((k + 1) === bgImageArray.length){
        setTimeout(function() { backgroundSequence() }, (secs * 2000))
    }
    else{
        k++;
    }
    }, (secs * 2000) * i)
 }
}

backgroundSequence();
var readMoreACounter = 0;
    function addAbout() {
        var x = document.getElementById("aboutText");
        var y = document.getElementById("aboutImages");
        var button = document.getElementById("aboutMore");
            if (readMoreACounter == 0) {
                y.style.display = "none";
                x.style.display = "flex";
            button.setAttribute("value", "READ LESS");
            readMoreACounter = 1;
            } 
            else {
                y.style.display = "flex";
                x.style.display = "none";
                button.setAttribute("value", "READ MORE");
                readMoreACounter = 0;
            }
    }



 //jQuery

 