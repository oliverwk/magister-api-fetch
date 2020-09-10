#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, json
os.system('clear')
import requests, sys
from dotenv import load_dotenv
load_dotenv()
URL = "https://niftarlake.magister.net/api/personen/15265/afspraken?van=2020-09-06T22:00:00.0000000Z&tot=2020-09-19T22:00:00.0000000Z"
headers = {'User-Agent': 'M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)', 'authorization': 'Bearer '+os.getenv('magister_token'),'api-version': '1.0', 'x-api-client-id':'EF15'}
#page = requests.get(URL, headers=headers )
file = open("/Users/MWK/Desktop/magister/magister.json","r")
page = file.read()
file.close()
rev = str(page).encode(encoding="UTF-8",errors="ignore")
print(rev)
#print(rev[0]["Items"]["LesuurTotMet"])
jsons = json.loads(rev)
print(jsons[0]["Items"]["LesuurTotMet"])


"""
2020-09-07 20:26:36 GET https://niftarlake.magister.net/api/personen/15265/afspraken?van=2020-09-06T22:00:00.0000000Z&tot=2020-09-19T22:00:00.0000000Z HTTP/2.0
                        ← 200 application/json 47.7k 461ms
                              Request                                                             Response                                                            Detail
:authority:       niftarlake.magister.net
accept:           */*
cache-control:    no-cache
accept-language:  en-us
api-version:      1.0
x-api-client-id:  EF15
user-agent:       M6LOAPP/2.3.2.272 (iPhone; iOS 13.6.1)
authorization:    Bearer <--token here os.getenv('magister_token')-->
accept-encoding:  gzip, deflate, br
Query                                                                                                                                                                                             [m:auto]
van: 2020-09-06T22:00:00.0000000Z
tot: 2020-09-19T22:00:00.0000000Z
"""
