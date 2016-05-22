package configuration;

import controllers.LoginController;
import environment.GameEnvironment;
import environment.SpringFXMLLoader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import web.impl.ServerApiImpl;

@Configuration
public class GameConfiguration {
    @Bean
    GameEnvironment gameEnvironment(){
        return new GameEnvironment();
    }
    @Bean
    ServerApiImpl serverApi(){return new ServerApiImpl();}

    @Bean
    LoginController loginController(){
        return new LoginController();
    }

    @Bean
    SpringFXMLLoader springFXMLLoader(){
        return new SpringFXMLLoader();
    }
}
