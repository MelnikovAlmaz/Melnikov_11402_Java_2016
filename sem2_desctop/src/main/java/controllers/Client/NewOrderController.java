package controllers.Client;

import entity.Book;
import entity.City;
import entity.Passenger;
import environment.GameEnvironment;
import javafx.fxml.FXML;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.TextField;
import models.CityModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import web.ServerApi;

@Component
public class NewOrderController extends ClientMenuController {
    @Autowired
    private GameEnvironment gameEnvironment;
    @Autowired
    private ServerApi serverApi;
    @Autowired
    private CityModel cityModel;

    @FXML
    TextField name_fld;
    @FXML
    ChoiceBox city_fld;
    @FXML
    TextField from_street_fld;
    @FXML
    TextField from_house_fld;
    @FXML
    TextField from_flat_fld;
    @FXML
    TextField from_place_fld;
    @FXML
    TextField to_street_fld;
    @FXML
    TextField to_house_fld;
    @FXML
    TextField phone_fld;

    @FXML
    public void initialize(){
        Passenger passenger = gameEnvironment.getPassenger();
        from_street_fld.setText(passenger.getStreet());
        from_house_fld.setText(passenger.getHouse());
        phone_fld.setText(passenger.getPhone());
        city_fld.setItems(cityModel.getCityNames());
        city_fld.setValue(passenger.getCity().getName());
    }
    @FXML
    public void sendNewOrder(){
        Book book = new Book();
        book.setName(name_fld.getText());
        City city = new City();
        city.setName((String) city_fld.getValue());
        city.setId(city_fld.getItems().indexOf(city_fld.getValue())+1);
        book.setCity(city);
        book.setFromstreet(from_street_fld.getText());
        book.setFromhouse(from_house_fld.getText());
        book.setTostreet(to_street_fld.getText());
        book.setTohouse(to_house_fld.getText());
        book.setPhone(phone_fld.getText());
        book.setFromblock(Integer.parseInt(from_flat_fld.getText()));
        book.setFromplace(from_place_fld.getText());
        book.setPassenger(gameEnvironment.getPassenger());
        book.setCost(0);
        book.setState(0);

        serverApi.createBook(book);
    }
}
