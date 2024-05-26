const leapYear_ditect = (year)=>{

    if ((year % 4 == 0 && year % 100 !== 0) || year % 4 == 0){
        console.log('This Year is Leap year')
    }
    else{
        console.log('Not leap year')
    }
}

leapYear_ditect(2004);