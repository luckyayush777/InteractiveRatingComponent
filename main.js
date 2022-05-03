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
let textContent = document.getElementsByClassName("SuggestionBox")[0];
text = "Thank you!";
let submitButton = document.getElementsByClassName("ScoreSubmitButton")[0];
submitButton.addEventListener("click", function(){
    //text.style.fontFamily = 'Franklin Gothic white', 'Arial Narrow', Arial, sans-serif;
    if(hasButtonBeenClicked){
    textContent.style.fontFamily = "'Franklin Gothic white', 'Arial Narrow', Arial, sans-serif";
    textContent.style.backgroundColor = "rgb(36, 42, 60)";
    textContent.innerHTML = text;
    }
})  