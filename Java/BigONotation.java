public class BigONotation {
	private int[] theArray;
	private int arraySize;
	private int itemsInArray = 0;

	static long startTime;
	static long endTime;

	//O(1)
	public void addItemToAray(int newItem) {
	//====executes in same amount of time
	//====no matter how big array is
	theArray[itemsInArray++] = newItem;
	}

	//O(N)
	public void linearSearchForValue(int val) {
		boolean valueInArray = false;

		String indexWithValue = "";

		startTime = System.currentTimeMillis();

		for (int i = 0; i < arraySize; i++) {
			if (theArray[i] == val) {
				valueInArray = true;
				indexWithValue += i + " ";
			}
		}
		System.out.println("Value Found " + valueInArray)
		endTime = System.out.currentTimeMillis();
		System.out.println("speed of algo was: " + endTime - startTime);
	}

	public void BigONotation(int size) {
		arraySize = size;
		theArray = new int[size];
	}

	public static void main(String[] args) {

		BigONotation testAlgo = new BigONotation(10000);
		testAlgo.generateRandomArray();

		BigONotation testAlgo2 = new BigONotation(100000);
		testAlgo2.generateRandomArray();

		BigONotation testAlgo3 = new BigONotation(1000000);
		testAlgo3.generateRandomArray();

		testAlgo.linearSearchForValue(20);
		testAlgo2.linearSearchForValue(20);
		testAlgo3.linearSearchForValue(20);

	}

}