//package Project;
//
//import java.io.File;
//import java.util.Scanner;
//
//public class CommandMkdir extends AbstractCommand {
//    public CommandMkdir(File currentDirectory, String commandLine) {
//        super(currentDirectory, commandLine);
//    }
//
//    public File executeCommand() {
//        File filepath = this.currentDirectory;
//        Scanner scanner = new Scanner(System.in);
//        String fileName = scanner.nextLine();
//
//        filepath.mkdir();
//        filepath.renameTo(new File(fileName));
//        System.out.println("디렉토리(폴더)를 생성 하였습니다");
//        return this.currentDirectory;
//    }
//}
//
