# Avoiding Common Attacks

## Using Specific Compiler Pragma - SWC-103
I am using a specic compiler pragma of 0.8.2

## Proper Use of Require, Assert and Revert  - SWC-123 and SWC-110
I use the require statements at the start of my functions
i do not use assert or revert


## Use Modifiers Only for Validation - SWC-107
the only modifier I am using is OnlyOwner which is used to validate that only the owner is submitting the transation for teh answer and owner answer check.


## Integer Under / Overflow - SWC-101
As the I have hard limits of my integer variables to prevent overflow causing incorrect tokens to mint
Once the limits have been met, the counter will stop adding values to the totals.

### limits
4000000000 for total attempts
1000000000 for total correct answers and userattermpts

