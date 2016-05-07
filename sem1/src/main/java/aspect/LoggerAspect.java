package aspect;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

;

@Aspect
public class LoggerAspect {

    private final static Logger LOGGER = LogManager.getLogger(LoggerAspect.class);

    @Before("execution(* controllers.*.*(..))")
    public void controllers(JoinPoint point) {
        LOGGER.info(point.getSignature().getName() + " called...");
    }
    @Before("execution(* service.impl.*.*(..))")
    public void services(JoinPoint point) {
        LOGGER.info(point.getSignature().getName() + " called...");
    }
    @Before("execution(* repository.impl.*.*(..))")
    public void repositories(JoinPoint point) {
        LOGGER.info(point.getSignature().getName() + " called...");
    }
}