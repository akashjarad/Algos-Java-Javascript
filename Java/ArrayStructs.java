public class ArrayStructs {

	private int[] Array1 = new int[50];

	private int arraySize = 10;

	public void generateRandom() {

		for (int i = 0; i < arraySize; i++) {
			Array1[i] = (int)(Math.random()*10)+10;
		}
	}

	public void printArray() {
		System.out.println("----------");
		for (int i = 0; i < arraySize; i++) {
			System.out.print("| " + i + " | ");
			System.out.println(Array1[i] + " |");

			System.out.println("----------");
		}
	}

	public int getValueAtIndex(int index) {
		if (index < arraySize) return Array1[index];
		return 0;
	}
	
	public static void main(String[] args) {

		ArrayStructs newArray = new ArrayStructs();

		newArray.generateRandom();

		newArray.printArray();

		System.out.println(newArray.getValueAtIndex(3));
	}
}