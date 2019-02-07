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


    var toDay = tDay - jDay;
    var toMonth = tMonth - jMonth;
    var toYear = tYear - jYear;
    if (toDay < 0) {
        toDay = toDay + 30;
        toMonth--;
    }
    if (toMonth < 0) {
        toMonth = toMonth + 12;
        toYear--;
    }
    var leftDay = toDay;
    leftDay += toMonth * 30;
    leftDay += toYear * 360;
    var leftMonth = leftDay / 30;
    var leftWeek = leftDay / 7;


    var doneDay = jDay - eDay;
    var doneMonth = jMonth - eMonth;
    var doneYear = jYear - eYear;
    if (doneDay < 0) {
        doneDay = doneDay + 30;
        doneMonth--;
    }
    if (doneMonth < 0) {
        doneMonth = doneMonth + 12;
        doneYear--;
    }
    var goneDay = doneDay;
    goneDay = goneDay + doneMonth * 30;
    goneDay = goneDay + doneYear * 360;
    var goneWeek = goneDay / 7;


    if (leftDay >= 0 && goneDay >= 0) {
        //add css to Done Id
        document.getElementById('result').classList.add('alert-secondary', 'border');
        //print in result div
        document.getElementById("result").innerHTML =
//            "<br>" + jDay + " \\\ " + jMonth + " \\\ " + jYear+
            "  روز خدمت کرده " + "   &emsp; :   &emsp;" + goneDay +
            "<br>" + "  هفته خدمت کرده " + "   &emsp; :   &emsp;" + goneWeek.toFixed(1) +
            "<br>" + "  روز تا ترخیص" + "   &emsp; :   &emsp;" + leftDay +
            "<br>" + "  ماه تا ترخیص" + "   &emsp; :   &emsp;" + leftMonth.toFixed(1) +
            "<br>" + "  هفته تا ترخیص" + "   &emsp; :   &emsp;" + leftWeek.toFixed(1);
    }
    else {
        //Add Css
        //print in result div
        document.getElementById('result').classList.add('alert-warning', 'border');
        document.getElementById("result").innerHTML =
            "پست دادن خسته‌ات کرده؟ توی واردکردن تاریخ دقت کن";
    }
}