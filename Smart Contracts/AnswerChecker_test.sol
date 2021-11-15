// SPDX-License-Identifier: GPL-3.0
// i used remix to create these tests due to issues i had with truffle


pragma solidity >=0.4.22 <0.9.0;

// This import is automatically injected by Remix
import "remix_tests.sol";

// This import is required to use custom transaction context
// Although it may fail compilation in 'Solidity Compiler' plugin
// But it will work fine in 'Solidity Unit Testing' plugin
import "remix_accounts.sol";
import "../AnswerChecker.sol";

// File name has to end with '_test.sol', this file can contain more than one testSuite contracts
contract AnswerCheckerTests {
    AnswerChecker ACinstance;



  //  function beforeEach() public {
  //          ACinstance = new AnswerChecker();
  //     }

  //Test makes sure the is no answer already submitted

    function initialAnswerSetShouldbeFalse() public returns (bool) {
    ACinstance = new AnswerChecker();
    return Assert.equal(ACinstance.AnswerSet(), false, "initial value should be false");
     }

     //Test makes sure the is no correct answers before deployment of contract
    function initialCorrectAnswerShouldbe0() public returns (bool) {
    ACinstance = new AnswerChecker();
    return Assert.equal(ACinstance.totalCorrect(), 0, "initial value should be false");
     }


     //test makes sure answer can be set

    /// #sender: account-0
    function OwnerSetAnswer() public returns (bool) {
    ACinstance = new AnswerChecker();
    ACinstance.setAnwser("answer1", "answer2", "answer3");
    return Assert.equal(ACinstance.AnswerSet(), true, "Owner should be able to set answer");
     }

     //test makes sure correct answers are totalled

    /// #sender: account-1
    function userCanhavecorrectanswer() public returns (bool) {
    ACinstance = new AnswerChecker();
    ACinstance.setAnwser("answer4", "answer5", "answer6");
    ACinstance.userAnswer("answer4", "answer5", "answer6");
    return Assert.equal(ACinstance.totalCorrect(), 1, "User should be able to get correct answer when it is correct");
     }

     //test makes sure correct answers are not totalled

     /// #sender: account-1
    function userCanthaveincorrectanswer() public returns (bool) {
    ACinstance = new AnswerChecker();
    ACinstance.setAnwser("answer4", "answer5", "answer6");
    ACinstance.userAnswer("answer4", "answer5", "answer7");
    return Assert.equal(ACinstance.totalCorrect(), 0, "User should not be able to set answer");
     }

     //test makes sure correct answers increase attempt amount

    /// #sender: account-1
    function incorrectanswerincreaseattempts() public returns (bool) {
    ACinstance = new AnswerChecker();
    ACinstance.setAnwser("answer4", "answer5", "answer6");
    ACinstance.userAnswer("answer4", "answer5", "answer7");
    return Assert.equal(ACinstance.totalAttempts(), 1, "User should not be able to set answer");
     }

     //test makes sure incorrect answers increase attempt amount

     /// #sender: account-1
    function correctanswerincreaseattempts() public returns (bool) {
    ACinstance = new AnswerChecker();
    ACinstance.setAnwser("answer4", "answer5", "answer6");
    ACinstance.userAnswer("answer4", "answer5", "answer6");
    return Assert.equal(ACinstance.totalAttempts(), 1, "User should not be able to set answer");
     }



}
