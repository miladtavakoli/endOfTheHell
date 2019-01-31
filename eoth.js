
function eoth() {

    //Get Now Date
    var today = new Date();
    var gd = today.getDate();
    var gm = today.getMonth() + 1; //January is 0!
    var gy = today.getFullYear();
    //calculate Jalali NowDate
    var tarikh = [];
    tarikh = gregorian_to_jalali(gy, gm, gd);
    var jYear = tarikh[0];
    var jMonth = tarikh[1];
    var jDay = tarikh[2];

    // Ezam :(
    var eDay = parseInt(document.getElementById("eDay").value);
    var eMonth = parseInt(document.getElementById("eMonth").value);
    var eYear = parseInt(document.getElementById("eYear").value);

    //Tarkhis :D
    var tDay = parseInt(document.getElementById("tDay").value);
    var tMonth = parseInt(document.getElementById("tMonth").value);
    var tYear = parseInt(document.getElementById("tYear").value);

    var toDay = 0;
    var toMonth = 0;
    var toYear = 0;
    toDay = tDay - jDay;
    toMonth = tMonth - jMonth;
    toYear = tYear - jYear;
    if (toDay < 0) {
        toDay = toDay + 30;
        toMonth--;
    }
    if (toMonth < 0) {
        toMonth = toMonth + 12;
        toYear--;
    }
    var toDay = toDay;
    toDay += toMonth * 30;
    toDay += toYear * 360;
    var toMonth = toDay / 30;
    var toWeek = toDay / 7;


    var doneDay = 0;
    var doneMonth = 0;
    var doneYear = 0;
    doneDay = jDay -eDay;
    doneMonth = jMonth - eMonth;
    doneYear = jYear - eYear;
    if (doneDay < 0) {
        doneDay = doneDay + 30;
        doneMonth--;
    }
    if (doneMonth < 0) {
        doneMonth = doneMonth + 12;
        doneYear--;
    }
    var doneDay = toDay;
    doneDay += toMonth * 30;
    doneDay += toYear * 360;
    // var doneMonth = doneDay / 30;
    var DoneWeek = doneDay / 7;



if(toDay>0) {
    //add css to Done Id
    document.getElementById('result').classList.add('alert-secondary','border');
    //print in Done div
    document.getElementById("result").innerHTML =
//            "<br>" + jDay + " \\\ " + jMonth + " \\\ " + jYear+
         "  روز خدمت کرده " + "   &nbsp; :   &nbsp;" + doneDay +
        "<br>" + "  هفته خدمت کرده " + "   &nbsp; :   &nbsp;" + DoneWeek.toFixed(1) +
        "<br>" + "  روز تا ترخیص" + "   &nbsp; :   &nbsp;" + toDay +
        "<br>" + "  ماه تا ترخیص" + "   &nbsp; :   &nbsp;" + toMonth.toFixed(1) +
        "<br>" + "  هفته تا ترخیص" + "   &nbsp; :   &nbsp;" + toWeek.toFixed(1);
}
else{
    alert('موتور توی وارد کردن تاریخ دقت کن!');
}
}