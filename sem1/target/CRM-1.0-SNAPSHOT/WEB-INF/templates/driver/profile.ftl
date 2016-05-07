<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
<#include "../cabinet/links.ftl">
    <title>Профиль - ${user.name}</title>
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
                    <li><a href="/driver/cabinet/orders"> Свободные Заказы</a></li>
                    <li><a href="/driver/cabinet/statistic"> Статистика</a></li>
                    <li class="active"><a href="/driver/cabinet/profile"> Профиль</a></li>
                    <li><a href="/driver/cabinet/feedback"> Обратная связь</a></li>
                </ul>
            </div>
        </div>

        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="yw3"></div>
                    <div id="content">
                        <div id="profile" class="editMode ">
                            <h2>Профиль</h2>
                            <form class="well form-horizontal" id="horizontalForm"
                                  action="/driver/cabinet/profile" method="post">
                                <div class="control-group ">
                                    <label class="control-label" for="">ФИО</label>
                                    <div class="controls">
                                        <input name="name" id="name" class="input-xlarge" value="${user.name}"
                                               type="text"/>
                                    </div>
                                </div>
                                <input type="hidden" value="" name="city" id="city"/>
                                <div class="control-group ">
                                    <label class="control-label" for="">Город</label>
                                    <div class="controls">
                                        <select size="1" name="city">
                                        <#list cities as city>
                                            <option
                                                    <#if user.city.id == city.id>selected</#if>
                                                    value="${city.id}">${city.name}
                                            </option>
                                        </#list>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group ">
                                    <label class="control-label" for="">Улица</label>
                                    <div class="controls">
                                        <input id="street" name="street" value="${user.street}" class="input-xlarge"
                                               type="text"/>
                                    </div>
                                </div>
                                <div class="control-group ">
                                    <label class="control-label" for="">Дом</label>
                                    <div class="controls">
                                        <input id="house" name="house" class="input-small" value="${user.house}"
                                               type="text"/>
                                    </div>
                                </div>
                                <div class="control-group ">
                                    <label class="control-label" for="">Квартира</label>
                                    <div class="controls">
                                        <input id="flat" name="flat" class="input-small" value="${user.flat}"
                                               type="text"/>
                                    </div>
                                </div>
                                <div class="control-group ">
                                    <label class="control-label" for="">Пол</label>
                                    <div class="controls">
                                        <select size="1" name="sex">
                                            <option <#if user.sex.ordinal() == 1>selected</#if> value="1">Мужской
                                            </option>
                                            <option <#if user.sex.ordinal() == 0>selected</#if> value="0">Женский
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="control-group phone status-1">
                                    <label class="control-label">Номер телефона</label>
                                    <div class="controls">
                                        <span class="uneditable-input input-medium">${user.phone}</span>
                                    </div>
                                </div>
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                                <input class="btn btn-success" type="submit" value="Сохранить профиль">
                            </form>
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
