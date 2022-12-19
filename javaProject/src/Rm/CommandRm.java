package Rm;

import java.io.File;
import java.util.Scanner;

public class CommandRm extends AbstractCommand{

    Scanner scanner = new Scanner(System.in);

    File file = new File("");

    public CommandRm(File currentDirectory,String commandLine){
        super(currentDirectory, commandLine);
    }

    public boolean DeleteQuestion(){
        System.out.println("정말로 삭제하시겠습니까? (y OR Y)");
        String answer = scanner.next();

        if (answer.equals("y") || answer.equals("Y")){
            file.delete();
            return true;
        }
        return false;
    }

    public void DeleteFile(){
        if (file.exists()){
            if (DeleteQuestion()){
                System.out.println("파일을 삭제 하였습니다");
            }
            else {
                System.out.println("파일을 삭제 하지 않았습니다");
            }
        }
        else {
            System.out.println("파일을 찾을 수 없습니다");
        }

    }

    @Override
    public File executeCommand(){
        String[] fileName = commandLine.split(" ");
        file = new File(currentDirectory + System.getProperty("file.separator") + fileName[fileName.length - 1]);

        DeleteFile();

        return currentDirectory;

    }
}
