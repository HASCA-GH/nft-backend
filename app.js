const express = require('express')
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors())
// import fetch from 'node-fetch';
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const getdata = async ()=>{
    try {
        const datae = await fetch(
          "https://testnets-api.opensea.io/assets?asset_contract_address=0x496755C7245Ed7e3B25d95A19A630e4668A05581&order_direction=asc",
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
          const data = await datae.json()
          console.log(data)
          return data;
          
        } catch (err) {
            return err
      }
    }
    
    
    app.get('/', async (req, res) => {
        const mainreturn = await getdata();
        console.log('user hit the resource');

        res.status(200).json(mainreturn)
      })
   const port = process.env.PORT || 30002
    
app.listen(port)   