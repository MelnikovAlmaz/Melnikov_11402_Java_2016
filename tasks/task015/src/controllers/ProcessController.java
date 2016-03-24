package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by Almaz on 23.03.2016.
 */
@Controller
@RequestMapping("")
public class ProcessController {
    @RequestMapping(method = RequestMethod.GET)
    public String hiPage(ModelMap model) {
        return "index";
    }

    @RequestMapping(method = RequestMethod.POST)
    public void indexPostPage(ModelMap model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        String text = request.getParameter("text");
        String operation = request.getParameter("operation");
        int count = 0;
        switch (operation){
            case "1":
                count = symbolCount(text);
                break;
            case "2":
                count = wordCount(text);
                break;
            case "3":
                count = sentenceCount(text);
                break;
            case "4":
                count = indentCount(text);
                break;
        }
        session.setAttribute("count", count);
        session.setAttribute("operation", operation);
        response.sendRedirect("/result");
    }
    private int symbolCount(String text){
        int count = text.length();
        return count;
    }

    private int wordCount(String text){
        String[] wordList = text.split(" ");
        int count = wordList.length;
        return count;
    }

    private int sentenceCount(String text){
        String[] wordList = text.split("\\.");
        int count = wordList.length;
        return count;
    }

    private int indentCount(String text){
        String[] wordList = text.split("\\n");
        int count = wordList.length;
        return count;
    }
}
