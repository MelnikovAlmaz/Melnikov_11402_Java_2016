package aspect;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;


@Aspect
public class LoggerAspect {

    private final static Logger LOGGER = LogManager.getLogger(LoggerAspect.class);

    @Before("execution(* controllers.*.*(..))")
    public void controllers(JoinPoint point) {
        LOGGER.info("Controller: " + point.getSignature().getName() + " called...");
    }
    @Before("execution(* service.impl.*.*(..))")
    public void services(JoinPoint point) {
        LOGGER.info("Service: " + point.getSignature().getName() + " called...");
    }
    @Before("execution(* repository.impl.*.*(..))")
    public void repositoriesImpl(JoinPoint point) {
        LOGGER.info("Repository: " + point.getSignature().getName() + " called...");
    }
    @Before("execution(* repository.*.*(..))")
    public void repositories(JoinPoint point) {
        LOGGER.info("Repository: " + point.getSignature().getName() + " called...");
    }
    @Around("execution(* repository.impl.*.*(..))")
    public void repositoryImplExceptionCatch(ProceedingJoinPoint joinPoint){ //добавление этого аргумента обязательно!
        try {
            joinPoint.proceed();
        } catch (Throwable throwable) {
            LOGGER.info("RepositoryImpl: " + joinPoint.getSignature().getName() + " throw " + throwable.getMessage());
        }
    }
}