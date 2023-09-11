var cubaanLogin = 5; //bilangan cubaan login 

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


if (username =="wang" && password =="0528"){
    window.location = "haven.html";
    return false
}
else{
    cubaanLogin --; //decrement by one
    alert("You have left " +cubaanLogin+ "sahaja lagi");
}

//Disabling fields after.....
if(cubaanLogin == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    dpcument.getElementById("submit").disabled = true;
    return false

}
}