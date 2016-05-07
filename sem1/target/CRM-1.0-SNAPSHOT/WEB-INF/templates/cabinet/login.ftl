<#assign security=JspTaglibs["http://www.springframework.org/security/tags"] />
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <#include "links.ftl" >
    <title>Кабинет для клиентов - Авторизация</title>
</head>
<body>
<#include "nav_bar.ftl">
<div class="container-fluid main-container">
    <div class="row-fluid">
        <div class="span12">
            <div class="row-fluid">
                <div class="span12">
                    <div id="content">
                        <div class="getPass_message"></div>
                        <h4>Вход в личный кабинет для клиентов службы заказа такси «Алмаз»</h4>
                        <#if error??>
                            <div class="error">${error}</div>
                        </#if>
                        <form class="well newLogin form-vertical" id="inlineForm"
                              action="/j_spring_security_check" method="post">
                            <div class='newLoginPhone'>
                                <label for="username" class="required">Логин <span class="required">*</span></label>
                                <div class="input-prepend">
                                    <input class="span3"
                                           style="width: 223px;"
                                           name="username"
                                           id="username"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="password-fields">
                                <div class="newLoginPassword">
                                    <label for="password" class="required">Пароль <span
                                            class="required">*</span></label><input class="span3"
                                                                                    style="margin:0 10px 0 0;width: 200px;"
                                                                                    name="password"
                                                                                    id="password"
                                                                                    type="password"/></div>
                            </div>
                            <input type="checkbox" name="_spring_security_remember_me">Запомнить меня
                            <div class="form-actions">
                                <button class="btn-main-style btn btn-primary" type="submit" name="yt0">
                                    Войти в кабинет
                                </button>
                            </div>
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                        </form>
                    </div>
                </div>
            </div>
        </div><!--/span-->
    </div><!--/row-->
    <hr>
    <footer>
        <p id="base-info"></p>
        <p>&copy;2003 - 2016 Служба заказа такси «Алмаз»</p>
    </footer>
</div>
</body>
</html>

