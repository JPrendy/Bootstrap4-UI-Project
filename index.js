let toggle = true;

//this retrieves the localStorage value
toggle = JSON.parse(localStorage.getItem("toggle"));

//If there is nothing in the localStorage, we just set the variable to true.
if (toggle == null) {
     toggle = true;
}
//If there is a localStorage value, we change the content of the page based if it is true or false.
else{
   let addFollower2 = document.getElementById("followers");
   if(toggle == false){
   const follow = document.getElementById("follow");
   follow.classList.add("btn-danger");
   follow.classList.remove("btn-success");
   follow.textContent = "Unfollow";
   addFollower2.textContent = 201;
   const updates = document.getElementById("updates");
   updates.classList.add("mystyle");
   const changeMessageHeader = document.getElementById("notifyHeader");
   changeMessageHeader.textContent = "You have one update";
   const changeMessageBody = document.getElementById("notifyContent");
   changeMessageBody.textContent = "You are now following James Prendergast.";
  }
  else{
    const follow = document.getElementById("follow");
    follow.classList.add("btn-success");
     follow.classList.remove("btn-danger");
     follow.textContent = "Follow";
     addFollower2.textContent = 200;
     const updates = document.getElementById("updates");
     updates.classList.remove("mystyle");
     const changeMessageHeader = document.getElementById("notifyHeader");
     changeMessageHeader.textContent = "You have 0 updates.";
     const changeMessageBody = document.getElementById("notifyContent");
     changeMessageBody.textContent = " ";
  }
}

//This handler is called whenever the follow button is pressed, changing the style and material on the html page
const myHandler = event =>
{
  if(toggle == true){
   const follow = document.getElementById("follow");
   follow.classList.add("btn-danger");
   follow.classList.remove("btn-success");
   follow.textContent = "Unfollow";
   const updates = document.getElementById("updates");
   updates.classList.add("mystyle");
   const changeMessageHeader = document.getElementById("notifyHeader");
   changeMessageHeader.textContent = "You have one update.";
   const changeMessageBody = document.getElementById("notifyContent");
   changeMessageBody.textContent = "You are now following James Prendergast.";
   let addFollower = document.getElementById("followers");
   addFollower.textContent = 201;
   toggle = false;
  }
  else{
   const follow = document.getElementById("follow");
   follow.classList.add("btn-success");
   follow.classList.remove("btn-danger");
   follow.textContent = "Follow";
   const updates = document.getElementById("updates");
   updates.classList.remove("mystyle");
   const changeMessageHeader = document.getElementById("notifyHeader");
   changeMessageHeader.textContent = "You have 0 updates.";
   const changeMessageBody = document.getElementById("notifyContent");
   changeMessageBody.textContent = " ";
   let addFollower = document.getElementById("followers");
   addFollower.textContent = 200;
   toggle =true;
  }
  //The toggle value is stored in the localStorage, keeping track if the user is being followed or not.
  localStorage.setItem("toggle", JSON.stringify(toggle));
}

//This sets up the event listener
const follow = document.getElementById("follow");
follow.addEventListener("click", myHandler);


