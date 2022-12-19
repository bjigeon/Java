package d0407;

import java.util.Arrays;
import java.util.Iterator;

public class ArrayStudy {
	public void studyArray() {
		int[] array1 = new int[10];
		int array2[];
		
		String[] name = new String[5];
		
		int[] values = {1,2,3,4,5};
		
		//colors 라는 문자열 타입의 배열을 선언하고, 값을 초기화 해 보세요.
		String[] colors = {"빨강","노랑","파랑","초록","보라"};
		
		System.out.println(colors[1]);
		colors[4] = "분홍";
		
		printLastValue(colors);
		
//		String myColor = colors[5];
//		System.out.println(myColor);
		
		//예외가 발생하면 그 줄에서 멈춤
		
		printColors(colors);
		
		String[] colors2 = colors;
		colors2[2]="blue";
//		System.out.println(colors[2]);

		
		ArrayCopy arrayCopy = new ArrayCopy();
		String[] colors3 = arrayCopy.copy(colors);
		colors3[3] = "green";
		System.out.println(colors[3]);
		
		
		ArrayCopy intCopy = new ArrayCopy();
		int[] value2 = intCopy.copyInt(values);
		System.out.println("value : " + Arrays.toString(values));
		value2[3] = 100;
		System.out.println("value2 : " + Arrays.toString(value2));
		
		
		System.out.println("colors : "+ Arrays.toString(colors));
		System.out.println("colors2 : "+ Arrays.toString(colors2));
		System.out.println("colors3 : "+ Arrays.toString(colors3));
		
		
	
		
	}
	
	
	
	
	public void printLastValue(String[] values) {
		int length = values.length;
		System.out.println(values[length-1]);
	}
	
	public void printColors(String[] colors) {
		for(int i = 0; i < colors.length; i++) {
			System.out.printf("%d - %s\n",i,colors[i]);
		}
		
		for (String color : colors) {
			System.out.println(color);
		}
	}
	
	public static void main(String[] args) {
		ArrayStudy study = new ArrayStudy();
		study.studyArray();
	}
}
