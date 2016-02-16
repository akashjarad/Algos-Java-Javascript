public class SumOfTwoDice {
	public static void main(String[] args) {
		
		int SIDES = 6;
		int die1 = 1 + (int) (Math.random() * SIDES);
		int die2 = 1 + (int) (Math.random() * SIDES);

		int sum = die1 + die2;

		System.out.println(sum);
	}
}