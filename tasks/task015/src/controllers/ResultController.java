package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Almaz on 23.03.2016.
 */
@Controller
@RequestMapping("/result")
public class ResultController {
    @RequestMapping(method = RequestMethod.GET)
    public String hiPage(ModelMap model, @PathVariable String finder, HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();
        String operation = (String) session.getAttribute("operation");
        int count = (int) session.getAttribute("count");
        String result = "Count of ";
        switch (operation){
            case "1":
                result += "symbols:";
                break;
            case "2":
                result += "words:";
                break;
            case "3":
                result += "sentences:";
                break;
            case "4":
                result += "indents:";
                break;
        }
        result += " " + count;
        model.put("result", result);
        return "result";
    }
}
