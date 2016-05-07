package form;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Size;

/**
 * Created by Almaz on 06.05.2016.
 */
public class BookForm {

    private int city;

    @NotBlank(message = "Поле обязательно для заполнения")
    private String name;

    @NotBlank(message = "Введите корректный номер телефона. Пример: 89196248967")
    @Size(min = 11, max = 11, message = "Номер состоит из 11 символов")
    private String phone;

    @NotBlank(message = "Поле обязательно для заполнения")
    private String tostreet;

    @NotBlank(message = "Поле обязательно для заполнения")
    private String tohouse;

    private int fromblock;

    @NotBlank(message = "Поле обязательно для заполнения")
    private String fromstreet;

    @NotBlank(message = "Поле обязательно для заполнения")
    private String fromhouse;

    private String fromplace;

    public int getCity() {
        return city;
    }

    public void setCity(int city) {
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getTostreet() {
        return tostreet;
    }

    public void setTostreet(String tostreet) {
        this.tostreet = tostreet;
    }

    public String getTohouse() {
        return tohouse;
    }

    public void setTohouse(String tohouse) {
        this.tohouse = tohouse;
    }

    public int getFromblock() {
        return fromblock;
    }

    public void setFromblock(int fromblock) {
        this.fromblock = fromblock;
    }

    public String getFromstreet() {
        return fromstreet;
    }

    public void setFromstreet(String fromstreet) {
        this.fromstreet = fromstreet;
    }

    public String getFromhouse() {
        return fromhouse;
    }

    public void setFromhouse(String fromhouse) {
        this.fromhouse = fromhouse;
    }

    public String getFromplace() {
        return fromplace;
    }

    public void setFromplace(String fromplace) {
        this.fromplace = fromplace;
    }
}
