// declarations ---------------------------------------------------------------------------------------------------------------------

const data = {
    "Towel": 
    [
        "Blue Terry",
        "White Terry",
        "Swipe Towel",
        "Green Bath",
        "Others"
    ],
    "Apron":
    [
        "White Aprons",
        "Black Aprons",
        "Red Aprons",
        "Blue Aprons",
        "Brown Aprons",
        "Others"
    ],
    "Napkins":
    [
        "Black",
        "White Terry",
        "Red Aprons",
        "Black Chambray",
        "Burgundy",
        "Navy",
        "Stripe",
        "Chocolate",
        "Blue",
        "Blue Striped",
        "Others"
    ],
    "Table Cloths":
    [
        "52s",
        "61s",
        "90s",
        "114s",
        "42s",
        "71s",
        "80s",
        "52x69",
        "52x92",
        "Elite"
    ],
    "Sheets":
    [
        "White Sheets",
        "Black Sheets",
        "Red Sheets",
        "Blue Sheets",
        "Brown Sheets",
        "Others"
    ],
    "Others":
    [
        "Wet mpos",
        "Dust mops",
        "COG items",
        "Others"
    ]
};
const color = [
    "White",
    "Black",
    "Black Chambray",
    "Brown",
    "Burgundy",
    "Dolce Black",
    "Dolce White",
    "Green",
    "Gray",
    "Ivory",
    "NavyBlue",
    "Purple",
    "Red",
    "Red/White Stripes",
    "Royal Blue",
    "SandalWood",
    "WedgeWood",
    "Others"
]
var sectionOneChosen = "";
var sectionTwoChosen = "";
var sectionThreeChosen = "";
var selected = [];

window.sessionStorage.setItem("selected", "");
window.sessionStorage.setItem("operatorName", "");
window.sessionStorage.setItem("avgWt", 240);
window.sessionStorage.setItem("range", [230, 250]);
window.sessionStorage.setItem("noOfSlings", "1");
window.sessionStorage.setItem("goalStatus", "");

// functions ---------------------------------------------------------------------------------------------------------------------

function takeOperatorName(){
    let operatorName = document.getElementById("takeOperatorName").value;
    if (operatorName == ""){
        alert("Please enter your name");
    }
    else{
        console.log(operatorName);
        window.sessionStorage.setItem("operatorName", operatorName);
        displayToggle(document.getElementById("operatorDiv"));
        displayToggle(document.getElementById("sectionOne"));
        displayToggle(document.getElementById("sectionTwo"));
        displayToggle(document.getElementById("outputSection"));
        operationDetails();
    }
}

function clearOperatorName(){
    document.getElementById("takeOperatorName").value = "";
}

function fillSectionOne(){
    // <button type="button" class="btn btn-primary btn-block btn-lg">Full-Width Button</button>
    // console.log(Object.keys(data)[i]);
    let sectionOne = document.getElementById("sectionOne");
    let fillData = ``;
    for(let i=0; i<Object.keys(data).length; i++){
        fillData += `<button type="button" class="btn btn-primary btn-block btn-lg" onfocusin="toggleDanger(this)" onfocusout="toggleDanger(this)" onclick="sectionOneSelection(this); fillSectionTwo(this)">${Object.keys(data)[i]}</button> \n`
    }
    sectionOne.innerHTML = fillData;
}

function fillSectionTwo(element){
    // <button type="button" class="btn btn-primary btn-block btn-lg onfocusin="toggleDanger(this)" onfocusout="toggleDanger(this)"">Full-Width Button</button>
    // <div class="btn-group">
    //     <button type="button" class="btn btn-primary btn-block btn-lg dropdown-toggle" data-bs-toggle="dropdown" onfocusin="toggleDanger(this)" onfocusout="toggleDanger(this)">Sony</button>
    //     <ul class="dropdown-menu">
    //         <li><a class="dropdown-item" href="#">Tablet</a></li>
    //         <li><a class="dropdown-item" href="#">Smartphone</a></li>
    //     </ul>
    // </div>
    let sectionTwo = document.getElementById("sectionTwo");
    let dataItem = element.innerText;
    let fillData = ``;
    for (let i=0; i<data[dataItem].length; i++){
        if (dataItem != "Table Cloths"){
            fillData += `<button type="button" class="btn btn-primary btn-block btn-lg" onfocusin="toggleDanger(this)" onfocusout="toggleDanger(this)" onclick="sectionTwoSelection(this); sessionOutput()">${data[dataItem][i]}</button> \n`
        }
    }
    if (dataItem == "Table Cloths"){
        for (let j=0; j<data["Table Cloths"].length; j++){
            fillData += `
            <div class="btn-group">
                <button type="button" class="btn btn-primary btn-block btn-lg dropdown-toggle" data-bs-toggle="dropdown" onfocusin="toggleDanger(this)" onfocusout="toggleDanger(this)" onclick="sectionTwoSelection(this)">${data[dataItem][j]}</button>
                <ul class="dropdown-menu" class="colorination" id="colorination">
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">White</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Black</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Black Chambray</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Brown</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Burgundy</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Dolce White</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Dolce Black</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Green</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Gray</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Ivory</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">NevyBlue</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Purple</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Red</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Red/White Stripes</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Royal Blue</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">SandalWood</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Wedgewood</a></li>
                    <li onclick="sectionThreeSelection(this); sessionOutput()"><a class="dropdown-item" href="#">Others</a></li>
                </ul>
            </div>`;
        }
    }
    sectionTwo.innerHTML = fillData;
}

function clearSectionTwo(){
    let sectionTwo = document.getElementById("sectionTwo");
    sectionTwo.innerHTML = ``;
}

function toggleDanger(element){
    element.classList.toggle("btn-danger");
}

function sectionOneSelection(element){
    sectionOneChosen = element.innerText;
    selected = [sectionOneChosen];
    window.sessionStorage.setItem("selected", selected);
}

function sectionTwoSelection(element){
    sectionTwoChosen = element.innerText;
    selected = [sectionOneChosen, sectionTwoChosen];
    window.sessionStorage.setItem("selected", selected);
}

function sectionThreeSelection(element){
    sectionThreeChosen = element.innerText;
    selected = [sectionOneChosen, sectionTwoChosen, sectionThreeChosen];
    window.sessionStorage.setItem("selected", selected);
}

function displayToggle(element){
    element.classList.toggle("d-none");
}

function weightCalculation(){
    let weight = window.sessionStorage.getItem("avgWt");
    let wtMin = window.sessionStorage.getItem("range").split(",")[0];
    let wtMax = window.sessionStorage.getItem("range").split(",")[1];
    console.log(weight);
    console.log(wtMin);
    console.log(wtMax);
    return (weight>=wtMin && weight<=wtMax)? "GOOD": "BAD";
}

function operationDetails(){
    let operatorName = document.getElementById("operatorName");
    let avgWt = document.getElementById("avgWt");
    let noOfSlings = document.getElementById("noOfSlings");
    let goalStatus = document.getElementById("goalStatus");

    operatorName.innerHTML = window.sessionStorage.getItem("operatorName");
    avgWt.innerHTML = window.sessionStorage.getItem("avgWt");
    noOfSlings.innerHTML = window.sessionStorage.getItem("noOfSlings");
    window.sessionStorage.setItem("goalStatus", weightCalculation());
    goalStatus.innerHTML = window.sessionStorage.getItem("goalStatus");
    console.log("inside operationDetails");
}

function sessionOutput(){
    let sessionOutput = document.getElementById("sessionOutput");
    let range = document.getElementById("range");
    let sling = document.getElementById("sling");
    let outputStatus = document.getElementById("outputStatus");
    let outputWt = document.getElementById("outputWt");

    range.innerHTML = window.sessionStorage.getItem("range");
    sling.innerHTML = window.sessionStorage.getItem("selected");
    outputStatus.innerHTML = window.sessionStorage.getItem("goalStatus");
    outputWt.innerHTML = window.sessionStorage.getItem("avgWt");

    if (window.sessionStorage.getItem("goalStatus") == "GOOD"){
        sessionOutput.classList.add("alert-success");
        sessionOutput.classList.remove("alert-danger");
    }
    else if(window.sessionStorage.getItem("goalStatus") == "BAD"){
        sessionOutput.classList.add("alert-danger");
        sessionOutput.classList.remove("alert-success");
    }
    else{
        sessionOutput.classList.remove("alert-success");
        sessionOutput.classList.remove("alert-danger");
        sessionOutput.classList.add("alert-secondary");
    }

}

// function calls ----------------------------------------------------------------------------------------------------------------------
fillSectionOne();