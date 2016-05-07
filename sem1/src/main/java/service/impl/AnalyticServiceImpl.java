package service.impl;

import form.BasicInformationForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.BookRepository;
import repository.DriverRepository;
import repository.impl.AnalyticRepositoryImpl;
import service.AnalyticService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Service
public class AnalyticServiceImpl implements AnalyticService {
    @Autowired
    BookRepository bookRepository;

    @Autowired
    AnalyticRepositoryImpl analyticRepositoryImpl;

    @Autowired
    DriverRepository driverRepository;

    @Override
    public ArrayList<Integer> findAllInMonthByDriverId(int driverId, String date) {
        String[] yearMonth = date.split("-");
        Integer year = Integer.parseInt(yearMonth[0]);
        Integer month = Integer.parseInt(yearMonth[1]);
        return analyticRepositoryImpl.findAllInMonthByDriver_Id(driverId, month, year);
    }

    @Override
    public ArrayList<Integer> findAllInYearByDriverId(int driverId, int year) {
        return analyticRepositoryImpl.findAllInYearByDriver_Id(driverId, year);
    }

    @Override
    public BasicInformationForm findBasicInfoByDriver_Id(int driverId){
        return analyticRepositoryImpl.findBasicInfoByDriver_Id(driverId);
    }
}
