package task008.component;

import com.sun.media.sound.JavaSoundAudioClip;
import data.AnswerPacket;
import data.QuestionPacket;
import data.ResultLine;
import data.ResultsPacket;
import gui.*;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Random;

/**
 * Created by reflection.Author on 19.11.2015
 */
public class Client {
    private int port = 3456;
    private String host = "localhost";
    private String username;
    @Autowired
    private GameGui gameGui;

    public Client() {
        Random random = new Random();
        username = String.valueOf(random.nextInt(10000));
        openMainPage();
    }

    private void openMainPage(){
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final MainPage mainPage = gameGui.showMainPage();
                mainPage.getNewGameBtn().addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        openGamePage();
                    }
                });
                mainPage.getConfigBtn().addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        openConfigPage();
                    }
                });
                mainPage.getExitBtn().addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        mainPage.setVisible(false);
                        System.exit(0);
                    }
                });
            }
        });
        thread.start();
    }
    private void openGamePage(){
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                GamePage gamePage = gameGui.showGamePage();
                try {
                    Socket s = new Socket(host, port);
                    System.out.println("Socket connect");
                    boolean isConnected = true;
                    final ObjectOutputStream os = new ObjectOutputStream(s.getOutputStream());
                    ObjectInputStream is = new ObjectInputStream(s.getInputStream());

                    os.writeObject(username);

                    ActionListener buttonListener = new ActionListener() {
                        @Override
                        public void actionPerformed(ActionEvent e) {
                            JButton jButton = (JButton)e.getSource();
                            try {
                                AnswerPacket answerPacket = new AnswerPacket(jButton.getText());
                                os.writeObject(answerPacket);
                                os.flush();
                            } catch (IOException e1) {
                                e1.printStackTrace();
                            }
                        }
                    };

                    gamePage.answerBtn1.addActionListener(buttonListener);
                    gamePage.answerBtn2.addActionListener(buttonListener);
                    gamePage.answerBtn3.addActionListener(buttonListener);
                    gamePage.answerBtn4.addActionListener(buttonListener);

                    while (isConnected){
                        QuestionPacket questionPacket = (QuestionPacket)is.readObject();
                        fillGamePage(gamePage, questionPacket);
                        isConnected = (is.readInt() == 0);
                    }
                    ResultsPacket resultsPacket = (ResultsPacket) is.readObject();
                    openResultsPage(resultsPacket);
                } catch (UnknownHostException e) {
                    openMainPage();
                } catch (IOException e) {
                    e.printStackTrace();
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }
            }
        });
        thread.start();
    }
    private void openConfigPage(){
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final ConfigPage configPage = gameGui.showConfigPage();
                configPage.getUsernameTextField().setText(username);
                configPage.getUsernameTextField().addKeyListener(new KeyListener() {
                    @Override
                    public void keyTyped(KeyEvent e) {
                        configPage.getSavedLabel().setText("");
                    }

                    @Override
                    public void keyPressed(KeyEvent e) {

                    }

                    @Override
                    public void keyReleased(KeyEvent e) {

                    }
                });
                configPage.getIpTextField().setText(host);
                configPage.getIpTextField().addKeyListener(new KeyListener() {
                    @Override
                    public void keyTyped(KeyEvent e) {
                        configPage.getSavedLabel().setText("");
                    }

                    @Override
                    public void keyPressed(KeyEvent e) {

                    }

                    @Override
                    public void keyReleased(KeyEvent e) {

                    }
                });
                configPage.getSaveBtn().addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        if (!configPage.getIpTextField().getText().equals("")) {
                            host = configPage.getIpTextField().getText();
                        }
                        if (!configPage.getUsernameTextField().getText().equals("")) {
                            username = configPage.getUsernameTextField().getText();
                        }
                        configPage.getSavedLabel().setText("Ваши настройки сохранены.");
                    }
                });
                configPage.getBackBtn().addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        openMainPage();
                    }
                });
            }
        });
        thread.start();
    }
    private void openResultsPage(final ResultsPacket resultsPacket){
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                ResultsPage resultsPage = gameGui.showResultPage();
                feelResultPage(resultsPage, resultsPacket.getResults());
                resultsPage.getBackBtn().addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        openMainPage();
                    }
                });
            }
        });
        thread.start();
    }
    private void fillGamePage(GamePage gamePage, QuestionPacket questionPacket) {
        gamePage.questionCountLabel.setText("Вопрос: " + questionPacket.currentQuestion + "/" + questionPacket.questionCount);
        gamePage.questionField.setText(questionPacket.question.question);
        gamePage.scoreLabel.setText("Очков: " + questionPacket.score);
        gamePage.answerBtn1.setText(questionPacket.question.answer1);
        gamePage.answerBtn2.setText(questionPacket.question.answer2);
        gamePage.answerBtn3.setText(questionPacket.question.answer3);
        gamePage.answerBtn4.setText(questionPacket.question.answer4);
    }
    private void feelResultPage(ResultsPage resultsPage, ArrayList<ResultLine> results){
        String[] list = new String[results.size()];
        results.sort(new Comparator<ResultLine>() {
            @Override
            public int compare(ResultLine o1, ResultLine o2) {
                return (o1.getScore() > o2.getScore()) ? -1 : 1;
            }
        });
        for (int i = 0; i< results.size(); i++) {
            ResultLine result = results.get(i);
            String listItem = (i + 1) + ". " + result.getUsername() + ":    " + result.getScore();
            resultsPage.getListModel().addElement(listItem);
        }
        resultsPage.getResultList().setModel(resultsPage.getListModel());
    }
}
