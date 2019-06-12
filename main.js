
//home page
function welcomeUser(){

	var name = prompt("Enter your name:");
	alert("Salutations! " + name);
}

//mod 4

let fruits = ['apples', 'pears','grapes','orange'];

 function myFunction() {
    document.getElementById("fruits").innerHTML = fruits.length; 
  }

function everyOtherLetter(msg) {
  let changedFruit = "";
   for(let i=0; i<msg.length; i++){
     
       if (i%2==0) {
         changedFruit=changedFruit + msg[i].toUpperCase();
      }
       else {
         changedFruit=changedFruit + msg[i].toLowerCase();
       }
  
   }
    
  
  document.getElementById("capitalized").innerHTML = changedFruit; 
  }

everyOtherLetter("apples");

function userPass(){
  
}