package task011;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

/**
 * Created by Almaz on 10.03.2016.
 */
@Aspect
public class RefreshSessionFromCookie {
    //Проверяет в куки имя пользователя и востанавливает по нему сессию
    @Around("execution(* *..*.learnLanguage(*))")
    public Object stopIt(ProceedingJoinPoint jp) throws Throwable {
        HttpServletRequest request = (HttpServletRequest)jp.getArgs()[1];
        HttpSession session = request.getSession();
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("username")) {
                    session.setAttribute("current_user", cookie.getValue());
                }
            }
        }
        return jp.proceed();
    }
}
