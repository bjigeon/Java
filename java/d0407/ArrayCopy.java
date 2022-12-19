package d0407;

import javax.naming.spi.DirStateFactory.Result;

public class ArrayCopy {
	
	public String[] copy(String[] src) {
		String[] result = new String[src.length];
		
		for (int i = 0; i < src.length; i++) {
			result[i]= src[i];
		}
		
		return result;
	}
	
	public int[] copyInt(int[] src) {
		int[] result = new int[src.length];
		
		for (int i = 0; i < src.length; i++) {
			result[i] = src[i]; 
		}
		
		return result;
	}
}
