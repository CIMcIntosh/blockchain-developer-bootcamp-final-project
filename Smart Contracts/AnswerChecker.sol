// SPDX-License-Identifier: MIT
pragma solidity 0.8.2;

// @title Answer Checker: Checks that users answers are the same as the owners answers
// @author Callum McIntosh twitter: @Callum_CMc
// @notice This contract allows for 3 words to be checked against an owners answer.
// @dev All function calls are currently implemented without side effects
// @custom:experimental This is an experimental contract.


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract AnswerChecker is ERC1155, Ownable {

  bool public AnswerSet; // has an answer been set?
  bytes32 private secretAnswer; // owners submitted answer, converted from string to Keccak256
  uint32 public totalCorrect; // total correct answers of questions
  uint32 public totalTokensMinted; // total correct answers of questions
  uint32 public totalAttempts; // total attempts of questions

  mapping(address => bool) public userCorrect; // Is users answers correct?
  mapping(address => bool) public tokenAlreadyMinted; // Has user already minted completion NFT?
  mapping(address => uint32) public userAttempts; // total attempts by users

  uint256 public constant Gold_Medal = 0; // for ERC1155 token creation
  uint256 public constant Silver_Medal = 1; // for ERC1155 token creation
  uint256 public constant Bronze_Medal = 2; // for ERC1155 token creation
  uint256 public constant Correct_Medal = 3; // for ERC1155 token creation

  event CorrectAnswer(address User, bool Result);
  event TokenMinted(address User, uint32 Attempts, string MedalType);

  constructor() ERC1155("https://unruffled-swartz-eb915f.netlify.app/NFT/{id}.json") {
      AnswerSet = false;
      }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    // @notice Allows owner to submit 3 answers that are then converted to Keccak256 which shall be compared with the user answers later
    // @param _Answer_1, _Answer_2 and _Answer_3 are the owner submited answers
    // @return secretAnswer as a Keccak256 output
    function setAnwser(string memory _Answer_1, string memory _Answer_2, string memory _Answer_3) public onlyOwner {
       secretAnswer = keccak256(abi.encodePacked(_Answer_1, _Answer_2, _Answer_3));
       AnswerSet = true;
 }


   // @notice Allows owner to check secretAnswer without affecting the number of totalAttempts
    function adminCheckAnswer(string memory _Answer_1, string memory _Answer_2, string memory _Answer_3) public view onlyOwner returns (bool) {
      require(AnswerSet == true);
      bytes32 adminAnswer = keccak256(abi.encodePacked(_Answer_1, _Answer_2, _Answer_3));
       require(adminAnswer == secretAnswer);
       return true;
   }

   // @notice Allows user to submit 3 answers and compare against the owners answer
   // @param _Answer_1, _Answer_2 and _Answer_3 are the owner submited answers
   // @return whether user answer is correct, add +1 to totalAttempts and user attempts, if answer correct add +1 to userCorrect and totalCorrect. emits true or false event.
    function userAnswer(string memory _Answer_1, string memory _Answer_2, string memory _Answer_3) public returns (bool) {
        require(AnswerSet == true);
        bytes32 thisUserAnswer = keccak256(abi.encodePacked(_Answer_1, _Answer_2, _Answer_3));
        if (totalAttempts <= 4000000000){
          totalAttempts += 1;
        }
        if (userAttempts[msg.sender] <= 1000000000){
          userAttempts[msg.sender] += 1;
        }
        if (thisUserAnswer == secretAnswer) {
           userCorrect[msg.sender] = true;
           if (totalCorrect <= 1000000000){
             totalCorrect += 1;
           }
           emit CorrectAnswer(msg.sender, true);
           return true;
           } else {
           emit CorrectAnswer(msg.sender, false);
           return false;
           }
          }

    // @notice mints token on correct answering of questions, different medals minted depending
    // on how many other users have also submitted cottrect answers. checks if token already minted and anser correct before minting.
    // @return an NFT depening on how many previsouly correct answers have been minted

    function mintToken()
        public
    {
      require(tokenAlreadyMinted[msg.sender] == false);
      require(userCorrect[msg.sender] == true);
      totalTokensMinted += 1;
          if (totalCorrect <= 8) {
        _mint(msg.sender, Gold_Medal, 1, "");
        emit TokenMinted(msg.sender, userAttempts[msg.sender], "Gold_Medal");
        tokenAlreadyMinted[msg.sender] = true;
      } else if (totalCorrect <= 32) {
        _mint(msg.sender, Silver_Medal, 1, "");
        emit TokenMinted(msg.sender, userAttempts[msg.sender], "Silver_Medal");
        tokenAlreadyMinted[msg.sender] = true;
      } else if (totalCorrect <= 256) {
        _mint(msg.sender, Bronze_Medal, 1, "");
        emit TokenMinted(msg.sender, userAttempts[msg.sender], "Bronze_Medal");
        tokenAlreadyMinted[msg.sender] = true;
      } else {
        _mint(msg.sender, Correct_Medal, 1, "");
        emit TokenMinted(msg.sender, userAttempts[msg.sender], "Correct_Medal");
        tokenAlreadyMinted[msg.sender] = true;
      }
    }


}
