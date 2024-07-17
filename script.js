// Declare variable 
let result = document.querySelector("#calculResult");
let equal = document.querySelector("#equal");
let btn = document.querySelectorAll();

function clickbtn(this){
    for(let i = 0; i<btn.length; i++){
        if (this.value == btn[i].value){
            console.log(this.value);
        }
    }
}