package d0519;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Divider {
    private final Scanner scanner;

    public Divider(){
        this.scanner = new Scanner(System.in);
    }

    private int calculate(int value1, int value2){
        return value1 / value2;
    }

    public void saveResult(String file, int value1, int value2, int result) {
        try {
            File filepath = new File(file);

            FileWriter fw = new FileWriter(filepath);
            BufferedWriter writer = new BufferedWriter(fw);

            writer.write(value1 + " / " + value2 + " = " + result);

            writer.close();
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }

    public void execute(){

        try {
            System.out.println("두 정수를 입력하세요.");

            int value1 = scanner.nextInt();
            int value2 = scanner.nextInt();

            int result = calculate(value1,value2);
            System.out.printf("%d / %d = %d\n",value1,value2,result);

            //계산식과 결과를 파일로 저장한다
            boolean saved = saveResult1("/Users/bjigeon/Documents/schoolJava/src/d0519/divide.txt",value1,value2,result);

        }catch (InputMismatchException e){
            System.out.println("문자가 아닌 숫자를 입력하세요");
        }catch (ArithmeticException e){
            System.out.println("0으로 나눌 수 없습니다");
        }finally {
            scanner.close();
            System.out.println("프로그램을 종료합니다");
        }

//        catch (Exception e){
//            System.out.println("예외가 발생 하였습니다" + e);
//
//            if (e instanceof InputMismatchException){
//                System.out.println("문자가 아닌 숫자를 입력하세요");
//            }
//            else if(e instanceof ArithmeticException){
//                System.out.println("0으로 나눌 수 없습니다");
//            }
//        }

    }

    public boolean saveResult1(String filePath, int value1, int value2, int result){

        String str = String.format("%d / %d = %d\n",value1,value2,result);

        OutputStream os = null;
        try {
            File file = new File(filePath);
            os = new FileOutputStream(file);

            os.write(str.getBytes());

            //리턴을 만나기전에 finally 실행
            return true;
        }
        catch (IOException e){
            System.out.println("파일에 저장할 수 없습니다");
        }
        finally {
            System.out.println("자원을 해제합니다");
            if (os != null){
                try {
                    os.close();
                }catch (IOException e){}
            }
        }

        return false;
    }

    public static void main(String[] args) {
        new Divider().execute();
    }
}


