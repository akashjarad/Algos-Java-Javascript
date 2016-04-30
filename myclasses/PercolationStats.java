import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;
import java.lang.*;
import java.util.*;
import myclasses.*;

public class PercolationStats {

	//IllegalArgumentException if N<= 0 || T<= 0
	
	public PercolationStats(int N, int T) { //perform T experiments on NxN grid

		int testNum = T;
		double totalMean = 0.0;
		double runningMean = 0.0;

		for (int i = 1; i <= testNum; i++) {

		Percolation testperc = new Percolation(N);

		int open = 0;
		double mean = 0.0;
		double percNum = N*N;

		while (!testperc.percolates()) {
			int t1 = StdRandom.uniform(1, N+1);
			int t2 = StdRandom.uniform(1, N+1);
			if (testperc.isClosed(t1,t2)) {
				testperc.open(t1, t2);
				open++;
				}
			}

		mean = open/percNum;
		runningMean += mean;

		System.out.println("the mean is: " + mean);
	}

	totalMean = runningMean/testNum;

	System.out.println(totalMean);

	}
	/*
	public double mean() { //sample mean of percoaltion threshold

	}

	public double stddev() { //sample standard deviation of percolation threshold

	}
	public double confidenceLo() { //low endpoint of 95% confidence interval

	}

	public double confidenceHi() { //high endpoint of 95% confidence interval

	}
	*/

	public static void main(String[] args) { //test client

		//for (int j = 0; j <= Integer.parseInt(args[1]); j++) { }
		int a = Integer.parseInt(args[0]);
		int b = Integer.parseInt(args[1]);

		PercolationStats percolater = new PercolationStats(a,b);

		System.out.println(percolater);



	}
}