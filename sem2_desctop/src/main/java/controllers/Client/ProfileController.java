package controllers.Client;

import entity.City;
import entity.Passenger;
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
public class ProfileController extends ClientMenuController{
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
        Passenger passenger = gameEnvironment.getPassenger();
        fio_fld.setText(passenger.getName());
        street_fld.setText(passenger.getStreet());
        house_fld.setText(passenger.getHouse());
        phone_fld.setText(passenger.getPhone());
        city_fld.setItems(cityModel.getCityNames());
        city_fld.setValue(passenger.getCity().getName());
        sex_fld.setItems(getSexList());
        sex_fld.setValue(passenger.getSex().name());
    }

    @FXML
    public void updateProfile(){
        Passenger passenger = gameEnvironment.getPassenger();
        passenger.setName(fio_fld.getText());
        passenger.setStreet(street_fld.getText());
        passenger.setHouse(house_fld.getText());
        City city = new City();
        city.setName((String) city_fld.getValue());
        city.setId(city_fld.getItems().indexOf(city_fld.getValue())+1);
        passenger.setCity(city);
        passenger.setPhone(phone_fld.getText());
        passenger.setSex(Sex.valueOf((String) sex_fld.getValue()));

        serverApi.updateProfile(passenger);
    }

    private ObservableList getSexList(){
        ObservableList sexList = FXCollections.observableArrayList();
        sexList.add("FEMALE");
        sexList.add("MALE");
        return sexList;
    }
}
