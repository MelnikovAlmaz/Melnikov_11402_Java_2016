package sample;

import javafx.animation.*;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.image.Image;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.Pane;
import javafx.scene.paint.ImagePattern;
import javafx.scene.paint.Paint;
import javafx.scene.shape.*;
import javafx.stage.Stage;
import javafx.util.Duration;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;

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
                                    setTransitions(theScene.getRoot());
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
                    if (user.getBoundsInParent().intersects(theScene.getRoot().lookup("#small").getBoundsInParent())){
                        user.setScaleX(user.getScaleX()/2);
                        user.setScaleY(user.getScaleY()/2);
                        theScene.getRoot().lookup("#small").setLayoutX(-1);
                        theScene.getRoot().lookup("#small").setLayoutY(-1);
                    }
                    if (user.getBoundsInParent().intersects(theScene.getRoot().lookup("#speed").getBoundsInParent())){
                        speed.setValue(speed.getValue() * 2);
                        theScene.getRoot().lookup("#speed").setLayoutX(-1);
                        theScene.getRoot().lookup("#speed").setLayoutY(-1);
                    }
                    if (user.getBoundsInParent().intersects(theScene.getRoot().lookup("#shape").getBoundsInParent())){
                        user.setFill(Paint.valueOf("#000000"));
                        theScene.getRoot().lookup("#shape").setLayoutX(-1);
                        theScene.getRoot().lookup("#shape").setLayoutY(-1);
                        setBorderTransitions(theScene.getRoot().lookup("#border"));
                    }
                    if (user.getBoundsInParent().intersects(theScene.getRoot().lookup("#change").getBoundsInParent())){
                        Random random = new Random();
                        theScene.getRoot().lookup("#change").setLayoutX(random.nextDouble()*theStage.getWidth());
                        theScene.getRoot().lookup("#change").setLayoutY( random.nextDouble()*theStage.getHeight());
                        int vector = 1;
                        for (Node wall: walls) {
                            final Timeline timeline = new Timeline();
                            timeline.setCycleCount(1);
                            final KeyValue kv = new KeyValue(((Rectangle)wall).yProperty(), random.nextDouble()*theStage.getHeight()*vector/10);
                            final KeyFrame kf = new KeyFrame(Duration.millis(10000), kv);
                            final KeyValue kvx = new KeyValue(((Rectangle)wall).xProperty(),random.nextDouble()*theStage.getWidth()*vector/10);
                            final KeyFrame kfx = new KeyFrame(Duration.millis(10000), kvx);
                            timeline.getKeyFrames().add(kf);
                            timeline.getKeyFrames().add(kfx);
                            timeline.play();
                        }
                        vector*=-1;
                    }
                }
            }
        });
        setTransitions(theScene.getRoot());
        theStage.show();
    }

    private void setTransitions(Parent root){
        setFadeTransitions(root.lookup("#small"));
        setFadeTransitions(root.lookup("#speed"));
        setFadeTransitions(root.lookup("#shape"));

        setPathTransitions(root.lookup("#big_block_1"));
        setPathTransitions(root.lookup("#big_block_2"));
        setPathTransitions(root.lookup("#big_block_3"));
    }
    private void setFadeTransitions(Node node){
        FadeTransition ft = new FadeTransition(Duration.millis(1000), node);
        ft.setFromValue(1.0);
        ft.setToValue(0.3);
        ft.setCycleCount(Timeline.INDEFINITE);
        ft.setAutoReverse(true);
        ft.play();
    }
    private void setPathTransitions(Node node){
        final Timeline timeline = new Timeline();
        timeline.setCycleCount(Timeline.INDEFINITE);
        timeline.setAutoReverse(true);
        final KeyValue kv = new KeyValue(((Rectangle)node).xProperty(), -95);
        final KeyFrame kf = new KeyFrame(Duration.millis(1000), kv);
        timeline.getKeyFrames().add(kf);
        timeline.play();
    }
    private void setBorderTransitions(Node node){
        final Timeline timeline = new Timeline();
        timeline.setCycleCount(1);
        final KeyValue kv = new KeyValue(((Rectangle)node).yProperty(), -40);
        final KeyFrame kf = new KeyFrame(Duration.millis(1000), kv);
        timeline.getKeyFrames().add(kf);
        timeline.play();
    }
    private void setTexture(Parent root){
        ((Rectangle)root.lookup("#big_block_1")).setFill(new ImagePattern(new Image(getClass().getResource("ship.bmp").toString(), 0, 0, true, true, true)));
    }
}