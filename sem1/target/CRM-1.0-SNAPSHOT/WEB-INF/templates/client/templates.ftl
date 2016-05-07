<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
<#include "../cabinet/links.ftl">
    <title>Заказы - ${user.name}</title>
</head>
<body>

<#include "../cabinet/nav_bar.ftl">

<div class="container-fluid main-container">
    <div id="system-message"></div>
    <div class="row-fluid">
        <div class="span3">
            <div class="sidebar-nav">
                <ul id="yw10" class="nav nav-pills nav-stacked">
                    <li><a href="/client/cabinet">Новый заказ</a></li>
                    <li><a href="/client/cabinet/orders"> Заказы</a></li>
                    <li class="active"><a href="/client/cabinet/templates"> Шаблоны</a></li>
                    <li><a href="/client/cabinet/profile"> Профиль</a></li>
                    <li><a href="/client/cabinet/feedback"> Обратная связь</a></li>
                </ul>
            </div>
        </div>

        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="yw1"></div>
                    <div id="content">
                        <h2>Шаблоны</h2>
                        <div id="currentDataset" class="grid-view"></div>
                        <div class="row-fluid">
                            <div class="span9">
                                <table class="table table-striped">
                                    <tr>
                                        <th>Название</th>
                                        <th>Город</th>
                                        <th>Откуда</th>
                                        <th>Куда</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                <#list templates as template>
                                    <tr>
                                        <td>${template.name}</td>
                                        <td>${template.city.name}</td>
                                        <td>${template.fromstreet} ${template.fromhouse}</td>
                                        <td>${template.tostreet} ${template.tohouse}</td>
                                        <td><a href="/client/cabinet/templates/tobook/${template.id}"><button class="btn btn-success">Заказать</button></a></td>
                                        <td><a href="/client/cabinet/templates/delete/${template.id}"><button class="btn btn-danger">Удалить</button></a></td>
                                    </tr>
                                </#list>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <footer>
        <p>&copy;2003 - 2016 Служба заказа такси «Алмаз»</p>
    </footer>
</div>
</body>
</html>
