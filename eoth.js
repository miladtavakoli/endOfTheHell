
function eoth() {
    //add css to result Id

    //Get Now Date
    var today = new Date();
    var gd = today.getDate();
    var gm = today.getMonth() + 1; //January is 0!
    var gy = today.getFullYear();
    //
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
    var reDay = 0;
    var reMonth = 0;
    var reYear = 0;
    reDay = tDay - jDay;
    reMonth = tMonth - jMonth;
    reYear = tYear - jYear;
    if (reDay < 0) {
        reDay = reDay + 30;
        reMonth--;
    }
    if (reMonth < 0) {
        reMonth = reMonth + 12;
        reYear--;
    }
    var resultDay = reDay;
    resultDay += reMonth * 30;
    resultDay += reYear * 360;

    var resultMonth = resultDay / 30;
    var resultWeek = resultDay / 7;
if(resultDay>0) {
    document.getElementById('result').classList.add('alert-info');

    document.getElementById("result").innerHTML =
//            "<br>" + jDay + " \\\ " + jMonth + " \\\ " + jYear+
        "<br>" + " تعداد روز تا ترخیص" + "   &nbsp; :   &nbsp;" + resultDay +
        "<br>" + " تعداد ماه تا ترخیص" + "   &nbsp; :   &nbsp;" + resultMonth.toFixed(1) +
        "<br>" + " تعداد هفته تا ترخیص" + "   &nbsp; :   &nbsp;" + resultWeek.toFixed(1);
}
else{
    alert('موتور توی وارد کردن تاریخ دقت کن!');
}
}