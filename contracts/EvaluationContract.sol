pragma solidity ^0.5.8;

contract EvaluationContract {
    struct User{
       bool initialized;
       uint d;
       uint iine;
    }

    mapping(address => User[]) public us;

    function deposit(address to) public payable {
        User[] memory u = us[msg.sender];
        if (u[uint(to)].initialized == false) {
            u[uint(to)] = User(true, msg.value, 0);
        } else {
            u[uint(to)].d = msg.value;
        }
    }

    function refound(address to) public payable {
        User[] memory u = us[to];
        if (u[uint(msg.sender)].d > 0) {
            uint amount = u[uint(msg.sender)].d;
            u[uint(msg.sender)].d = 0;
            msg.sender.transfer(amount);
        }
    }
}
