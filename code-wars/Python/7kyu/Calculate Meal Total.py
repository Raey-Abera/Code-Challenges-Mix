https://www.codewars.com/kata/58545549b45c01ccab00058c/train/python

'''Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.'''

def calculate_total(subtotal, tax, tip):
    tax = tax/100 * subtotal
    tip = tip/100 * subtotal
    return round(subtotal + tax + tip, 2)
     


