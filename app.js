document.getElementById("submitBtn").addEventListener('click',function(e){
    //Prevent default behavior of form submission
    e.preventDefault();
    //Store input birth date
    let inputDate = parseInt(document.getElementsByClassName("date")[0].value);
    let inputMonth = parseInt(document.getElementsByClassName("date")[1].value);
    let inputYear = parseInt(document.getElementsByClassName("date")[2].value);
    
    //Store current date
    let currentDate = new Date();
    let current_date =currentDate.getDate();
    let current_month =currentDate.getMonth()+1;
    let current_year = currentDate.getFullYear();

    let elapsedDate = null;
    let elapsedMonth = null;
    let elapsedYear = null;
    //Storing total days of each month in an object
    let calendar = {
        1:31,
        2:(current_year%4==0)?29:28,
        3:31,
        4:30,
        5:31,
        6:30,
        7:31,
        8:31,
        9:30,
        10:31,
        11:30,
        12:31
    };
    if(current_date==inputDate){
        elapsedDate = 0;
    }else if (current_date> inputDate){
        elapsedDate = current_date - inputDate;
    }else if(current_date < inputDate){
        elapsedDate = (calendar[inputMonth] - inputDate)+current_date;
    }


    if(current_month==inputMonth){
        elapsedMonth = 0;
    }if (current_month > inputMonth && current_date>=inputDate){
        elapsedMonth = current_month - inputMonth;
    }if (current_month < inputMonth && current_date==inputDate){
        elapsedMonth = inputMonth - current_month;
    }if(current_month > inputMonth && current_date<inputDate){
        elapsedMonth = current_month - inputMonth -1;
    }if(current_month<inputMonth && inputDate > current_date){
        elapsedMonth = (12-inputMonth)+current_month-1;
    }if (current_month<inputMonth && inputDate < current_date){
        elapsedMonth = (12-inputMonth)+current_month;
    }if ((current_year-inputYear)==1 && current_month>inputMonth){
        elapsedMonth = (12-inputMonth)+current_month;
        if (elapsedMonth > 12){
            elapsedYear =1;
            elapsedMonth = elapsedMonth - 12;
        }
    }  


    if(current_year == inputYear){
        elapsedYear = 0;
    }if(current_year > inputYear && (current_year-inputYear)>1){ 
       if (current_month <=inputMonth){
            elapsedYear = current_year - inputYear -1;
        }else if (current_month >inputMonth){
            elapsedYear = current_year - inputYear;
        }

    }

    let finalText = `Hi, you are ${elapsedDate} Days,${elapsedMonth} Months & 
    ${elapsedYear} Years older as of today`;

    document.getElementById("outputArea").innerHTML = finalText;
});
