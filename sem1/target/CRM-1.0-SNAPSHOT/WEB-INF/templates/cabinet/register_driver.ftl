<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <#include "links.ftl" >
    <title>Кабинет для клиентов - Регистрация</title>
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
                        <h4>Регистрация в личный кабинет для клиентов службы заказа такси «Алмаз»</h4>
                        <#if error??>
                            <div class="error">${error}</div>
                        </#if>
                        <div class="row-fluid">
                            <div class="span6">
                            <#include "../form/register_driver_form.ftl">
                            </div>
                        </div>
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

