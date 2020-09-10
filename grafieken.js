const fetch = require('node-fetch');
require('dotenv').config();
async function main() {
      const ress = await fetch('https://niftarlake.magister.net/api/personen/15265/afspraken?van=2020-09-06T22:00:00.0000000Z&tot=2020-09-19T22:00:00.0000000Z',{headers: { 'api-version': '1.0' , 'x-api-client-id': 'EF15', 'user-agent': 'M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)', 'authorization':'Bearer '+process.env.mag_token}})
      let res = await ress.json()
      console.log(res);
      console.log(res["Items"]["LesuurTotMet"]);
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
tot: 2020-09-19T22:00:00.0000000Z`
