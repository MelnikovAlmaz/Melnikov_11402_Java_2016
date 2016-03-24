package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;

/**
 * Created by Almaz on 23.03.2016.
 */
@Controller
@RequestMapping("/getdate")
public class DateController {
    @RequestMapping(method = RequestMethod.GET)
    public String hiPage(ModelMap model, @RequestParam(required = false) String name) {
        Date date = new Date();
        model.put("date", date.toGMTString());
        return "date";
    }
}
