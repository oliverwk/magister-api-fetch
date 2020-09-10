const fetch = require('node-fetch');
require('dotenv').config();
console.log(process.env.magister_token);
async function main() {
      const ress = await fetch('https://niftarlake.magister.net/api/personen/15265/afspraken?van=2020-09-06T22:00:00.0000000Z&tot=2020-09-19T22:00:00.0000000Z',{headers: { 'api-version': '1.0' , 'x-api-client-id': 'EF15', 'user-agent': 'M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)', 'authorization':'Bearer '+process.env.magister_token}})
      if (ress.json()== "SecurityToken Expired") {
        console.log("SecurityToken Expired");
          const formData = new FormData();
          formData.append('refresh_token', process.env.magister_refresh_token);
          formData.append('client_id', "M6LOAPP");
          formData.append('grant_type', "refresh_token");
          const sectokens = await fetch("https://accounts.magister.net/connect/token",{method : "POST",  body: formData, headers: {'user-agent':'M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)','content-type':'application/x-www-form-urlencoded','x-api-client-id':'EF15','api-version':'1.0'} })
          let new_json = await sectokens.json()
          console.log(new_json);
          fs = require('fs');
          fs.writeFile('.env', "magister_token="+new_json["access_token"]+"\n magister_refresh_token="+new_json["refresh_token"], function (err) {
            if (err) return console.log(err);
            console.log('Hmagister toekn > .env');
          });
          }
      else {
        const ressing = await fetch('https://niftarlake.magister.net/api/personen/15265/afspraken?van=2020-09-06T22:00:00.0000000Z&tot=2020-09-19T22:00:00.0000000Z',{headers: { 'api-version': '1.0' , 'x-api-client-id': 'EF15', 'user-agent': 'M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)', 'authorization':'Bearer '+process.env.magister_token}})
        let res = await ressing.json()
        for (var i = 0; i < res["Items"].length; i++) {
          console.log( res["Items"][i]["Omschrijving"]);
        }
      }
}
main()
const bulshit =`2020-09-07 20:26:36 GET https://niftarlake.magister.net/api/personen/15265/afspraken?van=2020-09-06T22:00:00.0000000Z&tot=2020-09-19T22:00:00.0000000Z HTTP/2.0
                        ← 200 application/json 47.7k 461ms
                              Request                                                             Response                                                            Detail
:authority:       niftarlake.magister.net
accept:           */*
cache-control:    no-cache
accept-language:  en-us
api-version:      1.0
x-api-client-id:  EF15
user-agent:       M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)
authorization:    Bearer <--token here process.env.mag_token-->
accept-encoding:  gzip, deflate, br
Query                                                                                                                                                                                             [m:auto]
van: 2020-09-06T22:00:00.0000000Z
tot: 2020-09-19T22:00:00.0000000Z

`
