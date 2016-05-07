<div class="b-header">
    <div id="location-drop-down">
        <ul>
            <li>
                <a class="country-list-button js-country-toggle" href="#">Россия</a>
                <ul class="m-list">
                    <li><a href="http://taximaxim.ru/">Россия</a></li>
                </ul>
            </li>
            <li>
                <a class="city-list-button js-modal-open" href="#" data-id="city-choose">${currentCity}</a></li>
        </ul>
    </div>
    <div class="b-modal" data-id="city-choose">
        <div class="m-body m-city-modal-body">
            <button type="button" class="m-close js-modal-close"><i class="fa fa-times"></i></button>
            <div class="m-body-wrapper">
                <div class="b-city-choose">
                    <div class="m-form">
                        <input type="text" class="js-city-autocomplete" placeholder="Введите название города..."
                               data-cities="
                                   <#list cities as city>
                                       ${city.name},
                                   </#list>
                               " data-url="/">
                    </div>
                    <div class="m-list" id="modal-country-list">
                        <ul class="m-col">
                        <#list cities as city>
                            <li><a href="/?city=${city.name}">${city.name}</a></li>
                        </#list>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>