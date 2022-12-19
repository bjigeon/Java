package Rm;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CommandLs extends AbstractCommand {

    public CommandLs(File currentDirectory, String commandLine) {
        super(currentDirectory, commandLine);
    }

    public String formatDate(Date date){
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return dateFormat.format(date);
    }

    public Date convertToDate(long unixTime){
        return new Date(unixTime);
    }

    public void printTime(File file){
        long time = file.lastModified();
        System.out.print(formatDate(convertToDate(time)) + "   ");
    }

    public  void printCheckDir(File file){
        if (file.isDirectory()){
            System.out.print("<DIR>   ");
        }
        else {
            System.out.print("        ");
        }
    }

    public void printCountSize(File file){
        long size = file.length();
        int cnt = 0;
        String Size[] = {"Byte","KB","MB","GB","TB"};

        while (size > 1024) {
            size/=1024;
            cnt++;
        }

        System.out.printf("%4d %4s  ",size,Size[cnt]);
    }
    @Override
    public File executeCommand(){
        // TODO
        File[] fileList = currentDirectory.listFiles();
        for (File file : fileList){
            printTime(file);
            printCheckDir(file);
            printCountSize(file);
            System.out.println(file);
        }

        return currentDirectory;
    }

}