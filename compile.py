# 1. Import solcx
import solcx

# 2. If you haven't already installed the Solidity compiler, uncomment the following line
# solcx.install_solc()
solcx.install_solc(version='0.7.0')
solcx.set_solc_version('0.7.0')
# 3. Compile contract
temp_file = solcx.compile_files('vota_02.sol')

# 4. Export contract data
abi = temp_file['vota_02.sol:Vota_token']['abi']
bytecode = temp_file['vota_02.sol:Vota_token']['bin']
