// SPDX-License-Identifier: GPL-3.0

// pragma solidity ^0.7.0;

// import './ERC20.sol';
// import './Ownable.sol';
// // This ERC-20 contract mints the specified amount of tokens to the contract creator.
// contract MyToken is ERC20, Ownable {
//   constructor(uint256 initialSupply) ERC20("VOTA", "Vota_token") {
//     _mint(msg.sender, initialSupply);
//     _setupDecimals(18);
//   }

// // function _mint(address account, uint256 amount) internal virtual;
//     function mint(uint256 mint_num) onlyOwner public{
//         _mint(msg.sender, mint_num);
//     }


// }

//  

// Solidity program to
// count number of 
// values in a mapping
pragma solidity ^0.8.0; 
   
contract MyToken {
      
    // Defining structure
    struct student {
  
        // Declaring different
        // structure elements
        string name;
        string subject;
        uint8 marks;
    }
      
    // Creating mapping
    mapping (address => student) result;
    address[] student_result;
      
    //Function adding values to the mapping
    function adding_values(address a) public {
      //verifica si existe el valor, los valores numericos por default son 0
        if(result[a].marks==0){
        student storage  student_var = result[a];
  
        student_var.name = "John";
        student_var.subject = "Chemistry";
        student_var.marks = 88;
        student_result.push(a);
      }
  
    }
      //adress=> votacion:

      // nombre
      // 
      // 
      // 
      //django
      // votacion:
      //  estado: en proceso, aceptada
      //  nombre: 
      //  puntos:
      //  puntos_free:
      //  user_account_funds:

      // voto:
      // user_account:
      // votacion:

     // Function to retrieve 
     // values from the mapping
     function get_student_result( ) view public returns ( address[] memory) {
        return student_result;
    }

    function get_result( address a) view public returns ( student memory) {
        return result[a];
    }

    //     function get_result( ) view public returns ( mapping(address => student) memory) {
    //     return result;
    // }
  
    // Function to count number 
    // of values in a mapping
    function count_students( ) view public returns (uint) {
        return student_result.length;
    }
}


