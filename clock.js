// sleep time expects milliseconds
mode = "light"


stf = document.getElementById("test")
stf.innerHTML = ""
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function lightMode(){
    elements = document.getElementsByClassName("mode")
    for (i = 0; i < elements.length ; i++){
        elements[i].style.color = "black"
        elements[i].style.backgroundColor = "white"
    }
    clocks = document.getElementsByClassName("clock")
    for (i = 0; i < clocks.length ; i++){
        clocks[i].style.color = "black"
    }
        
}

function darkMode(){
    elements = document.getElementsByClassName("mode")
    
    for (i = 0; i < elements.length ; i++){
        elements[i].style.color = "white"
        elements[i].style.backgroundColor = "black"

    }
    clocks = document.getElementsByClassName("clock")
    for (i = 0; i < clocks.length ; i++){
        clocks[i].style.color = "red"
        
    }
    document.getElementById("countdown").style.color = "orange"

}




start = new Date(2020,8,17,00,00,00)
end   = new Date(2020,9,1,00,00,00)

faststart = new Date(2020,8,27,18,00,00)
fastend   = new Date(2020,8,28,19,05,01)





total = end-start 
fasttotal = fastend - faststart
function update(){
   
    sleep(10).then(() => {
        // Do something after the sleep!
        d = new Date()
        s = d.getSeconds()
        m = d.getMinutes()
        h = d.getHours()

        timepassed = d-start 
        
        timeleft = end-d
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        clock = document.getElementById("clock1")
        
        clocker(clock,h,m,s)
        document.getElementById("clock2d").innerHTML = days
        clocker(document.getElementById("clock2"),hours,minutes,seconds)
        document.getElementById("countdownp").innerHTML = ("%"+(timepassed/total *100) ).toString().slice(0,10)

        
        fastpassed = d - faststart
        fastleft = fastend - d

        
        var fasth = Math.floor((fastleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var fastm = Math.floor((fastleft % (1000 * 60 * 60)) / (1000 * 60));
        var fasts = Math.floor((fastleft % (1000 * 60)) / 1000);
        fastclock = document.getElementById("clock3")
        clocker(fastclock,fasth,fastm,fasts)
        document.getElementById("fastcountdownp").innerHTML = ("%"+(fastpassed/fasttotal * 100)).toString().slice(0,10)
        document.getElementById("fastprogressinner").style.width = (fastpassed/fasttotal * 100) + "%"
        
        
         
        
        
        
        
        
        if (h > 7 && h < 20){
        //if (s%2==0){
            if (mode != "light"){
                lightMode()
                mode = "light"
            }
        } else {
            if (mode != "dark"){
                darkMode()
                mode = "dark"
            }
        }
        
        
       
        
        
        update()
    });
}


function clocker(clock,h,m,s){
    clock.innerHTML = ""

    if (h.toString().length <= 1){
        clock.innerHTML += "0"+h
    } else {
        clock.innerHTML += h
    }

    clock.innerHTML += ":"

    if (m.toString().length <= 1){
        clock.innerHTML += "0"+m
    } else {
        clock.innerHTML += m
    }

    clock.innerHTML += ":"

    if (s.toString().length <= 1){
        clock.innerHTML += "0"+s
    } else {
        clock.innerHTML += s
    }
    
}



update()