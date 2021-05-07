
window.onload = init;

function init(){

    GetData();
    GetTimeTillNextDrop();

}

function CreateCard(refImg, title, price, num){

    let col = document.createElement('div');
    col.className = "col";

    let new_row = document.createElement("div");
    new_row.className = "card";


    //sets the image
    let newIMG = document.createElement("img");
    newIMG.src = refImg;
    new_row.appendChild(newIMG);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    // let cardTitle = document.createElement("h5");
    // cardTitle.className = "card-title";
    // cardTitle.innerHTML = title + " " + price;
    // cardBody.appendChild(cardTitle);

    new_row.appendChild(cardBody);
    col.appendChild(new_row);
    //appends to document
    document.querySelector("#" + num).appendChild(col);

}

function GetData(){

    var data;
    const request = new XMLHttpRequest();
    
    request.open('GET', 'https://fortnite-api.com/v2/shop/br', true)
        
    request.onload = function(){

        //data = JSON.parse(this.response);
        data = JSON.parse(this.response).data//.daily.entries;
        console.log(data);
 
      

        let c_entries = data.daily.entries;
        for(let i = 0; i < c_entries.length; i++){

            let src = c_entries[i].items[0].images.icon;
            CreateCard(src, c_entries[i].items[0].name, c_entries[i].regularPrice, "first");            

        }//end of for loop  

  
        
        let c_features = data.featured.entries;
        for(let i = 0; i < c_features.length; i++){

            let src = c_features[i].items[0].images.icon;
            CreateCard(src, c_features[i].items[0].name, c_features[i].regularPrice, "second");            

        }//end of for loop  



        let c_specialFeatures = data.specialFeatured.entries;
        for(let i = 0; i < c_specialFeatures.length; i++){

            let src = c_specialFeatures[i].items[0].images.icon;
            CreateCard(src, c_specialFeatures[i].items[0].name, c_specialFeatures[i].regularPrice, "third");            

        }//end of for loop  

    }//end of on load function

    request.send()

}//end of get data

function GetTimeTillNextDrop(){

    let now = new Date();
    now.setDate(now.getDate());


    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    tomorrow.setHours(20);
    tomorrow.setMinutes(0);
    tomorrow.setMilliseconds(0);

    // get total seconds between the times
    var delta = Math.abs(tomorrow - now) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    let time = document.querySelector("#hours");
    time.innerHTML = hours + " Hours to New Items";


}//end of GetTimeTillNextDrop