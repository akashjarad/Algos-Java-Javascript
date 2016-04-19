/* ABSTRACTION BASED ON ASSOCIATE ARRAY

public class ST<Key, Value>
------------------------------
ST()									Create a Symbol Table
void put(Key key, Value value)			Put key-value pair into the Table a[key] = value

Value get(Key key)						return value of given key 		a[key] (null if key is absent)
void delete(Key key)					remove key and its value
boolean contains(Key key)				is there a value paired with the key?
boolean isEmpty()						is the table empty?
int size()								number of key-value pairs in the symbol table

Iterable<Key> keys()					all the keys in the table


*/

public class SymbolTable {

}