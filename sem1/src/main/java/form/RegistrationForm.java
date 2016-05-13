package form;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class RegistrationForm {
    @Pattern(message = "Поле не может быть пустым, должно содержать латинские символы или цифры", regexp = "^[a-zA-Z0-9_-]{3,16}")
    private String username;

    private int city;

    @NotBlank(message = "Введите корректный номер телефона. Пример: 89196248967")
    @Size(min = 11, max = 11, message = "Номер состоит из 11 символов")
    private String phone;

    @Size(min = 6, max = 24, message = "Пароль неверной длины")
    private String password;

    @Size(min = 6, max = 24, message = "Пароль неверной длины")
    private String confirmPassword;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getCity() {
        return city;
    }

    public void setCity(int city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
