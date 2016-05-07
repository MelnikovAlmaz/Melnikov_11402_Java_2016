package service;

import form.BasicInformationForm;

import java.util.ArrayList;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface AnalyticService {
    ArrayList<Integer> findAllInMonthByDriverId(int driverId, String date);
    ArrayList<Integer> findAllInYearByDriverId(int driverId, int year);
    BasicInformationForm findBasicInfoByDriver_Id(int driverId);
}
