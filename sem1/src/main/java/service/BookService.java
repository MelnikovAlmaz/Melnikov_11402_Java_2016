package service;

import entity.Book;
import entity.Passenger;
import form.BookForm;
import form.MainBookForm;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface BookService {
    Book getBookById(Integer id);
    List<Book> getAllBooks();
    List<Book> getAllBooksByPassengerId(Integer id);
    void addNewBook(BookForm form, Passenger passenger);

    void addNewMainBook(MainBookForm form);

    Book orderBook(int bookId, int driverId);

    Book updateBookState(int bookId, int cost, int state);
    List<Book> getCityFreeBook(int id);
    Book getDriverActiveBook(int id);

    List<Book> getAllBooksByDriverId(int driverId);

    List<Book> getAllBooksByNameAndPassenger(String name, Passenger passenger);
}
