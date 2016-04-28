import edu.princeton.cs.algs4.WeightedQuickUnionUF;
import java.util.*;


public class Percolation {

	private WeightedQuickUnionUF percArray;
	private boolean[] mapOpen;
	private int N = 0;
	private int top = 0;
	private int bottom;
	private int size;

	public Percolation(int N) {
		size = N;
		bottom = size * size+1;
		mapOpen = new boolean[size*size];
		percArray = new WeightedQuickUnionUF(size * size + 2);
	}

	public void open(int i, int j) {
		if (i < 1 || i > size || j < 1 || j > size) {
			throw new java.lang.IndexOutOfBoundsException();
			}

		mapOpen[(i-1) * N + (j-1)] = true;

		if (i == 1) {
			percArray.union(getQFIndex(i,j), top);
		}

		if (i == size) {
			percArray.union(getQFIndex(i,j), bottom);
		}

		if (j > 1 && isOpen(i, j - 1)) { // left
           percArray.union(getQFIndex(i, j), getQFIndex(i, j - 1));
        }
        if (j < size && isOpen(i, j + 1)) { // right
            percArray.union(getQFIndex(i, j), getQFIndex(i, j + 1));
        }
        if (i > 1 && isOpen(i - 1, j)) { // bottom
            percArray.union(getQFIndex(i, j), getQFIndex(i - 1, j));
        }
        if (i < size && isOpen(i + 1, j)) { //top
            percArray.union(getQFIndex(i, j), getQFIndex(i + 1, j));
        }
	}

	public int getQFIndex(int i, int j) {
		return size * (i - 1) + j;
	}

	public boolean percolates() {
		return percArray.connected(top, bottom);
	}

	public boolean isOpen(int i, int j) {
		return (mapOpen[(N * (i-1)) + (j-1)] == true);
	}

	public boolean isClosed(int i, int j) {
		return (mapOpen[(N * (i-1)) + (j-1)] != true);
	}

	public boolean isFull(int i, int j) {
		if (0 < i && i <= size && 0 < j && j <= size) {
            return percArray.connected(top, getQFIndex(i,j));
        } else {
            throw new IndexOutOfBoundsException();
        }
	}

}