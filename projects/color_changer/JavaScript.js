const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        //    console.log(event);
            // console.log(event.target);
            switch(event.target.id)
            {
                case "grey":
                    body.style.backgroundColor = event.target.id;
                    break;

                case "white":
                    body.style.backgroundColor = event.target.id;
                    break;
                    
                case "blue":
                    body.style.backgroundColor = event.target.id;
                    break;
                    
                case 'yellow':
                    body.style.backgroundColor = event.target.id;
                    break;
                    
                default:
                    body.style.backgroundColor = "white";
                    break;   
            }
    });
});