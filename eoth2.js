function eoth2() {
    var exitMiladi;
    var startMiladi;
    var nowDate = new Date();
    var exitMiladiDate = new Date();
    var startMiladiDate = new Date();
    var tarkhis = "";
    var htmlRemainDays, htmlRemainWeeks, htmlRemainMonths, htmlRemainHours, htmlRemainMinutes, htmlRemainseconds = "";
    var htmlLeftDays, htmlLeftWeeks, htmlLeftMonths, htmlLeftHours, htmlLeftMinutes, htmlLeftseconds = "";

    var resultCss = document.getElementById('result').classList;

    //get Start Date
    var startDay = parseInt(document.getElementById("startDay").value);
    var startMonth = parseInt(document.getElementById("startMonth").value);
    var startYear = parseInt(document.getElementById("startYear").value);
    startMiladi = jalali_to_gregorian(startYear, startMonth, startDay);
    startMiladiDate.setDate(startMiladi[2]);
    startMiladiDate.setMonth(startMiladi[1] - 1);
    startMiladiDate.setYear(startMiladi[0]);
    startMiladiDate.setHours(0, 0, 0);



    //get Description khedmat
    var ezafe = 0;
    var kasri = 0;
    var ezafeInput = document.getElementById("ezafeKhedmat").value
    var kasriInput = document.getElementById("kasriKhedmat").value
    if (ezafeInput) ezafe = parseInt(ezafeInput);
    if (kasriInput) kasri = parseInt(kasriInput);

    var desc = parseInt(kasri - ezafe);
    var descDay = 0;
    var descMonth = 0;
    var descYear = 0;
    if (desc) {
        var absDesc = Math.abs(desc);
        descYear = Math.floor(absDesc / 360);
        descMonth = Math.floor(absDesc % 360 / 30);
        descDay = Math.floor(absDesc % 360 % 30);
        console.log(" روز ", descDay, " ماه ", descMonth, " سال  ", descYear);
        // console.log(desc);
        if (desc < 0) {
            descDay *= -1;
            descMonth *= -1;
            descYear *= -1;
        }
    }



    //calculate exit Day
    var exitDay = startDay;
    var exitMonth = startMonth;
    var exitYear = startYear;

    exitDay = exitDay - descDay;
    if (exitDay < 1) {
        exitDay += 30;
        exitMonth--;
    }
    if (exitDay > 30) {
        exitDay -= 30;
        exitMonth++;
    }

    exitMonth = exitMonth - descMonth + 9;
    if (exitMonth < 1) {
        exitMonth += 12;
        exitYear--;
    }
    if (exitMonth > 12) {
        exitYear = Math.floor(exitYear + exitMonth / 12);
        exitMonth = Math.floor(exitMonth % 12);
        console.log(exitYear);
    }

    exitYear = exitYear - descYear + 1;

    console.log(" روز ", exitDay, " ماه ", exitMonth, " سال  ", exitYear);

    var tarkhis = "  تاریخ ترخیص " + "   &emsp; :   &emsp;" + exitDay + " \\\ " + exitMonth + " \\\ " + exitYear + "<br>";


    exitMiladi = jalali_to_gregorian(exitYear, exitMonth, exitDay);
    exitMiladiDate.setDate(exitMiladi[2]);
    exitMiladiDate.setMonth(exitMiladi[1] - 1);
    exitMiladiDate.setYear(exitMiladi[0]);
    exitMiladiDate.setHours(0, 0, 0);

    // console.log(exitMiladiDate, nowDate);
    // console.log(exitMiladiDate - nowDate);


    var remainDays = date_diff_indays(nowDate, exitMiladiDate);
    if (remainDays >= 0) {
        var remainWeeks = date_diff_inWeeks(nowDate, exitMiladiDate);
        var remainMonths = date_diff_inMonths(nowDate, exitMiladiDate);
        var remainHours = date_diff_inHours(nowDate, exitMiladiDate);
        var remainMinutes = date_diff_inMinutes(nowDate, exitMiladiDate);
        var remainseconds = date_diff_inseconds(nowDate, exitMiladiDate);
        htmlRemainDays = "<br>" + "  روز تا ترخیص" + "   &emsp; :   &emsp;" + remainDays;
        htmlRemainWeeks = "<br>" + "  هفته تا ترخیص" + "   &emsp; :   &emsp;" + remainWeeks;
        htmlRemainMonths = "<br>" + "  ماه تا ترخیص" + "   &emsp; :   &emsp;" + remainMonths;
        htmlRemainHours = "<br>" + "  ساعت تا ترخیص" + "   &emsp; :   &emsp;" + remainHours;
        htmlRemainMinutes = "<br>" + "  دقیقه تا ترخیص" + "   &emsp; :   &emsp;" + remainMinutes;
        htmlRemainseconds = "<br>" + "  ثانیه تا ترخیص" + "   &emsp; :   &emsp;" + remainseconds;
    }


    var leftDays = date_diff_indays(startMiladiDate, nowDate);
    if (leftDays >= 0) {

        var leftWeeks = date_diff_inWeeks(startMiladiDate, nowDate);
        var leftMonths = date_diff_inMonths(startMiladiDate, nowDate);
        var leftHours = date_diff_inHours(startMiladiDate, nowDate);
        var leftMinutes = date_diff_inMinutes(startMiladiDate, nowDate);
        var leftseconds = date_diff_inseconds(startMiladiDate, nowDate);
        htmlLeftDays = "<br>" + "  روز گذشته از اعزام" + "   &emsp; :   &emsp;" + leftDays;
        htmlLeftWeeks = "<br>" + "  هفته گذشته از اعزام" + "   &emsp; :   &emsp;" + leftWeeks;
        htmlLeftMonths = "<br>" + "  ماه گذشته از اعزام" + "   &emsp; :   &emsp;" + leftMonths;
        htmlLeftHours = "<br>" + "  ساعت گذشته از اعزام" + "   &emsp; :   &emsp;" + leftHours;
        htmlLeftMinutes = "<br>" + "  دقیقه گذشته از اعزام" + "   &emsp; :   &emsp;" + leftMinutes;
        htmlLeftseconds = "<br>" + "  ثانیه گذشته از اعزام" + "   &emsp; :   &emsp;" + leftseconds;
    }

    //print Result in result div
    if (leftDays >= 0 && remainDays >= 0) {
        //add css to Done Id
        if (resultCss.contains("alert-warning")) {
            resultCss.remove("alert-warning");
        }
        resultCss.add('alert-secondary', 'border');
        document.getElementById("result").innerHTML =
            tarkhis +
            htmlLeftDays + htmlLeftWeeks + htmlLeftMonths + htmlLeftHours + htmlLeftMinutes + htmlLeftseconds +

            "<br>" + "<br>" +

            htmlRemainDays + htmlRemainWeeks + htmlRemainMonths + htmlRemainHours + htmlRemainMinutes + htmlRemainseconds;

    }
    else {
        //Add Css
        //print in result div
        if (resultCss.contains("alert-secondary")) {
            resultCss.remove("alert-secondary");
        }
        resultCss.add('alert-warning', 'border');
        document.getElementById("result").innerHTML =
            "پست دادن خسته‌ات کرده؟ توی واردکردن تاریخ دقت کن";
    }

    // console.log(ezafe, "_--_", kasri, "_--_", exitMiladiDate, tarkhis);
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
