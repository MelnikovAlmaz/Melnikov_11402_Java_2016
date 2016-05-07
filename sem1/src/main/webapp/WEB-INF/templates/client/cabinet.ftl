<#assign sf=JspTaglibs["http://www.springframework.org/tags/form"]>
<#assign sec=JspTaglibs["http://www.springframework.org/security/tags"]>
<#assign c =JspTaglibs["http://java.sun.com/jsp/jstl/core"]>
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
                    <li class="active"><a href="/client/cabinet">Новый заказ</a></li>
                    <li><a href="/client/cabinet/orders"> Заказы</a></li>
                    <li><a href="/client/cabinet/templates"> Шаблоны</a></li>
                    <li><a href="/client/cabinet/profile"> Профиль</a></li>
                    <li><a href="/client/cabinet/feedback"> Обратная связь</a></li>
                </ul>
            </div>
        </div>
        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="content">
                        <h2 id="newOrderTitle">Новый заказ</h2>
                        <div id="neworder">
                            <div class="neworder-tab tabs-above" id="neworder-tab">
                                <ul id="yw9" class="nav nav-pills">
                                    <li class="active"><a data-toggle="tab"> По адресу</a></li>
                                    <li><a data-toggle="tab" href="/client/cabinet/templates">По шаблону</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div id="neworder-tab_tab_1" class="tab-pane fade active in">
                                    <@sf.form modelAttribute="bookForm" class="well form-horizontal" id="horizontalForm" action="/client/cabinet"
                                    method="post">
                                        <h4>Основная информация</h4>
                                        <div id="templateName">
                                            <div class="control-group ">
                                                <label class="control-label" for="name">Название</label>
                                                <div class="controls">
                                                    <#if boolTemplate??>
                                                        <@sf.input path="name" name="name" id="name" type="text" value="${bookTemplate.name}"/>
                                                        <#else>
                                                        <@sf.input path="name" name="name" id="name" type="text"/>
                                                    </#if>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='control-group' style='z-index:1000; position: relative;'>
                                            <label class="control-label" for="phone">Номер телефона</label>
                                            <div class='controls'>
                                                <div class='input-append btn-group'>
                                                    <#if bookTemplate??>
                                                    <@sf.input path="phone" style="width: 173px;" type="tel"  value="${bookTemplate.phone}"/>
                                                        <#else>
                                                        <@sf.input path="phone" style="width: 173px;" type="tel" value="${user.phone}"/>
                                                    </#if>
                                                </div>
                                                <br/>
                                            </div>
                                        </div>
                                        <div class="control-group ">
                                            <label class="control-label" for="">Город</label>
                                            <div class="controls">
                                                <@sf.select path="city" size="1" name="city">
                                                    <#list cities as city>
                                                        <option
                                                            <#if user.city.id == city.id>selected</#if>
                                                            value="${city.id}">${city.name}
                                                        </option>
                                                    </#list>
                                                </@sf.select>
                                            </div>
                                        </div>
                                        <h4>Откуда</h4>
                                        <div class="control-group ">
                                            <label class="control-label">Объект/Улица</label>
                                            <div class="controls">
                                                <#if bookTemplate??>
                                                    <@sf.input path="fromstreet"  type="text"  value="${bookTemplate.fromstreet}"/>
                                                        <#else>
                                                    <@sf.input path="fromstreet" type="text"  value="${user.street}"/>
                                                </#if>
                                            </div>
                                        </div>
                                        <div class="control-group ">
                                            <label class="control-label" for="">Дом</label>
                                            <div class="controls">
                                                <#if bookTemplate??>
                                                    <@sf.input path="fromhouse" type="text"  value="${bookTemplate.fromhouse}"/>
                                                        <#else>
                                                    <@sf.input path="fromhouse" type="text"  value="${user.house}"/>
                                                </#if>
                                            </div>
                                        </div>
                                        <div class="control-group ">
                                            <label class="control-label" for="">Подъезд</label>
                                            <div class="controls">
                                                <@sf.input path="fromblock" id="fromBlock" name="fromBlock" type="text"/>
                                            </div>
                                        </div>
                                        <div class="control-group ">
                                            <label class="control-label" for="">Где встречать</label>
                                            <div class="controls">
                                                <#if bookTemplate??>
                                                    <@sf.input path="fromplace" type="text" value="${bookTemplate.fromplace}"/>
                                                        <#else>
                                                    <@sf.input path="fromplace" type="text" />
                                                </#if>
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
                                                        <#if bookTemplate??>
                                                        <@sf.input path="tostreet" type="text"  value="${bookTemplate.tostreet}"/>
                                                        <#else>
                                                            <@sf.input path="tostreet" type="text"/>
                                                        </#if>
                                                    </div>
                                                </div>
                                                <div class="control-group ">
                                                    <label class="control-label" for="">Дом</label>
                                                    <div class="controls">
                                                        <#if bookTemplate??>
                                                        <@sf.input path="tohouse" type="text" value="${bookTemplate.tohouse}"/>
                                                        <#else>
                                                            <@sf.input path="tohouse" type="text"/>
                                                        </#if>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="form-message"></div>
                                        <div class="form-actions">
                                            <input class="btn btn-success" type="submit" value="Отправить заказ">
                                        </div>
                                    </@sf.form>
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
