package task009.src.componentScan;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;


/**
 * Created by Almaz on 01.03.2016.
 */
@Component
@ComponentScan(basePackages = {"component"})
public class Config {
    @Bean
    public ComplexNumber complexNumberBean(){
        return new ComplexNumber();
    }
    @Bean
    public ComplexMatrix2x2 complexMatrix2x2Bean(){
        return new ComplexMatrix2x2();
    }
}
