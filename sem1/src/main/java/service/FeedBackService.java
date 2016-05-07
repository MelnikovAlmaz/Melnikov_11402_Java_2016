package service;

import entity.Feedback;
import form.FeedbackForm;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface FeedBackService {
    Feedback getFeedBackById(Integer id);
    Feedback addNewFeedBack(FeedbackForm feedbackForm);
    List<Feedback> getAllFeedBack();
}
