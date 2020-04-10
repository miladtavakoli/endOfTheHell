function eoth2() {
    var exitMiladi;
    var startMiladi;
    var nowDate = new Date();
    var exitMiladiDate = new Date();
    var startMiladiDate = new Date();
    let tarkhis = "";
    var htmlRemainDays, htmlRemainWeeks, htmlRemainMonths, htmlRemainHours, htmlRemainMinutes, htmlRemainseconds = "";
    var htmlLeftDays, htmlLeftWeeks, htmlLeftMonths, htmlLeftHours, htmlLeftMinutes, htmlLeftseconds = "";

    var resultCss = document.getElementById('result').classList;
    var resultCss_object = document.getElementById('result')
    var resultErrorCss_object = document.getElementById('result_error')

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
        // console.log(" روز ", descDay, " ماه ", descMonth, " سال  ", descYear);
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
    }

    exitYear = exitYear - descYear + 1;

    tarkhis = +exitDay + " \\\ " + exitMonth + " \\\ " + exitYear;


    exitMiladi = jalali_to_gregorian(exitYear, exitMonth, exitDay);
    exitMiladiDate.setDate(exitMiladi[2]);
    exitMiladiDate.setMonth(exitMiladi[1] - 1);
    exitMiladiDate.setYear(exitMiladi[0]);
    exitMiladiDate.setHours(0, 0, 0);



    var remainDays = date_diff_indays(nowDate, exitMiladiDate);
    if (remainDays >= 0) {
        var remainWeeks = date_diff_inWeeks(nowDate, exitMiladiDate);
        var remainMonths = date_diff_inMonths(nowDate, exitMiladiDate);
        var remainHours = date_diff_inHours(nowDate, exitMiladiDate);
        var remainMinutes = date_diff_inMinutes(nowDate, exitMiladiDate);
        var remainseconds = date_diff_inseconds(nowDate, exitMiladiDate);

    }


    var leftDays = date_diff_indays(startMiladiDate, nowDate);
    if (leftDays >= 0) {

        var leftWeeks = date_diff_inWeeks(startMiladiDate, nowDate);
        var leftMonths = date_diff_inMonths(startMiladiDate, nowDate);
        var leftHours = date_diff_inHours(startMiladiDate, nowDate);
        var leftMinutes = date_diff_inMinutes(startMiladiDate, nowDate);
        var leftseconds = date_diff_inseconds(startMiladiDate, nowDate);
    }

    // make table result var


    //print Result in result div
    if (leftDays >= 0 && remainDays >= 0) {
        //add css to Done Id
        resultCss_object.style.display = "block";
        resultErrorCss_object.style.display = "none";

        document.getElementById("tarkhis_date").innerHTML = tarkhis;
        document.getElementById("left_days").innerHTML = leftDays;
        document.getElementById("left_weeks").innerHTML = leftWeeks;
        document.getElementById("left_months").innerHTML = leftMonths;
        document.getElementById("left_hours").innerHTML = leftHours;
        document.getElementById("left_minutes").innerHTML = leftMinutes;
        document.getElementById("left_seconds").innerHTML = leftseconds;

        document.getElementById("remain_days").innerHTML = remainDays;
        document.getElementById("remain_weeks").innerHTML = remainWeeks;
        document.getElementById("remain_months").innerHTML = remainMonths;
        document.getElementById("remain_hours").innerHTML = remainHours;
        document.getElementById("remain_minutes").innerHTML = remainMinutes;
        document.getElementById("remain_seconds").innerHTML = remainseconds;


    } else {
        resultCss_object.style.display = "none";
        resultErrorCss_object.style.display = "block";
        // document.getElementById("result_error)").innerHTML =


    }

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
