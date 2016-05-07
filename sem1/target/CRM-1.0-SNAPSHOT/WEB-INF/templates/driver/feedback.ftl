<#assign sf=JspTaglibs["http://www.springframework.org/tags/form"]>
<#assign sec=JspTaglibs["http://www.springframework.org/security/tags"]>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <#include "../cabinet/links.ftl" >
    <title>Отзыв - ${user.name}</title>
</head>
<body>

<#include "../cabinet/nav_bar.ftl" >

<div class="container-fluid main-container">
    <div id="system-message"></div>
    <div class="row-fluid">
        <div class="span3">
            <div class="sidebar-nav">
                <ul id="yw10" class="nav nav-pills nav-stacked">
                    <li><a href="/driver/cabinet">Текущий заказ</a></li>
                    <li><a href="/driver/cabinet/orders"> Свободные Заказы</a></li>
                    <li><a href="/driver/cabinet/statistic"> Статистика</a></li>
                    <li><a href="/driver/cabinet/profile"> Профиль</a></li>
                    <li class="active"><a href="/driver/cabinet/feedback"> Обратная связь</a></li>
                </ul>
            </div>
        </div>
        <div class="span9">
            <div class="row-fluid">
                <div class="span12">
                    <div id="yw2"></div>
                    <div id="content">
                        <h2>Обратная связь</h2>
                        <@sf.form class="well form-horizontal" id="feedbackForm" action="/driver/cabinet/feedback" modelAttribute="feedBackForm" method="post">
                            <h4>Город</h4>
                            <div class="control-group ">
                                <div class="controls">
                                    <@sf.select path="city" size="1" name="city">
                                        <#list cities as city>
                                            <option
                                                    <#if user.city.id == city.id>selected</#if> value="${city.id}">${city.name}
                                            </option>
                                        </#list>
                                    </@sf.select>
                                    <@sf.errors path="city" class = "form-control alert alert-warning text-center"/>
                                </div>
                            </div>
                            <h4>Что случилось</h4>
                            <div class="control-group">
                                <div class="control-label">
                                    <label for="subject">Что, где</label></div>
                                <div class="controls">
                                    <@sf.textarea path="subject" maxlength="500" name="subject" id="subject" style="width: 200px; height: 100px;"></@sf.textarea>
                                    <@sf.errors path="subject" class = "form-control alert alert-warning text-center"/>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="control-label">
                                    <label for="date">Дата</label></div>
                                <div class="controls">
                                    <@sf.input path="date" name="date" id="date" type="date"/>
                                    <@sf.errors path="date" class = "form-control alert alert-warning text-center"/>
                                </div>
                            </div>
                            <h4>Контактные данные</h4>
                            <div class='control-group'>
                                <div class='control-label'>
                                    <div class='control-label'>
                                        <label>Телефон</label>
                                    </div>
                                </div>
                                <div class='controls'>
                                    <div class='input-append btn-group'>
                                        <@sf.input path="phone" style="width: 173px;" type="tel" value="${user.phone}" name="phone" id="phone"/>
                                        <@sf.errors path="phone" class = "form-control alert alert-warning text-center"/>
                                    </div>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="control-label">
                                    <label for="additional">Дополнительно</label>
                                </div>
                                <div class="controls">
                                    <@sf.textarea path="additional" name="additional" id="additional" maxlength="500" style="width: 200px; height: 100px;"></@sf.textarea>
                                    <@sf.errors path="additional" class = "form-control alert alert-warning text-center"/>
                                </div>
                            </div>
                            <div class="control-group">
                                <button class="btn btn-success" type="submit">Отправить</button>
                            </div>
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                        </@sf.form>
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
<script src="/js/cabinet/feedback.js"></script>
</body>
</html>

