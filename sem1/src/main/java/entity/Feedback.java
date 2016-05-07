package entity;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by Almaz on 13.04.2016.
 */
@Entity
@Table(name = "feedback")
public class Feedback {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "city", referencedColumnName = "id")
    private City city;

    @Column(name = "subject")
    private String subject;

    @Column(name = "date")
    private Date date;

    @Column(name = "phone")
    private String phone;

    @Column(name = "additional")
    private String additional;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
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
