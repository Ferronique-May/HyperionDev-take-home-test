# Section A: Code Review - Python Anagram task

## Objective: 

The objective of the task was to write a program in python that takes an array of strings and groups them together, then returns the new array with the grouped anagrams.

Firstly well done on attempting the task, but lets go through how you can improve. 

## Documentation 

``````
# Code is read more often that it is writen
# - Guido said something along these lines
``````
For future task please remember that you are not only writing code to get the correct output and move past the assignment. You are also writing code for your users (whoever will be using the software you are developing - me in this case.) and other developers who will work on improving that software (your future self in this scenario). 

## Style 

Python is a white space sensitive language. There are a bunch of ideal conventions to write great python code. Perhaps taking a quick glance over [PEP 8](https://peps.python.org/pep-0008/) would be ideal, but otherwise these are things you become more familiar with as you continue growing as developer. It's a good idea to familiarize yourself with accepted conventions. 

## Correctiveness

When trying to run your code this was the first error I encountered: 

``````
File "..\HyperionDev\take-home-test\section-a\anagram.py", line 3
    result = {} 
               ^
IndentationError: unindent does not match any outer indentation level
``````

- Be very careful with indentation when writing in python. 

I tried to correct the error by changing: 
``````
class Solution:
       def groupAnagrams(self, strs):
      result = {}
      for i in strs:
         x = "".join(sorted())
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
``````

to:

```````
class Solution:
   def groupAnagrams(self, strs):
      result = {}
      for i in strs:
         x = "".join(sorted())
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
```````

When running the above version of the code I encountered the following error:
``````
Traceback (most recent call last):
  File "...\HyperionDev\take-home-test\section-a\anagram.py", line 12, in <module>
    print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "...\HyperionDev\take-home-test\section-a\anagram.py", line 5, in groupAnagrams
    x = "".join(sorted())
                ^^^^^^^^
TypeError: sorted expected 1 argument, got 0
``````

It's complaining because the sorted function expects atleast one argument. So let's fix this. Here's a correction I made:

``````
class Solution:
   def groupAnagrams(self, strs):
      result = {}
      for i in strs:
         x = "".join(sorted(i))
         if x in result:
            result[x].append(i)
         else:
            result[x] = [i]
      return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
``````
Here's the output:
``````
[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
``````
The sorted function takes in three parameters, 2 of these parameters are optional. These are the parameters:  

- Iterable: sequence (list, tuple, string) or collection (dictionary, set, frozenset) or any other iterator that needs to be sorted.
- Key(optional): A function that would serve as a key or a basis of sort comparison.
- Reverse(optional): If True, then the iterable would be sorted in reverse (descending) order, by default it is set as False.

The type error was thrown because you didn't include the iterable parameter.

Here's a pretty decent article about the sorted function by geeksforgeeks - [Python sorted function](https://www.geeksforgeeks.org/python-sorted-function/) to take you through some examples. I hope this clears it up for you. 

Otherwise well done on having the right idea to solve this task. Although it needed a few minor fixes the rest was all you so congratulations!

## Efficiency

There's always many solutions to a problem. I commend you on taking the approach that loops through the given list once. Loops can become quite costly. On average the fixed anagram ran for about 9500 nanoseconds. Based on that I would say your program is reasonably efficient. 