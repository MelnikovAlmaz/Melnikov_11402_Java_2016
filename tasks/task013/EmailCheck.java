package task013;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by Almaz on 10.03.2016.
 */
@Aspect
public class EmailCheck {
    //Проверяет в куки имя пользователя и востанавливает по нему сессию
    @Around("execution(* *..*.setEmail(String email))")
    public Object stopIt(ProceedingJoinPoint jp) throws Throwable {
        String email = (String) jp.getArgs()[0];
        Pattern p = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$");
        Matcher matcher = p.matcher(email);
        if (matcher.matches()) {
            return jp.proceed();
        }
        else return null;
    }
}
