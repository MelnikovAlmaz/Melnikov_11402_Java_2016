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
                    <li><a href="/driver/cabinet">Текущий заказ</a></li>
                    <li class="active"><a href="/driver/cabinet/orders"> Свободные Заказы</a></li>
                    <li><a href="/driver/cabinet/statistic"> Статистика</a></li>
                    <li><a href="/driver/cabinet/profile"> Профиль</a></li>
                    <li><a href="/driver/cabinet/feedback"> Обратная связь</a></li>
                </ul>
            </div>
        </div>

        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="yw1"></div>
                    <div id="content">
                        <h2>Свободные заказы</h2>
                        <h4><#if error??>${error}</#if></h4>
                        <div id="currentDataset" class="grid-view"></div>
                        <div class="row-fluid">
                            <div class="span9">
                                <table class="table table-striped">
                                    <tr>
                                        <th>Название</th>
                                        <th>Откуда</th>
                                        <th>Куда</th>
                                        <th style="width: 30px">Забрать</th>
                                    </tr>
                                <#list books as book>
                                    <tr>
                                        <td>${book.name}</td>
                                        <td>${book.fromstreet} ${book.fromhouse}</td>
                                        <td>${book.tostreet} ${book.tohouse}</td>
                                        <td><a href="/driver/cabinet/orders/${book.id}">
                                            <button class="btn btn-success">Забрать</button>
                                        </a></td>
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
