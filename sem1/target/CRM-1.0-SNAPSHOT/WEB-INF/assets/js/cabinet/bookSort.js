
function findBooks() {
    $.ajax({
        url: "/client/cabinet/orders/find",
        data: {"name": $("#bookName").val()},
        dataType: "json",
        success: function (resp) {
            if (resp.length > 0) {
                $("#tbody").text("");
                for (var i = 0; i < resp.length; i++) {
                    $("#tbody").append("<tr>");
                    $("#tbody").append("<td>" + resp[i].name + "</td>");
                    $("#tbody").append("<td>" + resp[i].city.name + "</td>");
                    $("#tbody").append("<td>" + resp[i].fromstreet + " " + resp[i].fromhouse + "</td>");
                    $("#tbody").append("<td>" + resp[i].tostreet + " " + resp[i].tohouse + "</td>");
                    $("#tbody").append("<td>" + resp[i].cost + "</td>");
                    $("#tbody").append("<td><a href=\"/client/cabinet/orders/totemplate/" + resp[i].id + "\"><button class=\"btn btn-success\">Создать шаблон</button></a></td>");
                }
            } else {
                $("#tbody").text("No results.");
            }
        }
    })
}