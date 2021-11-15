# Design Pattern Decisions

## Inheritance and Interfaces

Due to incorperating ERC1155 and Ownable functionalities I have inherited OpenZepplin contracts.

### Imported contracts
- "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
Allows for the creation of NFTs for the successful submission of correct answers.

- "@openzeppelin/contracts/access/Ownable.sol";
Allows for the modifying the owners answers functions as onlyowner and allows for ability to transfer ownership.

## Access Control Design Patterns
utilising Ownable.sol I am able to limit it so only the owner can create the answers and also for the owner to be able to check the answer without adding in attempts

## Optimizing Gas
I have attemted to reduce the gas coasts for transactions by limiting the size of variables when able

