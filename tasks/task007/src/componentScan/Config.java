package componentScan;

import component.*;
import org.springframework.beans.factory.annotation.Qualifier;
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
    @Qualifier("linuxMint")
    public LinuxMint linuxMint(){
        return new LinuxMint();
    }
    @Bean
    @Qualifier("redHat")
    public RedHatLinux redHatLinuxBean(){
        return new RedHatLinux();
    }
    @Bean
    @Qualifier("windows")
    public Windows windowsBean(){
        return new Windows();
    }
    @Bean
    @Qualifier("stationarWireless")
    public StationarWireLess stationarWireLess(){
        return new StationarWireLess();
    }
    @Bean
    public Laptop laptopBean(){
        return new Laptop();
    }
}
