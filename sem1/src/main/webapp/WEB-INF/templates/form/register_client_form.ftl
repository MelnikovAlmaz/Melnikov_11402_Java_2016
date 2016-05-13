<@sf.form modelAttribute="form" class="well newLogin form-vertical" action="/register/client" method="post">
    <div class='newLoginPhone'>
        <label class="required">Логин <span class="required">*</span></label>
        <div class="input-prepend">
            <@sf.input class="span3" style="width: 223px;" path="username" type="text"/>
        </div>
    </div>
    <div class='newLoginPhone'>
        <label class="required">Номер телефона<span class="required">*</span></label>
        <div class="input-prepend">
            <@sf.input class="span3" style="width: 223px;" path="phone" type="tel"/>
        </div>
    </div>
    <div class="clear"></div>
    <div class="control-group ">
        <label class="control-label">Город</label>
        <div class="controls">
            <@sf.select size="1" path="city">
            <#list cities as city>
                <option
                    <#if cityError??>
                        <#if city.id == cityError>
                                selected
                        </#if>
                    </#if> value="${city.id}">${city.name}</option>
            </#list>
            </@sf.select>
        </div>
    </div>
    <div class="password-fields">
        <div class="newLoginPassword">
            <label class="required">Пароль
                <span class="required">*</span>
            </label>
            <@sf.input class="span3" style="margin:0 10px 0 0; width: 200px;" path="password" type="password"/>
        </div>
    </div>
    <div class="password-fields">
        <div class="newLoginPassword">
            <label class="required">Повтор пароля
                <span class="required">*</span>
            </label>
            <@sf.input class="span3" style="margin:0 10px 0 0; width: 200px;"
                   path="confirmPassword"
                   type="password"/>
        </div>
    </div>
    <div class="form-actions">
        <button class="btn-main-style btn btn-primary" type="submit">
            Регистрация
        </button>
    </div>
    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
</@sf.form>