import random

def getminimum():
    characters = ["0","1","2","3","4","5","6","7","8","9","-"]
    done = False
    while done == False:
        minimum = input("Set minimum value: ")
        if minimum.isdigit() == True:
            return int(minimum)
        if "-" in minimum:
            print("Negative values not allowed.")
        for c in minimum:
            if c not in characters:
                print("Only numbers are allowed.")
                break
def getmaximum():
    characters = ["0","1","2","3","4","5","6","7","8","9","-"]
    done = False
    while done == False:
        maximum = input("Set maximum value: ")
        if maximum.isdigit() == True:
            return int(maximum)
        if "-" in maximum:
            print("Negative values not allowed.")
        for c in maximum:
            if c not in characters:
                print("Only numbers are allowed.")
                break
def getrange():
    done = False
    while done == False:
        range = [getminimum(),getmaximum()]
        if range[1] >= range[0]:
            return range
        else:
            print("Maximum is not higher than the minimum.")
def game():
    print("This is a guessing game!")
    range = getrange()
    correct = random.randint(range[0],range[1])
    characters = ["0","1","2","3","4","5","6","7","8","9","-"]
    done = False
    while done == False:
        number = True
        guess = input("Enter Guess: ")
        if "-" in guess:
            print("Negative values not allowed.")
        for c in guess:
            if c not in characters:
                print("Only numbers are allowed.")
                number = False
                break
        if number == True:
            if int(correct) > int(guess):
                print("Too low!")
            if int(correct) == int(guess):
                print("Correct!")
                done = True
            if int(correct) < int(guess):
                print("Too high!")

game()
            


