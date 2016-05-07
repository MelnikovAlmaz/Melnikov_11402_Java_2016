package security;

import entity.Driver;
import entity.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import repository.DriverRepository;
import repository.PassengerRepository;

import java.util.ArrayList;
import java.util.List;
@Service
public class AuthProviderImpl implements AuthenticationProvider {

    @Autowired
    PassengerRepository passengerRepository;

    @Autowired
    DriverRepository driverRepository;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();

        Passenger passenger = passengerRepository.findOneByUsername(username);
        Driver driver = driverRepository.findOneByUsername(username);
        if (passenger == null) {
            if (driver == null) {
                throw new UsernameNotFoundException("user not found");
            }
        }

        String password = authentication.getCredentials().toString();

        if (passenger != null && passenger.getPassword() != null){
            if (!password.equals(passenger.getPassword())) {
                throw new BadCredentialsException("invalid password");
            }
        }

        if (driver != null && driver.getPassword() != null){
            if (!password.equals(driver.getPassword())) {
                throw new BadCredentialsException("invalid password");
            }
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        if (passenger != null) {
            authorities.add(new SimpleGrantedAuthority(passenger.getRole().toString()));
        }

        if (driver != null) {
            authorities.add(new SimpleGrantedAuthority(driver.getRole().toString()));
        }

        UsernamePasswordAuthenticationToken person = null;
        if (passenger != null) {
            person = new UsernamePasswordAuthenticationToken(passenger, null, authorities);
        }

        if (driver != null) {
            person = new UsernamePasswordAuthenticationToken(driver, null, authorities);
        }
        return person;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UsernamePasswordAuthenticationToken.class);
    }
}
