const calcu = document.querySelector('.calculator-container')
const input = document.querySelector('input')

const arr = [];
window.addEventListener('keydown', (e) => {
   //add the pressed number to the array
    arr.push(e.key)  
  
    //converts the array number string into a single integer value and assigns it to input value
    let int = arr.reduce((accum, digit) => (accum) + digit, );
    input.value = int;
     
    //get result when you press enter key
    if (e.key === 'Enter'){    
        console.log(int);  
        const x = int.slice(0,-5); 
        console.log(x);       
        const y = eval(x);     
        input.value = y;
        while(arr.length > 0){
            arr.pop()
            }
    }

    //delete array entries and input values
    if (e.key ==='Delete'){    
       while(arr.length > 0){
        arr.pop()
        }
    input.value = '';
    }

    //delete entries one by one with backspace key
    if (e.key === 'Backspace'){    
        
        //remove the unwanted digit or operand including the backspace word in the input box by taking out 10 characters starting from the right
        int = int.slice(0, -10)
        //remove the unwanted digit or operand including the backspace word in the array using while loop by popping the last index thru each cycle until the length of the array it has the same length as int
        while(int.length < arr.length){
            arr.pop()
            } 
        //display int in the input.value      
    input.value = int;
    }

    //catch any error
    window.onerror = function(e) {
        console.log("Error: ", e);
        input.value = 'ERROR'  
        while(arr.length > 0){
            arr.pop()
            }    
    };  

    //create a blink color when the key is pressed
        switch (e.key) {
            case '1':
                const one = document.querySelector('.one')
             
                one.style.backgroundColor = 'orange'
                const brown = setTimeout((browndog), 170)
                function browndog (){
                    one.style.backgroundColor = "bisque"
                }
              break;
            case '2':
                const two = document.querySelector('.two')
             
                two.style.backgroundColor = 'orange'
                const brown1 = setTimeout((browndog1), 170)
                function browndog1 (){
                    two.style.backgroundColor = "bisque"
                }
              break;
            case '3':
                const three = document.querySelector('.three')
             
                three.style.backgroundColor = 'orange'
                const brown3 = setTimeout((browndog3), 170)
                function browndog3 (){
                    three.style.backgroundColor = "bisque"
                }
              break;
            case '4':
                const four = document.querySelector('.four')
             
                four.style.backgroundColor = 'orange'
                const brown4 = setTimeout((browndog4), 170)
                function browndog4 (){
                    four.style.backgroundColor = "bisque"
                }
              break;
            case '5':
                const five = document.querySelector('.five')
             
                five.style.backgroundColor = 'orange'
                const brown5 = setTimeout((browndog5), 170)
                function browndog5 (){
                    five.style.backgroundColor = "bisque"
                }
              break;
            case '6':
                const six = document.querySelector('.six')
             
                six.style.backgroundColor = 'orange'
                const brown6 = setTimeout((browndog6), 170)
                function browndog6 (){
                    six.style.backgroundColor = "bisque"
                }
              break;
            case '7':
                const seven = document.querySelector('.seven')
             
                seven.style.backgroundColor = 'orange'
                const brown7 = setTimeout((browndog7), 170)
                function browndog7 (){
                    seven.style.backgroundColor = "bisque"
                }
              break;
            case '8':
                const eight = document.querySelector('.eight')
             
                eight.style.backgroundColor = 'orange'
                const brown8 = setTimeout((browndog8), 170)
                function browndog8 (){
                    eight.style.backgroundColor = "bisque"
                }
              break;
            case '9':
                const nine = document.querySelector('.nine')
             
                nine.style.backgroundColor = 'orange'
                const brown9 = setTimeout((browndog9), 170)
                function browndog9 (){
                    nine.style.backgroundColor = "bisque"
                }
              break;
            case '0':
                const zero = document.querySelector('.zero')
             
                zero.style.backgroundColor = 'orange'
                const brown0 = setTimeout((browndog0), 170)
                function browndog0 (){
                    zero.style.backgroundColor = "bisque"
                }
              break;
            case 'Enter':
                const equals = document.querySelector('.equals')
             
                equals.style.backgroundColor = 'orange'
                const brownequals = setTimeout((browndogequals), 170)
                function browndogequals (){
                    equals.style.backgroundColor = "bisque"
                }
              break;
            case 'Delete':
                const clear = document.querySelector('.clear')
             
                clear.style.backgroundColor = 'orange'
                const clear1 = setTimeout((clear01), 170)
                function clear01 (){
                    clear.style.backgroundColor = "bisque"
                }
              break;
            case 'Backspace':
                const clear2 = document.querySelector('.del')
             
                clear2.style.backgroundColor = 'orange'
                const clear3 = setTimeout((clear02), 170)
                function clear02 (){
                    clear2.style.backgroundColor = "bisque"
                }
              break;
            case 'Plus':
                const plus = document.querySelector('.plus')
             
                plus.style.backgroundColor = 'orange'
                const plus1 = setTimeout((pluz), 170)
                function pluz (){
                    plus.style.backgroundColor = "bisque"
                }
              break;
            case 'Minus':
                const minus = document.querySelector('.minus')
             
                minus.style.backgroundColor = 'orange'
                const minus1 = setTimeout((minuz), 170)
                function minuz (){
                    minus.style.backgroundColor = "bisque"
                }
              break;
            case 'Multiply':
                const multiply = document.querySelector('.multiply')
             
                multiply.style.backgroundColor = 'orange'
                const multiply1 = setTimeout((multiplyer), 170)
                function multiplyer (){
                    multiply.style.backgroundColor = "bisque"
                }
              break;
            case 'Divide':
                const divide = document.querySelector('.divide')
             
                divide.style.backgroundColor = 'orange'
                const divide1 = setTimeout((divider), 170)
                function divider (){
                    divide.style.backgroundColor = "bisque"
                }
              break;
            case '.':
                const period = document.querySelector('.period')
             
                period.style.backgroundColor = 'orange'
                const period1 = setTimeout((periodz), 170)
                function periodz (){
                    period.style.backgroundColor = "bisque"
                }
              break;
            default:
              console.log('');
          }   
})
            
//add click events
calcu.addEventListener('click',(e)=>{
    
    if(e.target.classList.contains('one')){
    
        arr.push('1')        
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const one = document.querySelector('.one')
             
                one.style.backgroundColor = 'orange'
                const brown = setTimeout((browndog), 170)
                function browndog (){
                    one.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('two')){
    
        arr.push('2')         
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const two = document.querySelector('.two')
             
                two.style.backgroundColor = 'orange'
                const brown1 = setTimeout((browndog1), 170)
                function browndog1 (){
                    two.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('three')){
    
        arr.push('3')       
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const three = document.querySelector('.three')
             
                three.style.backgroundColor = 'orange'
                const brown3 = setTimeout((browndog3), 170)
                function browndog3 (){
                    three.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('four')){
    
        arr.push('4')       
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
            const four = document.querySelector('.four')
                
            four.style.backgroundColor = 'orange'
            const brown4 = setTimeout((browndog4), 170)
            function browndog4 (){
                four.style.backgroundColor = "bisque"
            }
    }
    else if(e.target.classList.contains('five')){
    
        arr.push('5')         
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const five = document.querySelector('.five')
             
                five.style.backgroundColor = 'orange'
                const brown5 = setTimeout((browndog5), 170)
                function browndog5 (){
                    five.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('six')){
    
        arr.push('6')         
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const six = document.querySelector('.six')
             
                six.style.backgroundColor = 'orange'
                const brown6 = setTimeout((browndog6), 170)
                function browndog6 (){
                    six.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('seven')){

    arr.push('7')     
    let int = arr.reduce((accum, digit) => (accum) + digit, );
    input.value = int
                const seven = document.querySelector('.seven')
             
                seven.style.backgroundColor = 'orange'
                const brown7 = setTimeout((browndog7), 170)
                function browndog7 (){
                    seven.style.backgroundColor = "bisque"
                }
    }else if(e.target.classList.contains('eight')){
    
    arr.push('8')     
    let int = arr.reduce((accum, digit) => (accum) + digit, );
    input.value = int
                const eight = document.querySelector('.eight')
             
                eight.style.backgroundColor = 'orange'
                const brown8 = setTimeout((browndog8), 170)
                function browndog8 (){
                    eight.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('nine')){
    
    arr.push('9')     
    let int = arr.reduce((accum, digit) => (accum) + digit, );
    input.value = int
                const nine = document.querySelector('.nine')
             
                nine.style.backgroundColor = 'orange'
                const brown9 = setTimeout((browndog9), 170)
                function browndog9 (){
                    nine.style.backgroundColor = "bisque"
                }
    }else if(e.target.classList.contains('zero')){
    
        arr.push('0')         
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const zero = document.querySelector('.zero')
             
                zero.style.backgroundColor = 'orange'
                const brown0 = setTimeout((browndog0), 170)
                function browndog0 (){
                    zero.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('period')){
    
        arr.push('.')         
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
                const period = document.querySelector('.period')
             
                period.style.backgroundColor = 'orange'
                const period1 = setTimeout((periodz), 170)
                function periodz (){
                    period.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('clear')){
    
        const clear2 = document.querySelector('.clear')
             
        clear2.style.backgroundColor = 'orange'
        const clear3 = setTimeout((clear02), 170)
        function clear02 (){
            clear2.style.backgroundColor = "bisque"
        }
        //clears the array
        while(arr.length > 0){
        arr.pop()
        }
        //clears input values
        input.value = '';
    }
    else if(e.target.classList.contains('del')){
    
        const clear2 = document.querySelector('.del')
             
        clear2.style.backgroundColor = 'orange'
        const clear3 = setTimeout((clear02), 170)
        function clear02 (){
            clear2.style.backgroundColor = "bisque"
        }

        //delete the last value of input value on each click of the back calculator button with the use of splice(). Then display the result in the input value
        input.value = input.value.slice(0, -1)
        //use while loop to pop the last index of the array on each cycle, so that it matches the length of the input value
        while(input.value.length < arr.length){
                arr.pop()
                }           
    }


    else if(e.target.classList.contains('plus')){
    
        arr.push('+')        
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int

                const plus = document.querySelector('.plus')
             
                plus.style.backgroundColor = 'orange'
                const plus1 = setTimeout((pluz), 170)
                function pluz (){
                    plus.style.backgroundColor = "bisque"
                }              
    }
    else if(e.target.classList.contains('minus')){
    
        arr.push('-')        
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int
            const minus = document.querySelector('.minus')
                
            minus.style.backgroundColor = 'orange'
            const minus1 = setTimeout((minuz), 170)
            function minuz (){
                minus.style.backgroundColor = "bisque"
            }

    }
    else if(e.target.classList.contains('multiply')){
    
        arr.push('*') 
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int

                const multiply = document.querySelector('.multiply')
             
                multiply.style.backgroundColor = 'orange'
                const multiply1 = setTimeout((multiplyer), 170)
                function multiplyer (){
                    multiply.style.backgroundColor = "bisque"
                }
    }
    else if(e.target.classList.contains('divide')){
    
        arr.push('/')         
        let int = arr.reduce((accum, digit) => (accum) + digit, );
        input.value = int

                const divide = document.querySelector('.divide')
             
                divide.style.backgroundColor = 'orange'
                const divide1 = setTimeout((divider), 170)
                function divider (){
                    divide.style.backgroundColor = "bisque"
                }
        
    }
    else if (e.target.classList.contains('equals')){  
                const equals = document.querySelector('.equals')
             
                equals.style.backgroundColor = 'orange'
                const brownequals = setTimeout((browndogequals), 170)
                function browndogequals (){
                    equals.style.backgroundColor = "bisque"
                }
       //converts the string array into an integer value then display it on input
        const int = arr.reduce((accum, digit) => (accum) + digit, );       
        
        //catch errors in wrong clicks thru equals sign 
        window.onerror = function(e) {
            console.log("Error: ", e);
            input.value = 'ERROR'  
            while(arr.length > 0){
                arr.pop()
                }      
        }; 

        const y = eval(int);          
        input.value = y;
        //clears out the array after input is displayed        
        while(arr.length > 0){
            arr.pop()
            }      
        }
})
