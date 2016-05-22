import configuration.GameConfiguration;
import environment.GameEnvironment;
import javafx.application.Application;
import javafx.stage.Stage;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Taxi extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        ApplicationContext context = new AnnotationConfigApplicationContext(GameConfiguration.class);
        GameEnvironment gameEnvironment = context.getBean(GameEnvironment.class);
        gameEnvironment.openPage("main/login_page");
        primaryStage.setScene(gameEnvironment.getScene());
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }
}
