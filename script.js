const endDate = "30 May 2023 10:00 PM"

document.getElementById("end-date").innerText = endDate;

const inputs= document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    //console.log(end,now)

    const diff = (end - now)/1000;

    if(diff < 0) return;
   // console.log(diff);
//convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //calculate hours
    inputs[1].value = Math.floor(diff/3600) % 24;
    //calculate minutes
    inputs[2].value = Math.floor(diff/60) % 60;
    //calculate seconds
    inputs[3].value = Math.floor(diff % 60);


}
clock();

setInterval(
    ()=>{
        clock()
    },1000
)