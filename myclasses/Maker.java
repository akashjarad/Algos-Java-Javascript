package myclasses;

public class Maker {

	public static int[] grid;

	public static int N;

	public static int W;

	public static int Maker(int N, int W) {

		grid = new int[N*W];

		for (int i = 0; i < N*W; i++) {
			grid[i] = i;
			}

		return grid;
	}
}