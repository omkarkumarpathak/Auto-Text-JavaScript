const containerEl = document.querySelector(".container")

const careers = ["Developer", "Youtube", "Freelancer", "Investor"];

let index = 0;

let characterIndex=0;

function updateText() {
    
    containerEl.innerHTML = ` <h1>I am ${careers[index].slice(0,characterIndex)}</h1>`;
   
    if(characterIndex===careers[index].length){
        index++;
        characterIndex=0;
    }
    if(index>=careers.length){
        index=0;
    }
    characterIndex++;
    setTimeout(updateText,200);

}
updateText()