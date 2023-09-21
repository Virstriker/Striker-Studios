let c = 1;
function clk(){
    let menu = document.getElementById("menu");
    let inmenu = document.getElementById("renav");
    if(c%2 == 0){
        inmenu.style.display = "none";
    }else if(c%2 == 1){
        inmenu.style.display = "flex";
    }
    c++;
    console.log(c);

}