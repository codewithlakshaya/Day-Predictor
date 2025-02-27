let result = 0;
let days = Number(prompt("Enter no of days"))
if(!(days==String)){
    switch(days % 7){
        case 0:
            result = "Tuesday";
            break;
        case 1:
            result = "Wednesday";
            break;
        case 2:
            result = "Thursday";
            break;
        case 3:
            result = "Friday";
            break;
        case 4:
            result = "Saturday";
            break;
        case 5:
            result = "Sunday";
            break;
        case 6:
            result = "Monday";
                                    
    }
    document.getElementById("show").innerHTML=`
    <h1>On ${days} Day it is ${result}</h1>`
}
