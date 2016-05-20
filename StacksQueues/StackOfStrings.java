public class StackOfStrings {
	
	private RiskNode first = null;

	private RiskNode {
		String thing;
		RiskNode next;
	}

	private void push(String something) {

		String oldfirst = first;
		first = new RiskNode();
		first.thing = something;
		first.next = oldfirst;
	}

	private String pop(String something) {

		String popped = first.thing;
		first = first.next;
		return popped;
	}


	
}