package environment;

import entity.Driver;
import entity.Passenger;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import org.springframework.beans.factory.annotation.Autowired;

public class GameEnvironment {
    @Autowired
    SpringFXMLLoader loader;

    private Scene scene;
    private Passenger passenger;
    private Driver driver;
    private String pageRoot = "templates/";

    public GameEnvironment() {
        scene = new Scene(new Pane());
    }

    public void openPage(String pageName){
        Parent root = loader.load(getClass().getResource(pageRoot + pageName + ".fxml"));
        scene.setRoot(root);
    }

    public Scene getScene() {
        return scene;
    }

    public void setScene(Scene scene) {
        this.scene = scene;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }
}
