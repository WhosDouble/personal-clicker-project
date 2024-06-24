//this is assigning label to the label element back in the html file to add functionality to the element with code
const label = document.getElementById("label")
//this is doing the same thing but for the body this line of code is useless right now as its not doing anything
const body = document.getElementById("body")
//getting buttons class from the html file
const buttons = document.querySelector('.buttons')
//getting current level id from the html file
const currentLevel = document.getElementById("currentLevel")
//
const currentLevelContainer = document.querySelector('.current-level-container')
//
const activeLevel = document.querySelector('.activeLevel')

//globaly declaring count to be equal to 0
count = 0
//a function to add 1 to count every time the function is ran
function increase(){
    //the ++ will incriment the count variable by one
    if(count >= 0){
        count++
    }
    //this changing the text content of the label tag to be equal to the count variable
    label.textContent = count
    if(count == "100"){
        label.textContent = `you did it🙂 you clicked me ${count} times! you beat the first level
        




        `
        label.style.fontSize = "60px"
        buttons.textContent = "keep on clicking🌟"
        body.style.background= "#39523a"
        currentLevel.textContent="current level is LVL 2"
        activeLevel.style.color= "#fff"
        currentLevelContainer.style.background = "#1a381b"
        count++
    }
    if(count == "300"){
        label.textContent = `wow you beat the second level😎 you clicked me ${count} times!
        



        `
        body.style.background= "url(images/giga-chad.gif)"
        currentLevel.textContent="current level is LVL 3"
        body.style.backgroundAttachment= "fixed"
        body.style.backgroundRepeat= "no-repeat"
        body.style.backgroundPosition= "center"
        body.style.backgroundSize= "cover"
        body.style.objectFit="cover"
        buttons.textContent = "based🤫🧏‍♂️"
        count++
    }
    if(count == "600"){
        label.textContent = `woah you beat the third level💪 you clicked me ${count} times!
        




        `
        body.style.background= "blue"
        currentLevel.textContent="current level is LVL 3"
        buttons.textContent = "still based🤫🧏‍♂️"
        count++
    }
    if(count == "1000"){
        label.textContent = `you've almost found me.... you clicked me ${count} times!
        




        `
        body.style.background= "blue"
        currentLevel.textContent="current level is LVL 4"
        count++
    }
    if(count == "2000"){
        label.textContent = `stop clicking......   im warning you....  you clicked me ${count} times!
        




        `
        currentLevel.textContent="current level is LVL 5"
    }
    if(count == "4000"){
        label.textContent = `this is your final warning⚠ or else.... i will stab you ${count} times!
        




        `
        body.style.background= "blue"
        count++
    }
    if(count == "6000"){
        label.textContent = `im just kidding you win 🤴
        
        
        
        
        `
        body.style.background= "blue"
        count = "6000"
    }
}
//this fuction makes the count go back to 0
function reset(){
    //this is assigning the count variable equal to 0
    count = 0
    //this changing the text content of the label tag to be equal to the count variable
    label.textContent = count
}