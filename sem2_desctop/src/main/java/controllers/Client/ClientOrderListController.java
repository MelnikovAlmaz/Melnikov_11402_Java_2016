package controllers.Client;

import environment.GameEnvironment;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import models.BookModel;
import models.BookRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import web.ServerApi;

@Component
public class ClientOrderListController extends ClientMenuController {
    @Autowired
    private GameEnvironment gameEnvironment;
    @Autowired
    private ServerApi serverApi;
    @Autowired
    private BookModel bookModel;

    @FXML
    TableView order_list_tbl;
    @FXML
    TableColumn<BookRow, String> name_col;
    @FXML
    TableColumn<BookRow, String> city_col;
    @FXML
    TableColumn<BookRow, String> from_col;
    @FXML
    TableColumn<BookRow, String> to_col;
    @FXML
    TableColumn<BookRow, String> cost_col;

    @FXML
    public void initialize(){
        name_col.setCellValueFactory(new PropertyValueFactory<>("name"));
        city_col.setCellValueFactory(new PropertyValueFactory<>("city"));
        from_col.setCellValueFactory(new PropertyValueFactory<>("from"));
        to_col.setCellValueFactory(new PropertyValueFactory<>("to"));
        cost_col.setCellValueFactory(new PropertyValueFactory<>("cost"));
        order_list_tbl.setItems(bookModel.getBooks(gameEnvironment.getPassenger().getId()));
    }
}
