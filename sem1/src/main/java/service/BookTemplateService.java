package service;

import entity.BookTemplate;
import entity.City;
import entity.Passenger;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface BookTemplateService {
    BookTemplate getBookTemplateById(Integer id);
    List<BookTemplate> getAllBookTemplates();
    List<BookTemplate> getAllBookTemplatesByPassengerId(Integer id);
    void addNewBookTemplate(String name, String phone,
                    String toHouse, int fromBlock,
                    String fromStreet, String fromHouse,
                    String fromPlace, City city,
                    Passenger passenger, String toStreet);

    void addNewBookTemplateFromBook(Integer bookId, Passenger passenger);
    void deleteBookTemplateById(Integer id);
}
