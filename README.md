# blockchain-developer-bootcamp-final-project

## Project: Tontine

The aim of this project is to make a simple blockchain version of a the traditional Tontine.

### What is a Tontine?

A Tontine is essentially a sort of death bet pension lottery. A subscriber buys a ticket and nominates a nominee that they believe will live the longest. The subscriber earns interest on the ticket until the death of the their nominee. They were first devised in the 17th century to fund wars and infrastructure projects.

In a traditional Tontine there are four roles to Tontines:

1. The one raising capital
2. The subscriber who provides the capital
3. The shareholder who receives the interest
4. The nominees who the subscriber bets will live the longest

Roles 2,3 and 4 were historically the same individual however some Tontines allowed the subscriber to nominate a nominee, normally young children.

Tontines were commonly abused however it would be interesting to see if this old investment method could be translated onto the blockchain.

For further information:  <https://en.wikipedia.org/wiki/Tontine>

### Project Scope

To translate the 17th century idea to the blockchain some changes will need to be made.

+ An ERC721 token will be minted to act as the ticket.
+ A digital heartbeat (a sign event) will be required to prove the holder is alive.
+ An ERC20 token will created and paid out to the current active holders.

### User story

+ The Tontine will be open for ticket sales
+ The User will buy a Tontine ticket (erc721?)
+ The Tontine will be closed for sales
+ The Tontine will be activated
+ The User will sign a message daily to continue earning interest (digital heartbeat)
+ The Tontine will share X erc20 tokens per day to each active erc721 holder
+ When alive Users <= 1 Tontine deactivated
