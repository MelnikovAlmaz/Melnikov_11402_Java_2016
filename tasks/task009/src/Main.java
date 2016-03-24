package task009.src;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import task009.src.componentScan.Config;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Main {
    public static void main(String[] args) {
        ApplicationContext ac = new AnnotationConfigApplicationContext(Config.class);
        ComplexMatrix2x2 = ac.getBean(ComplexMatrix2x2.class)
    }
}