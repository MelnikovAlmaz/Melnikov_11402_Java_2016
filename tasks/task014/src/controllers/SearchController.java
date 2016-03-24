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
@RequestMapping("/{finder}/search")
public class SearchController {
    @RequestMapping(method = RequestMethod.GET)
    public String hiPage(ModelMap model, @PathVariable String finder) {
        switch (finder) {
            case "baidu":
                model.put("html", "<p>Baidu</p>\n" +
                        "    <form action=\"http://www.baidu.com/s\">\n" +
                        "        <input type=\"text\" name=\"wd\">\n" +
                        "        <input type=\"submit\" value=\"Search\">\n" +
                        "    </form>");
                break;
            case "bing":
                model.put("html", "<p>Bing</p>\n" +
                        "    <form action=\"http://www.bing.com\">\n" +
                        "        <input type=\"text\" name=\"q\">\n" +
                        "        <input type=\"submit\" value=\"Search\">\n" +
                        "    </form>");
                break;
            case "yahoo":
                model.put("html", "<p>Yahoo</p>\n" +
                        "    <form action=\"https://search.yahoo.com/search;_ylt=AwrBT8jbVwBWCz4ALsil87UF\">\n" +
                        "        <input type=\"text\" name=\"p\">\n" +
                        "        <input type=\"submit\" value=\"Search\">\n" +
                        "    </form>");
                break;
            case "aol":
                model.put("html", "<p>AOL</p>\n" +
                        "    <form action=\"http://www.search.aol.com\">\n" +
                        "        <input type=\"text\" name=\"q\">\n" +
                        "        <input type=\"submit\" value=\"Search\">\n" +
                        "    </form>");
                break;
        }
        return "find";
    }
}
