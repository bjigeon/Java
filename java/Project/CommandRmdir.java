//package Project;
//
//import java.io.File;
//
//public class CommandRmdir extends AbstractCommand {
//    public CommandRmdir(File currentDirectory, String commandLine) {
//        super(currentDirectory, commandLine);
//    }
//
//    public File executeCommand() {
//        File filepath = this.currentDirectory;
//        filepath.delete();
//        System.out.println("디렉토리(폴더)를 삭제 하였습니다");
//        return this.currentDirectory;
//    }
//}