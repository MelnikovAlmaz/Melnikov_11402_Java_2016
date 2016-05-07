package form;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Size;
import java.sql.Date;

/**
 * Created by Almaz on 13.04.2016.
 */
public class FeedbackForm {
    private int city;

    @NotBlank(message = "Поле обязательно для заполнения")
    private String subject;

    private Date date;

    @NotBlank(message = "Введите корректный номер телефона. Пример: 89196248967")
    @Size(min = 11, max = 11, message = "Номер состоит из 11 символов")
    private String phone;

    private String additional;

    public int getCity() {
        return city;
    }

    public void setCity(int city) {
        this.city = city;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAdditional() {
        return additional;
    }

    public void setAdditional(String additional) {
        this.additional = additional;
    }
}
