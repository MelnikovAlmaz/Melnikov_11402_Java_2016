<form class="well newLogin form-vertical" id="inlineForm"
      action="/register/driver" method="post">
    <div class='newLoginPhone'>
        <label class="required">Логин <span class="required">*</span></label>
        <div class="input-prepend">
            <input class="span3" style="width: 223px;" name="username" type="text"
            <#if username??> value="${username}"</#if>
            />
        </div>
    </div>
    <div class='newLoginPhone'>
        <label class="required">Номер телефона<span class="required">*</span></label>
        <div class="input-prepend">
            <input class="span3" style="width: 223px;" name="phone" type="tel"
            <#if phone??>
                   value="${phone}"
            </#if>
            />
        </div>
    </div>
    <div class="clear"></div>
    <div class="control-group ">
        <label class="control-label">Город</label>
        <div class="controls">
            <select size="1" name="city">
            <#list cities as city>
                <option
                    <#if cityError??>
                        <#if city.id == cityError>
                                selected
                        </#if>
                    </#if> value="${city.id}">${city.name}</option>
            </#list>
            </select>
        </div>
    </div>
    <div class="row-fluid">
        <div class="span6 panel panel-primary ">
            <div class="panel-heading">Автомобиль</div>
            <div class="panel-body">
                <div class="controls">
                    <label class="control-label">Номер</label>
                    <input class="span3" style="margin:0 10px 0 0; width: 200px;" name="carNumber" type="text"/>
                </div>
                <div class="control-group">
                    <label class="control-label">Модель</label>
                    <input class="span3" style="margin:0 10px 0 0; width: 200px;" name="carModel" type="text"/>
                </div>
                <div class="control-group">
                    <label class="control-label">Регион</label>
                    <input class="span3" style="margin:0 10px 0 0; width: 200px;" name="carRegion" type="number"/>
                </div>
                <div class="control-group">
                    <label class="control-label">Цвет</label>
                    <input class="span3" style="margin:0 10px 0 0; width: 200px;" name="carColor" type="text"/>
                </div>
            </div>
        </div>
    </div>
    <div class="password-fields">
        <div class="newLoginPassword">
            <label class="required">Пароль
                <span class="required">*</span>
            </label>
            <input class="span3" style="margin:0 10px 0 0; width: 200px;" name="password" type="password"/>
        </div>
    </div>
    <div class="password-fields">
        <div class="newLoginPassword">
            <label class="required">Повтор пароля
                <span class="required">*</span>
            </label>
            <input class="span3" style="margin:0 10px 0 0; width: 200px;"
                   name="confirmPassword"
                   type="password"/>
        </div>
    </div>
    <div class="form-actions">
        <button class="btn-main-style btn btn-primary" type="submit" name="yt0">
            Регистрация
        </button>
    </div>
    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
</form>