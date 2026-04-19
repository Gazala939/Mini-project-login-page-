async function login(){
    let username =document.getElementById("userName").value;
    let password =document.getElementById("password").value;

    let message = document.getElementById("message");

    message.innerText = "Checking........"

    //promises
    function loginPromise(){
        return new Promise(function(resolve,reject){

        setTimeout(function(){

            let correctUsername = "Zara";
            let correctPassword = "Zara123"

            if (username == correctUsername  && password == correctPassword){
                resolve("Login Successfully...")
            }else{
                reject("Invalid Username or Password")
            }
        },2000)
        
    });
}

    try{
        let result = await loginPromise()
        message.innerText = result;
        console.log(result)
    }catch(error){
        message.innerText = error;
        console.log(error)
    }
    
    
}
