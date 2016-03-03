var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)
(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:3(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

//parse_url has exec() method

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port',
'path', 'query', 'hash'];

var blanks = '     ';

var i;

for (i = 0; i < names.length; i += 1) {
	document.writeln(names[i] + ':' + 
		blanks.substring(names[i].length), result[i]);
}

url: http://www.ora.com:80/goodparts?q#fragment
scheme: http
slash: //
host: www.ora.com
port: 80
path: goodparts
query: q
hash: fragment

^ indicated the beginning of a substring

(?:([A-Za-z]+):)?

this matches a scheme name, only if its followed
by a colon :
The (?:...) is a non-capturing group
the suffix ? indicated the group is optional
meaning repeat zero or one time;
(...) is a capturing group
copies the text it matches ([A-Za-z]+) and places
in the result array
each capturing group given a number
first capture group is 1
result[1]

The [...] is a character class
[A-Za-z]
contains 26 uppercase and 26 lowercase letters
hypens are ranges. A-Za-z
the suffix + indicated the character class will be
matched one or more times
the group is followed by the : character, which is matched
literally
):)?

(\/{0,3})
Capture group 2. result[1]

\/ matches a forward slash /
escaped with a backslash \ so it is not misinterpreted at end of reg ex literally

{0,3} indicated the / will be matched 0,1,2, or 3 times 

Capturing group number 3:
([0-9.\-A-Za-z]+)

this capture group matches a host name
which is made up of one or more digits, letters
or . or -

The - is being escaped with the backslash \-
to prevent it from being confused with the 
range hyphen

(?::(\d+))?

This next factor optionally matches a port number
which is a sequence of one or more digits
preceded by a :

\d represent a digit character

The series of one or more digits will be
capturing group 4

(?:\/([^?#]*))?

optional group because it starts with (?

[^?#]

character class beginning with ^ means NOT
? or # are not included 

its sloppy because anything that isnt ? or #
could be control characters, line-ending characters,
and many other characters


* indicates character class is matched zero or more times

next capture group is again optional

(?:\?([^#]*))?

contains 0 or more characters that are not #

(?:#(.*))?

final optional group
begins with #

The . matches any character except a line-ending
character $

$

$ represents the end of the string.