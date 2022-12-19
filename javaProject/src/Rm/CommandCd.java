package Rm;

import java.io.File;

public class CommandCd extends AbstractCommand {

    public CommandCd(File currentDirectory, String commandLine) {
        super(currentDirectory, commandLine);
    }

    public void printError(){
        System.out.println("cannot find the path");
    }

    public File backDir(){
        String[] tmpdir = String.valueOf(currentDirectory).split("/");
        String backdir = String.valueOf(currentDirectory);

        for (int i = 0; i < (tmpdir[tmpdir.length - 1].length() + 1); i++){
            backdir = backdir.substring(0, backdir.length() - 1);
        }

        return currentDirectory = new File(backdir);
    }

    public File moveDir(String dir){
        File nowDir = new File(currentDirectory + "/" + dir);

        if (nowDir.exists()){
            return currentDirectory = nowDir;
        }
        else {
            printError();
            return currentDirectory;
        }

    }

    @Override
    public File executeCommand() {
        // TODO
        String[] dir = commandLine.split(" ",2);

        if (dir[1].equals("..")){
            backDir();
        }
        else {
            moveDir(dir[1]);
        }

        return currentDirectory;
    }
}