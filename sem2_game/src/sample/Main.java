package sample;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Scene;
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
        theStage.show();
    }
}
