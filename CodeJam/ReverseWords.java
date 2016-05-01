import java.util.*;
import java.io.*;

public class ReverseWords {
	public static void main(String[] args) {
		Scanner in = new Scanner(new BufferedReader(new InputStreamReader(System.in)));

		int t = in.nextInt();

		for (int h = 1; h <= t; h++) {

		String sentence = "";

		String[] words = new String[25];

		System.out.println(words);

		for (int i = 0; i < 25 && in.hasNext(); i++) {
			words[i] = in.next();
		}

		for (int i = words.length - 1; i >= 0; i--) {
			if (words[i] != null) {
				sentence += words[i] + " ";
			}
		}

		System.out.println("Case:" + h + ":" + sentence);
		}
	}
}