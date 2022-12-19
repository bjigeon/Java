package Rm;

import java.io.File;

public class CommandExit extends AbstractCommand {
    public CommandExit(File currentDirectory, String commandLine) {
        super(currentDirectory, commandLine);
    }

    public File executeCommand() {
        System.out.println("Terminating simple commander");
        return this.currentDirectory;
    }

    public boolean isExitCondition() {
        return true;
    }
}
