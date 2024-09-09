
function createGrid(){
    let len = parseInt(prompt('choose the number of squares:2,4,8,16,32,64 :'));
    console.log(len);
    if(len<=0 || isNaN(len)){
        len = 16; // default grid size
    }
    if(len%2==1){
        len++;
    }

    // fix the grid dimensions,set dimensions of square based on user input,ex:16,32,64...
    let sq = 640/len;

    let grid = document.querySelector('.grid');
    
    for(let i =0;i<len;i++)
        for(let j =0;j<len;j++)
        {
            let square = document.createElement('div');
            square.style.width = sq+"px";
            square.style.height = sq+"px";
            square.style.border = "0.3px solid black";
            square.classList.add('square');
            //square.style.opacity = 1;
            //square.setAttribute('number',10)
            grid.appendChild(square);
        }

}


function hover(color){
    
    let squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('mouseover',()=>{
            let choice = 'black';  //default color

            //square.style.opacity = 1;

            if(color=='erase'){
                square.style.opacity = 1;
                choice = 'white';
            }
            else if(color=='rainbow'){
   
                let r = chooseColor();
                let g = chooseColor();
                let b = chooseColor();
                choice = 'rgb(' + r + ',' + g + ',' + b + ')';
            }

           /* else if(color=='darken')
            {
                //let level = square.getAttribute('number');
                let op = square.style.opacity;
                if(op=='')[
                    op = 1
                ]

                //square.style.opacity = level+"%";
                else{op = op - '0.1';
                (op);}

                /*let newVal = String(parseInt(level) + 10);
                square.setAttribute('number',newVal);
    
            }
            */

            else{

                choice = color;
            }
            square.style.backgroundColor = choice;
        });
    })
}


function popUp(){
    let button = document.querySelector('input');
    button.addEventListener('input',()=>{
        let choice = button.value;
        hover(choice);
    });
}


function chooseColor(){
    return Math.floor(Math.random() * (255 - 0) + 0);
}


function playGame(){
    createGrid();
    document.addEventListener('click',(e)=>{
        let mode = e.target.className;
        if(mode=='buttons' || mode=='grid'){

        }
        else if(mode=='create'){
            wipeBoard();
            createGrid();
        }
        else if(mode=='color'){

            popUp();
        }
        else{
           
            hover(mode);
        }
        

    })
}

/*function clearBoard(){
    let squares = document.querySelectorAll('.square');
        squares.forEach((square)=>{
            square.style.backgroundColor = 'white';
            square.style.opacity = "0";
            //square.style.border = "0.5px solid black";


        })
    hover('');
}


/*function darken(){
    clearBoard();
    let squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('mouseover',()=>{
            square.style.opacity += "0.1";
            console.log(square.style.opacity)
        })})

}*/
function wipeBoard(){
    let grid = document.querySelector('.grid');
    let sqs = document.querySelectorAll('.square');


    sqs.forEach((square)=>{
        grid.removeChild(square);
    })

 }

playGame();

