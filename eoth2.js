function eoth2() {

    var today = new Date();
    //get Start Date
    var startDay = parseInt(document.getElementById("eDay").value);
    var startMonth = parseInt(document.getElementById("eMonth").value);
    var startYear = parseInt(document.getElementById("eYear").value);
    var startMiladi = [];
    startMiladi = jalali_to_gregorian(startYear, startMonth, startDay);

    //get Exit Date
    var exitDay = parseInt(document.getElementById("tDay").value);
    var exitMonth = parseInt(document.getElementById("tMonth").value);
    var exitYear = parseInt(document.getElementById("tYear").value);
    var exitMiladi = [];
    exitMiladi = jalali_to_gregorian(exitYear, exitMonth, exitDay);
    var exitMiladiDate = new Date();
    exitMiladiDate.setDate(exitMiladi[2]);
    exitMiladiDate.setMonth(exitMiladi[1] - 1);
    exitMiladiDate.setYear(exitMiladi[0]);

    var nowDate = new Date();

    console.log(exitMiladiDate, nowDate);
    console.log(date_diff_indays(nowDate, exitMiladiDate));
    console.log(date_diff_inMonths(nowDate, exitMiladiDate));
    console.log(date_diff_inHours(nowDate, exitMiladiDate));
    console.log(date_diff_inMinutes(nowDate, exitMiladiDate));
}


var date_diff_indays = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
};

var date_diff_inMonths = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24 * 30));
};

var date_diff_inHours = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 1 ));
};

var date_diff_inMinutes = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 1 ));
};