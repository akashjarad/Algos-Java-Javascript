import java.util.Comparator;
import java.lang.*;
import edu.princeton.cs.algs4.StdDraw;

public class Point implements Comparable<Point> {

	public final Comparator<Point> SLOPE_ORDER = new SlopeOrder();

    private final int x;     // x-coordinate of this point
    private final int y;     // y-coordinate of this point

    /**
     * Initializes a new point.
     *
     * @param  x the <em>x</em>-coordinate of the point
     * @param  y the <em>y</em>-coordinate of the point
     */
    public Point(int x, int y) {
        /* DO NOT MODIFY */
        this.x = x;
        this.y = y;
    }

    /**
     * Draws this point to standard draw.
     */
    public void draw() {
        /* DO NOT MODIFY */
        StdDraw.point(x, y);
    }

    /**
     * Draws the line segment between this point and the specified point
     * to standard draw.
     *
     * @param that the other point
     */
    public void drawTo(Point that) {
        /* DO NOT MODIFY */
        StdDraw.line(this.x, this.y, that.x, that.y);
    }

    /**
     * Returns the slope between this point and the specified point.
     * Formally, if the two points are (x0, y0) and (x1, y1), then the slope
     * is (y1 - y0) / (x1 - x0). For completeness, the slope is defined to be
     * +0.0 if the line segment connecting the two points is horizontal;
     * Double.POSITIVE_INFINITY if the line segment is vertical;
     * and Double.NEGATIVE_INFINITY if (x0, y0) and (x1, y1) are equal.
     *
     * @param  that the other point
     * @return the slope between this point and the specified point
     */
    public double slopeTo(Point that) {
        double ycoords = (double)(that.y-this.y);
        double xcoords = (double)(that.x-this.x);

        if (xcoords == 0.0 && ycoords == 0.0) {
        	return Double.NEGATIVE_INFINITY;
        }
        if (xcoords == 0.0) {
        	return Double.POSITIVE_INFINITY;
        }
        if (ycoords == 0.0) {
        	return 0.0;
        }

        else {
        	double slope = ycoords/xcoords;
        	return slope;
        }
    }

    /**
     * Compares two points by y-coordinate, breaking ties by x-coordinate.
     * Formally, the invoking point (x0, y0) is less than the argument point
     * (x1, y1) if and only if either y0 < y1 or if y0 = y1 and x0 < x1.
     *
     * @param  that the other point
     * @return the value <tt>0</tt> if this point is equal to the argument
     *         point (x0 = x1 and y0 = y1);
     *         a negative integer if this point is less than the argument
     *         point; and a positive integer if this point is greater than the
     *         argument point
     */
    public int compareTo(Point that) {
        if (this.y == that.y) {
        	if (this.x < that.x) {
        		return -1;
        	}
        	else if (this.x == that.x) {
        		return 0;
        	}
        	else {
        		return 1;
        	}
        }
        else if (this.y < that.y) {
        	return -1;
        }
        else {
        	return 1;
        }
    }

    /**
     * Compares two points by the slope they make with this point.
     * The slope is defined as in the slopeTo() method.
     *
     * @return the Comparator that defines this ordering on points
     */

    private class SlopeOrder implements Comparator<Point> {
    	public int compare(Point p1, Point p2){
    		double a = Point.this.slopeTo(p1);
    		double b = Point.this.slopeTo(p2);

    		if (a < b) {
    			return -1;
    		}
    		else if (a > b) {
    			return 1;
    		}
    		else {
    			return 0;
    		}
    	}
    }


    /**
     * Returns a string representation of this point.
     * This method is provided for debugging;
     * your program should not rely on the format of the string representation.
     *
     * @return a string representation of this point
     */
    public String toString() {
        /* DO NOT MODIFY */
        return "(" + x + ", " + y + ")";
    }

    /**
     * Unit tests the Point data type.
     */
    public static void main(String[] args) {
        Point origin = new Point(2,4);
        Point s1 = new Point(2,5);
        Point s2 = new Point(0,2);
        Point s3 = new Point(4,6);
        Point s4 = new Point(6,8);

        System.out.println(s2.slopeTo(s4));
    }
}