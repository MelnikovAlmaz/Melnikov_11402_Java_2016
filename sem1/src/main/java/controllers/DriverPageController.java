package controllers;

import entity.Book;
import entity.City;
import entity.Driver;
import form.BasicInformationForm;
import form.FeedbackForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import service.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Almaz on 14.04.2016.
 */
@Controller
@RequestMapping("/driver")
public class DriverPageController {
    @Autowired
    CityService cityService;
    @Autowired
    DriverService driverService;
    @Autowired
    BookService bookService;
    @Autowired
    AnalyticService analyticService;
    @Autowired
    FeedBackService feedBackService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String mainPage(ModelMap model) {
        return "redirect:/driver/cabinet";
    }


    @RequestMapping(value = "/cabinet", method = RequestMethod.GET)
    public String cabinetGET(ModelMap model) {
        Driver driver = getPrincipal();
        Book activeBook = bookService.getDriverActiveBook(driver.getId());
        model.addAttribute("user", driver);
        model.addAttribute("book", activeBook);
        return "/driver/cabinet";
    }

    @RequestMapping(value = "/cabinet", method = RequestMethod.POST)
    public String cabinetPOST(ModelMap model,
                              @RequestParam(value = "cost") int cost,
                              @RequestParam(value = "id") int bookId,
                              @RequestParam(value = "state") int state) {
        Driver driver = getPrincipal();
        Book book = bookService.updateBookState(bookId, cost, state);
        return "redirect:/driver/cabinet";
    }

    @RequestMapping(value = "/cabinet/orders", method = RequestMethod.GET)
    public String orders(ModelMap model, @RequestParam(value = "error", required = false) String error) {
        Driver driver = getPrincipal();
        List books = bookService.getCityFreeBook(driver.getCity().getId());
        model.addAttribute("books", books);
        model.addAttribute("user", driver);
        model.addAttribute("error", error);
        return "/driver/free_orders";
    }

    @RequestMapping(value = "/cabinet/orders/{id}", method = RequestMethod.GET)
    public String orderFix(ModelMap model, @PathVariable Integer id) {
        Driver driver = getPrincipal();
        String error = "";
        if(bookService.getDriverActiveBook(driver.getId()) != null){
            error = "У Вас уже иммется активный заказ!";
            model.addAttribute("error", error);
            return "redirect:/driver/cabinet/orders";
        }
        Book book = bookService.getBookById(id);
        if(book.getState() != 0){
            model.addAttribute("error", error);
            return "redirect:/driver/cabinet/orders";
        }
        bookService.orderBook(book.getId(), driver.getId());
        return "redirect:/driver/cabinet";
    }

    @RequestMapping(value = "/cabinet/profile", method = RequestMethod.GET)
    public String profileGET(ModelMap model) {
        List cities = cityService.getAllCities();
        Driver driver = getPrincipal();
        model.addAttribute("user", driver);
        model.addAttribute("cities", cities);
        return "/driver/profile";
    }

    @RequestMapping(value = "/cabinet/statistic", method = RequestMethod.GET)
    public String myOrders(ModelMap model) {
        Driver driver = getPrincipal();
        List<Book> books = bookService.getAllBooksByDriverId(driver.getId());
        model.addAttribute("user", driver);
        model.addAttribute("books", books);
        return "/driver/my_orders";
    }

    @RequestMapping(value = "/cabinet/statistic/analitycs", method = RequestMethod.GET)
    public String analitycs(ModelMap model) {
        Driver driver = getPrincipal();
        List<Book> books = bookService.getAllBooksByDriverId(driver.getId());
        ArrayList<Integer> countInMonthForms = analyticService.findAllInMonthByDriverId(driver.getId(), "2016-04");
        BasicInformationForm basicInformationForm = analyticService.findBasicInfoByDriver_Id(driver.getId());
        model.addAttribute("basicDataSet", basicInformationForm);
        model.addAttribute("dataSet", countInMonthForms);
        model.addAttribute("user", driver);
        model.addAttribute("books", books);
        return "/driver/analitycs";
    }

    @RequestMapping(value = "/cabinet/statistic/analitycs/countinmonth", method = RequestMethod.GET)
    public @ResponseBody ArrayList<Integer> countInMonth(@RequestParam(value = "date") String date) {
        Driver driver = getPrincipal();
        ArrayList<Integer> countInMonth = analyticService.findAllInMonthByDriverId(driver.getId(), date);
        return countInMonth;
    }

    @RequestMapping(value = "/cabinet/statistic/analitycs/countinyear", method = RequestMethod.GET)
    public @ResponseBody ArrayList<Integer> countInYear(@RequestParam(value = "date") int date) {
        Driver driver = getPrincipal();
        ArrayList<Integer> countInYear = analyticService.findAllInYearByDriverId(driver.getId(), date);
        return countInYear;
    }

    @RequestMapping(value = "/cabinet/profile", method = RequestMethod.POST)
    public String profilePOST(ModelMap model,
                              @RequestParam(value = "name") String name,
                              @RequestParam(value = "city") String cityId,
                              @RequestParam(value = "street") String street,
                              @RequestParam(value = "house") String house,
                              @RequestParam(value = "flat") int flat,
                              @RequestParam(value = "sex") int sex) {

        City city = cityService.getCityById(Integer.parseInt(cityId.substring(1)));
        Driver driver = getPrincipal();
        driverService.update(driver, name, street, house, flat, sex, city);
        return "redirect:/driver/cabinet/profile";
    }

    @RequestMapping(value = "/cabinet/feedback", method = RequestMethod.GET)
    public String feedbackGET(ModelMap model) {
        List cities = cityService.getAllCities();
        Driver driver = getPrincipal();
        model.addAttribute("user", driver);
        model.addAttribute("cities", cities);
        model.addAttribute("feedBackForm", new FeedbackForm());
        return "/driver/feedback";
    }

    @RequestMapping(value = "/cabinet/feedback", method = RequestMethod.POST)
    public String feedbackPOST(@ModelAttribute("feedBackForm")@Valid FeedbackForm form, BindingResult result) {
        if (result.hasErrors()) {
            return "redirect:/cabinet";
        }
        feedBackService.addNewFeedBack(form);
        return "redirect:/cabinet";
    }

    private Driver getPrincipal(){
        Driver driver = (Driver) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return driver;
    }
}
