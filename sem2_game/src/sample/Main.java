package sample;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Circle;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.ArrayList;

// Collect the Money Bags!
public class Main extends Application
{
    public static void main(String[] args)
    {
        launch(args);
    }

    @Override
    public void start(Stage theStage) throws IOException {
        theStage.setTitle("Be free!");

        Pane root = FXMLLoader.load(getClass().getResource("game.fxml"));
        Scene theScene = new Scene(root);
        theStage.setScene(theScene);

        ArrayList<Node> walls = new ArrayList<>();
        walls.addAll(theScene.getRoot().lookupAll("#"));
        walls.remove(theScene.getRoot().lookup("#pane"));
        walls.remove(theScene.getRoot().lookup("#user"));
        walls.remove(theScene.getRoot().lookup("#finish"));
        walls.remove(theScene.getRoot().lookup("#small"));
        walls.remove(theScene.getRoot().lookup("#speed"));
        walls.remove(theScene.getRoot().lookup("#shape"));
        walls.remove(theScene.getRoot().lookup("#change"));

        Circle user = (Circle) theScene.getRoot().lookup("#user");
        Node finish = theScene.getRoot().lookup("#finish");
        Int speed = new Int(5);
        user.setOnKeyPressed(new EventHandler<KeyEvent>() {
            @Override
            public void handle(KeyEvent event) {
                for (int i = 0; i < speed.getValue(); i++) {
                    switch (event.getCode()){
                        case W:
                            user.setLayoutY(user.getLayoutY() - 1);
                            for (Node wall: walls) {
                                if (user.getBoundsInParent().intersects(wall.getBoundsInParent())){
                                    user.setLayoutY(user.getLayoutY() + 1);
                                    break;
                                }
                            }
                            break;
                        case S:
                            user.setLayoutY(user.getLayoutY() + 1);
                            for (Node wall: walls) {
                                if (user.getBoundsInParent().intersects(wall.getBoundsInParent())){
                                    user.setLayoutY(user.getLayoutY() - 1);
                                    break;
                                }
                            }
                            break;
                        case A:
                            user.setLayoutX(user.getLayoutX() - 1);
                            for (Node wall: walls) {
                                if (user.getBoundsInParent().intersects(wall.getBoundsInParent())){
                                    user.setLayoutX(user.getLayoutX() + 1);
                                    break;
                                }
                            }
                            break;
                        case D:
                            user.setLayoutX(user.getLayoutX() + 1);
                            for (Node wall: walls) {
                                if (user.getBoundsInParent().intersects(wall.getBoundsInParent())){
                                    user.setLayoutX(user.getLayoutX() - 1);
                                    break;
                                }
                            }
                            break;
                    }
                    if(user.getBoundsInParent().intersects(finish.getBoundsInParent())){
                        Alert alert = new Alert(Alert.AlertType.CONFIRMATION,"Are you want to play again?");
                        alert.showAndWait().ifPresent(response -> {
                            if (response == ButtonType.OK) {
                                try {
                                    theScene.setRoot(FXMLLoader.load(getClass().getResource("game.fxml")));
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                            }
                            if (response == ButtonType.CANCEL){
                                Platform.exit();
                                System.exit(0);
                            }
                        });
                        break;
                    }
                }
            }
        });
        theStage.show();
    }
}
