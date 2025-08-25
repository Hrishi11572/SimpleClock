let hour = 0;
let min = 0; 
let sec = 0;  

function Display(){
    console.clear(); 
    
    // transform the variables 
    let newhour, newmin, newsec, text; 
    if(hour < 10) newhour = `0${hour}`; 
    else newhour = `${hour}`; 
    if(min < 10) newmin = `0${min}`; 
    else newmin = `${min}`;
    if(sec < 10) newsec = `0${sec}`; 
    else newsec = `${sec}`; 
    
    if(hour < 12) text = "AM"; 
    else text = "PM"; 
    console.log(`   Timer : ${newhour}:${newmin}:${newsec}   ${text}`);
}

function selfCall(){
    sec++; 
    if(sec == 60){
        min++; 
        sec = 0; 
    }
    if(min == 60){
        hour++; 
        min = 0; 
    }
    hour %= 24; 
    Display(); 
    setTimeout(selfCall, 1000); 
}

// run the clock here 
selfCall(); 