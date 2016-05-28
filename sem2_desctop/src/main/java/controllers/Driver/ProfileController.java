package controllers.Driver;

import entity.City;
import entity.Driver;
import entity.enums.Sex;
import environment.GameEnvironment;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.TextField;
import models.CityModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import web.ServerApi;

@Component
public class ProfileController extends DriverMenuController {
    @Autowired
    private GameEnvironment gameEnvironment;
    @Autowired
    private ServerApi serverApi;
    @Autowired
    private CityModel cityModel;

    @FXML
    TextField fio_fld;
    @FXML
    ChoiceBox city_fld;
    @FXML
    TextField street_fld;
    @FXML
    TextField house_fld;
    @FXML
    ChoiceBox sex_fld;
    @FXML
    TextField phone_fld;

    @FXML
    public void initialize(){
        Driver driver = gameEnvironment.getDriver();
        fio_fld.setText(driver.getName());
        street_fld.setText(driver.getStreet());
        house_fld.setText(driver.getHouse());
        phone_fld.setText(driver.getPhone());
        city_fld.setItems(cityModel.getCityNames());
        city_fld.setValue(driver.getCity().getName());
        sex_fld.setItems(getSexList());
        sex_fld.setValue(driver.getSex().name());
    }

    @FXML
    public void updateProfile(){
        Driver driver = gameEnvironment.getDriver();
        driver.setName(fio_fld.getText());
        driver.setStreet(street_fld.getText());
        driver.setHouse(house_fld.getText());
        City city = new City();
        city.setName((String) city_fld.getValue());
        city.setId(city_fld.getItems().indexOf(city_fld.getValue())+1);
        driver.setCity(city);
        driver.setPhone(phone_fld.getText());
        driver.setSex(Sex.valueOf((String) sex_fld.getValue()));

        serverApi.updateDriverProfile(driver);
    }

    private ObservableList getSexList(){
        ObservableList sexList = FXCollections.observableArrayList();
        sexList.add("FEMALE");
        sexList.add("MALE");
        return sexList;
    }
}
