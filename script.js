let string = "";
let button = document.querySelectorAll('.button');
let equalsign = document.querySelectorAll('.equalsign');
let sign = document.querySelectorAll('.sign');
let buttonC = document.querySelectorAll('.buttonC');
let buttonper =  document.querySelectorAll('.buttonper');
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       
        if(e.target.innerHTML == 'D'){
            string = string/10-(string/10)%1;
            document.querySelector('input').value = string;
            
        }
       
        
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
Array.from(equalsign).forEach((equalsign)=>{
    equalsign.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
    })})
Array.from(sign).forEach((sign)=>{
        sign.addEventListener('click', (e)=>{
           
             if(e.target.innerHTML == 'C'){
                string = "";
                document.querySelector('input').value = string;
            }
             if(e.target.innerHTML == 'D'){
                string = string/10-(string/10)%1;
                document.querySelector('input').value = string;
                
            }
           
            
            else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            }
        })
    })
Array.from(buttonC).forEach((buttonC)=>{
        buttonC.addEventListener('click', (e)=>{
           if(e.target.innerHTML == 'AC'){
                string = "";
                document.querySelector('input').value = string;
            }
    })})
    Array.from(buttonper).forEach((buttonper)=>{
        buttonper.addEventListener('click', (e)=>{
           if(e.target.innerHTML == '%'){
                string = string*string/100;
                document.querySelector('input').value = string;
            }
    })})