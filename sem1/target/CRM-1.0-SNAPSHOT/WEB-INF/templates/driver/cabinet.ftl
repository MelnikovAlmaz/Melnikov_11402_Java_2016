<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
<#include "../cabinet/links.ftl">
    <title>${user.name}</title>
</head>
<body>

<#include "../cabinet/nav_bar.ftl">

<div class="container-fluid main-container">
    <div id="system-message"></div>
    <div class="row-fluid">
        <div class="span3">
            <div class="sidebar-nav">
                <ul id="yw10" class="nav nav-pills nav-stacked">
                    <li class="active"><a href="/driver/cabinet">Текущий заказ</a></li>
                    <li><a href="/driver/cabinet/orders"> Свободные Заказы</a></li>
                    <li><a href="/driver/cabinet/statistic"> Статистика</a></li>
                    <li><a href="/driver/cabinet/profile"> Профиль</a></li>
                    <li><a href="/driver/cabinet/feedback"> Обратная связь</a></li>
                </ul>
            </div>
        </div>
        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="content">
                        <h2 id="newOrderTitle">Текущий заказ</h2>
                        <div id="neworder">
                            <div class="neworder-tab tabs-above" id="neworder-tab">
                                <div class="tab-content">
                                    <div id="neworder-tab_tab_1" class="tab-pane fade active in">
                                    <#if book??>
                                        <form class="well form-horizontal" id="horizontalForm" action="/driver/cabinet"
                                              method="post">
                                            <h4>Основная информация</h4>
                                            <div id="templateName">
                                                <div class="control-group ">
                                                    <label class="control-label" for="name">Название</label>
                                                    <div class="controls">
                                                        <input disabled name="name" id="name" value="${book.name}"
                                                               type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='control-group' style='z-index:1000; position: relative;'>
                                                <label class="control-label" for="phone">Номер телефона
                                                    пассажира</label>
                                                <div class='controls'>
                                                    <div class='input disabled-append btn-group'>
                                                        <input disabled data-provide="typeahead" style="width: 173px;"
                                                               type="text" name="phone" id="phone"
                                                               value="${book.passenger.phone}"/>
                                                    </div>
                                                    <br/>
                                                </div>
                                            </div>
                                            <div class="control-group ">
                                                <label class="control-label" for="">Город</label>
                                                <div class="controls">
                                                    <input disabled data-provide="typeahead" style="width: 173px;"
                                                           type="text" name="city"
                                                           value="${book.city.name}"/>
                                                </div>
                                            </div>
                                            <h4>Откуда</h4>
                                            <div class="control-group ">
                                                <label class="control-label">Объект/Улица</label>
                                                <div class="controls">
                                                    <input disabled name="fromStreet" type="text"
                                                           value="${book.fromstreet}"/>
                                                </div>
                                            </div>
                                            <div class="control-group ">
                                                <label class="control-label" for="">Дом</label>
                                                <div class="controls">
                                                    <input disabled id="fromHouse" name="fromHouse" maxlength="15"
                                                           type="text"
                                                           value="${book.fromhouse}"/>
                                                </div>
                                            </div>
                                            <div class="control-group ">
                                                <label class="control-label" for="">Подъезд</label>
                                                <div class="controls">
                                                    <input disabled id="fromBlock" value="${book.fromblock}"
                                                           name="fromBlock" type="text"/>
                                                </div>
                                            </div>
                                            <div class="control-group ">
                                                <label class="control-label" for="">Где встречать</label>
                                                <div class="controls">
                                                    <input disabled id="fromPlace" value="${book.fromplace}"
                                                           name="fromPlace" type="text"/>
                                                </div>
                                            </div>
                                            <div id="mainPoint">
                                                <div class="pointNode">
                                                    <div class="control-group title">
                                                        <h4><span>Куда</span></h4>
                                                    </div>
                                                    <div class="control-group ">
                                                        <label class="control-label" for="">Объект/Улица</label>
                                                        <div class="controls">
                                                            <input disabled name="toStreet" value="${book.tostreet}"
                                                                   class="toStreet" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div class="control-group ">
                                                        <label class="control-label" for="">Дом</label>
                                                        <div class="controls">
                                                            <input disabled name="toHouse" class="toHouse"
                                                                   value="${book.tohouse}" maxlength="15" id=""
                                                                   type="text"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="control-group ">
                                                <label class="control-label" for="">Состояние заказа</label>
                                                <div class="controls">
                                                    <select size="1" name="state">
                                                        <option
                                                            <#if book.state == 1>selected</#if>
                                                            value="1">Активен
                                                        </option>
                                                        <option
                                                            <#if book.state == 2>selected</#if>
                                                            value="2">Завершен
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="control-group ">
                                                <label class="control-label" for="">Стоимость</label>
                                                <div class="controls">
                                                    <input name="cost" type="text" value="${book.cost}"/>
                                                </div>
                                            </div>
                                            <div id="form-message"></div>
                                            <div class="form-actions">
                                                <input class="btn btn-success" type="submit" value="Отправить заказ">
                                            </div>
                                            <input type="hidden" name="id" value="${book.id}"/>
                                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                                        </form>
                                    <#else>
                                        <h4>Активных заказов нет.</h4>
                                    </#if>
                                    </div>
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
</div>
</body>
</html>
