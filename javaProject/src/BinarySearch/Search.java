package BinarySearch;

public class Search implements Searcher{

    int left = 0;
    int right;
    int mid;

    @Override
    public int search(int[] sortedValues, int value) {
        right = sortedValues.length;

        while (left <= right){
            mid = (left + right) / 2;
            if (value == sortedValues[mid]){
                return mid;
            } else if (value < sortedValues[mid]) {
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return -1;
    }
}
