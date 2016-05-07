package controllers;

import entity.Book;
import entity.BookTemplate;
import entity.City;
import entity.Passenger;
import form.BookForm;
import form.FeedbackForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import service.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Almaz on 14.04.2016.
 */
@Controller
@RequestMapping("/client")
public class ClientPageController {
    @Autowired
    CityService cityService;
    @Autowired
    PassengerService passengerService;
    @Autowired
    BookService bookService;
    @Autowired
    BookTemplateService bookTemplateService;
    @Autowired
    FeedBackService feedBackService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String mainPage(ModelMap model) {
        return "redirect:/client/cabinet";
    }


    @RequestMapping(value = "/cabinet", method = RequestMethod.GET)
    public String cabinetGET(ModelMap model) {
        List cities = cityService.getAllCities();
        Passenger passenger = getPrincipal();
        model.addAttribute("user", passenger);
        model.addAttribute("cities", cities);
        model.addAttribute("bookForm", new BookForm());
        return "/client/cabinet";
    }

    @RequestMapping(value = "/cabinet", method = RequestMethod.POST)
    public String cabinetPOST(@ModelAttribute("bookForm")@Valid BookForm form, BindingResult result) {
        if (result.hasErrors()) {
            return "redirect:/client/cabinet";
        }
        Passenger passenger = getPrincipal();
        bookService.addNewBook(form, passenger);
        return "redirect:/client/cabinet";
    }

    @RequestMapping(value = "/cabinet/orders", method = RequestMethod.GET)
    public String ordersGET(ModelMap model) {
        Passenger passenger = getPrincipal();
        List books = bookService.getAllBooksByPassengerId(passenger.getId());
        model.addAttribute("books", books);
        model.addAttribute("user", passenger);
        return "/client/orders";
    }

    @RequestMapping(value = "/cabinet/orders", method = RequestMethod.POST)
    public String ordersPOST(ModelMap model) {
        return "/client/orders";
    }

    @RequestMapping(value = "/cabinet/orders/totemplate/{id}", method = RequestMethod.GET)
    public String templatesGET(ModelMap model,  @PathVariable Integer id) {
        Passenger passenger = getPrincipal();
        bookTemplateService.addNewBookTemplateFromBook(id, passenger);
        return "redirect:/client/cabinet/orders";
    }

    @RequestMapping(value = "/cabinet/orders/find", method = RequestMethod.GET)
    public @ResponseBody
    List<Book> countInMonth(@RequestParam(value = "name") String name) {
        Passenger passenger = getPrincipal();
        if(!name.equals("")){
            List<Book> books = bookService.getAllBooksByNameAndPassenger(name, passenger);
            return books;
        }
        else {
            return bookService.getAllBooksByPassengerId(passenger.getId());
        }
    }

    @RequestMapping(value = "/cabinet/templates", method = RequestMethod.GET)
    public String templatesGET(ModelMap model) {
        Passenger passenger = getPrincipal();
        List templates = bookTemplateService.getAllBookTemplatesByPassengerId(passenger.getId());
        model.addAttribute("templates", templates);
        model.addAttribute("user", passenger);
        return "/client/templates";
    }

    @RequestMapping(value = "/cabinet/templates/tobook/{id}", method = RequestMethod.GET)
    public String templatesToBookGET(ModelMap model, @PathVariable Integer id) {
        List cities = cityService.getAllCities();
        Passenger passenger = getPrincipal();
        BookTemplate bookTemplate = bookTemplateService.getBookTemplateById(id);
        if(bookTemplate.getPassenger().getId() != passenger.getId()){
            return "redirect:/client/cabinet/templates";
        }
        model.addAttribute("bookTemplate", bookTemplate);
        model.addAttribute("user", passenger);
        model.addAttribute("cities", cities);
        model.addAttribute("bookForm", new BookForm());
        return "/client/cabinet";
    }

    @RequestMapping(value = "/cabinet/templates/delete/{id}", method = RequestMethod.GET)
    public String templatesDeleteGET(ModelMap model, @PathVariable Integer id) {
        List cities = cityService.getAllCities();
        Passenger passenger = getPrincipal();
        BookTemplate bookTemplate = bookTemplateService.getBookTemplateById(id);
        if(bookTemplate.getPassenger().getId() != passenger.getId()){
            return "redirect:/client/cabinet/templates";
        }
        bookTemplateService.deleteBookTemplateById(id);
        return "redirect:/client/cabinet/templates";
    }

    @RequestMapping(value = "/cabinet/templates", method = RequestMethod.POST)
    public String templatesPOST(ModelMap model) {
        return "/client/templates";
    }

    @RequestMapping(value = "/cabinet/profile", method = RequestMethod.GET)
    public String profileGET(ModelMap model) {
        List cities = cityService.getAllCities();
        Passenger passenger = getPrincipal();
        model.addAttribute("user", passenger);
        model.addAttribute("cities", cities);
        return "/client/profile";
    }

    @RequestMapping(value = "/cabinet/profile", method = RequestMethod.POST)
    public String profilePOST(ModelMap model,
                              @RequestParam(value = "name") String name,
                              @RequestParam(value = "city") String cityId,
                              @RequestParam(value = "street") String street,
                              @RequestParam(value = "house") String house,
                              @RequestParam(value = "flat") int flat,
                              @RequestParam(value = "sex") int sex) {

        City city = cityService.getCityById(Integer.parseInt(cityId.charAt(1)+""));
        Passenger passenger = getPrincipal();
        passengerService.update(passenger, name, street, house, flat, sex, city);
        return "redirect:/client/cabinet/profile";
    }

    @RequestMapping(value = "/cabinet/feedback", method = RequestMethod.GET)
    public String feedbackGET(ModelMap model) {
        List cities = cityService.getAllCities();
        Passenger passenger = getPrincipal();
        model.addAttribute("user", passenger);
        model.addAttribute("cities", cities);
        model.addAttribute("feedBackForm", new FeedbackForm());
        return "/client/feedback";
    }


    @RequestMapping(value = "/cabinet/feedback", method = RequestMethod.POST)
    public String feedbackPOST(@ModelAttribute("feedBackForm")@Valid FeedbackForm form, BindingResult result) {
        if (result.hasErrors()) {
            return "redirect:/cabinet";
        }
        feedBackService.addNewFeedBack(form);
        return "redirect:/cabinet";
    }

    private Passenger getPrincipal(){
        Passenger passenger = (Passenger) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return passenger;
    }
    @RequestMapping(value = "/cabinet/export", method = RequestMethod.GET)
    public ModelAndView getPDF() {
        Passenger passenger = getPrincipal();
        List bookList = bookService.getAllBooksByPassengerId(passenger.getId());
        return new ModelAndView("BookListPDF", "bookList", bookList);
    }
}
