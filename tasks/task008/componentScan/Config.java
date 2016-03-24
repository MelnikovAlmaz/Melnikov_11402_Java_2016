package task008.componentScan;

import component.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import task008.component.Client;
import task008.component.GameGui;


/**
 * Created by Almaz on 01.03.2016.
 */
@Component
@ComponentScan(basePackages = {"component"})
public class Config {
    @Bean
    @Qualifier("client")
    public Client clientBean(){
        return new Client();
    }
    @Bean
    public GameGui gameGuiBean(){
        return new GameGui("Main Page!");
    }
}
