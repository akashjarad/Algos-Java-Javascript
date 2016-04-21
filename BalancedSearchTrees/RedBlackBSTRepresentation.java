private static final boolean RED = true;
private static final boolean BLACK = false;

private class Node
{
	Key key;
	Value val;
	Node left, right;
	boolean color; // color of parent link

}

private boolean isRed(Node x)
{
	if (x == null) return false; // null links are black
	return x.color == RED;
}