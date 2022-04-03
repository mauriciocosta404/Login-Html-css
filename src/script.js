const init =()=>{

    const input_email=document.querySelector("input[type='email']");
    const input_password=document.querySelector("input[type='password']");
    const button_Submit=document.querySelector(".login_submit");


    if(button_Submit){
        button_Submit.addEventListener('click', (event)=>{


            event.preventDefault();
            
            fetch('https://reqres.in/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body:JSON.stringify({
                    email:input_email.value,
                    password:input_password.value,
                })
            }).then((Response) => {
                return Response.json();
            }).then((data)=>{
                console.log(data);
            });
        });
    }
}

window.onload=init;



function validateEmail(){

    let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let passwordRegex= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;

    let email=document.getElementById('email').value;

    let password=document.getElementById('password').value;

    if(password && email){

        const testEmail=emailRegex.test(email);
    
        const testPassword=passwordRegex.test(password);
    
         if(!testEmail){
            alert("este email está errado");
        }else{
            alert("email aceite");
        }

        if(testPassword){
            alert("palavra-passe aceite");
        }else{
            alert("a tua palavra passe tem de ter no minimo um numero,pelo menos 8 caracteres,pelo menos uma letra menuscula e uma maiuscula e caracteres se a à z e de 1 à 9");
        }
        }else{
            alert("preencha todos os formularios");
        }
    }
