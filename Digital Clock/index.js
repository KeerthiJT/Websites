

// try {
//     let x = window.prompt("Enter a number");

//     x = Number(x);

//     if(isNaN(x)) throw window.alert("That wasn't a number");
//     if(x == 0) throw window.alert("That was empty");

//     window.alert(`${x} is a number`);
// }

// catch(error){
//     console.log(error);
// }

// finally{
//     window.alert("This always executes");
// }


const interval = setInterval(clock,1000);
        function clock(){
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();
            let period = "AM";
            if(hours > 11) {
                hours -= 12;
                period = "PM";
            }

            if(hours == 0) hours = 12;

            if(hours < 10) hours = '0' + hours;
            
            if(minutes < 10) minutes = '0' + minutes;
            
            if(seconds < 10) seconds = '0' + seconds;
            
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            document.getElementById("period").innerHTML = period;

        }
