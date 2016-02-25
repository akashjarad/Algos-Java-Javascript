import myclasses.Maker;
import java.util.*;
import myclasses.UF;

public class Percolation {

	public static void main(String[] args) {

		boolean p = false;

		int i = 0;

		Maker gridT = new Maker();

		UF unionizer = new UF(25);

		System.out.println(unionizer.count());

		int grid[] = gridT.MakerFun(5,5);

		for (i = 0; i < grid.length; i++) {
			if (i % 5 == 0)
				System.out.print("\n[ ]");
			else
				System.out.print("[ ]");
		} 

		//need isOpen method

		while (p == false) {

			double rando = Math.floor(Math.random() * 100); //needs to run until all are filled or it percolates

			int randoInt = (int)rando;

			if (randoInt < grid.length) {

			grid[randoInt] = 101; //101 or true to connect values meaing "on" or "filled"

			if (grid[randoInt-1] == 101) {
				unionizer.union(grid[randoInt], grid[randoInt-1]);
				}
			else if (grid[randoInt+1] == 101 && randoInt % 5 != 0) {
				unionizer.union(grid[randoInt], grid[randoInt+1]);
			}
			else if (grid[randoInt+5] == 101) {
				unionizer.union(grid[randoInt], grid[randoInt+5]);
			}
			else if (grid[randoInt-5] == 101) {
				unionizer.union(grid[randoInt], grid[randoInt-5]);
			}


			System.out.println(randoInt);

			p = true;
			}
		}
	}
}