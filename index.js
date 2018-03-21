let toggle = true;


const myHandler = event =>
{
  if(toggle === true){
  console.log("you clicked the button");
  const follow = document.getElementById("follow");
  follow.classList.add("btn-danger");
   follow.classList.remove("btn-success");
   follow.textContent = "Unfollow";
   var add = document.getElementById("followers");
   add.textContent = 201;
   toggle = !toggle;
  }
  else{
   console.log("you clicked the button2");
  const follow = document.getElementById("follow");
  follow.classList.add("btn-success");
   follow.classList.remove("btn-danger");
   follow.textContent = "Follow";
   var add = document.getElementById("followers");
   add.textContent = 200;
   toggle = !toggle;
  
  }
}

const follow = document.getElementById("follow");
follow.addEventListener("click", myHandler);

