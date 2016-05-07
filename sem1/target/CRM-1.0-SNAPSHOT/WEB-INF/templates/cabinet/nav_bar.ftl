<#assign security=JspTaglibs["http://www.springframework.org/security/tags"] />
<div class="page-loading page-top navbar  navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container-fluid">
            <div class="nav-collapse">
                <a href="/"><img src="/img/logo-black.png" class="nav navbar-nav navbar-left"> </a>
                <ul class="nav navbar-nav navbar-right">
                    <#if user??>
                        <li><a href="/logout">Выход (${user.name})</a></li>
                    <#else >
                        <li><a href="/login">Вход</a></li>
                        <li><a href="/register">Регистрация</a></li>
                    </#if>
                </ul>
            </div>
        </div>
    </div>
</div>