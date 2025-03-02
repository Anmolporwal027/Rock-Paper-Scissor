const Rock = document.getElementById('Rock')
const Paper = document.getElementById('Paper')
const Scissor = document.getElementById('Scissor')
const res = document.querySelector('.result');
const comp = document.querySelector("#CompChoice")
const player = document.querySelector("#PlayerChoice")
comp.style.height = "6rem"
Rock.addEventListener('click',(e)=>{
    e.preventDefault();

    // generating computer choice
    let randomNum = Math.floor(Math.random() * 3);
    let game = ["Rock","Paper","Scissor"];
    const compchoice = game[randomNum];
    console.log(compchoice);
    player.innerHTML = `<i class="fa-solid fa-hand-fist"></i> Your Choice`
     res.style.display = 'inline'

    // For rock
    if(compchoice ==="Rock"){
        res.innerHTML = 'Draw'
        comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i> Computer Choice`
    }
    else if(compchoice === "Paper"){
        res.innerHTML = 'Computer Win'
        comp.innerHTML = `<i class="fa-solid fa-hand"></i> Computer Choice`
    }
    else if(compchoice === "Scissor"){
        res.innerHTML = 'You Win'
        comp.innerHTML = `<i class="fa-solid fa-hand-peace"></i> Computer Choice`
    }

})

Paper.addEventListener('click',(e)=>{
    e.preventDefault();

    // generating computer choice
    let randomNum = Math.floor(Math.random() * 3);
    let game = ["Rock","Paper","Scissor"];
    const compchoice = game[randomNum];
    console.log(compchoice);
    player.innerHTML = `<i class="fa-solid fa-hand"></i> Your Choice`
    res.style.display = 'inline'

    // For Paper
    if(compchoice ==="Rock"){
        res.innerHTML = 'You Win'
        comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i> Computer Choice`
    }
    else if(compchoice === "Paper"){
        res.innerHTML = 'Draw'
        comp.innerHTML = `<i class="fa-solid fa-hand"></i> Computer Choice `
    }
    else if(compchoice === "Scissor"){
        res.innerHTML = 'Computer Win'
        comp.innerHTML = `<i class="fa-solid fa-hand-peace"></i> Computer Choice`
    }
})


Scissor.addEventListener('click',(e)=>{
    e.preventDefault();

    // generating computer choice
    let randomNum = Math.floor(Math.random() * 3);
    let game = ["Rock","Paper","Scissor"];
    const compchoice = game[randomNum];
    console.log(compchoice);
    player.innerHTML = `<i class="fa-solid fa-hand-peace"></i> Your Choice`
     res.style.display = 'inline'
     
    // For rock
    if(compchoice ==="Rock"){
        res.innerHTML = 'Computer Win'
        comp.innerHTML = `<i class="fa-solid fa-hand-fist"></i> Computer Choice`
    }
    else if(compchoice === "Paper"){
        res.innerHTML = 'You Win'
        comp.innerHTML = `<i class="fa-solid fa-hand"></i> Computer Choice`
    }
    else if(compchoice === "Scissor"){
        res.innerHTML = 'Draw'
        comp.innerHTML = `<i class="fa-solid fa-hand-peace"></i> Computer Choice`
    }
})


