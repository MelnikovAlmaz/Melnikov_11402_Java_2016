<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="/js/jquery-latest.js"></script>
    <script type="text/javascript" src="/js/jquery.tablesorter.js"></script>
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
                    <li class="active"><a href="/client/cabinet/orders"> Заказы</a></li>
                    <li><a href="/client/cabinet/templates"> Шаблоны</a></li>
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
                        <h2>Заказы</h2>
                        <input class="form-control" style="width: 200px" id="bookName" type="text" placeholder="Поиск по названию" oninput="findBooks()">
                        <div class="row-fluid">
                            <div class="span9">
                                <table id="bookTable" cellspacing="1" class="table table-striped tablesorter">
                                    <thead>
                                        <tr>
                                            <th>Название</th>
                                            <th>Город</th>
                                            <th>Откуда</th>
                                            <th>Куда</th>
                                            <th>Стоимость</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody">
                                        <#list books as book>
                                        <tr>
                                            <td>${book.name}</td>
                                            <td>${book.city.name}</td>
                                            <td>${book.fromstreet} ${book.fromhouse}</td>
                                            <td>${book.tostreet} ${book.tohouse}</td>
                                            <td>${book.cost}</td>
                                            <td><a href="/client/cabinet/orders/totemplate/${book.id}"><button class="btn btn-success">Создать шаблон</button></a></td>
                                        </tr>
                                        </#list>
                                    </tbody>
                                </table>
                            </div>
                            <div class="span3 text-right">
                                <a class="btn btn-success" href="/client/cabinet/export">Выгрузить реестр поездок</a>
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
<script src="/js/cabinet/bookSort.js"></script>
</body>
</html>
