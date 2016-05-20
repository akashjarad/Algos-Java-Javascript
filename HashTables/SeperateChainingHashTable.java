public class SeperateChainingHashTable<Key, Value> {
	
	int M = 97;
	private Node[] st = new Node[M];

	private static class Node {

		private Object key;
		private Object val;
		private Node next;
	}
}