let location1=3
let location2=4
let location3=5
let guess;
let guesses=0;
let isSunk=false;
let hits=0;
let fails=0;
while(!isSunk)
{
guess=prompt("Let's sink the ship => Enter a vaild number between 0 to 6");
if(guess<0||guess>6)
{
    alert("Enter a valid number")
    continue;
}

if(guess==location1||location2==guess||guess==location3)
{
    if(hits>=3)
    break;
    hits++;
    if(hits==3)
    {
        isSunk=true;
        alert("We got the Ship sunked");

    }
}
else
{
        alert("MISS");    
}
guesses++;

}
let stats="You have tried for "+guesses+" guesses and your accuracy is "+(3/guesses)*100+"%";
alert(stats);