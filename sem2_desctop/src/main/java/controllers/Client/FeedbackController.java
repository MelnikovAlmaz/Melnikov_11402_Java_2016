package controllers.Client;

import entity.City;
import entity.Feedback;
import entity.Passenger;
import environment.GameEnvironment;
import javafx.fxml.FXML;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import models.CityModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import web.ServerApi;

import java.sql.Date;
import java.time.LocalDate;

@Component
public class FeedbackController extends ClientMenuController{
    @Autowired
    GameEnvironment gameEnvironment;
    @Autowired
    ServerApi serverApi;
    @Autowired
    CityModel cityModel;

    @FXML
    ChoiceBox city_fld;
    @FXML
    TextArea what_happend_ta;
    @FXML
    DatePicker date_dp;
    @FXML
    TextField phone_fld;
    @FXML
    TextArea addition_ta;

    @FXML
    public void initialize(){
        Passenger passenger = gameEnvironment.getPassenger();
        city_fld.setItems(cityModel.getCityNames());
        city_fld.setValue(passenger.getCity().getName());
        date_dp.setValue(LocalDate.now());
        phone_fld.setText(passenger.getPhone());
    }

    @FXML
    public void sendFeedBack(){
        Feedback feedback = new Feedback();
        City city = new City();
        city.setName((String) city_fld.getValue());
        city.setId(city_fld.getItems().indexOf(city_fld.getValue())+1);
        feedback.setCity(city);
        feedback.setPhone(phone_fld.getText());
        feedback.setAdditional(addition_ta.getText());
        feedback.setSubject(what_happend_ta.getText());
        feedback.setDate(Date.valueOf(date_dp.getValue()));

        serverApi.createFeedBack(feedback);
    }
}
