package repository.impl;

import entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import repository.CityRepository;
import utils.DbDriverSingleton;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Almaz on 06.05.2016.
 */
@Repository
public class BookRepImpl {
    @Autowired
    CityRepository cityRepository;

    public List<Book> findAllWhereNameStartsWithByPassengerId(String name, int id){
        List<Book> data = new ArrayList<>();
        try {
            Connection dbConnection = DbDriverSingleton.getDbConnection();
            PreparedStatement stmt = dbConnection.prepareStatement("select * from book as b where b.name like ? and b.passenger = ?");
            stmt.setString(1, name + "%");
            stmt.setInt(2, id);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Book book = new Book();
                book.setId(rs.getInt("id"));
                book.setCity(cityRepository.findOneById(rs.getInt("city")));
                book.setCost(rs.getInt("cost"));
                book.setFromstreet(rs.getString("fromstreet"));
                book.setFromhouse(rs.getString("fromhouse"));
                book.setTostreet(rs.getString("tostreet"));
                book.setTohouse(rs.getString("tohouse"));
                book.setName(rs.getString("name"));
                data.add(book);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return data;
    }
}
