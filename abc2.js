let you = 0;
let computer = 0;

const msg = document.getElementById("msg");

const genComp = () => {
    let options = ["rock", "paper", "scissor"];
    let x = Math.floor(Math.random() * 3);
    return options[x];
}

const playgame = (c) => {
    const comp = genComp();
    if (c === comp) {
        msg.innerText = "The game is a draw!";
    } else if (c === "rock") {
        if (comp === "paper") {
            msg.innerText = "Computer WON!!";
            computer++;
        } else if (comp === "scissor") {
            msg.innerText = "You WON!!";
            you++;
        }
    } else if (c === "paper") {
        if (comp === "rock") {
            msg.innerText = "You WON!!";
            you++;
        } else if (comp === "scissor") {
            msg.innerText = "Computer WON!!";
            computer++;
        }
    } else if (c === "scissor") {
        if (comp === "paper") {
            msg.innerText = "You WON!!";
            you++;
        } else if (comp === "rock") {
            msg.innerText = "Computer WON!!";
            computer++;
        }
    }
    updateScore();
}

const updateScore = () => {
    document.querySelector(".you p").innerText = you;
    document.querySelector(".computer p").innerText = computer;
}

const choices = document.querySelectorAll(".content img");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let c = choice.getAttribute("id");
        playgame(c);
    });
});
