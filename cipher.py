
def encrypt(inputText, N, D):
 firstText = inputText[::-1]

 n = int(N)
 d = int(D)
 if(d != 1 and d != -1):
  print("Invalid Input")
  return
 if(n < 1):
  print("Invalid Input")
  return
 encryptedText = asciiText(firstText, n, d)
 
 return encryptedText


def reverseText(inputText):
    reversedText = inputText[::-1]
    return reverseText

def asciiText(inputText, n, d):
 ascii_values = []
 shift = n * d
 for character in inputText:
  ascii = ord(character)
  if(ascii == 32 or ascii == 33):
    print("Invalid Input")
    return
  ascii_values.append(ascii)
 new_values = [x + shift for x in ascii_values]
 invertedText = ""
 for i in new_values:
  invertedText = invertedText + chr(i)
 
 return invertedText

def decrypt(inputText, N, D):
  #FirstText = inputText[::-1]

  n = int(N)
  d = int(D)*-1

  FirstText = asciiText(inputText, d, n) 
  
  if(d != 1 and d != -1):
    print("Invalid Input")
    return
  if(n < 1):
    print("Invalid Input")
    return
  decryptedText = FirstText[::-1]

  return decryptedText





 