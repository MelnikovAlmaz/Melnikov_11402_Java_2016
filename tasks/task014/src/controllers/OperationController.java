package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Almaz on 23.03.2016.
 */
@Controller
@RequestMapping("/{method}/{a}/{b}")
public class OperationController {
    @RequestMapping(method = RequestMethod.GET)
    public String hiPage(ModelMap model, @PathVariable String method, @PathVariable String a, @PathVariable String b) {
        model.put("a",(Integer.parseInt(a)));
        model.put("b",(Integer.parseInt(b)));
        if(method.equals("add")){
            model.put("result", "a + b = " + (Integer.parseInt(a) + Integer.parseInt(b)));
        }
        else {
            model.put("result", "a * b = " + (Integer.parseInt(a) * Integer.parseInt(b)));
        }
        return "operation";
    }
}
