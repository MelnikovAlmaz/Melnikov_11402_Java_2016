package service.impl;

import entity.Feedback;
import form.FeedbackForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.CityRepository;
import repository.FeedBackRepository;
import service.FeedBackService;

import java.util.List;

/**
 * Created by Almaz on 04.05.2016.
 */
@Service
public class FeedBackServiceImpl implements FeedBackService{
    @Autowired
    FeedBackRepository feedBackRepository;
    @Autowired
    CityRepository cityRepository;

    @Override
    public Feedback getFeedBackById(Integer id) {
        return feedBackRepository.findOneById(id);
    }

    @Override
    public Feedback addNewFeedBack(FeedbackForm feedbackForm) {
        Feedback feedback = new Feedback();
        feedback.setCity(cityRepository.findOneById(feedbackForm.getCity()));
        feedback.setDate(feedbackForm.getDate());
        feedback.setSubject(feedbackForm.getSubject());
        feedback.setAdditional(feedbackForm.getAdditional());
        feedback.setPhone(feedbackForm.getPhone());
        return feedBackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getAllFeedBack() {
        return feedBackRepository.findAll();
    }
}
