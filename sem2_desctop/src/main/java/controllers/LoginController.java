package controllers;

import entity.Driver;
import entity.Passenger;
import environment.GameEnvironment;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import web.ServerApi;

@Configurable
public class LoginController{
    @Autowired
    private GameEnvironment gameEnvironment;
    @Autowired
    private ServerApi serverApi;

    @FXML
    Label error_fld;
    @FXML
    RadioButton passenger_rbtn;
    @FXML
    RadioButton driver_rbtn;
    @FXML
    TextField username_fld;
    @FXML
    TextField password_fld;

    public void setPassengerRbtnOn(){
        driver_rbtn.setSelected(false);
    }
    public void setDriverRbtnOn(){
        passenger_rbtn.setSelected(false);
    }
    public void authorization(){
        if (passenger_rbtn.isSelected()){
            Passenger passenger = serverApi.authorizePassenger(username_fld.getText(), password_fld.getText());
            if(passenger == null){
                error_fld.setText("Enter correct username or password");
                return;
            }
            gameEnvironment.setPassenger(passenger);
            gameEnvironment.openPage("client/new_order");
        }
        else if(driver_rbtn.isSelected()){
            Driver driver = serverApi.authorizeDriver(username_fld.getText(), password_fld.getText());
        }
    }
}
