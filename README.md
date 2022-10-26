Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"


Test: "It will move all of the first consecutive consonants to the end and add "ay"."
Code: pigLatin("code");
Expected Output: "odecay"


Test: "It will move the "q" and the "u" if the first consonants include "qu""
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will leave the "q" and the "u" first where "qu" doesn't come first"
Code: pigLatin("squeal");
Expected Output: "quealsay"