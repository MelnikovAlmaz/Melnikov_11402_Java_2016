package controllers.Driver;

import entity.Book;
import environment.GameEnvironment;
import javafx.collections.FXCollections;
import javafx.fxml.FXML;
import javafx.scene.control.ChoiceBox;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;
import models.CityModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import web.ServerApi;

@Component
public class CurrentOrderController extends DriverMenuController {
    @Autowired
    private GameEnvironment gameEnvironment;
    @Autowired
    private ServerApi serverApi;
    @Autowired
    private CityModel cityModel;

    private Book book;

    @FXML
    VBox content_bx;
    @FXML
    TextField name_fld;
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
    TextField cost_fld;
    @FXML
    ChoiceBox<String> state_fld;

    @FXML
    public void initialize(){
        Book book = serverApi.currentBook(gameEnvironment.getDriver());
        if(book == null) {
            content_bx.setDisable(true);
            return;
        }
        name_fld.setText(book.getName());
        from_street_fld.setText(book.getFromstreet());
        from_house_fld.setText(book.getFromhouse());
        from_flat_fld.setText(String.valueOf(book.getFromblock()));
        from_place_fld.setText(book.getFromplace());
        to_street_fld.setText(book.getTostreet());
        to_house_fld.setText(book.getTohouse());
        phone_fld.setText(book.getPhone());
        cost_fld.setText(String.valueOf(book.getCost()));
        String[] states = {"Active", "Finished"};
        state_fld.setItems(FXCollections.observableArrayList(states));
        state_fld.setValue(state_fld.getItems().get(book.getState()));
        this.book = book;
    }
    @FXML
    public void sendCurrentOrder(){
        book.setCost(Integer.parseInt(cost_fld.getText()));
        book.setState(state_fld.getItems().indexOf(state_fld.getValue()) + 1);

        serverApi.updateCurrentBook(book);
    }
}
