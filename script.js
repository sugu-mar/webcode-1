//creating main nav
let main_nav_bar = document.createElement('nav');
main_nav_bar.setAttribute("class","navbar fixed-top  navbar-dark ");
main_nav_bar.classList.add("border");
document.body.append(main_nav_bar);




// heading for website
let websiteHeading = document.createElement('a');
websiteHeading.classList.add('navbar-brand');
websiteHeading.innerHTML="Open Brewery API";
main_nav_bar.append(websiteHeading);


//form to take input from tag user
let nav_bar_form = document.createElement('form');
nav_bar_form.setAttribute('method','POST')
nav_bar_form.setAttribute("class","form-inline");
nav_bar_form.classList.add("border");
main_nav_bar.append(nav_bar_form);




//creating search Input bar
let searchInputBar = document.createElement('input');
searchInputBar.classList.add("form-control","mr-sm-2");
searchInputBar.setAttribute("id","searchBreweryByType");
searchInputBar.setAttribute("type","search");

searchInputBar.setAttribute("placeholder","Enter Brewery Type");
searchInputBar.setAttribute("aria-label","Search");
nav_bar_form.append(searchInputBar);




//creating search Button
let searchButton = document.createElement('button');
searchButton.innerHTML="Search"
searchButton.setAttribute("type","button");
searchButton.setAttribute("id","searchButton");
searchButton.addEventListener("click",brewery);
searchButton.classList.add("btn","btn-outline-success","my-2","my-sm-0");
nav_bar_form.append(searchButton);







// //creating banner page 1
let bannerImage = document.createElement('div');
bannerImage.setAttribute("class","banner-image w-100 vh-220 d-flex justify-content-center align-items-center");
document.body.append(bannerImage);






//creating main container
let main_container = document.createElement('div');
main_container.setAttribute("class","container-flex");
main_container.classList.add("border");
document.body.append(main_container);




//creating bewery type container
let bewertTypeContainer = document.createElement('div');
bewertTypeContainer.setAttribute("class","container-fluid mt-4");
// bewertTypeContainer.classList.add("border");
bannerImage.append(bewertTypeContainer);





//creating bewery type row that contain type heading
let typeContainerRow0 = document.createElement('div');
typeContainerRow0.setAttribute("class","row");
typeContainerRow0.classList.add("mt-4");
bewertTypeContainer.append(typeContainerRow0);



//creating bewery type column that contain title
let typeContainerCol0 = document.createElement('div');
typeContainerCol0.setAttribute("class","col");
typeContainerCol0.classList.add("col-6");
typeContainerRow0.append(typeContainerCol0);



//creating bewery type row that contain title
let typeContainerRow = document.createElement('div');
typeContainerRow.setAttribute("class","row");
typeContainerRow.classList.add("mt-4","mb-4");
bewertTypeContainer.append(typeContainerRow);



//creating bewery type column that contain title
let typeContainerCol1 = document.createElement('div');
typeContainerCol1.setAttribute("class","col");
typeContainerCol1.classList.add("col-6");
typeContainerCol1.classList.add("typeContainerCol");
typeContainerRow.append(typeContainerCol1);




//creating bewery type column2 that contain title
let typeContainerCol2 = document.createElement('div');
typeContainerCol2.setAttribute("class","col");
typeContainerCol2.classList.add("col-6","styletypeContainerCol2");
typeContainerCol2.classList.add("typeContainerCol");
typeContainerRow.append(typeContainerCol2);



// brewer type heading
let typeHeading = document.createElement('h3');
typeHeading.innerHTML='Available Brewery types'
typeHeading.style="color:white;"

typeHeading.classList.add('mb-3')
typeContainerCol2.append(typeHeading)





//creating ordered list that contain brewer types
let typeListofbreweries1 = document.createElement('ul');
typeListofbreweries1.setAttribute("class","list-group");

typeContainerCol2.append(typeListofbreweries1);





//creating ordered list that contain brewer types
let typeListofbreweries2 = document.createElement('ul');
typeListofbreweries2.setAttribute("class","list-group");

typeContainerCol2.append(typeListofbreweries2);





//creating ordered list items
let microBrewerType = document.createElement('li');
microBrewerType.setAttribute("class","typeListofbreweries");
microBrewerType.innerHTML='1. micro - Most craft breweries. For example, Samual Adams is still considered a micro brewery.'
typeListofbreweries1.append(microBrewerType);


let nanoBrewerType = document.createElement('li');
nanoBrewerType.setAttribute("class","typeListofbreweries");
nanoBrewerType.innerHTML='2. nano - An extremely small brewery which typically only distributes locally.'
typeListofbreweries1.append(nanoBrewerType);


let regionalBrewerType = document.createElement('li');
regionalBrewerType.setAttribute("class","typeListofbreweries");
regionalBrewerType.innerHTML='3. regional - A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.'
typeListofbreweries1.append(regionalBrewerType);


let brewpubBrewerType = document.createElement('li');
brewpubBrewerType.setAttribute("class","typeListofbreweries");
brewpubBrewerType.innerHTML='4. brewpub - A beer-focused restaurant or restaurant/bar with a brewery on-premise.'
typeListofbreweries1.append(brewpubBrewerType);


let largeBrewerType = document.createElement('li');
largeBrewerType.setAttribute("class","typeListofbreweries");
largeBrewerType.innerHTML='5. large - A very large brewery. Likely not for visitors. Ex. Miller-Coors. (deprecated)'
typeListofbreweries1.append(largeBrewerType);

let planningBrewerType = document.createElement('li');
planningBrewerType.setAttribute("class","typeListofbreweries");
planningBrewerType.innerHTML='6. planning - A brewery in planning or not yet opened to the public.'
typeListofbreweries2.append(planningBrewerType);


let barBrewerType = document.createElement('li');
barBrewerType.setAttribute("class","typeListofbreweries");
barBrewerType.innerHTML='7. bar - A bar. No brewery equipment on premise. (deprecated)'
typeListofbreweries2.append(barBrewerType);


let contractBrewerType = document.createElement('li');
contractBrewerType.setAttribute("class","typeListofbreweries");
contractBrewerType.innerHTML='8. contract - A brewery that uses another brewery’s equipment.'
typeListofbreweries2.append(contractBrewerType);



let proprietorBrewerType = document.createElement('li');
proprietorBrewerType.setAttribute("class","typeListofbreweries");
proprietorBrewerType.innerHTML='9. proprietor - Similar to contract brewing but refers more to a brewery incubator.'
typeListofbreweries2.append(proprietorBrewerType);


let closedBrewerType = document.createElement('li');
closedBrewerType.setAttribute("class","typeListofbreweries");
closedBrewerType.innerHTML='10. closed - A location which has been closed.'
typeListofbreweries2.append(closedBrewerType);



//creating content that fetched from web

//creating bewery type container
let contentContainer = document.createElement('div');
contentContainer.setAttribute("class","container mt-4");
contentContainer.setAttribute('id','finalResult');
contentContainer.classList.add("border");
document.body.append(contentContainer);





//creating bewery type row that contain type heading
let contesntContainerRow = document.createElement('div');
contesntContainerRow.setAttribute("class","row");
contesntContainerRow.classList.add("mt-4");
contentContainer.append(contesntContainerRow);



//creating bewery type column that contain title
let contentContainerCol = document.createElement('div');
contentContainerCol.setAttribute("class","col");
contentContainerCol.classList.add("col-6");
contesntContainerRow.append(contentContainerCol);



//creating bewery type column1 that contain title
let contentContainerCol1 = document.createElement('div');
contentContainerCol1.setAttribute("class","col");
contentContainerCol1.classList.add("col-6");
contesntContainerRow.append(contentContainerCol1);






async function brewery(){

   









    let userInputBreweryType = document.getElementById("searchBreweryByType").value;
    console.log(`user input : ${userInputBreweryType}`)
    let data = await fetch(`https://api.openbrewerydb.org/breweries?by_type=${userInputBreweryType}`);
    let result = await data.json();
    console.log(`api fetch Data:${result}`);

     contentContainerCol1.innerHTML="";
     contentContainerCol.innerHTML="";

for (var i = 0; i<result.length; i++) {
    console.log(result[i])
    try{
    let main_card = document.createElement('div');
    main_card.setAttribute("class","card  mb-5");
contentContainerCol.append(main_card);

    let cardbody = document.createElement('div');
    cardbody.setAttribute("class","card-body");
    main_card.append(cardbody);

    let breweryName = document.createElement('div')
    breweryName.innerHTML = `Brewery Name: ${result[i].name}`;
    cardbody.append(breweryName);

    let breweryType = document.createElement('div')
    breweryType.innerHTML = `Brewery Type: ${result[i].brewery_type}`;
    cardbody.append(breweryType);

    let breweryaddress = document.createElement('div')
    breweryaddress.innerHTML = 
    `Brewery company address: 
    ${result[i].name},
    ${result[i].street},                          
    ${result[i].city},                           
    ${result[i].state},                             
    ${result[i].state},
    ${result[i].postal_code},
    ${result[i].country
    
    },`;
    cardbody.append(breweryaddress);
    



    let websitelinkName = document.createElement('div')
    websitelinkName.innerHTML = `Brewery Shop Website: `;
    cardbody.append(websitelinkName);






    let breweryShopWebsite = document.createElement('a')
    breweryShopWebsite.setAttribute('target','_blank')
    breweryShopWebsite.setAttribute('href',`${result[i].website_url}`)
    breweryShopWebsite.innerHTML = `${result[i].website_url}`;
    websitelinkName.append(breweryShopWebsite);


    


      let breweryShopPhoneNo = document.createElement('div')
    breweryShopPhoneNo.innerHTML = `Brewery Type: ${result[i].phone}`;
    cardbody.append(breweryShopPhoneNo);


    if((i+2)%2==0){contentContainerCol.append(main_card);}
    else{contentContainerCol1.append(main_card);}

}






catch(err){

console.log(err)

}
    
}


} 