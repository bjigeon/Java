//package d0602;
//
//import java.util.Random;
//
//public class Producer implements Runnable{
//
//    private final Buffer buffer;
//
//    public Producer(Buffer buffer){
//        this.buffer = buffer;
//    }
//
//    @Override
//    public void run() {
//
//        Random random = new Random();
////        while (true){
////            try {
////                Thread.sleep(1000 + random.nextInt(2000));
////            }catch (InterruptedException e){
////                e.printStackTrace();
////            }
////
////            int value = random.nextInt();
////            buffer.add(value);
////        }
//
//        while (true)
//        {
////            synchronized (buffer){
//                try {
//                    Thread.sleep(1000 + random.nextInt(2000));
//                } catch (InterruptedException e) {
//                    throw new RuntimeException(e);
//                }
//
//                int value = random.nextInt();
//                System.out.println("생성자 : " + value);
//                buffer.add(value);
////            }
//        }
//    }
//}
