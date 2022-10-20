// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.0;

import '../token/ERC20/ERC20.sol';
import '../access/Ownable.sol';
// This ERC-20 contract mints the specified amount of tokens to the contract creator.
contract MyToken is ERC20, Ownable {
  constructor(uint256 initialSupply) ERC20("VOTA", "Vota_token") {
    _mint(msg.sender, initialSupply);
    _setupDecimals(18);
  }

// function _mint(address account, uint256 amount) internal virtual;
    function mint(uint256 mint_num) onlyOwner public{
        _mint(msg.sender, mint_num);
    }


}

 