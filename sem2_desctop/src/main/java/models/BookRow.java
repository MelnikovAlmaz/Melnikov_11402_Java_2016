package models;

import entity.Book;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.beans.property.SimpleStringProperty;

/**
 * Created by Almaz on 21.05.2016.
 */
public class BookRow {
    private SimpleStringProperty name;
    private SimpleStringProperty city;
    private SimpleStringProperty from;
    private SimpleStringProperty to;
    private SimpleIntegerProperty cost;

    public BookRow() {
    }

    public BookRow(Book book) {
        this.name = new SimpleStringProperty(book.getName());
        this.from = new SimpleStringProperty(book.getFromstreet() + " " + book.getFromhouse());
        this.to = new SimpleStringProperty(book.getTostreet() + " " + book.getTohouse());
        this.city = new SimpleStringProperty(book.getCity().getName());
        this.cost = new SimpleIntegerProperty(book.getCost());
    }
    public String getName() {
        return name.get();
    }

    public void setName(String name) {
        this.name.set(name);
    }

    public String getCity() {
        return city.get();
    }

    public void setCity(String city) {
        this.city.set(city);
    }

    public String getFrom() {
        return from.get();
    }

    public void setFrom(String from) {
        this.from.set(from);
    }

    public String getTo() {
        return to.get();
    }

    public void setTo(String to) {
        this.to.set(to);
    }

    public Integer getCost() {
        return cost.get();
    }

    public void setCost(Integer cost) {
        this.cost.set(cost);
    }
}
