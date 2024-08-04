let you=0;
let computer=0;

const msg=document.getElementById("msg");


const genComp=()=>{
    let option=["rock","paper","scissor"];
    let x=Math.floor(Math.random()*3);
    return option[x];
}

const playgame=(c)=>{
    const comp= genComp();
    if(c===comp){
        msg.innerText="The game was draw";
    }
    else if(c===rock){
        if(comp===paper){
            msg.innerText="Computer WON!!"
            computer++;
        }
        else if(comp===scissor){
            msg.innerText="You WON!!"
            you++;
        }
    }

    else if(c===paper){
        if(comp===rock){
            msg.innerText="You WON!!"
            you++;
        }
        else if(comp===scissor){
            msg.innerText="Computer WON!!"
            computer++;
        }
    }

    else if(c===scissor){
        if(comp===paper){
            msg.innerText="Computer WON!!"
            computer++;
        }
        else if(comp===rock){
            msg.innerText="You WON!!"
            you++;
        }
    }
}

const choice= document.querySelectorAll(".content");
choice.forEach((content) => {
    content.addEventListener("click", ()=>{
        let c=content.getAttribute("id");
        playgame(c);
    });
});
