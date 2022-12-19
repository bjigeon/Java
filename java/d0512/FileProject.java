package d0512;

import java.io.File;
import java.util.Scanner;

public class FileProject {

    public void createFile(File dir) throws Exception{
        boolean created;
        created = dir.mkdir();
        System.out.println("디렉토리 생성");
        System.out.println(dir.getName() + "  " + created);
        System.out.println();
    }

    public void deleteFile(File dir) throws Exception{
        boolean delete;
        delete = dir.delete();
        System.out.println("디렉토리 삭제");
        System.out.println(dir.getName() + "  " + delete);
        System.out.println();
    }

    public static void main(String[] args) throws Exception{
        Scanner scanner = new Scanner(System.in);


        FileProject fileProject = new FileProject();

        String fileName = scanner.next();
        File dir = new File("/Users/bjigeon/Documents/schoolJava/src/d0512" + fileName);

        boolean con = dir.delete();
        if (con == true){
            fileProject.deleteFile(dir);
        }
        else{
            fileProject.createFile(dir);
        }

    }
}
