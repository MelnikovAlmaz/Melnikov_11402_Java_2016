package task011;

import models.Topic;
import models.User;
import repositories.TopicsRep;
import repositories.UsersRep;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by Almaz on 14.10.2015.
 */
@WebServlet(name = "servlets.HomeServlet")
public class HomeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        response.setContentType("text/html;charset=UTF-8");
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("username")) {
                    session.setAttribute("current_user", cookie.getValue());
                }
            }
        }
        User current_user = UsersRep.getUserByName((String) session.getAttribute("current_user"));
        Configuration cfg = ConfigSingleton.getConfig(getServletContext());
        Template tmpl = cfg.getTemplate("home/home.ftl");
        HashMap<String, Object> args = new HashMap<>();
        ArrayList<Topic> topicArrayList = TopicsRep.getAllTopics();
        args.put("topics", topicArrayList);
        args.put("current_user", current_user);
        try {
            tmpl.process(args, response.getWriter());
        } catch (TemplateException e) {
            e.printStackTrace();
        }
    }
}
