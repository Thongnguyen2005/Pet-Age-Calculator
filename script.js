function doggy()
{
    const dogWei = document.getElementById("dogWeight").value;
    const dogAg = document.getElementById("dogAge").value;
    let humAg1 = 15;
    //default minumum dog age is 1 years old.
    if (dogAg > 1 && dogAg < 6)
        humAg1 = 15 + 9 + (dogAg - 2) * 4;
    else if (dogAg >= 6){
        switch(dogWei){
            case "small":
                humAg1 = 40 + (dogAg - 6) * 4;
                break;
            case "medium":
                humAg1 = 42;
                for(let i=6; i<dogAg; i++){
                    humAg1 += i % 2 == 0? 5 : 4;
                }
                break;
            default:
                humAg1 = 45;
                for(let i=6; i<dogAg; i++){
                    humAg1 += [6, 7, 9, 11, 12, 14].includes(i)? 5 : 6;
                }
            
        }
    }
    document.getElementById("humanAge1").value = humAg1;
}
function catty(){
    const catAg = document.getElementById("catAge").value;
    let humAg2 = 7; 
    if(catAg > 1){
        humAg2 += 8;
        for(let i=2; i<catAg; i++){
            humAg2 += i > 2? 4 : 13;
        }
    }
    document.getElementById("humanAge2").value = humAg2;
}
function fishy(){
    const spec = document.getElementById("fishType").value;
    const fishAg = document.getElementById("fishAge").value;
    let humAg3 = 0;
    if(spec=="koi")
        humAg3 += (fishAg - 1) * 4 + 16;
    else if(spec=="guppy"){
        humAg3 += 6; //year 1
        if (fishAg > 1)
            humAg3 += (fishAg - 1) * 3;
    }
    else{
        humAg3 += 18;
        if (fishAg > 1)
            humAg3 += (fishAg - 1) * 8;
    }
    document.getElementById("humanAge3").value = humAg3;
}
