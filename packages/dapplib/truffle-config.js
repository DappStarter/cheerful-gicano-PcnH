require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain unfold gloom arena orange gate'; 
let testAccounts = [
"0x31f97c5d212ea2d6d8b2c9f5cd5dfde4d09fda42ebcc99df61aa8d9c69064a3e",
"0x5601a941bc45e9c2bf70b63f537df7bfa3be02998a92b12794ba38a5db148c14",
"0xc681a801ea781c352d2df9b48e08b35a01db41f094faff08c90cd0397a2f2e2b",
"0x1790cccc4e1d6be597a07654e99fb787625d2d8ae0df71aa99d69997b17bb408",
"0x83dce7ae6d99512f1b521d0ecafb1eabe24e53a90a96e46b075436f66258ebf6",
"0x65e0474c9a6006488dd721d2cd8354a5b6740204c6381e373a088d7c05c2c843",
"0x57f09e39bca1d38c9237b490aab8b25e1973b5b3088d502269f022803a363f4c",
"0x393708f4b20d6311797010e932806b87dd1c1a4d7080107a9804c0527f89f719",
"0xd68f80ced26f9f6982f6767bc62f928c21dc768cc84675f1119109d07e94f402",
"0xcadac2f7aa481119e0eeebb05b1e0223fde2e92aacf79e301f3b588b4baa7edd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

