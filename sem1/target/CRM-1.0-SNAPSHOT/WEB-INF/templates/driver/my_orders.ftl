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
                <div class="sidebar-nav">
                    <ul id="yw10" class="nav nav-pills nav-stacked">
                        <li><a href="/driver/cabinet">Текущий заказ</a></li>
                        <li><a href="/driver/cabinet/orders"> Свободные Заказы</a></li>
                        <li class="active"><a href="/driver/cabinet/statistic"> Статистика</a></li>
                        <li><a href="/driver/cabinet/profile"> Профиль</a></li>
                        <li><a href="/driver/cabinet/feedback"> Обратная связь</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="yw1"></div>
                    <div id="content">
                        <ul id="yw9" class="nav nav-pills">
                            <li class="active"><a href="/driver/cabinet/statistic" data-toggle="tab">Все Заказы</a></li>
                            <li><a href="/driver/cabinet/statistic/analitycs" data-toggle="tab">Аналитика</a></li>
                        </ul>
                        <h2>Заказы</h2>
                        <div id="currentDataset" class="grid-view"></div>
                        <div class="row-fluid">
                            <div class="span9">
                                <span class="label" style="margin-bottom: 10px">История отображается за последние 3 месяца</span>
                                <table class="table table-striped">
                                    <tr>
                                        <th>Название</th>
                                        <th>Город</th>
                                        <th>Откуда</th>
                                        <th>Куда</th>
                                        <th>Стоимость</th>
                                        <th>Статус</th>
                                    </tr>
                                <#list books as book>
                                    <tr>
                                        <td>${book.name}</td>
                                        <td>${book.city.name}</td>
                                        <td>${book.fromstreet} ${book.fromhouse}</td>
                                        <td>${book.tostreet} ${book.tohouse}</td>
                                        <td>${book.cost}</td>
                                        <td>
                                            <#if book.state == 0>Свободен
                                                <#elseif book.state == 1>Активен
                                                <#elseif book.state == 2>Завершен
                                            </#if>
                                        </td>
                                    </tr>
                                </#list>
                                </table>
                            </div>
                            <div class="span3 text-right">
                                <a class="btn btn-success" href="/driver/cabinet/statistic/export">Выгрузить реестр поездок</a>
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
<script type="text/javascript" src="/js/jscharts.js"></script>
</body>
</html>
