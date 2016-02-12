(seed = 931196)
Give the id[] array that results from the following sequence of 9 union
operations on a set of 10 items using the weighted quick-union algorithm from lecture.

    6-3 8-7 9-6 0-5 3-1 9-2 1-4 8-0 6-7 

Your answer should be a sequence of 10 integers, separated by whitespace.

Recall: when joining two trees of equal size, our weighted quick union convention is to
make the root of the second tree point to the root of the first tree. Also, our weighted
quick union algorithm performs union by size (number of nodes) -  not union by height -
and does not do path compression.