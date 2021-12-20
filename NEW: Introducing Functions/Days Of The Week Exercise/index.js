// DEFINE YOUR FUNCTION BELOW:
function returnDay(num){
    const days = [null,'Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return num> 0 && num < 8 ?days[num] : null;
}
