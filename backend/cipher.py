def encrypt(input_text: str):
    return cipher(input_text,3,1,True)

def decrypt(input_text: str):
    return cipher(input_text,3,1,False)

def cipher(input_text: str, N: int, D:int, encrypt: bool):
    values = []
    if(D != -1 and D != 1):
        print("Direction need to either be -1 or 1")
        return
    for char in input_text:
        if char == " " or char == "!":
            print("Input text can't contain spaces or !")
            return
        values.append(ord(char))

    values.reverse()
    if encrypt == True:
        N *= D
    else:
        N *= D * -1
    ret = [chr(val + N) for val in values]
    return ''.join(ret)