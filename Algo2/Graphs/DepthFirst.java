Paths paths = new Paths(G, s);

for (int v = 0; v < G.V(); v++)
	if (paths.hasPathTo(v))
		StdOut.println(v);

public class DepthFirstPaths
{
	private boolean[] marked;
	private int edgeTo;
	private int s;

	public DepthFirstPaths(Graph G, int s)
	{
		// initialized graph
		dfs(G, s);
	}

	private void dfs(Graph G, int v)
	{
		marked[v] = true;
		for (int w : G.adj(v))
			if (!marked[w])
			{
				dfs(G, w);
				edgeTo[w] = v;
			}
		}
}