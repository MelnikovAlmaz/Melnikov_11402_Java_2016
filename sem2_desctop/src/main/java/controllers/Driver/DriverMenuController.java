package controllers.Driver;

import environment.GameEnvironment;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DriverMenuController {
    @Autowired
    private GameEnvironment gameEnvironment;

    @FXML
    protected Button current_order_btn;
    @FXML
    protected Button order_list_btn;
    @FXML
    protected Button profile_btn;
    @FXML
    protected Button feedback_btn;

    public void newOrderPage(){
        gameEnvironment.openPage("driver/current_order");
    }
    public void orderListPage(){
        gameEnvironment.openPage("driver/order_list");
    }
    public void profilePage(){
        gameEnvironment.openPage("driver/profile");
    }
    public void feedbackPage(){
        gameEnvironment.openPage("driver/feedback");
    }
}
