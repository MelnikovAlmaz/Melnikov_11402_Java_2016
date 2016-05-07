<#assign sf=JspTaglibs["http://www.springframework.org/tags/form"]>
<#assign sec=JspTaglibs["http://www.springframework.org/security/tags"]>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Такси Алмаз</title>
    <link href="/css/main.css" rel="stylesheet">
    <link href="/css/second.css" rel="stylesheet">
</head>
<body class="b-index-page fixed-buttons lang-ru">
<div class="b-container">
<#include "sidebar.ftl">

    <div class="b-main">
    <#include "city_choose.ftl">
        <div class="form-group" style="width: 300px; margin-left: 10px">
        <@sf.form modelAttribute="bookMainForm" class="well form-horizontal" action="/" method="post">
            <div class="control-group">
                <h6>Логин</h6>
                <div class="controls">
                    <@sf.input path="username" class="form-control" type="text"/>
                </div>
            </div>
            <div class="password-fields">
                <div class="control-group">
                    <h6>Пароль</h6>
                    <div class="controls">
                        <@sf.input path="password" class="form-control" type="password"/>
                    </div>
                </div>
            </div>
            <br>
            <h4>Основная информация</h4>
            <div id="templateName">
                <div class="control-group">
                    <h6>Название</h6>
                    <div class="controls">
                        <@sf.input path="name"class="form-control" type="text"/>
                    </div>
                </div>
            </div>
            <div class="control-group" style="z-index:1000; position: relative;">
                <h6>Номер телефона</h6>
                <div class="controls">
                        <@sf.input path="phone" class="form-control" style="width: 173px;" type="tel"/>
                </div>
            </div>
            <div class="control-group ">
                <h6>Город</h6>
                <div class="controls">
                    <@sf.select path="city" size="1" class="form-control">
                        <#list cities as city>
                            <option
                                <#if currentCity == city.name>selected</#if>
                                value="${city.id}">${city.name}</option>
                        </#list>
                    </@sf.select>
                </div>
            </div>
            <br>
            <h4>Откуда</h4>
            <div class="control-group ">
                <h6>Объект/Улица</h6>
                <div class="controls">
                    <@sf.input path="fromstreet" class="form-control" type="text"/>
                </div>
            </div>
            <div class="control-group ">
                <h6>Дом</h6>
                <div class="controls">
                    <@sf.input path="fromhouse" class="form-control" type="text"/>
                </div>
            </div>
            <div class="control-group ">
                <h6>Подъезд</h6>
                <div class="controls">
                    <@sf.input path="fromblock" class="form-control" type="text"/>
                </div>
            </div>
            <div class="control-group ">
                <h6>Где встречать</h6>
                <div class="controls">
                    <@sf.input path="fromplace" class="form-control" type="text" />
                </div>
            </div>
            <br>
            <div id="mainPoint">
                <div class="pointNode">
                    <div class="control-group title">
                        <h4><span>Куда</span></h4>
                    </div>
                    <div class="control-group ">
                        <h6>Объект/Улица</h6>
                        <div class="controls">
                            <@sf.input path="tostreet" class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="control-group ">
                        <h6>Дом</h6>
                        <div class="controls">
                            <@sf.input path="tohouse" class="form-control" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <!--input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/-->
            <div class="form-actions">
                <input class="btn btn-success" type="submit" value="Отправить заказ">
            </div>
        </@sf.form>
        </div>
    </div>
</div>
<script src="/js/main.js"></script>
</body>
</html>
