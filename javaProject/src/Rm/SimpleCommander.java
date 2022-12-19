package Rm;

import java.io.File;
import java.util.Scanner;

public class SimpleCommander {
    protected final Scanner scanner;
    protected File currentDirectory;

    public SimpleCommander() {
        this.scanner = new Scanner(System.in);
        this.currentDirectory = new File("/Users/bjigeon");
    }

    public void execute() {
        System.out.println("Simple commander started");
        AbstractCommand command = null;

        while(true) {
            this.showPrompt();

            try {
                command = this.receiveCommand();
            } catch (Exception var3) {
                System.out.println("Invalid command");
                continue;
            }

            this.currentDirectory = command.executeCommand();
            if (command.isExitCondition()) {
                this.scanner.close();
                System.out.println("Simple commander terminated");
                return;
            }
        }
    }

    protected AbstractCommand receiveCommand() throws UnknownCommandException {
        String line = this.scanner.nextLine();
        return AbstractCommand.build(this.currentDirectory, line);
    }

    protected void showPrompt() {
        StringBuilder buffer = new StringBuilder();
        String path = this.currentDirectory.getAbsolutePath();
        buffer.append(path);
        buffer.append("> ");
        System.out.print(buffer.toString());
    }
}
