package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by Almaz on 15.10.2015.
 */
public class DbDriverSingleton {
    private static Connection dbConnection;
    public static Connection getDbConnection() throws SQLException, ClassNotFoundException {
        if (dbConnection == null){
            Class.forName("org.postgresql.Driver");
            dbConnection = DriverManager
                    .getConnection("jdbc:postgresql://localhost:5432/TaxiAlmaz",
                            "postgres", "537733a");
        }
        return dbConnection;
    }
}
