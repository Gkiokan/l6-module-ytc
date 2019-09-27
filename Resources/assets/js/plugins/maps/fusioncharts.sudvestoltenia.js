(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=286)})({286:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(287);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},287:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.SudVestOltenia.20.12-21-2012 11:40:53
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"SudVestOltenia",revision:20,standaloneInit:true,baseWidth:301,baseHeight:274,baseScaleFactor:10,entities:{"RO.DJ":{outlines:[[M,1803,1231,Q,1794,1230,1783,1230,1769,1230,1757,1231,1756,1231,1752,1231,1748,1231,1748,1237,1747,1242,1748,1244,1748,1246,1753,1248,1758,1249,1761,1248,1764,1246,1767,1248,1769,1250,1771,1251,1773,1251,1778,1251,1781,1251,1788,1253,1795,1254,1795,1262,1794,1270,1794,1271,1795,1284,1795,1298,1795,1301,1794,1303,1791,1311,1775,1309,1772,1309,1769,1310,1767,1311,1765,1312,1758,1311,1759,1318,1760,1330,1759,1344,1759,1345,1759,1347,1759,1358,1755,1364,1753,1367,1752,1367,1703,1370,1653,1370,1600,1370,1547,1370,1533,1370,1532,1382,1532,1394,1529,1409,1502,1412,1485,1412,1482,1412,1479,1411,1478,1434,1475,1457,L,1472,1457,Q,1459,1466,1446,1474,1433,1482,1411,1481,1388,1480,1361,1480,1338,1480,1315,1481,1311,1489,1310,1495,1308,1497,1307,1500,1305,1504,1305,1510,1308,1520,1299,1526,1297,1527,1296,1529,1294,1531,1292,1531,1284,1533,1278,1537,1277,1539,1274,1541,1273,1543,1273,1545,1271,1552,1265,1554,1263,1554,1262,1554,1252,1558,1250,1571,1250,1572,1249,1573,1240,1585,1227,1591,1224,1592,1220,1599,1216,1606,1213,1607,1209,1609,1205,1609,1201,1609,1200,1617,1198,1632,1206,1636,1213,1641,1213,1643,1213,1645,1215,1649,1217,1652,1221,1660,1224,1665,1234,1666,1235,1665,1236,1667,1246,1678,1262,1676,1265,1691,1262,1705,1262,1706,1259,1708,1246,1713,1240,1728,1239,1733,1234,1732,1217,1731,1213,1746,1210,1751,1206,1752,1205,1752,1204,1754,1195,1762,1178,1761,1166,1759,1159,1765,1156,1769,1155,1774,1153,1775,1154,1777,1152,1784,1151,1792,1151,1794,1145,1796,1139,1797,1132,1797,1114,1796,1116,1815,1117,1821,1118,1830,1118,1831,1120,1832,1125,1836,1126,1847,1138,1853,1152,1851,1160,1851,1162,1856,1163,1862,1163,1870,1163,1923,1163,1978,1163,2007,1162,2036,1161,2044,1152,2044,1149,2044,1147,2047,1144,2048,1141,2050,1140,2051,1137,2051,1107,2051,1076,2050,1075,2050,1074,2050,1061,2044,1046,2045,1031,2045,1015,2047,1014,2047,1011,2048,1004,2052,1003,2060,1001,2063,1e3,2066,998,2068,995,2071,991,2079,985,2086,984,2087,983,2089,983,2090,983,2092,987,2094,991,2096,1e3,2100,1006,2111,1007,2112,1008,2113,1014,2115,1018,2119,1019,2120,1021,2120,1023,2121,1023,2123,1026,2128,1031,2134,1034,2138,1041,2140,1042,2140,1044,2140,1057,2142,1055,2152,1052,2162,1047,2168,1042,2174,1040,2177,1038,2180,1036,2181,1033,2182,1030,2184,1029,2185,1027,2187,1025,2192,1021,2191,1014,2189,1012,2195,1011,2204,1003,2210,1001,2211,1002,2212,997,2229,983,2229,980,2228,974,2231,969,2233,968,2240,966,2247,962,2248,958,2248,957,2250,954,2261,945,2265,943,2266,937,2274,931,2282,927,2280,923,2278,921,2279,919,2279,916,2280,915,2281,915,2284,913,2288,913,2291,913,2296,909,2296,897,2296,886,2296,878,2295,875,2299,871,2304,867,2310,865,2311,865,2314,863,2317,862,2318,860,2321,856,2324,854,2325,851,2325,848,2326,847,2328,837,2333,834,2344,830,2354,829,2357,827,2360,828,2364,829,2367,826,2372,822,2376,821,2381,818,2386,816,2386,806,2386,809,2397,811,2409,822,2416,832,2424,827,2425,825,2428,827,2429,831,2432,833,2435,839,2439,840,2446,840,2448,842,2450,844,2454,859,2451,855,2462,863,2463,866,2463,869,2466,878,2473,889,2478,890,2478,892,2480,893,2485,899,2489,903,2492,905,2496,908,2497,909,2497,921,2500,935,2500,939,2500,942,2501,943,2502,945,2503,950,2505,953,2509,954,2511,955,2512,957,2515,960,2518,965,2528,973,2538,974,2539,976,2541,978,2543,980,2543,1010,2545,1038,2545,1045,2545,1052,2546,1069,2549,1067,2532,1067,2525,1072,2523,1075,2523,1075,2520,L,1076,2518,Q,1087,2515,1097,2515,1149,2515,1201,2516,1216,2516,1230,2512,1234,2511,1234,2508,1236,2501,1242,2500,1243,2498,1243,2497,1244,2494,1246,2492,1247,2489,1249,2486,1250,2484,1251,2481,1254,2479,1257,2480,1269,2479,1282,2481,1293,2481,1297,2477,1299,2475,1299,2474,1299,2463,1303,2456,1304,2455,1305,2455,1318,2454,1331,2454,1335,2454,1340,2453,1345,2453,1358,2452,1370,2451,1378,2454,1385,2458,1387,2458,1395,2458,1398,2462,1400,2466,1402,2466,1422,2468,1443,2469,1445,2469,1448,2470,1455,2473,1457,2480,1459,2482,1459,2484,1459,2489,1463,2489,1474,2489,1485,2488,1496,2488,1499,2494,1502,2501,1503,2503,1503,2504,1512,2503,1514,2505,1520,2507,1532,2509,1535,2520,1535,2524,1536,2526,1539,2530,1540,2535,1540,2539,1542,2539,1551,2542,1562,2542,1565,2542,1567,2543,1575,2547,1582,2556,1583,2557,1585,2557,1601,2558,1616,2558,1620,2558,1622,2560,1624,2564,1631,2566,1632,2566,1634,2566,1647,2568,1661,2568,1663,2568,1666,2565,1677,2562,1689,2562,1692,2562,1695,2561,1697,2559,1702,2558,1704,2557,1706,2554,1707,2553,1708,2551,1710,2549,1712,2547,1714,2545,1715,2545,1730,2542,1745,2542,1757,2542,1771,2543,1778,2543,1783,2543,1794,2543,1801,2547,1805,2550,1809,2553,1814,2554,1818,2558,1819,2561,1821,2562,1822,2568,1826,2575,1849,2576,1873,2576,1876,2576,1878,2577,1879,2580,1881,2581,1883,2585,1886,2591,1886,2592,1886,2593,1886,2601,1890,2606,1891,2607,1892,2608,L,1893,2611,Q,1928,2614,1963,2614,1978,2614,1992,2612,2003,2611,2007,2617,2011,2621,2014,2626,2016,2631,2020,2632,2023,2633,2028,2634,2032,2634,2039,2636,2045,2637,2045,2638,2047,2646,2053,2652,2055,2653,2056,2655,2058,2667,2075,2664,2085,2661,2091,2667,2093,2668,2094,2669,2095,2672,2096,2674,2104,2679,2121,2678,L,2124,2678,Q,2126,2692,2131,2701,2135,2710,2135,2712,2135,2714,2136,2718,2137,2721,2138,2721,2157,2721,2176,2722,2176,2713,2176,2705,2176,2692,2178,2682,2180,2657,2179,2631,2179,2618,2178,2603,2176,2592,2182,2588,2183,2587,2183,2585,2184,2583,2186,2580,2190,2577,2197,2570,2198,2569,2199,2568,2209,2561,2220,2556,2221,2554,2223,2553,2227,2543,2235,2539,2237,2538,2239,2537,2240,2535,2242,2534,2250,2528,2255,2524,2256,2523,2256,2520,2258,2485,2258,2451,2256,2437,2266,2433,2268,2432,2269,2431,2270,2428,2271,2425,2273,2423,2274,2420,2277,2417,2284,2414,2288,2413,2289,2412,2294,2407,2294,2395,2293,2382,2292,2367,2290,2348,2299,2334,2302,2326,2313,2321,L,2316,2319,Q,2319,2300,2319,2281,2319,2279,2318,2279,2316,2278,2313,2277,2311,2276,2307,2275,2303,2273,2299,2272,2293,2270,2296,2261,2296,2258,2294,2257,2290,2256,2286,2254,2284,2254,2284,2253,2281,2231,2281,2210,2281,2207,2280,2204,2278,2196,2278,2185,2278,2171,2277,2157,2275,2140,2280,2131,2281,2128,2282,2125,2288,2120,2296,2116,2297,2115,2297,2113,2301,2102,2311,2100,2313,2100,2313,2098,2316,2070,2316,2040,2316,2032,2318,2025,2319,2014,2311,2014,2304,2014,2296,2013,2294,2013,2293,2013,2285,2014,2285,2007,2285,2006,2285,2005,2283,1990,2284,1974,2283,1971,2282,1968,2281,1965,2281,1964,2278,1957,2273,1957,2266,1957,2265,1953,2265,1952,2265,1950,2267,1931,2252,1933,2250,1933,2247,1931,2240,1927,2228,1925,2227,1925,2225,1925,2221,1923,2223,1918,L,2223,1915,Q,2209,1912,2194,1912,2191,1912,2190,1911,2187,1896,2187,1880,2187,1877,2186,1875,2183,1870,2174,1870,2165,1872,2159,1873,2148,1874,2148,1868,2146,1858,2147,1847,2146,1844,2145,1842,2142,1838,2144,1830,2144,1821,2145,1813,2145,1806,2141,1807,2137,1807,2133,1805,2128,1802,2118,1804,L,2115,1804,Q,2113,1778,2113,1751,2113,1748,2111,1747,2106,1740,2107,1731,2108,1717,2106,1708,2104,1706,2103,1706,2100,1705,2098,1704,2089,1701,2075,1702,2064,1703,2060,1700,2056,1695,2048,1695,2045,1695,2042,1695,2038,1694,2034,1693,2032,1693,2030,1691,2026,1690,2022,1690,2008,1690,1995,1687,1993,1672,1993,1659,1993,1656,1992,1655,1982,1652,1972,1652,L,1969,1652,Q,1966,1626,1966,1600,1966,1598,1965,1596,1951,1594,1935,1594,1932,1594,1931,1592,1928,1580,1928,1565,L,1928,1562,Q,1935,1561,1936,1557,1936,1556,1938,1554,1947,1553,1955,1550,1958,1549,1959,1546,1962,1543,1969,1541,L,1973,1539,Q,1974,1528,1978,1522,1980,1520,1981,1520,1984,1519,1984,1518,1988,1511,1996,1511,1999,1511,2001,1510,2004,1509,2004,1508,2007,1500,2008,1487,2004,1485,2004,1481,2004,1467,2003,1454,2003,1452,2003,1451,L,2001,1449,Q,2002,1447,2001,1444,1999,1442,1999,1441,2e3,1440,1997,1437,1995,1434,1986,1430,1978,1427,1975,1421,1971,1416,1972,1405,1971,1402,1970,1401,1969,1400,1966,1398,1965,1398,1963,1398,1951,1398,1946,1386,1934,1383,1936,1370,1938,1360,1931,1359,1928,1359,1925,1358,1924,1358,1923,1356,1920,1355,1917,1354,1916,1353,1913,1352,1908,1347,1897,1341,1895,1340,1893,1339,1889,1337,1885,1339,1879,1339,1879,1335,1882,1325,1873,1325,1860,1326,1855,1314,1855,1313,1854,1312,1852,1307,1851,1303,1849,1301,1849,1297,1849,1292,1847,1287,1837,1287,1832,1283,1829,1280,1829,1276,1829,1261,1830,1246,1828,1246,1824,1245,1821,1245,1820,1244,1818,1242,1817,1240,1814,1231,1806,1231,Q,1805,1231,1803,1231,Z]],label:"Dolj",shortLabel:"DJ",labelPosition:[170.3,197.6],labelAlignment:[CEN,MID]},"RO.GJ":{outlines:[[M,1867,351,Q,1813,352,1760,352,1729,352,1696,351,1695,351,1687,348,1678,344,1673,337,1668,330,1665,327,1662,324,1660,320,1657,318,1655,314,1654,313,1654,310,1651,312,1649,313,1647,314,1646,314,1609,316,1573,316,1559,314,1550,318,1548,320,1547,320,1540,321,1536,328,1529,335,1525,344,L,1524,347,Q,1497,349,1468,350,1466,350,1466,348,1463,343,1460,335,1445,335,1445,324,L,1445,321,Q,1429,318,1413,318,1410,318,1410,320,1407,322,1402,323,1388,321,1375,320,1369,320,1368,324,1365,329,1361,332,1354,335,1349,344,1347,347,1348,350,1348,358,1341,358,1330,359,1319,358,1290,356,1278,370,1276,371,1273,374,1269,378,1265,382,1262,384,1258,384,1205,385,1154,385,1151,385,1149,386,1144,389,1139,388,1122,385,1113,394,1111,397,1110,400,1103,411,1099,418,L,1098,420,Q,1084,423,1069,423,1044,423,1017,422,1015,422,1014,422,972,420,930,420,883,420,837,420,L,816,388,816,385,Q,775,382,734,382,732,382,730,384,721,389,714,400,711,405,709,404,694,402,686,407,683,408,680,409,679,412,677,413,672,420,668,434,658,435,650,437,638,438,635,450,634,453,633,456,628,458,626,464,624,466,623,470,623,472,620,472,611,472,607,476,605,477,604,477,601,478,599,480,597,481,596,484,593,493,593,508,595,535,596,563,596,564,596,565,594,572,600,572,604,572,604,574,608,579,612,579,615,580,616,582,620,584,627,586,630,586,631,587,633,590,634,593,638,599,648,607,650,610,653,612,656,613,658,614,665,617,673,621,673,636,673,651,673,659,674,667,723,667,772,667,776,667,782,677,787,686,788,688,788,690,793,692,794,693,795,694,799,698,804,701,805,702,806,705,809,715,818,720,820,720,821,723,821,724,823,725,831,729,837,738,839,739,840,739,844,740,846,746,846,747,848,749,859,751,863,761,864,762,868,772,871,783,880,781,L,886,780,Q,883,781,892,790,901,798,904,798,906,798,909,801,912,805,911,812,911,819,922,818,923,818,928,824,932,830,939,831,946,831,945,844,945,857,945,883,944,894,935,896,934,896,932,896,923,900,918,905,916,906,912,907,905,921,905,936,906,982,907,1029,923,1028,930,1035,931,1037,932,1042,934,1044,936,1046,939,1050,939,1058,939,1060,941,1061,946,1063,950,1066,959,1071,966,1077,972,1081,976,1085,985,1092,988,1105,991,1111,994,1107,998,1104,1004,1109,1011,1113,1008,1122,1006,1130,1010,1130,1015,1129,1017,1131,1022,1135,1030,1139,1033,1140,1033,1143,1034,1147,1041,1147,1042,1147,1044,1149,1046,1153,1050,1156,1052,1158,1053,1161,1053,1162,1055,1164,1063,1169,1075,1172,L,1076,1175,Q,1084,1178,1083,1189,1083,1191,1083,1192,1083,1208,1102,1206,1117,1203,1126,1208,1128,1210,1129,1212,1129,1214,1129,1215,1130,1229,1133,1242,L,1136,1242,Q,1186,1242,1235,1244,1242,1244,1240,1253,1239,1260,1239,1268,1240,1280,1255,1278,1263,1276,1270,1276,1299,1276,1326,1278,1327,1279,1329,1280,1331,1287,1334,1288,1342,1295,1343,1312,L,1346,1312,Q,1369,1311,1392,1310,1399,1310,1398,1318,1395,1326,1400,1333,1402,1336,1402,1339,1402,1343,1407,1344,L,1409,1347,Q,1414,1348,1421,1354,1428,1361,1440,1367,L,1441,1370,Q,1441,1371,1445,1373,1449,1375,1458,1393,1465,1408,1479,1411,1482,1412,1485,1412,1502,1412,1529,1409,1532,1394,1532,1382,1533,1370,1547,1370,1600,1370,1653,1370,1703,1370,1752,1367,1753,1367,1755,1364,1759,1358,1759,1347,1759,1345,1759,1344,1760,1330,1759,1318,1758,1311,1765,1312,1767,1311,1769,1310,1772,1309,1775,1309,1791,1311,1794,1303,1795,1301,1795,1298,1795,1284,1794,1271,1794,1270,1795,1262,1795,1254,1788,1253,1781,1251,1778,1251,1773,1251,1771,1251,1769,1250,1767,1248,1764,1246,1761,1248,1758,1249,1753,1248,1748,1246,1748,1244,1747,1242,1748,1237,1748,1231,1752,1231,1756,1231,1757,1231,1769,1230,1783,1230,1794,1230,1803,1231,1805,1231,1806,1231,1814,1231,1817,1240,1818,1242,1820,1244,1821,1245,1824,1245,1828,1246,1830,1246,1834,1244,1833,1240,1833,1223,1835,1207,1834,1206,1836,1204,1844,1199,1851,1196,1854,1195,1856,1195,1864,1196,1867,1192,1868,1189,1870,1187,1875,1172,1875,1157,1874,1102,1874,1050,1874,1031,1871,1012,L,1867,1010,Q,1857,1009,1845,1001,1843,998,1840,995,1838,994,1839,991,1837,989,1836,986,1833,976,1833,963,1834,942,1830,925,1830,922,1829,918,1829,917,1828,915,1822,907,1818,898,1817,896,1816,896,1805,894,1798,887,1794,883,1790,879,1784,875,1786,864,1786,858,1788,856,1790,854,1791,853,1794,851,1797,850,1804,842,1809,838,1814,834,1813,831,1811,828,1818,820,1824,812,1827,804,1830,796,1832,795,1834,793,1836,791,1841,778,1862,781,1875,782,1882,773,1886,769,1884,764,1882,760,1887,759,1892,759,1896,756,1900,753,1901,747,1902,744,1902,740,1902,704,1901,668,1901,667,1900,664,1889,656,1879,648,1877,645,1874,644,1868,637,1873,628,1874,625,1875,621,1877,614,1879,616,1882,618,1887,611,1893,603,1907,603,1921,603,1935,603,1947,598,1944,580,1943,572,1943,565,1943,552,1939,545,1936,541,1934,538,1932,537,1930,537,1920,538,1916,534,1914,531,1912,530,1902,523,1901,510,1900,496,1900,481,1900,428,1900,375,1899,366,1897,356,1897,355,1894,354,Q,1883,351,1867,351,Z]],label:"Gorj",shortLabel:"GJ",labelPosition:[138.9,86.1],labelAlignment:[CEN,MID]},"RO.MH":{outlines:[[M,1010,1130,Q,1006,1130,1008,1122,1011,1113,1004,1109,998,1104,994,1107,991,1111,988,1105,985,1092,976,1085,972,1081,966,1077,959,1071,950,1066,946,1063,941,1061,939,1060,939,1058,939,1050,936,1046,934,1044,932,1042,931,1037,930,1035,923,1028,907,1029,906,982,905,936,905,921,912,907,916,906,918,905,923,900,932,896,934,896,935,896,944,894,945,883,945,857,945,844,946,831,939,831,932,830,928,824,923,818,922,818,911,819,911,812,912,805,909,801,906,798,904,798,901,798,892,790,883,781,886,780,L,880,781,Q,871,783,868,772,864,762,863,761,859,751,848,749,846,747,846,746,844,740,840,739,839,739,837,738,831,729,823,725,821,724,821,723,820,720,818,720,809,715,806,705,805,702,804,701,799,698,795,694,794,693,793,692,788,690,788,688,787,686,782,677,776,667,772,667,723,667,674,667,674,675,675,682,675,692,671,694,661,698,656,708,646,712,641,720,639,723,638,723,635,724,634,725,627,731,618,735,609,737,610,747,609,761,600,770,590,778,582,785,580,789,578,796,578,797,578,799,581,820,565,831,562,833,561,835,559,837,558,839,557,842,555,843,553,851,549,854,543,857,540,864,535,876,531,884,529,885,528,886,525,887,524,888,521,895,521,905,521,917,520,930,520,933,519,933,509,936,498,936,495,936,494,937,493,940,493,945,494,956,489,962,486,965,485,974,482,984,470,987,468,987,466,989,463,990,463,991,460,998,459,1006,457,1016,445,1021,441,1022,437,1023,432,1022,432,1027,432,1037,432,1047,432,1050,430,1052,428,1056,417,1055,414,1055,413,1056,406,1063,399,1070,398,1073,397,1073,380,1075,364,1075,L,361,1075,Q,360,1085,356,1090,354,1092,353,1093,349,1102,336,1100,333,1100,331,1099,329,1085,329,1070,329,1067,327,1066,326,1064,323,1063,315,1060,300,1062,298,1062,298,1061,295,1052,296,1044,296,1035,292,1032,291,1031,288,1031,257,1029,224,1031,219,1031,213,1035,212,1039,211,1042,209,1063,209,1085,209,1097,211,1111,211,1120,208,1124,205,1126,204,1128,202,1134,199,1138,196,1142,189,1146,185,1149,182,1153,179,1155,177,1157,163,1173,151,1184,148,1185,146,1187,139,1189,139,1199,139,1202,139,1204,137,1211,137,1217,137,1268,137,1318,137,1321,136,1322,133,1324,135,1329,137,1337,131,1337,108,1336,85,1336,78,1336,70,1335,52,1332,56,1350,56,1354,55,1356,55,1358,53,1359,52,1362,51,1362,45,1364,38,1363,18,1360,18,1379,18,1387,19,1394,19,1395,19,1397,21,1409,26,1417,30,1421,36,1424,42,1428,52,1435,54,1436,55,1438,56,1457,56,1476,56,1488,64,1493,65,1495,66,1496,67,1499,68,1500,71,1501,81,1499,91,1496,88,1503,85,1509,86,1512,87,1514,89,1516,90,1522,97,1525,98,1526,98,1527,99,1531,101,1533,103,1534,108,1534,121,1534,135,1535,141,1535,143,1530,148,1515,155,1507,156,1504,158,1501,163,1497,166,1489,167,1488,169,1488,175,1485,175,1481,175,1471,175,1461,175,1458,177,1455,182,1443,200,1435,201,1421,200,1408,198,1376,213,1362,219,1356,222,1352,226,1340,242,1341,244,1341,249,1336,254,1330,262,1324,269,1318,272,1317,274,1316,276,1313,277,1310,279,1306,279,1305,279,1303,280,1301,281,1299,284,1297,288,1294,295,1288,300,1278,307,1261,316,1263,325,1265,331,1257,336,1249,343,1250,349,1250,355,1248,359,1246,365,1250,369,1254,374,1250,375,1249,376,1248,383,1245,384,1237,384,1234,386,1231,388,1229,390,1226,394,1222,397,1222,406,1218,405,1207,403,1197,407,1195,411,1192,420,1191,430,1189,435,1179,437,1173,441,1168,444,1162,449,1161,459,1159,463,1164,464,1165,466,1165,474,1165,478,1169,479,1170,481,1170,486,1170,486,1175,486,1187,486,1199,486,1201,487,1203,499,1218,516,1230,520,1233,523,1237,524,1239,525,1242,527,1244,533,1248,539,1253,546,1264,552,1275,565,1280,578,1284,585,1282,592,1279,593,1282,593,1285,596,1283,599,1281,608,1291,617,1301,635,1302,654,1302,668,1309,669,1310,675,1316,680,1322,684,1330,688,1337,690,1340,691,1343,696,1345,698,1345,699,1345,706,1348,713,1352,714,1356,715,1358,718,1362,721,1367,722,1371,729,1374,730,1375,732,1375,737,1378,743,1379,748,1381,752,1385,754,1386,755,1387,757,1402,757,1417,757,1421,756,1425,752,1439,748,1446,744,1453,743,1455,741,1456,734,1459,725,1459,717,1463,714,1465,713,1468,706,1477,699,1484,698,1485,696,1485,689,1486,681,1488,676,1488,671,1489,656,1490,648,1487,646,1485,645,1484,643,1470,643,1455,643,1452,643,1451,619,1448,595,1449,592,1448,591,1450,585,1454,582,1455,580,1458,580,1461,577,1480,577,1499,577,1501,576,1504,573,1508,574,1516,L,574,1519,Q,553,1522,531,1522,504,1522,475,1520,441,1519,443,1550,443,1577,441,1603,441,1615,445,1621,448,1622,448,1624,453,1636,466,1640,468,1640,470,1641,471,1644,473,1647,479,1653,482,1667,482,1671,482,1674,481,1693,490,1700,491,1701,493,1701,502,1699,502,1708,502,1710,504,1710,509,1713,512,1719,510,1729,511,1737,509,1760,517,1781,517,1782,517,1784,519,1786,520,1788,525,1797,536,1799,542,1800,546,1803,548,1804,550,1805,565,1816,580,1830,582,1832,584,1832,588,1834,592,1834,618,1834,645,1835,646,1835,648,1835,656,1836,665,1837,680,1835,694,1838,696,1839,698,1841,699,1842,700,1843,706,1846,707,1854,707,1855,707,1857,708,1898,709,1938,708,1941,710,1942,713,1946,714,1953,715,1958,719,1961,722,1963,722,1964,723,1972,729,1975,732,1976,734,1978,740,1980,747,1984,750,1987,752,1994,753,1999,757,2002,759,2005,761,2007,764,2013,772,2012,775,2011,775,2013,778,2018,785,2018,787,2018,789,2021,793,2025,795,2025,801,2028,802,2032,806,2040,810,2050,812,2051,813,2051,833,2052,854,2052,867,2052,877,2058,879,2059,881,2059,889,2060,892,2066,893,2068,894,2070,896,2073,899,2075,901,2079,907,2082,908,2082,909,2082,938,2083,965,2083,968,2083,969,2085,976,2089,983,2092,983,2090,983,2089,984,2087,985,2086,991,2079,995,2071,998,2068,1e3,2066,1001,2063,1003,2060,1004,2052,1011,2048,1014,2047,1015,2047,1031,2045,1046,2045,1061,2044,1074,2050,1075,2050,1076,2050,1107,2051,1137,2051,1140,2051,1141,2050,1144,2048,1147,2047,1149,2044,1152,2044,1161,2044,1162,2036,1163,2007,1163,1978,1163,1923,1163,1870,1163,1862,1162,1856,1160,1851,1152,1851,1138,1853,1126,1847,1125,1836,1120,1832,1118,1831,1118,1830,1117,1821,1116,1815,1114,1796,1132,1797,1139,1797,1145,1796,1151,1794,1151,1792,1152,1784,1154,1777,1153,1775,1155,1774,1156,1769,1159,1765,1166,1759,1178,1761,1195,1762,1204,1754,1205,1752,1206,1752,1210,1751,1213,1746,1217,1731,1234,1732,1239,1733,1240,1728,1246,1713,1259,1708,1262,1706,1262,1705,1265,1691,1262,1676,1246,1678,1236,1667,1235,1665,1234,1666,1224,1665,1221,1660,1217,1652,1215,1649,1213,1645,1213,1643,1213,1641,1206,1636,1198,1632,1200,1617,1201,1609,1205,1609,1209,1609,1213,1607,1216,1606,1220,1599,1224,1592,1227,1591,1240,1585,1249,1573,1250,1572,1250,1571,1252,1558,1262,1554,1263,1554,1265,1554,1271,1552,1273,1545,1273,1543,1274,1541,1277,1539,1278,1537,1284,1533,1292,1531,1294,1531,1296,1529,1297,1527,1299,1526,1308,1520,1305,1510,1305,1504,1307,1500,1308,1497,1310,1495,1311,1489,1315,1481,1338,1480,1361,1480,1388,1480,1411,1481,1433,1482,1446,1474,1459,1466,1472,1457,L,1475,1457,Q,1478,1434,1479,1411,1465,1408,1458,1393,1449,1375,1445,1373,1441,1371,1441,1370,L,1440,1367,Q,1428,1361,1421,1354,1414,1348,1409,1347,L,1407,1344,Q,1402,1343,1402,1339,1402,1336,1400,1333,1395,1326,1398,1318,1399,1310,1392,1310,1369,1311,1346,1312,L,1343,1312,Q,1342,1295,1334,1288,1331,1287,1329,1280,1327,1279,1326,1278,1299,1276,1270,1276,1263,1276,1255,1278,1240,1280,1239,1268,1239,1260,1240,1253,1242,1244,1235,1244,1186,1242,1136,1242,L,1133,1242,Q,1130,1229,1129,1215,1129,1214,1129,1212,1128,1210,1126,1208,1117,1203,1102,1206,1083,1208,1083,1192,1083,1191,1083,1189,1084,1178,1076,1175,L,1075,1172,Q,1063,1169,1055,1164,1053,1162,1053,1161,1052,1158,1050,1156,1046,1153,1044,1149,1042,1147,1041,1147,1034,1147,1033,1143,1033,1140,1030,1139,1022,1135,1017,1131,Q,1015,1129,1010,1130,Z]],label:"Mehedinţi",shortLabel:"MH",labelPosition:[96.8,138],labelAlignment:[CEN,MID]},"RO.OT":{outlines:[[M,2646,1020,Q,2644,1028,2640,1032,2639,1033,2639,1035,2638,1037,2636,1039,2635,1040,2630,1043,2624,1056,2610,1063,2596,1070,2594,1071,2591,1073,2590,1073,2589,1074,2586,1079,2583,1083,2579,1085,2575,1086,2574,1088,2571,1100,2556,1099,2549,1098,2541,1100,2522,1102,2524,1088,2524,1073,2522,1058,2522,1047,2526,1043,2528,1041,2528,1040,2529,1032,2536,1031,2538,1030,2540,1028,2542,1024,2549,1020,2552,1018,2554,1016,2522,1012,2491,1012,2484,1012,2480,1017,2473,1022,2469,1029,2468,1032,2467,1032,2457,1039,2450,1044,2449,1046,2448,1046,2439,1046,2437,1051,2434,1054,2431,1058,2425,1069,2426,1090,2427,1104,2422,1111,2416,1116,2407,1116,2404,1116,2403,1118,2400,1123,2398,1126,2398,1150,2398,1175,2398,1227,2398,1280,2397,1291,2396,1301,2395,1321,2406,1329,2408,1330,2408,1332,2414,1343,2426,1345,2429,1345,2430,1347,2433,1348,2433,1350,2435,1373,2436,1396,2435,1412,2423,1420,2422,1421,2421,1421,L,2418,1423,Q,2415,1434,2415,1443,2415,1446,2414,1446,2406,1448,2398,1449,2385,1450,2385,1440,2385,1438,2384,1435,2383,1434,2381,1432,2377,1430,2369,1430,2362,1429,2365,1420,2366,1410,2357,1412,2349,1413,2342,1412,2326,1410,2322,1420,2320,1421,2319,1421,2316,1423,2315,1424,2304,1429,2304,1446,2304,1448,2303,1450,2294,1455,2284,1454,2281,1454,2280,1457,2278,1460,2275,1463,2272,1466,2271,1466,2269,1466,2267,1468,2262,1477,2246,1474,2243,1474,2242,1476,2240,1478,2239,1480,2237,1481,2235,1482,2233,1482,2232,1482,2218,1486,2212,1492,2210,1493,2209,1495,2205,1504,2197,1512,2195,1514,2195,1515,2194,1519,2193,1520,2191,1523,2187,1525,2176,1530,2170,1539,2164,1549,2157,1556,2156,1558,2153,1560,2147,1561,2146,1554,2145,1546,2136,1541,2128,1535,2119,1531,2110,1526,2100,1525,2088,1524,2077,1526,2061,1527,2061,1515,2061,1512,2060,1510,2057,1501,2057,1492,L,2057,1489,Q,2043,1486,2030,1487,2023,1486,2016,1488,2011,1488,2008,1487,2007,1500,2004,1508,2004,1509,2001,1510,1999,1511,1996,1511,1988,1511,1984,1518,1984,1519,1981,1520,1980,1520,1978,1522,1974,1528,1973,1539,L,1969,1541,Q,1962,1543,1959,1546,1958,1549,1955,1550,1947,1553,1938,1554,1936,1556,1936,1557,1935,1561,1928,1562,L,1928,1565,Q,1928,1580,1931,1592,1932,1594,1935,1594,1951,1594,1965,1596,1966,1598,1966,1600,1966,1626,1969,1652,L,1972,1652,Q,1982,1652,1992,1655,1993,1656,1993,1659,1993,1672,1995,1687,2008,1690,2022,1690,2026,1690,2030,1691,2032,1693,2034,1693,2038,1694,2042,1695,2045,1695,2048,1695,2056,1695,2060,1700,2064,1703,2075,1702,2089,1701,2098,1704,2100,1705,2103,1706,2104,1706,2106,1708,2108,1717,2107,1731,2106,1740,2111,1747,2113,1748,2113,1751,2113,1778,2115,1804,L,2118,1804,Q,2128,1802,2133,1805,2137,1807,2141,1807,2145,1806,2145,1813,2144,1821,2144,1830,2142,1838,2145,1842,2146,1844,2147,1847,2146,1858,2148,1868,2148,1874,2159,1873,2165,1872,2174,1870,2183,1870,2186,1875,2187,1877,2187,1880,2187,1896,2190,1911,2191,1912,2194,1912,2209,1912,2223,1915,L,2223,1918,Q,2221,1923,2225,1925,2227,1925,2228,1925,2240,1927,2247,1931,2250,1933,2252,1933,2267,1931,2265,1950,2265,1952,2265,1953,2266,1957,2273,1957,2278,1957,2281,1964,2281,1965,2282,1968,2283,1971,2284,1974,2283,1990,2285,2005,2285,2006,2285,2007,2285,2014,2293,2013,2294,2013,2296,2013,2304,2014,2311,2014,2319,2014,2318,2025,2316,2032,2316,2040,2316,2070,2313,2098,2313,2100,2311,2100,2301,2102,2297,2113,2297,2115,2296,2116,2288,2120,2282,2125,2281,2128,2280,2131,2275,2140,2277,2157,2278,2171,2278,2185,2278,2196,2280,2204,2281,2207,2281,2210,2281,2231,2284,2253,2284,2254,2286,2254,2290,2256,2294,2257,2296,2258,2296,2261,2293,2270,2299,2272,2303,2273,2307,2275,2311,2276,2313,2277,2316,2278,2318,2279,2319,2279,2319,2281,2319,2300,2316,2319,L,2313,2321,Q,2302,2326,2299,2334,2290,2348,2292,2367,2293,2382,2294,2395,2294,2407,2289,2412,2288,2413,2284,2414,2277,2417,2274,2420,2273,2423,2271,2425,2270,2428,2269,2431,2268,2432,2266,2433,2256,2437,2258,2451,2258,2485,2256,2520,2256,2523,2255,2524,2250,2528,2242,2534,2240,2535,2239,2537,2237,2538,2235,2539,2227,2543,2223,2553,2221,2554,2220,2556,2209,2561,2199,2568,2198,2569,2197,2570,2190,2577,2186,2580,2184,2583,2183,2585,2183,2587,2182,2588,2176,2592,2178,2603,2179,2618,2179,2631,2180,2657,2178,2682,2176,2692,2176,2705,2176,2713,2176,2722,2208,2722,2240,2722,2293,2722,2347,2721,2350,2721,2351,2721,2374,2720,2398,2720,2402,2720,2406,2718,2407,2718,2408,2716,2422,2701,2441,2702,2448,2703,2449,2698,2452,2692,2455,2688,2458,2686,2467,2686,2471,2687,2476,2686,2486,2683,2488,2672,2490,2669,2491,2668,2495,2667,2499,2667,2502,2665,2502,2664,2503,2656,2507,2652,2511,2648,2514,2646,2517,2646,2518,2645,2519,2642,2527,2644,2535,2644,2537,2642,2539,2640,2540,2642,2541,2643,2550,2635,2559,2626,2556,2616,2552,2605,2558,2607,2564,2608,2573,2607,2574,2607,2575,2607,2586,2606,2596,2606,2598,2606,2601,2607,2605,2608,2608,2610,2616,2611,2617,2614,2620,2619,2625,2626,2627,2627,2627,2629,L,2628,2631,Q,2647,2634,2665,2636,2678,2635,2684,2646,2685,2647,2693,2654,2700,2660,2704,2672,2708,2683,2722,2684,2736,2684,2764,2683,2766,2683,2767,2682,2768,2677,2771,2675,2781,2665,2781,2644,2781,2641,2783,2640,2788,2635,2786,2626,2785,2623,2787,2622,2791,2615,2791,2606,2791,2603,2792,2602,2803,2595,2819,2595,2826,2596,2834,2595,2840,2595,2840,2591,2840,2581,2840,2570,L,2840,2568,Q,2856,2565,2872,2565,2875,2565,2875,2564,2878,2555,2879,2545,2880,2535,2875,2532,2865,2530,2855,2530,2852,2530,2849,2528,2845,2526,2837,2527,2834,2527,2834,2526,2832,2519,2833,2512,2833,2507,2829,2507,2811,2509,2809,2500,2808,2497,2807,2496,2804,2492,2806,2484,2806,2481,2806,2480,2788,2477,2771,2478,2767,2477,2764,2478,2758,2478,2753,2478,2742,2478,2738,2474,2738,2473,2738,2471,2738,2469,2739,2467,2741,2465,2742,2462,2747,2454,2758,2454,2776,2454,2794,2455,2800,2455,2802,2451,2802,2441,2802,2431,L,2802,2428,Q,2792,2425,2781,2425,L,2779,2425,Q,2776,2410,2776,2395,2776,2393,2775,2391,2773,2390,2771,2389,2765,2386,2768,2375,2768,2367,2758,2370,2754,2370,2750,2368,2747,2367,2743,2368,2738,2368,2738,2364,2738,2340,2738,2317,L,2738,2314,Q,2726,2311,2715,2311,2712,2311,2710,2310,2700,2306,2703,2288,2703,2283,2704,2279,2705,2276,2708,2275,2712,2272,2715,2268,2716,2266,2718,2267,2720,2265,2723,2264,2726,2264,2727,2262,2734,2261,2741,2262,2757,2265,2764,2256,2770,2249,2779,2241,2780,2239,2781,2238,2791,2234,2794,2219,2803,2218,2802,2210,2802,2207,2803,2204,2808,2199,2811,2191,2819,2190,2821,2182,2821,2180,2824,2178,2828,2173,2832,2169,2834,2167,2837,2166,2845,2166,2853,2162,2857,2162,2861,2162,2914,2162,2967,2162,2970,2162,2971,2161,2984,2151,2984,2149,2985,2147,2986,2141,2987,2135,2986,2123,2984,2112,2987,2103,2989,2094,2985,2093,2981,2091,2980,2090,2978,2089,2977,2087,2975,2086,2971,2083,2970,2075,2969,2068,2969,2067,2969,2064,2969,2061,2955,2059,2941,2057,2943,2048,2944,2039,2942,2035,2939,2033,2939,2031,2936,2025,2929,2026,2918,2028,2920,2020,2921,2012,2919,2003,2917,1993,2906,1995,2895,1997,2893,1994,2891,1990,2891,1976,L,2899,1969,Q,2905,1965,2912,1960,2913,1960,2914,1957,2918,1950,2927,1949,2932,1948,2932,1944,2932,1941,2933,1938,2937,1934,2940,1929,2944,1922,2950,1919,2952,1918,2952,1917,2955,1907,2963,1906,2966,1904,2966,1903,2967,1865,2967,1827,2967,1824,2966,1820,2962,1812,2950,1812,2947,1812,2943,1811,2939,1809,2932,1807,2929,1807,2928,1805,2926,1801,2927,1797,2925,1788,2935,1788,2939,1788,2943,1788,2959,1786,2975,1786,2979,1786,2984,1785,2989,1782,2994,1778,2996,1775,2996,1774,2998,1751,2999,1728,2998,1725,2997,1724,2989,1721,2981,1721,2967,1721,2955,1720,2954,1720,2952,1720,2948,1718,2950,1713,2952,1699,2943,1700,2926,1698,2909,1698,2906,1698,2905,1697,2902,1694,2897,1695,2882,1699,2885,1685,2887,1674,2879,1675,2865,1678,2864,1670,2862,1666,2864,1660,2864,1627,2864,1594,2864,1541,2864,1489,2864,1485,2863,1481,2861,1474,2856,1469,2855,1467,2853,1468,2851,1466,2848,1465,2842,1458,2829,1461,L,2826,1461,Q,2823,1436,2824,1413,2823,1387,2825,1362,2825,1347,2822,1337,2819,1332,2815,1325,2803,1324,2791,1324,L,2788,1324,Q,2785,1277,2786,1230,2785,1227,2784,1226,2779,1219,2777,1212,2777,1210,2776,1207,2772,1199,2756,1198,2754,1195,2753,1193,2746,1182,2739,1177,2738,1176,2737,1176,2720,1177,2715,1166,2714,1164,2712,1160,2712,1158,2711,1157,2709,1150,2711,1143,2711,1136,2707,1137,2699,1138,2697,1134,2696,1131,2695,1128,2695,1127,2693,1126,2692,1077,2692,1027,2692,1024,2691,1020,2688,1016,2678,1016,2665,1017,2651,1018,2650,1018,2649,1018,Z]],label:"Olt",shortLabel:"OT",labelPosition:[259.3,186.7],labelAlignment:[CEN,MID]},"RO.VL":{outlines:[[M,2655,85,Q,2655,73,2649,72,2643,72,2646,65,2646,62,2644,59,2644,58,2643,57,2642,29,2642,1,2630,1,2619,1,2564,1,2511,2,2509,2,2506,2,2492,4,2479,5,2477,5,2475,5,2472,5,2459,8,2445,10,2442,22,2439,34,2438,34,2423,35,2407,35,2400,35,2392,36,2389,36,2387,39,2382,43,2377,44,2376,46,2374,47,2370,57,2362,65,2361,66,2360,66,2345,67,2331,68,2328,67,2326,69,2319,74,2313,80,2312,82,2311,85,2304,92,2297,99,2296,101,2268,103,2240,104,2197,104,2154,104,2137,93,2120,82,2106,84,2091,86,2078,83,2065,80,2063,81,2061,82,2056,80,2057,67,2048,68,2005,68,1963,68,1909,68,1856,68,1854,67,1851,69,1847,71,1841,72,1830,70,1826,76,1824,80,1816,84,1813,85,1811,88,1809,95,1801,96,1798,96,1797,97,1790,101,1779,103,1768,104,1765,106,1761,107,1757,108,1752,109,1747,118,1742,126,1736,135,1730,145,1717,143,1711,143,1707,145,1700,147,1689,153,1687,154,1685,158,1684,161,1684,164,1681,180,1681,196,1681,222,1683,248,1684,264,1680,274,1678,278,1677,279,1674,280,1673,283,1668,293,1661,304,1658,308,1654,310,1654,313,1655,314,1657,318,1660,320,1662,324,1665,327,1668,330,1673,337,1678,344,1687,348,1695,351,1696,351,1729,352,1760,352,1813,352,1867,351,1883,351,1894,354,1897,355,1897,356,1899,366,1900,375,1900,428,1900,481,1900,496,1901,510,1902,523,1912,530,1914,531,1916,534,1920,538,1930,537,1932,537,1934,538,1936,541,1939,545,1943,552,1943,565,1943,572,1944,580,1947,598,1935,603,1921,603,1907,603,1893,603,1887,611,1882,618,1879,616,1877,614,1875,621,1874,625,1873,628,1868,637,1874,644,1877,645,1879,648,1889,656,1900,664,1901,667,1901,668,1902,704,1902,740,1902,744,1901,747,1900,753,1896,756,1892,759,1887,759,1882,760,1884,764,1886,769,1882,773,1875,782,1862,781,1841,778,1836,791,1834,793,1832,795,1830,796,1827,804,1824,812,1818,820,1811,828,1813,831,1814,834,1809,838,1804,842,1797,850,1794,851,1791,853,1790,854,1788,856,1786,858,1786,864,1784,875,1790,879,1794,883,1798,887,1805,894,1816,896,1817,896,1818,898,1822,907,1828,915,1829,917,1829,918,1830,922,1830,925,1834,942,1833,963,1833,976,1836,986,1837,989,1839,991,1838,994,1840,995,1843,998,1845,1001,1857,1009,1867,1010,L,1871,1012,Q,1874,1031,1874,1050,1874,1102,1875,1157,1875,1172,1870,1187,1868,1189,1867,1192,1864,1196,1856,1195,1854,1195,1851,1196,1844,1199,1836,1204,1834,1206,1835,1207,1833,1223,1833,1240,1834,1244,1830,1246,1829,1261,1829,1276,1829,1280,1832,1283,1837,1287,1847,1287,1849,1292,1849,1297,1849,1301,1851,1303,1852,1307,1854,1312,1855,1313,1855,1314,1860,1326,1873,1325,1882,1325,1879,1335,1879,1339,1885,1339,1889,1337,1893,1339,1895,1340,1897,1341,1908,1347,1913,1352,1916,1353,1917,1354,1920,1355,1923,1356,1924,1358,1925,1358,1928,1359,1931,1359,1938,1360,1936,1370,1934,1383,1946,1386,1951,1398,1963,1398,1965,1398,1966,1398,1969,1400,1970,1401,1971,1402,1972,1405,1971,1416,1975,1421,1978,1427,1986,1430,1995,1434,1997,1437,2e3,1440,1999,1441,1999,1442,2001,1444,2002,1447,2001,1449,L,2003,1451,Q,2003,1452,2003,1454,2004,1467,2004,1481,2004,1485,2008,1487,2011,1488,2016,1488,2023,1486,2030,1487,2043,1486,2057,1489,L,2057,1492,Q,2057,1501,2060,1510,2061,1512,2061,1515,2061,1527,2077,1526,2088,1524,2100,1525,2110,1526,2119,1531,2128,1535,2136,1541,2145,1546,2146,1554,2147,1561,2153,1560,2156,1558,2157,1556,2164,1549,2170,1539,2176,1530,2187,1525,2191,1523,2193,1520,2194,1519,2195,1515,2195,1514,2197,1512,2205,1504,2209,1495,2210,1493,2212,1492,2218,1486,2232,1482,2233,1482,2235,1482,2237,1481,2239,1480,2240,1478,2242,1476,2243,1474,2246,1474,2262,1477,2267,1468,2269,1466,2271,1466,2272,1466,2275,1463,2278,1460,2280,1457,2281,1454,2284,1454,2294,1455,2303,1450,2304,1448,2304,1446,2304,1429,2315,1424,2316,1423,2319,1421,2320,1421,2322,1420,2326,1410,2342,1412,2349,1413,2357,1412,2366,1410,2365,1420,2362,1429,2369,1430,2377,1430,2381,1432,2383,1434,2384,1435,2385,1438,2385,1440,2385,1450,2398,1449,2406,1448,2414,1446,2415,1446,2415,1443,2415,1434,2418,1423,L,2421,1421,Q,2422,1421,2423,1420,2435,1412,2436,1396,2435,1373,2433,1350,2433,1348,2430,1347,2429,1345,2426,1345,2414,1343,2408,1332,2408,1330,2406,1329,2395,1321,2396,1301,2397,1291,2398,1280,2398,1227,2398,1175,2398,1150,2398,1126,2400,1123,2403,1118,2404,1116,2407,1116,2416,1116,2422,1111,2427,1104,2426,1090,2425,1069,2431,1058,2434,1054,2437,1051,2439,1046,2448,1046,2449,1046,2450,1044,2457,1039,2467,1032,2468,1032,2469,1029,2473,1022,2480,1017,2484,1012,2491,1012,2522,1012,2554,1016,2562,1012,2570,1009,2571,1008,2573,1006,2577,1004,2577,1e3,2579,990,2579,979,2579,964,2596,971,2596,928,2596,895,2595,892,2597,891,2604,879,2616,869,2625,862,2636,857,2638,857,2639,856,2647,856,2647,849,2648,833,2649,816,2649,765,2649,712,2649,657,2649,605,2648,602,2647,601,2644,598,2646,593,2646,590,2644,587,2644,586,2643,584,2641,580,2640,575,2638,569,2636,560,2634,550,2625,542,2616,533,2608,534,2605,534,2604,534,2601,493,2601,453,2601,450,2602,449,2605,446,2605,445,2608,431,2608,418,2608,392,2609,366,2609,364,2609,362,2608,354,2601,348,2600,347,2600,346,2598,343,2597,340,2591,333,2587,325,2586,324,2585,321,2583,299,2583,278,2583,274,2585,270,2587,260,2598,253,2605,249,2604,234,2604,226,2605,219,2605,217,2608,214,2612,211,2613,206,2614,203,2616,202,2621,200,2621,196,2621,187,2621,176,2621,173,2623,171,2625,161,2634,156,2636,154,2639,153,2640,150,2643,149,2647,146,2651,143,2652,141,2653,138,Q,2654,112,2655,85,Z]],label:"Vâlcea",shortLabel:"VL",labelPosition:[224.4,78],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"sudvestoltenia",type:"maps"}}})});