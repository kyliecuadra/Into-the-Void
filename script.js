
const title = document.getElementById("title");
const text = document.getElementById("instruction");
const textField = document.getElementById("textField");

textField.addEventListener('input', () =>{
    if(textField.value == '') {
        text.style.display = "block";
        title.style.display = "block";
    }
    else {
        title.style.display = "none";
        text.style.display = "none";
    }

});


textField.addEventListener("keydown", function (e) {  
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
      textField.classList.add('scream');
      setTimeout(function() {
        location.reload();
      }, 500);
    }
  });