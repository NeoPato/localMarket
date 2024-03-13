function loginClick(){
    var name = $('#user').val();
    var password = $('#password').val();

    if(name && password && name === "admin" && password === "admin"){
        const user = {
            name: name,
            entryDate: new Date(),
            id: Math.floor(Math.random() * 100000),
        }
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "#";
    }else{
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.border = "2px solid red";
        document.getElementById("password").style.border = "2px solid red";
    }
}

function closeError(){
    document.getElementById("error-modal").style.display = "none";
    document.getElementById("user").style.border = "2px solid rgba(235, 41, 206, 0.781)";
    document.getElementById("password").style.border = "2px solid rgba(235, 41, 206, 0.781)";
}

function showPassword(){
    var inputPassword = document.querySelector('#password');

    if(inputPassword.getAttribute("type") === "password"){
        inputPassword.setAttribute("type", "text")
    }else{  
        inputPassword.setAttribute("type", "password")
    }
} 
function format(item){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    return item.toLocaleString("pt-BR", options);
    console.log(options);
}