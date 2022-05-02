let listElements = document.getElementsByTagName("li");
let clickedScore = null;
let hasButtonBeenClicked = false;
for(let element of listElements)
{
    element.addEventListener("click", function(){
        if(!hasButtonBeenClicked)
        {
        hasButtonBeenClicked = true;
        clickedScore = element.innerText;
        console.log(clickedScore);
        element.style.backgroundColor = "#66fb10";
        element.classList.remove("hoverable");
        element.classList.add("clicked");
        for(let element of listElements)
        {
            element.classList.remove("hoverable");
        }
    }
    })
}
console.log(clickedScore);

let submitButton = document.getElementsByClassName("ScoreSubmitButton");
submitButton.addEventListener("click", function(){
    
})