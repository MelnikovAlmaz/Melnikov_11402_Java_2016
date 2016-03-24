package task008;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import task008.component.Client;
import task008.componentScan.Config;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Main {
    public static void main(String[] args) {
        ApplicationContext ac = new AnnotationConfigApplicationContext(Config.class);
        Client client = ac.getBean(Client.class);
    }
}