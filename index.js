var userInputBox = document.getElementById('name');


document.getElementById("button").addEventListener("click", () => {
    console.log("User click random btn")
    console.log("The user input is " + userInputBox.value)
    var separate = userInputBox.value.split(",")
    var randomIt = getRandomInt(0,separate.length);
    console.log("tu opción es: " + separate[randomIt])
    document.getElementById("demo").innerHTML = "tu opción es: " + separate[randomIt]
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

