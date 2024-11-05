


const popup=()=>{
    document.getElementById("log-in-form").style.display="block"
}

const closer=()=>{
    document.getElementById("log-in-form").style.display= "none";
}
  
const handleLogin = (event) => {
    event.preventDefault();
    
    const email = document.getElementById("l-email").value.trim();
    const password = document.getElementById("l-password").value.trim();
  
    if (email && password.length >= 8) {
     
      alert("done")
    } else {
      alert("Please enter your email and password.");
    }
  };