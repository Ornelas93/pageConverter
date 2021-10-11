let inputBox = document.getElementById("valueInsert");

const invalidChars = [
    "e",
    "E",
    "+",
    "-",
];

inputBox.addEventListener("keydown", function(event){
    if(invalidChars.includes(event.key)){
        event.preventDefault();
    }
});
