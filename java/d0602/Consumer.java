//package d0602;
//
//public class Consumer implements Runnable{
//    private final Buffer buffer;
//
//    public Consumer(Buffer buffer) {
//        this.buffer = buffer;
//    }
//
//    @Override
//    public void run() {
//        while (true) {
//
//            synchronized (buffer) {
//                try {
//                    buffer.wait();
//                    int value = buffer.get();
//                    System.out.println("¼ýÀÚ " + value + "À» Ã³¸®ÇÕ´Ï´Ù.");
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//
//
//            }
//
//        }
//
//    }
//}
