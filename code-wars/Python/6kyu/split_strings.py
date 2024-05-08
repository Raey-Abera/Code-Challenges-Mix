#https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/python
#6 kyu - Split Strings

#DESCRIPTION:
""" Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_'). """

#Examples:
#* 'abc' =>  ['ab', 'c_']
#* 'abcdef' => ['ab', 'cd', 'ef']

def solution(s):
    if len(s) == 0:
        return []
    elif len(s) == 1:
        return [s + "_"]
    else:
        return [s[:2]] + solution(s[2:])  