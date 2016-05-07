package utils;

import entity.Book;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.web.servlet.view.document.AbstractExcelView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

public class BookListExelView extends AbstractExcelView {

    @Override
    protected void buildExcelDocument(Map model, HSSFWorkbook workbook, HttpServletRequest request, HttpServletResponse response)
            throws Exception {

        HSSFSheet excelSheet = workbook.createSheet("Список заказов");
        setExcelHeader(excelSheet);

        List bookList = (List) model.get("bookList");
        setExcelRows(excelSheet,bookList);

    }

    public void setExcelHeader(HSSFSheet excelSheet) {
        HSSFRow excelHeader = excelSheet.createRow(0);
        excelHeader.createCell(0).setCellValue("№");
        excelHeader.createCell(1).setCellValue("Назименование");
        excelHeader.createCell(2).setCellValue("Откуда");
        excelHeader.createCell(3).setCellValue("Куда");
        excelHeader.createCell(4).setCellValue("Стоимость");
    }

    public void setExcelRows(HSSFSheet excelSheet, List<Book> bookList){
        int record = 1;
        for (Book book : bookList) {
            HSSFRow excelRow = excelSheet.createRow(record++);
            excelRow.createCell(0).setCellValue(book.getId());
            excelRow.createCell(1).setCellValue(book.getName());
            excelRow.createCell(2).setCellValue(book.getFromstreet() + " " + book.getFromhouse());
            excelRow.createCell(3).setCellValue(book.getTostreet() + " " + book.getTohouse());
            excelRow.createCell(4).setCellValue(book.getCost());
        }
    }
}
