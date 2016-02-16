public class UseArgument {
	public static void main(String[] args) {
		System.out.print("hi ");
		System.out.print(args.length > 0 ? args[0] + " how are you?" : ", whats your name?");
	}
}