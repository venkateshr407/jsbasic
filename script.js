function result(num) {
    if(num>=85) {
        console.log("dist");
    } else if(num>=65) {
        console.log("first class");
    } else if(num>=35) {
        console.log("second class");
    } else {
            console.log("fail");
        
   }
}
var num=prompt("enter the number");
result(num); 
