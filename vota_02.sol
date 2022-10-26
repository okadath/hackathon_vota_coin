 pragma solidity ^0.7.0; 

import './ERC20.sol';
import './Ownable.sol';

contract Vota_token is ERC20, Ownable {

    struct voting {
  
        // Declaring different
        // structure elements
        string status;
        string name;
        uint256 points;
        uint deployDate;
    }
      
    // Creating mapping
    mapping (address => voting) result;
    address[] votes_result;
	event DataStored(uint256 val);


    constructor(uint256 initialSupply) ERC20("VOTA", "Vota_token") {
	    _mint(msg.sender, initialSupply);
	    _setupDecimals(18);
	  }

    //Function adding values to the mapping
    function adding_values(address a, string memory name) public {
        //verifica si existe el valor, los valores numericos por default son 0
        require(a != address(0), '|Address field is null');
        require(bytes(name).length> 0, "|Name field is null");
        require(bytes(result[a].name).length == 0, "|Only may have one votation per address, use another address"); 
        result[a].name = name;
        result[a].points=0 ;
        votes_result.push(a); 
    }


     function get_list_votes_result( ) view public returns ( address[] memory) {
        return votes_result;
    }

    function get_result_of_address( address a) view public returns ( uint ) {
        return result[a].points;
    }

    function vote( address a)  public {
        require(balanceOf(msg.sender)>10000000000000000000, "|Not enough Vota_token in the vote address ");
        require(a != address(0), '|Address field is null');
        require(result[a].points<=9, '|Votation is finished with success');   
        require(bytes(result[a].name).length > 0, '|Votation is indefined, vote for nominated address'); 
        result[a].points=result[a].points+1;

    }

   function mint(uint256 mint_num) onlyOwner public{
        _mint(msg.sender, mint_num);
    }
}

