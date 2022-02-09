const bombs = [];
let gamePoints=0;

function updateGamePoints(){
    const divElement=document.getElementById('gamepoints');
    divElement.textContent=gamePoints;
}  

function addGrid() {

    const appElement = document.getElementById('app');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.style.width = '400px'
        row.style.height = '40px'
        for (let j = 0; j < 10; j++) {
            const index = i * 9 + j;
            const column = document.createElement('div');
            column.style.display = 'inline-block';
            column.style.border = '0.5px solid black';
            column.style.height = '40px';
            column.style.width = '40px';
            column.setAttribute('index', index);

            column.addEventListener('click',()=>{
                if(bombs.includes(index)){
                    alert('Bomb Clicked');
                    column.style.backgroundColor='red';
                }
                else{
                    column.style.backgroundColor='yellow';
                    gamePoints++;
                    updateGamePoints();
                }
            })
            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
    document.createElement('br');
}

function generateBombs() {
    while (bombs.length < 11) {
        const randomNum = Math.floor(Math.random() * 100);
        if (randomNum < 81 && !bombs.includes(randomNum)) {
            bombs.push(randomNum)
        }
    }
}

addGrid();
generateBombs();

