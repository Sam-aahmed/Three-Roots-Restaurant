function validation() {

    var valid = true;

    var FirstName = document.regform.First_Name.value;
    var LastName = document.regform.Last_Name.value;
    var Email = document.regform.email.value;
    var Password = document.regform.password.value;

    // First Name
    if (FirstName == "") {
        document.getElementById("fnameLabel").innerHTML =
        'First Name: <span class="error">* Required</span>';
        valid = false;
    }
    else if (!isNaN(FirstName)) {
        document.getElementById("fnameLabel").innerHTML =
        'First Name: <span class="error">* Text only</span>';
        valid = false;
    }

    // Last Name
    if (LastName == "") {
        document.getElementById("lnameLabel").innerHTML =
        'Last Name: <span class="error">* Required</span>';
        valid = false;
    }

    // Email
        let message = document.getElementById("strength");
    if (Email == "") {
        document.getElementById("emailLabel").innerHTML =
        'Email: <span class="error">* Required</span>';
        valid = false;
    }
    else if (!Email.includes("@")) {
        document.getElementById("emailLabel").innerHTML =
        'Email: <span class="error">* Must contain @</span>';
        valid = false;
    }

if (Password == "") {

    document.getElementById("passLabel").innerHTML =
    'Password: <span class="error">* Required</span>';

    valid = false;
}

else if (Password.length < 5) {
    document.getElementById("passLabel").innerHTML =
    'Password: <span style="color:red; font-size:12px;">Weak Password</span>';
    valid = false;
}
else if (Password.length < 8) {

    document.getElementById("passLabel").innerHTML =
    'Password: <span style="color:orange; font-size:12px;">Medium Password</span>';
}
else {
    document.getElementById("passLabel").innerHTML =
    'Password: <span style="color:green; font-size:12px;">Strong Password</span>';
}

    return valid;
}






/*main html*/

function openmenu(){
  document.getElementById("sideMenu").style.width="200px";
}

function closemenu(){
  document.getElementById("sideMenu").style.width="0";
}


//slideshow
var counter=1;
function next(){
  if(counter==3){
     counter=1;
  }
  else{
    counter++;
  }
  document.getElementById("slideshow").src="./images/"+counter+".jpeg"
}
function prev(){
  if(counter==1){
     counter=3;
  }
  else{
    counter--;
  }
  document.getElementById("slideshow").src="./images/"+counter+".jpeg"
 }



/* order now*/

function addToCart(name) {

    // console.log("clicked:", name);

    // let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // cart.push({ name});

    // sessionStorage.setItem("cart", JSON.stringify(cart));

    alert(name  + " added to cart!");
}

/* Default Light Mode */


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

// search bar

function search() {

    let input = document.getElementById("searchbar").value.toLowerCase();
    
    if (input === "egypt") {
        window.location.href = "./egypt.html";
    }

    else if (input === "syria") {
        window.location.href = "./syria.html";
    }

    else if (input === "italy") {
        window.location.href = "./italy.html";
    }

    else if (input === "signup") {
        window.location.href = "./index.html";
    }
    else if(input === "pay"){
        window.location.href="./pay.html"
    }

    else {
        alert("Page not found");
    }
}


