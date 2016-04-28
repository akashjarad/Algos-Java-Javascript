public class Digraph {
	Digraph(int V) //create empty digraph with V vertices

	Digraph(In in) //or create digraph from input stream

	void addEdge(int v, int w) //add a directed edge v->w

	Iterable<Integer> adj(int v) //vertices pointing from v

	int V() // get number of vertices

	int E() // get number of edges

	Digraph reverse() reverse of the digraph

	String toString() //string representation
}

In in = new In(args[0]);

Digraph G = new Digraph(in);

for (ing v = 0;v < G.V(); v++)
	for (int w : G.adj(v))
		StdOut.pringln(v + "->" + w);