//just setting up board

const mediumBoxes = document.querySelectorAll(".box")
for(let i = 0; i< 9; i++){
    
   for(let j =0; j <9; j++){
        const sqr = document.createElement('div');
        sqr.classList.add(j);
        sqr.classList.add("small")
        
        mediumBoxes[i].appendChild(sqr);
       
}

}
//now the game part
//first just make it that it places when you click
const filledBox = [
    [],[],[],[],[],[],[],[],[]
]
const teamX = [
    [],[],[],[],[],[],[],[],[]
]
const teamO = [
    [],[],[],[],[],[],[],[],[]
]
let specBox = -1;//can choose any box
let str = "X";
for (let i = 0; i < 9; i++) {
    mediumBoxes[i].addEventListener("click", function(event) {
        pickMed(event, i);
    });
}

function pickMed(event, i) {

 
    if(event.target.classList[1]!= "box"){//ensures that if u click in between boxes doesnt mess up

        if((specBox == -1 || specBox == i) && filledBox[i].length !== 9  && (!filledBox[i].includes(event.target.classList[0])) && event.target.classList[0]!= undefined){
           
            if(filledBox[i][0]!="won"){
        specBox = (event.target.classList[0]); //system to make sure in the right box
        event.target.innerHTML = "<p>" + str +"<p>"
        filledBox[i].push(event.target.classList[0]);//each box contains digits ofall boxes that are filled
        




    
    
        for(let j = 0; j < 3; j ++){
                //checks horizontal
            if(mediumBoxes[i].children[0+3*j].firstChild != null && mediumBoxes[i].children[1+3*j].firstChild != null && mediumBoxes[i].children[2+3*j].firstChild != null ){
                if(mediumBoxes[i].children[0+3*j].firstChild.innerText == mediumBoxes[i].children[1+3*j].firstChild.innerText && mediumBoxes[i].children[1+3*j].firstChild.innerText == mediumBoxes[i].children[2+3*j].firstChild.innerText){
                    const won = document.createElement("h1");
                    won.innerHTML = "<h1>" + str +"<h1>";
                    mediumBoxes[i].innerHTML ="";
                    while(mediumBoxes[i].firstChild != undefined){
                        mediumBoxes.firstChild.remove;
                    }
                    mediumBoxes[i].appendChild(won);
                    console.log(mediumBoxes[i].firstChild)
                
                    
                    mediumBoxes[i].classList.add("smallBoxWon");
                    console.log(mediumBoxes[i].classList);

                    filledBox[i][0] = "won";
                    break;
                }
            }

            //vertical
            if(mediumBoxes[i].children[j].firstChild != null && mediumBoxes[i].children[j+3].firstChild != null && mediumBoxes[i].children[j+6].firstChild != null ){
                if(mediumBoxes[i].children[j].firstChild.innerText == mediumBoxes[i].children[j+3].firstChild.innerText && mediumBoxes[i].children[j+3].firstChild.innerText == mediumBoxes[i].children[j+6].firstChild.innerText){
                    const won = document.createElement("h1");
                    won.innerHTML = "<h1>" + str +"<h1>";
                    mediumBoxes[i].innerHTML ="";
                    while(mediumBoxes[i].firstChild != undefined){
                        mediumBoxes.firstChild.remove;
                    }
                    mediumBoxes[i].appendChild(won);
                    console.log("vertical winner" + j);
                    filledBox[i][0] = "won";
                    mediumBoxes[i].classList.add("smallBoxWon");
                
                    //console.log(mediumBoxes[i].children[j].firstChild.innerText);
                    break;
                }
            }
            // console.log(mediumBoxes);
            // console.log("v: " +mediumBoxes[i].children[1].firstChild + "++" + mediumBoxes[i].children[1].firstChild +"++" + mediumBoxes[i].children[1].firstChild );
        }
        
        //topleft-bottomright
        if(filledBox[i][0] !== "won"){


            console.log("checkdiag")
            if(mediumBoxes[i].children[0].firstChild != null && mediumBoxes[i].children[4].firstChild != null && mediumBoxes[i].children[8].firstChild != null ){
                if(mediumBoxes[i].children[0].firstChild.innerText == mediumBoxes[i].children[4].firstChild.innerText && mediumBoxes[i].children[4].firstChild.innerText == mediumBoxes[i].children[8].firstChild.innerText){
                    const won = document.createElement("h1");
                    won.innerHTML = "<h1>" + str +"<h1>";
                    mediumBoxes[i].innerHTML ="";
                    while(mediumBoxes[i].firstChild != undefined){
                        mediumBoxes.firstChild.remove;
                    }
                    mediumBoxes[i].appendChild(won);
                    mediumBoxes[i].classList.add("smallBoxWon");
                    filledBox[i][0] = "won";
                    console.log("tl-br winner");
                }
            }
            if(filledBox[i][0] !== "won"){
            if(mediumBoxes[i].children[2].firstChild != null && mediumBoxes[i].children[4].firstChild != null && mediumBoxes[i].children[6].firstChild != null ){
                if(mediumBoxes[i].children[2].firstChild.innerText == mediumBoxes[i].children[4].firstChild.innerText && mediumBoxes[i].children[4].firstChild.innerText == mediumBoxes[i].children[6].firstChild.innerText){
                    const won = document.createElement("h1");
                    won.innerHTML = "<h1>" + str +"<h1>";
                    mediumBoxes[i].innerHTML ="";
                    while(mediumBoxes[i].firstChild != undefined){
                        mediumBoxes.firstChild.remove;
                    }
                    mediumBoxes[i].appendChild(won);
                    mediumBoxes[i].classList.add("smallBoxWon");
                    filledBox[i][0] = "won";
                    console.log("tr-bl winner");
                }
            }
            }
        }


        // done checking for winn small box
        // check if next boxshould bespecific or player gets to choose
                if(filledBox[specBox].length == 9 || filledBox[specBox][0] == "won"){
                    console.log(filledBox[specBox][0]);
                    //mediumBoxes[i].innerText = str;
                    specBox = -1;
                    console.log("changed");

                }
                //lastly just swap the turn
                if(str == "X"){  
                        
                    str = "O"
                }
                else{
            
                    
                    str = "X";
                }

            }
            //now gonna check if won entire game

            //checks horizontal
            for(let j = 0; j < 3; j ++){
                if(mediumBoxes[j*3+0].firstChild.firstChild != null && mediumBoxes[j*3+1].firstChild.firstChild != null && mediumBoxes[j*3+2].firstChild.firstChild != null ){
                    if(mediumBoxes[j*3+0].firstChild.firstChild.innerText == mediumBoxes[j*3+1].firstChild.firstChild.innerText && mediumBoxes[j*3+1 ].firstChild.firstChild.innerText == mediumBoxes[j*3+2].firstChild.firstChild.innerText){
                        console.log("super horizontal winner" + j);
                    }
                }
            }

            //vertical
            for(let j = 0; j < 3; j ++){
                if(mediumBoxes[j].firstChild.firstChild != null && mediumBoxes[j+3].firstChild.firstChild != null && mediumBoxes[j+6].firstChild.firstChild != null ){
                    if(mediumBoxes[j].firstChild.firstChild.innerText == mediumBoxes[j+3].firstChild.firstChild.innerText && mediumBoxes[j+3].firstChild.firstChild.innerText == mediumBoxes[j+6].firstChild.firstChild.innerText){
                        console.log("super vertical winner" + j);
                    }
                }
            }
            
            //topleft-bottomright
            
                if(mediumBoxes[0].firstChild.firstChild != null && mediumBoxes[4].firstChild.firstChild != null && mediumBoxes[8].firstChild.firstChild != null ){
                    if(mediumBoxes[0].firstChild.firstChild.innerText == mediumBoxes[4].firstChild.firstChild.innerText && mediumBoxes[4].firstChild.firstChild.innerText == mediumBoxes[8].firstChild.firstChild.innerText){
                        console.log("super tl-br winner");
                    }
                }
                if(mediumBoxes[2].firstChild.firstChild != null && mediumBoxes[4].firstChild.firstChild != null && mediumBoxes[6].firstChild.firstChild != null ){
                    if(mediumBoxes[2].firstChild.firstChild.innerText == mediumBoxes[4].firstChild.firstChild.innerText && mediumBoxes[4].firstChild.firstChild.innerText == mediumBoxes[6].firstChild.firstChild.innerText){
                        console.log("super tr-bl winner");
                    }
                }



        }
        if(specBox!=-1){//greenBackground for next Box
            mediumBoxes[i].classList.remove("nextBox")
            mediumBoxes[specBox].classList.add("nextBox");
            
            }
            else{
                for(let i = 0; i<9; i++)
                mediumBoxes[i].classList.remove("nextBox");
            }
    } 
}

