package utils;

import com.lowagie.text.BadElementException;
import com.lowagie.text.Document;
import com.lowagie.text.Table;
import com.lowagie.text.pdf.PdfWriter;
import entity.Book;
import org.springframework.web.servlet.view.document.AbstractPdfView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

public class BookListPDFView extends AbstractPdfView {
    @Override
    protected void buildPdfDocument(Map model, Document document,
                                    PdfWriter writer, HttpServletRequest request,
                                    HttpServletResponse response) throws Exception {

        List bookList = (List) model.get("bookList");
        Table table = new Table(5);
        table.setAlignment(1);
        table = setPdfHeader(table);
        table = setPdfRows(table,bookList);
        document.add(table);
    }

    public Table setPdfHeader(Table table) throws BadElementException {
        table.addCell("id");
        table.addCell("Name");
        table.addCell("From");
        table.addCell("To");
        table.addCell("Cost");
        return table;
    }

    public Table setPdfRows(Table table, List<Book> bookList) throws BadElementException {
        for (Book book : bookList) {
            table.addCell(String.valueOf(book.getId()));
            table.addCell(book.getName());
            table.addCell(book.getFromstreet() + " " + book.getFromhouse());
            table.addCell(book.getTostreet() + " " + book.getTohouse());
            table.addCell(String.valueOf(book.getCost()));
        }
        return table;
    }
}
