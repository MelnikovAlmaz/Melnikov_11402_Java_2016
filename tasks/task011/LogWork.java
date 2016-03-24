package task011;

import component.Developer;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

import java.io.FileWriter;
import java.io.IOException;

/**
 * Created by Almaz on 10.03.2016.
 */
@Aspect
public class LogWork {
    // «аписывает в фаил все посещенные URI страниц
    @Before("execution(* *..*.doGet(*))")
    public void loggingWork(JoinPoint jp){
        try {
            FileWriter writer = new FileWriter("log.txt");
            HttpServletRequest request = (HttpServletRequest)jp.getArgs()[1];
            writer.write(request.getRequestURI());
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
