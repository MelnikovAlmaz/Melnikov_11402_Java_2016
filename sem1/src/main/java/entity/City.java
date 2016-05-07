package entity;

import javax.persistence.*;

@Entity
@Table(name = "city")
public class City {
    @Id
    @GeneratedValue
    @Column(name="id")
    private int id;

    @Column(name="name", length = 100, unique = true)
    private String name;

    public City() {
    }

    public City(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
