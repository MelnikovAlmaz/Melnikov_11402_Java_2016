package service.impl;

import entity.Book;
import entity.Passenger;
import form.BookForm;
import form.MainBookForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.BookRepository;
import repository.CityRepository;
import repository.DriverRepository;
import repository.PassengerRepository;
import repository.impl.AnalyticRepositoryImpl;
import repository.impl.BookRepImpl;
import service.BookService;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Service
public class BookServiceImpl implements BookService {
    @Autowired
    BookRepository bookRepository;
    @Autowired
    BookRepImpl bookRep;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    AnalyticRepositoryImpl analyticRepositoryImpl;

    @Autowired
    DriverRepository driverRepository;
    @Autowired
    PassengerRepository passengerRepository;

    @Override
    @Transactional
    public Book getBookById(Integer id) {
        return bookRepository.findOneById(id);
    }

    @Override
    @Transactional
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    @Transactional
    public List<Book> getAllBooksByPassengerId(Integer id) {
        return bookRepository.findAllByPassenger_Id(id);
    }

    @Override
    public void addNewBook(BookForm form, Passenger passenger) {
        Book book = new Book();
        book.setName(form.getName());
        book.setPhone(form.getPhone());
        book.setCity(cityRepository.findOneById(form.getCity()));
        book.setTostreet(form.getTostreet());
        book.setTohouse(form.getTohouse());
        book.setFromstreet(form.getFromstreet());
        book.setFromhouse(form.getFromhouse());
        book.setFromblock(form.getFromblock());
        book.setFromplace(form.getFromplace());
        book.setPassenger(passenger);
        book.setCost(0);
        book.setState(0);
        bookRepository.save(book);
    }

    @Override
    public void addNewMainBook(MainBookForm form) {
        Passenger passenger = passengerRepository.findOneByUsername(form.getUsername());
        if(passenger != null) {
            if (passenger.getPassword().equals(form.getPassword())) {
                Book book = new Book();
                book.setName(form.getName());
                book.setPhone(form.getPhone());
                book.setCity(cityRepository.findOneById(form.getCity()));
                book.setTostreet(form.getTostreet());
                book.setTohouse(form.getTohouse());
                book.setFromstreet(form.getFromstreet());
                book.setFromhouse(form.getFromhouse());
                book.setFromblock(form.getFromblock());
                book.setFromplace(form.getFromplace());
                book.setPassenger(passenger);
                book.setCost(0);
                book.setState(0);
                bookRepository.save(book);
            }
        }
    }

    @Override
    public Book orderBook(int bookId, int driverId){
        Book book = bookRepository.findOneById(bookId);
        book.setDriver(driverRepository.findOneById(driverId));
        book.setState(1);
        return bookRepository.save(book);
    }
    @Override
    public Book updateBookState(int bookId, int cost, int state){
        Book book = bookRepository.findOneById(bookId);
        book.setCost(cost);
        book.setState(state);
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getCityFreeBook(int cityId) {
        return bookRepository.findAllByCityIdAndState(cityId, 0);
    }

    @Override
    public Book getDriverActiveBook(int driverId) {
        return bookRepository.findOneByDriverIdAndState(driverId, 1);
    }

    @Override
    public List<Book> getAllBooksByDriverId(int driverId) {
        return bookRepository.findAllByDriver_IdOrderByDateDesc(driverId);
    }

    @Override
    public List<Book> getAllBooksByNameAndPassenger(String name, Passenger passenger) {
        try {
            return bookRep.findAllWhereNameStartsWithByPassengerId(name, passenger.getId());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
