package task008.component;

import javax.swing.*;
import java.awt.*;

/**
 * Created by reflection.Author on 26.11.2015.
 */
public class GameGui extends JFrame{
    private final int WIDTH = 600;
    private final int HEIGHT = 600;
    private int currentPanelIndex = 0;

    public GameGui(String title) throws HeadlessException {
        super(title);
        setLayout(new GridLayout(1, 1));
        setBounds(300, 100, WIDTH, HEIGHT);
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setVisible(true);
    }
    public MainPage showMainPage(){
        MainPage mainPage = new MainPage(WIDTH, HEIGHT);
        setContentPane(mainPage);
        return mainPage;
    }
    public GamePage showGamePage(){
        GamePage gamePage = new GamePage(WIDTH, HEIGHT);
        setContentPane(gamePage);
        return gamePage;
    }
    public ConfigPage showConfigPage(){
        ConfigPage configPage = new ConfigPage(WIDTH, HEIGHT);
        setContentPane(configPage);
        return configPage;
    }
    public ResultsPage showResultPage(){
        ResultsPage resultsPage = new ResultsPage(WIDTH, HEIGHT);
        setContentPane(resultsPage);
        return resultsPage;
    }
}
