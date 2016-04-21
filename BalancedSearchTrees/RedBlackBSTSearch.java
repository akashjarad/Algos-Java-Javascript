public Val get(Key key) {
	Node x = root;
	while (x != null) {
		int cmp = key.compareTo(x.key);
		if (cmp < 0) x = x.left;
		else if (cmp > 0) x = x.right;
		else return x.val;
	}
	return null;
}