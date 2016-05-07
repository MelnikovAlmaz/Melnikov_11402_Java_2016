$(document).ready(function() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDay() + 1;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#date").attr("value", today);

});