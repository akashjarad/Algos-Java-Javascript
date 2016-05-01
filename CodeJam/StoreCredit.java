import java.util.*;
import java.io.*;

public class StoreCredit {

  public static void main(String[] args) {
    Scanner in = new Scanner(new BufferedReader(new InputStreamReader(System.in)));
    int t = in.nextInt();  // 3
    int credit = in.nextInt(); // 50
    int items = in.nextInt(); // 3
    int[] itemArray = new int[items];
    int sol1 = 0;
    int sol2 = 0;

    for (int i = 1; i <= t; i++) {
    	System.out.println(items);
    	int count = 0;

    	for (int j = 0; j < items; j++) {
      	itemArray[j] = in.nextInt();
      	}
      	for (int k = 0; k < items; k++) {
      		for (int m = 0; m < itemArray.length; m++) {
      			if (itemArray[k] + itemArray[m] == credit) {
      				if (itemArray[k] < itemArray[m]) {
      					sol1 = itemArray[k];
      					sol2 = itemArray[m];
      				}
      				else {
      					sol1 = itemArray[m];
      					sol2 = itemArray[k];
      				}
      			}
      		}
      	}
      System.out.println("Case #" + i + ": " + sol1 + " " + sol2);
    }
  }
}