package d0407;

import java.util.Scanner;

public class FriendFind {
	private Scanner scanner;
	
	public void prepareScanner() {
		this.scanner = new Scanner(System.in);
	}
	
	public void closeScanner() {
		this.scanner.close();
	}
	
	public Scanner getScanner() {
		return this.scanner;
	}
	
	public static void main(String[] args) {
		String[] friend = {"정은서","강성훈","고용빈","기준","김민성","류지훈","박병관","박성한","박지건","박현우","손원","안찬","우상범","윤병훈","윤서준", "이승민", "이지호","최민재","한상빈"};
		
		FriendFind find = new FriendFind();
		find.prepareScanner();
		
		Scanner scanner = find.getScanner();
		
		System.out.println("번호를 입력하세요");
		int value = scanner.nextInt();
		
		if(value == 0 || value > 19) {
			System.out.println("없는 번호 입니다");
		}
		else {
			System.out.printf("%s\n",friend[value-1]);
		}
		
		System.out.println("이름을 입력하세요");
		String value1 = scanner.next();
		//System.out.println(value1);
		
		for (int i = 0; i < friend.length; i++) {
			if (friend[i].equals(value1) ) {
				System.out.printf("%s 는 %d번 입니다\n", value1, i+1);
				break;
			}
		}
		
		
		find.closeScanner();
		System.out.println("스케너 종료");
	}
}
