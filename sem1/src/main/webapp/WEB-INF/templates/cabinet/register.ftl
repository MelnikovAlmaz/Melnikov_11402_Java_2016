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
                <div class="span3">
                </div>
                <div class="span6">
                    <div class="row-fluid panel panel-default">
                        <div class="panel-heading" align="center"><span>Регистрация</span></div>
                        <div class="panel-body">
                            <div class="span1"></div>
                            <div class="span5">
                                <a href="/register/client">
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <img src="/img/register/client.jpg">
                                        </div>
                                        <div class="panel-footer" align="center">
                                            <span>Пасажир</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="span5">
                                <a href="/register/driver">
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <img src="/img/register/driver.jpg">
                                        </div>
                                        <div class="panel-footer" align="center">
                                            <span>Водитель</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="span1"></div>
                        </div>
                    </div>
                </div>
                <div class="span3">
                </div>
            </div><!--/span-->
        </div><!--/row-->
        <hr>
        <footer>
            <p id="base-info"></p>
            <p>&copy;2003 - 2016 Служба заказа такси «Алмаз»</p>
        </footer>
    </div>
</div>
</body>
</html>

