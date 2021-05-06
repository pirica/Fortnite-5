
window.onload = init;

function init(){

    GetData();
    //CreateCard();
}

function CreateCard(refImg, title){

    let new_row = document.createElement("div");
    new_row.className = "card";
    new_row.style = "width: 18rem;"

    //sets the image
    let newIMG = document.createElement("img");
    newIMG.src = refImg;
    new_row.appendChild(newIMG);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = title;
    cardBody.appendChild(cardTitle);
    

    new_row.appendChild(cardBody);
    //appends to document
    document.querySelector("body").appendChild(new_row);

}

function GetData(){

    var data;
    const request = new XMLHttpRequest();
    
    request.open('GET', 'https://fortnite-api.com/v2/shop/br', true)
        
    request.onload = function(){

        //data = JSON.parse(this.response);
       data = JSON.parse(this.response).data.daily.entries;
        for(let i = 0; i < data.length; i++){

            let src = data[i].items[0].images.icon;
            CreateCard(src, data[i].items[0].name );            
            // let img = document.createElement("img");
            // img.src = src;
            // let bd = document.getElementsByTagName('body')[0];
            // bd.appendChild(img);
    
        }//end of for loop  
 
        console.log(data);

    }//end of on load function

    request.send()

}//end of get data