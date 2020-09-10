import os, json
import statistics
from matplotlib import pyplot as plt
file = open("/Users/MWK/Desktop/magister/magister.json","r")
jsons = file.read()
file.close()
jsoner = json.loads(jsons)
Lokalen = []
for item in jsoner["Items"]:
    if item["Lokatie"] == "osm3" or item["Lokatie"] == "HUB3":
        print("osm of hub")
    else:
        Lokalen.append(int(item["Lokatie"]))

print(statistics.mean(Lokalen))
x = []
for i in range(len(Lokalen)):
    x.append(int(i))

plt.plot(x, Lokalen)
plt.show()
