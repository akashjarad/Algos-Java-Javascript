package myclasses;

public class Maker {

	public static boolean[] grid;

	public static int N;

	public static int W;

	public static boolean[] MakerFun(int N, int W) {

		grid = new boolean[N*W];

		for (int i = 0; i < N*W; i++) {
			grid[i] = false;
			}

		return grid;
	}

	public static void main(String[] args) {
		System.out.print("hello from the main in Maker");
	}
}