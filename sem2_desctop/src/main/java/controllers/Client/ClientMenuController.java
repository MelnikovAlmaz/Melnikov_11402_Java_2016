package controllers.Client;

import environment.GameEnvironment;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ClientMenuController {
    @Autowired
    private GameEnvironment gameEnvironment;

    @FXML
    protected Button new_order_btn;
    @FXML
    protected Button order_list_btn;
    @FXML
    protected Button profile_btn;
    @FXML
    protected Button feedback_btn;

    public void newOrderPage(){
        gameEnvironment.openPage("client/new_order");
    }
    public void orderListPage(){
        gameEnvironment.openPage("client/order_list");
    }
    public void profilePage(){
        gameEnvironment.openPage("client/profile");
    }
    public void feedbackPage(){
        gameEnvironment.openPage("client/feedback");
    }
}
