

function eoth2() {


    var exitMiladi = [];
    var startMiladi = [];
    var nowDate = new Date();
    var exitMiladiDate = new Date();
    var startMiladiDate = new Date();

    var resultCss = document.getElementById('result').classList;

    //get Start Date
    var startDay = parseInt(document.getElementById("eDay").value);
    var startMonth = parseInt(document.getElementById("eMonth").value);
    var startYear = parseInt(document.getElementById("eYear").value);
    startMiladi = jalali_to_gregorian(startYear, startMonth, startDay);
    startMiladiDate.setDate(startMiladi[2]);
    startMiladiDate.setMonth(startMiladi[1] - 1);
    startMiladiDate.setYear(startMiladi[0]);
    startMiladiDate.setHours(0, 0, 0);



    //get Exit Date
    var exitDay = parseInt(document.getElementById("tDay").value);
    var exitMonth = parseInt(document.getElementById("tMonth").value);
    var exitYear = parseInt(document.getElementById("tYear").value);
    exitMiladi = jalali_to_gregorian(exitYear, exitMonth, exitDay);
    exitMiladiDate.setDate(exitMiladi[2]);
    exitMiladiDate.setMonth(exitMiladi[1] - 1);
    exitMiladiDate.setYear(exitMiladi[0]);
    exitMiladiDate.setHours(0, 0, 0);

    var tarkhis = "";
    console.log(exitMiladiDate, nowDate);
    console.log(exitMiladiDate - nowDate);

    var remainDays = date_diff_indays(nowDate, exitMiladiDate);
    var remainWeeks = date_diff_inWeeks(nowDate, exitMiladiDate);
    var remainMonths = date_diff_inMonths(nowDate, exitMiladiDate);
    var remainHours = date_diff_inHours(nowDate, exitMiladiDate);
    var remainMinutes = date_diff_inMinutes(nowDate, exitMiladiDate);
    var remainseconds = date_diff_inseconds(nowDate, exitMiladiDate);

    var leftDays = date_diff_indays(startMiladiDate ,nowDate);
    var leftWeeks = date_diff_inWeeks(startMiladiDate ,nowDate);
    var leftMonths = date_diff_inMonths(startMiladiDate ,nowDate);
    var leftHours = date_diff_inHours(startMiladiDate ,nowDate);
    var leftMinutes = date_diff_inMinutes(startMiladiDate ,nowDate);
    var leftseconds = date_diff_inseconds(startMiladiDate ,nowDate);

    resultCss.add('alert-secondary', 'border');
    //print in result div

    document.getElementById("result").innerHTML =
        tarkhis +
        // "  روز خدمت کرده " + "   &emsp; :   &emsp;" + goneDay +
        // "<br>" + "  هفته خدمت کرده " + "   &emsp; :   &emsp;" + goneWeek.toFixed(1) +



        "<br>" + "  روز گذشته از خدمت" + "   &emsp; :   &emsp;" + leftDays +
        "<br>" + "  هفته گذشته از خدمت" + "   &emsp; :   &emsp;" + leftWeeks +
        "<br>" + "  ماه گذشته از خدمت" + "   &emsp; :   &emsp;" + leftMonths +
        "<br>" + "  ساعت گذشته از خدمت" + "   &emsp; :   &emsp;" + leftHours +
        "<br>" + "  دقیقه گذشته از خدمت" + "   &emsp; :   &emsp;" + leftMinutes +
        "<br>" + "  ثانیه گذشته از خدمت" + "   &emsp; :   &emsp;" +leftseconds +
        "<br>" +"<br>" +"<br>" +

        "<br>" + "  روز تا ترخیص" + "   &emsp; :   &emsp;" + remainDays +
        "<br>" + "  هفته تا ترخیص" + "   &emsp; :   &emsp;" + remainWeeks +
        "<br>" + "  ماه تا ترخیص" + "   &emsp; :   &emsp;" + remainMonths +
        "<br>" + "  ساعت تا ترخیص" + "   &emsp; :   &emsp;" + remainHours +
        "<br>" + "  دقیقه تا ترخیص" + "   &emsp; :   &emsp;" + remainMinutes +
        "<br>" + "  ثانیه تا ترخیص" + "   &emsp; :   &emsp;" +remainseconds ;

}


var date_diff_indays = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    // return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
    return ((dt2 - dt1) / (1000 * 60 * 60 * 24)).toFixed(1);

};

var date_diff_inWeeks = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return ((dt2 - dt1) / (1000 * 60 * 60 * 24 * 7)).toFixed(1);

};

var date_diff_inMonths = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return ((dt2 - dt1) / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
};

var date_diff_inHours = function (date1, date2) {
    dt1 = date1;
    dt2 = date2;
    return ((dt2 - dt1) / (1000 * 60 * 60)).toFixed(1);
};

var date_diff_inMinutes = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    // return ((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 1 ));
    return ((dt2 - dt1) / (1000 * 60 * 1)).toFixed(0);

};

var date_diff_inseconds = function (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    // return ((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 1 ));
    return ((dt2 - dt1) / (1000)).toFixed(0);

};
