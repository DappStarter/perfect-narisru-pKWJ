require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth ridge comic harvest oppose outer general'; 
let testAccounts = [
"0x83282e9d976f8dd9ae824257dfb88afed8a04ffbe57b294a872ccbd19c58eb1c",
"0x9c6b7a5d688e80f2a6a87bf0a788b87d30286aba7694c1b28fe4b1934265502a",
"0xcc624e7c64d851f11b0f0616e11a353296862b408c1b6a95b457c98deeb41887",
"0x0a79b5eb485db4257fa7608c79e107202ca9b19bf3c4558fa9019366cd77dd9f",
"0x05f28dfbdcbccd2233f19a6ed96856463b2c368cc0cfa586c917656b4a2ea36f",
"0x829df0be751ad78d5c17228c743a2b49d0632b179e18bea03d5aa63e3b56b87a",
"0x9f42bda808143ce0e777b5b541a098f465bc729dc41bbe6f5757cb275c6b54fd",
"0x7a65f31f86407d9d7bcd000684e3c9eeefa3968f8ba67dc6c52e8778c8203025",
"0x1dc60f58ae62cf205586270451a7724e05fe3428a25a233b797a28b0b8e41a9b",
"0x0342610408846a749cc20093455d86feb7773c1bf4b03c75a9953e937f4ef9f9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


