# Create a function that takes in a list. If the first number, is less than the last number, print "Hi". If the first number is greater than the last number, print "Bye". If they are equal, alert "We close in an hour".

def check_list_numbers(lst):
    if not lst:  # Check if the list is empty
        return

    first_number = lst[0]
    last_number = lst[-1]

    if first_number < last_number:
        print('Hi')
    elif first_number > last_number:
        print('Bye')
    else:
        print('We close in an hour')

# tests:
check_list_numbers([1, 2, 3, 4])
check_list_numbers([5, 6, 7, 9])
check_list_numbers([])
check_list_numbers([-1, -2, -3, -4])         
    