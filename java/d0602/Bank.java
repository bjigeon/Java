//package d0602;
//
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Random;
//
//public class Bank {
//    //         은행 관리
//    private final Map<String, Account> accountMap = new HashMap<String, Account>();
//
//    public void makeAccount(String name){
//        Account account = new Account(name);
//        accountMap.put(name,account);
//    }
//
//    public void deposit(String name, int amount){
//        Account account = accountMap.get(name);
//
//        synchronized(account){
//            if (account != null){
//                int balance = account.getBalance();
//                System.out.printf("%s : 잔액 읽어옴 - %d\n",Thread.currentThread().getName(),balance);
//
//                try {
//                    Thread.sleep(new Random().nextInt(1000));
//                }catch (InterruptedException e){
//                    e.printStackTrace();
//                }
//
//                System.out.printf("%s : 적립 시작 - %d\n",Thread.currentThread().getName(),balance);
//
//                int newBalance = balance + amount;
//
//                account.setBalance(newBalance);
//
//                System.out.printf("%s : 적립 완료 - %d\n",Thread.currentThread().getName(),account.getBalance());
//            }
//        }
//
//    }
//
//    public Account getAccount(String name){
//        return accountMap.get(name);
//    }
//
//    public static void main(String[] args) {
//        Bank bank = new Bank();
//
//        bank.makeAccount("홍길동");
//
//        Thread thread1 = new Thread(new DepositThread(bank,50000));
//        thread1.start();
//
//        Thread thread2 = new Thread(new DepositThread(bank,30000));
//        thread2.start();
//
//        try {
//            thread1.join();
//            thread2.join();
//        }catch (InterruptedException e){
//            e.printStackTrace();
//        }
//
//        Account account = bank.getAccount("홍길동");
//        System.out.println(account.getName() + "계좌의 잔액은 " + account.getBalance() + "원 입니다");
//    }
//
//}
