// app/src/config/index.tsx

import { Idl } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

const priceFeedIdl = 
{
  "version": "0.1.0",
  "name": "my_counter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "set",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "counter"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decreaseCounter",
      "accounts": [
        {
          "name": "set",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u8"
        }
      ]
    },
    {
      "name": "increaseCounter",
      "accounts": [
        {
          "name": "set",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DataInputInvalid",
      "msg": "Only positive numbers supported"
    },
    {
      "code": 6001,
      "name": "MaxStepSize",
      "msg": "Max step size is too big"
    }
  ]
}

const payUsdIdl = { "version": "0.1.0", "name": "pyth_program", "instructions": [{ "name": "payUsd", "accounts": [{ "name": "from", "isMut": false, "isSigner": true }, { "name": "to", "isMut": true, "isSigner": false }, { "name": "solUsdPriceAccount", "isMut": false, "isSigner": false }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [{ "name": "amount", "type": "u64" }] }], "errors": [{ "code": 6000, "name": "PriceIsDown" }, { "code": 6001, "name": "WrongPriceFeedId" }] }
const myOracle = { "version": "0.1.0", "name": "my_oracle", "instructions": [{ "name": "initialize", "accounts": [{ "name": "user", "isMut": true, "isSigner": true }, { "name": "dataStore", "isMut": true, "isSigner": false }, { "name": "systemProgram", "isMut": false, "isSigner": false }], "args": [{ "name": "name", "type": "string" }] }, { "name": "update", "accounts": [{ "name": "user", "isMut": false, "isSigner": true }, { "name": "dataStore", "isMut": true, "isSigner": false }], "args": [{ "name": "data", "type": "u64" }] }], "accounts": [{ "name": "DataStore", "type": { "kind": "struct", "fields": [{ "name": "name", "type": "string" }, { "name": "data", "type": "u64" }] } }] }



export default {
    counterProgramId: new PublicKey('42e9aDFMhosZke1YDSbWxiYoqLw37EaiANnwY6wxDwrb'),
    payUsdProgramId: new PublicKey('H5nL65iizvdw1KRYpjGGxq2eMhTBCw87GCfsPeJozmqx'),
    myOracleProgramId: new PublicKey('5ZP6b3wh6Yd23u9XhcaUpjWjc8zxLqRGtP8RbQoyUW8L'),
    priceFeedIdl: priceFeedIdl as Idl,
    payUsdIdl: payUsdIdl as Idl,
    myOracleIdl: myOracle as Idl,
}

