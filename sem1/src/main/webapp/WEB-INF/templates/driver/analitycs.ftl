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
                <div class="span11">
                    <div id="content">
                        <ul id="yw9" class="nav nav-pills">
                            <li><a href="/driver/cabinet/statistic" data-toggle="tab">Все Заказы</a></li>
                            <li class="active"><a href="/driver/cabinet/statistic/analitycs"
                                                  data-toggle="tab">Аналитика</a></li>
                        </ul>
                        <h2>Аналитика</h2>
                        <div id="currentDataset" class="grid-view"></div>
                        <div class="row-fluid">
                            <div class="span8">
                                <div class="row-fluid panel panel-default">
                                    <div class="panel-heading">Месяц</div>
                                    <div class="panel-body">
                                        <div class="span5">
                                            <input type="month" name="monthAnalytic" id="monthAnalytic" style="height: 30px;">
                                        </div>
                                        <div class="span4">
                                            <button class="btn btn-default" id="monthBtn" onclick="renderMonthChart()">Обновить</button>
                                        </div>
                                        <div>
                                            <canvas id="monthChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-fluid panel panel-default" style="margin-top: 20px">
                                    <div class="panel-heading">Год</div>
                                    <div class="panel-body">
                                        <div class="span5">
                                            <input type="number" min="2000" name="yearAnalytic" id="yearAnalytic" style="height: 30px;">
                                        </div>
                                        <div class="span4">
                                            <button class="btn btn-default" id="yearBtn" onclick="renderYearChart()">Обновить</button>
                                        </div>
                                        <div>
                                            <canvas id="yearChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="span4">
                                <ul class="list-group">
                                    <li class="list-group-item">Весь доход: <span
                                            class="badge">${basicDataSet.costSum}</span></li>
                                    <li class="list-group-item">Всего заказов: <span
                                            class="badge">${basicDataSet.bookCount}</span></li>
                                    <li class="list-group-item">Средняя стоимость заказа: <span
                                            class="badge">${basicDataSet.costAvr}</span></li>
                                    <li class="list-group-item">Минимальный заказ: <span
                                            class="badge">${basicDataSet.minCost}</span></li>
                                    <li class="list-group-item">Максимальный заказ: <span
                                            class="badge">${basicDataSet.maxCost}</span></li>
                                </ul>
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
<script src="/js/jquery-2.2.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.0.1/Chart.min.js"></script>
<script src="/js/analytic/analyticCharts.js"></script>
<script src="/js/analytic/analyticMain.js"></script>
</body>
</html>
