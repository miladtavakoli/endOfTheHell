function eoth2() {
    var resultCss = document.getElementById('result').classList;

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
    var tarkhis="";
    console.log(exitMiladiDate, nowDate);
    var remainDays = date_diff_indays(nowDate, exitMiladiDate);
    var remainWeeks = date_diff_inWeeks(nowDate, exitMiladiDate);
    var remainMonths = date_diff_inMonths(nowDate, exitMiladiDate);
    var remainHours =date_diff_inHours(nowDate, exitMiladiDate);
    var remainMinutes =date_diff_inMinutes(nowDate, exitMiladiDate);



        resultCss.add('alert-secondary', 'border');
        //print in result div
        document.getElementById("result").innerHTML =
            tarkhis +
            // "  روز خدمت کرده " + "   &emsp; :   &emsp;" + goneDay +
            // "<br>" + "  هفته خدمت کرده " + "   &emsp; :   &emsp;" + goneWeek.toFixed(1) +
            "<br>" + "  روز تا ترخیص" + "   &emsp; :   &emsp;" + remainDays +
            "<br>" + "  هفته تا ترخیص" + "   &emsp; :   &emsp;" + remainWeeks +
            "<br>" + "  ماه تا ترخیص" + "   &emsp; :   &emsp;" + remainMonths +
            "<br>" + "  ساعت تا ترخیص" + "   &emsp; :   &emsp;" + remainHours+
            "<br>" + "  دقیقه تا ترخیص" + "   &emsp; :   &emsp;" + remainMinutes;



}


var date_diff_indays = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
};

var date_diff_inWeeks = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24 * 7));
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