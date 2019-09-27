(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=764)})({764:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(765);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},765:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.YunlinCounty.1.03-24-2017 02:52:43
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"YunlinCounty",revision:1,standaloneInit:true,baseWidth:700,baseHeight:442,baseScaleFactor:10,entities:{"TW.YL.BG":{outlines:[[M,2009,2836,Q,2008,2808,2005,2795,2001,2775,2001,2748,2001,2715,2001,2711,1974,2706,1943,2696,1907,2684,1885,2677,1843,2665,1825,2658,1812,2654,1809,2644,L,1798,2644,Q,1746,2662,1712,2679,1701,2684,1670,2704,1641,2720,1626,2720,1625,2720,1622,2720,1622,2736,1617,2753,1613,2771,1613,2780,1613,2786,1615,2797,1618,2808,1618,2821,1618,2840,1603,2852,1588,2863,1588,2894,1588,2907,1590,2910,1592,2915,1606,2922,1609,2924,1620,2925,1630,2926,1633,2928,1654,2947,1667,2953,1670,2956,1670,2981,1670,3001,1664,3013,1655,3032,1650,3057,1647,3069,1643,3097,1637,3124,1628,3143,1620,3159,1600,3221,1579,3282,1579,3289,1579,3309,1598,3330,1631,3366,1641,3382,1704,3443,1729,3469,1754,3494,1754,3509,1754,3524,1705,3568,1655,3611,1655,3627,1655,3628,1698,3704,1727,3755,1737,3790,1788,3785,1825,3786,1866,3787,1884,3785,1914,3782,1937,3787,1943,3788,1943,3762,1943,3741,1927,3705,1908,3667,1900,3652,1888,3613,1880,3593,1866,3559,1841,3558,L,1841,3551,1884,3551,Q,1941,3564,2015,3588,2047,3599,2117,3599,2129,3599,2132,3574,2132,3546,2132,3540,2132,3515,2123,3494,2115,3472,2115,3449,2115,3414,2121,3401,2127,3382,2148,3382,2168,3382,2179,3388,2189,3393,2212,3393,2223,3393,2243,3399,2269,3405,2287,3407,2339,3414,2371,3416,2371,3420,2377,3440,2387,3435,2389,3429,2390,3426,2390,3409,2390,3394,2376,3386,2362,3378,2361,3364,2363,3322,2359,3307,2322,3222,2322,3205,2322,3180,2338,3174,2393,3155,2393,3155,2436,3131,2466,3120,2464,3089,2415,3065,2356,3041,2335,3027,2300,3004,2260,2986,2211,2967,2181,2955,2136,2936,2104,2918,2070,2900,2026,2869,Q,2012,2859,2009,2836,Z]],label:"Beigang Township",shortLabel:"BG",labelPosition:[195.4,319.4],labelAlignment:[CEN,MID]},"TW.YL.DN":{outlines:[[M,4027,1531,Q,3963,1557,3954,1562,3948,1565,3948,1602,3948,1608,3952,1673,3952,1676,3952,1679,3953,1696,3956,1724,3884,1739,3809,1757,3734,1775,3723,1805,3710,1835,3726,1868,3741,1901,3741,1908,3741,1924,3545,1985,3530,1985,3528,1977,3523,1960,3516,1951,3504,1935,3494,1934,3480,1934,3465,1932,3437,1927,3391,1922,3357,1918,3344,1918,L,3326,1920,Q,3301,1920,3293,1921,3269,1922,3265,1929,3259,1936,3259,1949,3258,1963,3255,1969,3248,1983,3222,2005,3222,2007,3224,2012,3227,2017,3232,2025,3244,2044,3246,2050,3246,2052,3281,2110,3296,2124,3323,2127,3355,2129,3363,2133,3385,2144,3411,2145,3442,2147,3459,2153,3485,2164,3508,2168,3522,2171,3553,2174,3561,2176,3575,2175,3599,2174,3600,2174,3610,2174,3627,2181,3645,2188,3650,2188,3720,2188,3752,2202,3756,2204,3772,2206,3791,2209,3800,2211,3812,2214,3821,2229,3825,2238,3831,2250,3840,2262,3865,2287,3886,2311,3886,2327,3886,2329,3854,2452,3820,2583,3815,2631,3816,2630,3817,2629,3909,2628,3933,2630,3956,2632,3988,2630,4020,2628,4024,2625,4034,2618,4036,2583,L,4094,2583,Q,4141,2598,4163,2607,4170,2609,4213,2609,4265,2609,4277,2605,L,4287,2605,Q,4379,2596,4490,2574,4646,2546,4693,2538,4650,2478,4560,2407,4453,2330,4404,2293,4391,2283,4322,2244,4267,2213,4250,2194,4226,2167,4216,2113,4200,2025,4198,2016,L,4195,1885,Q,4099,1809,4099,1775,4099,1745,4110,1711,4121,1674,4124,1632,4125,1624,4132,1598,4138,1574,4138,1559,L,4138,1495,Q,4140,1494,4143,1493,Q,4098,1498,4027,1531,Z]],label:"Dounan Township",shortLabel:"DN",labelPosition:[395.7,206.2],labelAlignment:[CEN,MID]},"TW.YL.HU":{outlines:[[M,3790,1169,Q,3768,1169,3742,1180,3714,1192,3699,1197,3667,1203,3651,1206,3622,1212,3603,1231,3612,1245,3620,1256,3625,1263,3625,1278,3625,1296,3623,1299,3617,1310,3590,1305,3580,1304,3556,1304,3533,1305,3530,1305,3474,1305,3393,1289,3382,1287,3349,1287,3311,1288,3292,1287,3266,1285,3256,1268,3250,1259,3248,1255,3245,1252,3243,1252,3233,1252,3207,1272,3180,1292,3168,1292,3160,1292,3158,1288,3153,1281,3146,1278,3141,1276,3132,1276,3121,1276,3115,1276,3107,1276,3082,1265,3057,1254,3048,1254,3023,1254,2976,1248,2931,1242,2910,1236,2913,1261,2927,1300,2945,1347,2952,1379,L,2952,1399,2930,1399,Q,2926,1395,2920,1394,2913,1392,2909,1386,L,2864,1386,Q,2862,1411,2859,1471,2853,1523,2833,1548,L,2833,1623,Q,2899,1627,2970,1623,L,2970,1651,Q,2964,1657,2963,1660,2963,1662,2965,1668,2957,1688,2939,1748,2933,1769,2916,1801,2907,1816,2907,1842,2907,1852,2928,1871,2949,1889,2956,1889,2963,1889,2965,1885,2969,1879,2981,1875,L,3020,1867,Q,3035,1857,3057,1845,3076,1834,3078,1834,3116,1834,3119,1859,3122,1876,3122,1931,3126,1957,3125,2013,3140,2013,3173,2015,3206,2015,3224,2012,3222,2007,3222,2005,3248,1983,3255,1969,3258,1963,3259,1949,3259,1936,3265,1929,3269,1922,3293,1921,3301,1920,3326,1920,L,3344,1918,Q,3357,1918,3391,1922,3437,1927,3465,1932,3480,1934,3494,1934,3504,1935,3516,1951,3523,1960,3528,1977,3530,1985,3545,1985,3741,1924,3741,1908,3741,1901,3726,1868,3710,1835,3723,1805,3734,1775,3809,1757,3884,1739,3956,1724,3953,1696,3952,1679,3952,1676,3952,1673,3948,1608,3948,1602,3948,1565,3954,1562,3963,1557,4027,1531,4098,1498,4143,1493,4274,1454,4274,1434,4274,1422,4231,1381,4196,1346,4190,1328,4158,1280,4130,1242,4075,1169,4052,1169,4028,1169,4017,1176,3996,1186,3973,1192,3946,1199,3931,1211,3920,1219,3905,1221,3904,1221,3902,1221,3871,1221,3838,1195,Q,3805,1169,3790,1169,Z]],label:"Huwei Township",shortLabel:"HU",labelPosition:[346.6,159.2],labelAlignment:[CEN,MID]},"TW.YL.TK":{outlines:[[M,2856,1212,Q,2850,1212,2802,1229,2759,1243,2744,1243,2714,1243,2685,1231,2621,1203,2606,1199,2589,1193,2536,1182,2481,1169,2474,1169,2458,1169,2419,1182,2379,1195,2373,1202,2371,1203,2369,1204,2387,1236,2408,1281,2429,1313,2472,1313,2483,1313,2528,1309,2573,1306,2594,1307,L,2649,1312,2651,1460,Q,2557,1600,2525,1642,2493,1684,2444,1752,2396,1818,2395,1836,2393,1853,2449,1886,2466,1896,2475,1915,2484,1932,2502,1939,2548,1960,2558,1981,2564,1994,2564,2047,2564,2053,2563,2123,2563,2126,2563,2129,2561,2161,2561,2232,2549,2253,2535,2276,2526,2293,2517,2319,2509,2341,2509,2414,2506,2505,2504,2531,L,2504,2550,Q,2577,2527,2724,2444,2858,2368,2868,2368,2882,2368,2890,2373,2902,2382,2925,2388,2935,2391,2960,2394,2980,2397,2988,2401,3008,2409,3010,2411,3022,2420,3022,2439,3023,2459,3023,2483,3063,2488,3068,2463,3068,2430,3073,2416,3076,2407,3088,2371,3101,2330,3103,2317,3112,2280,3116,2259,3124,2222,3122,2190,3122,2082,3122,2077,3125,2036,3125,2013,3126,1957,3122,1931,3122,1876,3119,1859,3116,1834,3078,1834,3076,1834,3057,1845,3035,1857,3020,1867,L,2981,1875,Q,2969,1879,2965,1885,2963,1889,2956,1889,2949,1889,2928,1871,2907,1852,2907,1842,2907,1816,2916,1801,2933,1769,2939,1748,2957,1688,2965,1668,2963,1662,2963,1660,2964,1657,2970,1651,L,2970,1623,Q,2899,1627,2833,1623,L,2833,1548,Q,2853,1523,2859,1471,2862,1411,2864,1386,L,2909,1386,Q,2913,1392,2920,1394,2926,1395,2930,1399,L,2952,1399,2952,1379,Q,2945,1347,2927,1300,2913,1261,2910,1236,L,2909,1236,2909,1213,Z]],label:"Tuku Township",shortLabel:"TK",labelPosition:[282,212],labelAlignment:[CEN,MID]},"TW.YL.XI":{outlines:[[M,3614,227,Q,3577,218,3555,203,3545,204,3528,214,3506,229,3496,232,3488,235,3470,250,3453,263,3444,265,3434,266,3421,282,3408,300,3400,303,3390,305,3386,306,3378,309,3373,317,3372,319,3362,324,3353,328,3352,332,3346,359,3344,486,3343,618,3342,634,3342,643,3345,664,3345,684,3334,693,3318,702,3305,709,3290,713,3279,718,3255,728,3255,743,3255,751,3291,784,3337,826,3337,827,3370,863,3372,866,3402,901,3402,913,3402,927,3363,957,3325,987,3325,1010,3325,1028,3326,1028,3329,1030,3354,1044,3359,1046,3373,1058,3389,1072,3389,1077,3389,1086,3312,1161,3289,1179,3273,1207,3256,1240,3248,1255,3250,1259,3256,1268,3266,1285,3292,1287,3311,1288,3349,1287,3382,1287,3393,1289,3474,1305,3530,1305,3533,1305,3556,1304,3580,1304,3590,1305,3617,1310,3623,1299,3625,1296,3625,1278,3625,1263,3620,1256,3612,1245,3603,1231,3622,1212,3651,1206,3667,1203,3699,1197,3714,1192,3742,1180,3768,1169,3790,1169,3805,1169,3838,1195,3871,1221,3902,1221,3904,1221,3905,1221,3906,1197,3907,1184,3908,1160,3914,1148,3922,1131,3924,1104,3927,1078,3933,1065,3939,1054,3945,1028,3952,995,3954,989,3954,977,3955,969,3956,954,3961,949,3969,940,3970,916,3970,889,3918,828,3906,813,3877,784,3867,763,3862,762,3856,762,3853,760,3845,758,3847,747,3858,747,3884,739,3885,739,3912,736,3916,736,3925,728,3935,719,3936,719,3953,714,3982,711,3999,710,4036,707,L,4054,707,Q,4055,715,4061,717,4065,717,4074,717,4090,717,4094,731,4096,732,4107,729,4119,728,4125,735,4128,739,4134,747,4139,753,4144,753,4166,753,4172,746,4176,741,4184,721,4187,714,4195,706,4203,698,4206,689,4214,674,4218,663,4232,636,4257,599,4283,560,4287,553,4295,539,4304,530,4316,517,4325,505,4332,494,4333,477,4333,456,4334,439,4280,428,4214,410,4023,351,3921,321,Q,3704,250,3614,227,Z]],label:"Xiluo Township",shortLabel:"XI",labelPosition:[360.2,69.7],labelAlignment:[CEN,MID]},"TW.YL.BA":{outlines:[[M,2408,1281,Q,2387,1236,2369,1204,2311,1241,2289,1241,L,2188,1204,Q,2165,1204,2154,1217,2123,1254,2109,1266,2099,1275,2072,1304,2047,1331,2046,1331,2037,1331,2016,1307,1996,1285,1990,1272,1977,1243,1953,1242,1928,1246,1915,1247,1894,1254,1840,1270,1830,1274,1821,1277,1821,1333,1824,1442,1825,1540,1817,1611,1815,1626,1797,1651,1776,1681,1774,1685,1770,1694,1757,1713,1739,1738,1727,1758,1720,1769,1700,1796,1682,1820,1677,1829,1677,1831,1660,1880,1652,1901,1633,1912,L,1633,1925,Q,1671,1925,1706,1940,1724,1947,1737,1955,1742,1955,1770,1910,1798,1865,1804,1865,1810,1865,1855,1897,1908,1936,1923,1945,1937,1952,1989,1987,2039,2018,2057,2023,2059,2016,2060,2011,2065,1993,2093,1988,2129,1983,2162,1965,2200,1942,2275,1896,2340,1859,2395,1836,2396,1818,2444,1752,2493,1684,2525,1642,2557,1600,2651,1460,L,2649,1312,2594,1307,Q,2573,1306,2528,1309,2483,1313,2472,1313,Q,2429,1313,2408,1281,Z]],label:"Baozhong Township",shortLabel:"BA",labelPosition:[214.2,161.3],labelAlignment:[CEN,MID]},"TW.YL.CT":{outlines:[[M,4818,443,Q,4783,449,4678,449,4573,449,4552,450,4531,450,4455,453,4409,454,4334,439,4333,456,4333,477,4332,494,4325,505,4316,517,4304,530,4295,539,4287,553,4283,560,4257,599,4232,636,4218,663,4214,674,4206,689,4203,698,4195,706,4187,714,4184,721,4176,741,4172,746,4166,753,4144,753,4139,753,4134,747,4128,739,4125,735,4119,728,4107,729,4096,732,4094,731,4090,717,4074,717,4065,717,4061,717,4055,715,4054,707,L,4036,707,Q,3999,710,3982,711,3953,714,3936,719,3935,719,3925,728,3916,736,3912,736,3885,739,3884,739,3858,747,3847,747,3845,758,3853,760,3856,762,3862,762,3867,763,3877,784,3906,813,3918,828,3970,889,3970,916,3969,940,3961,949,3956,954,3955,969,3954,977,3954,989,3952,995,3945,1028,3939,1054,3933,1065,3927,1078,3924,1104,3922,1131,3914,1148,3908,1160,3907,1184,3906,1197,3905,1221,3920,1219,3931,1211,3946,1199,3973,1192,3996,1186,4017,1176,4028,1169,4052,1169,4075,1169,4130,1242,4158,1280,4190,1328,4189,1323,4189,1320,4189,1309,4246,1297,4275,1291,4314,1284,4355,1270,4377,1257,4404,1240,4455,1198,4473,1183,4519,1159,4566,1135,4586,1118,4603,1104,4651,1072,4691,1045,4704,1034,4706,1033,4708,1032,4747,1017,4798,1e3,4824,990,4901,994,4927,996,4946,988,4969,979,4985,956,5004,931,5046,869,5168,737,5283,548,5272,547,5260,547,5089,546,5019,528,4957,513,4927,482,4901,455,4876,445,Q,4852,437,4818,443,Z]],label:"Citong Township",shortLabel:"CT",labelPosition:[456.5,81.1],labelAlignment:[CEN,MID]},"TW.YL.DP":{outlines:[[M,3411,2145,Q,3385,2144,3363,2133,3355,2129,3323,2127,3296,2124,3281,2110,3246,2052,3246,2050,3244,2044,3232,2025,3227,2017,3224,2012,3206,2015,3173,2015,3140,2013,3125,2013,3125,2036,3122,2077,3122,2082,3122,2190,3124,2222,3116,2259,3112,2280,3103,2317,3101,2330,3088,2371,3076,2407,3073,2416,3068,2430,3068,2463,3063,2488,3023,2483,3022,2496,3022,2510,3022,2581,3016,2598,3013,2609,2962,2700,2957,2709,2909,2801,2877,2862,2856,2896,2862,2891,2868,2889,2876,2887,2903,2889,2936,2891,2966,2887,2992,2884,3027,2826,3042,2795,3059,2769,3091,2720,3120,2720,3124,2720,3185,2735,3248,2750,3265,2750,3265,2751,3265,2786,3264,2804,3284,2804,3289,2804,3299,2795,3310,2786,3328,2786,L,3348,2786,Q,3363,2785,3369,2782,3372,2780,3395,2772,3415,2766,3419,2761,3427,2753,3430,2739,3431,2725,3432,2720,3440,2692,3444,2676,3451,2647,3463,2630,3468,2623,3482,2623,3490,2623,3504,2624,3517,2623,3530,2615,3543,2608,3555,2610,3567,2612,3589,2644,3611,2675,3625,2686,3638,2696,3667,2731,3695,2764,3705,2748,3715,2731,3728,2719,3741,2706,3753,2696,3764,2685,3780,2660,3795,2641,3815,2631,3820,2583,3854,2452,3886,2329,3886,2327,3886,2311,3865,2287,3840,2262,3831,2250,3825,2238,3821,2229,3812,2214,3800,2211,3791,2209,3772,2206,3756,2204,3752,2202,3720,2188,3650,2188,3645,2188,3627,2181,3610,2174,3600,2174,3599,2174,3575,2175,3561,2176,3553,2174,3522,2171,3508,2168,3485,2164,3459,2153,Q,3442,2147,3411,2145,Z]],label:"Dapi Township",shortLabel:"DP",labelPosition:[337.1,240.8],labelAlignment:[CEN,MID]},"TW.YL.DS":{outlines:[[M,1821,1277,Q,1792,1288,1767,1303,1702,1343,1694,1349,1671,1375,1665,1381,1657,1390,1632,1390,1607,1390,1550,1345,1492,1298,1467,1298,1452,1298,1442,1302,1431,1305,1422,1305,1399,1305,1374,1284,1360,1306,1355,1368,1350,1427,1326,1464,1314,1484,1277,1555,1252,1604,1231,1632,1230,1634,1229,1635,1224,1642,1213,1648,1201,1655,1199,1666,1195,1688,1189,1693,1183,1698,1183,1707,1183,1711,1196,1736,1210,1761,1214,1765,1222,1773,1241,1789,1256,1805,1256,1816,1256,1840,1248,1876,1245,1888,1237,1899,1230,1908,1230,1915,1230,1949,1225,1955,1219,1965,1216,1985,1212,2003,1212,2018,1212,2050,1195,2054,1173,2054,1164,2059,1155,2065,1131,2066,1111,2067,1109,2075,1104,2092,1105,2119,1106,2134,1107,2159,L,1107,2319,1138,2317,Q,1154,2317,1214,2362,1274,2407,1301,2407,1313,2407,1382,2388,1451,2362,1465,2354,1493,2335,1534,2300,1582,2257,1596,2244,1600,2240,1601,2240,1617,2224,1643,2194,1681,2150,1686,2150,1695,2150,1705,2161,1716,2172,1727,2172,1744,2172,1752,2164,1754,2163,1755,2161,1770,2145,1790,2127,1797,2122,1831,2068,1832,2068,1878,2090,1927,2111,1943,2111,1964,2111,2007,2080,2044,2054,2052,2043,2055,2031,2057,2023,2039,2018,1989,1987,1937,1952,1923,1945,1908,1936,1855,1897,1810,1865,1804,1865,1798,1865,1770,1910,1742,1955,1737,1955,1724,1947,1706,1940,1671,1925,1633,1925,L,1633,1912,Q,1652,1901,1660,1880,1677,1831,1677,1829,1682,1820,1700,1796,1720,1769,1727,1758,1739,1738,1757,1713,1770,1694,1774,1685,1776,1681,1797,1651,1815,1626,1817,1611,1825,1540,1824,1442,Q,1821,1333,1821,1277,Z]],label:"Dongshi Township",shortLabel:"DS",labelPosition:[148.5,166.8],labelAlignment:[CEN,MID]},"TW.YL.EL":{outlines:[[M,3346,92,Q,3310,114,3289,130,3274,145,3270,150,3263,156,3245,158,3232,160,3181,160,3181,160,3181,161,3176,169,3089,145,3075,141,3044,141,3014,141,3012,141,2974,141,2953,148,2920,162,2883,176,2828,201,2817,204,2817,204,2759,204,2759,207,2758,206,2755,204,2754,204,2756,204,2759,204,2759,201,2726,203,2686,205,2672,202,2645,197,2620,195,2618,218,2626,255,2635,297,2635,319,2635,323,2633,332,2632,334,2631,337,2629,381,2629,460,L,2629,509,Q,2629,560,2631,580,2664,580,2697,588,2706,590,2747,603,2757,606,2786,648,2813,687,2837,689,L,2837,724,Q,2818,722,2791,729,2761,739,2747,742,2717,750,2712,758,2708,764,2708,798,2708,863,2736,871,2745,874,2773,878,2802,883,2830,895,2929,942,2993,953,2988,987,3012,1022,L,3012,1176,Q,2975,1183,2953,1187,2914,1195,2909,1213,L,2909,1213,2909,1232,Q,2909,1233,2910,1236,2931,1242,2976,1248,3023,1254,3048,1254,3057,1254,3082,1265,3107,1276,3115,1276,3121,1276,3132,1276,3141,1276,3146,1278,3153,1281,3158,1288,3160,1292,3168,1292,3180,1292,3207,1272,3233,1252,3243,1252,3245,1252,3248,1255,3256,1240,3273,1207,3289,1179,3312,1161,3389,1086,3389,1077,3389,1072,3373,1058,3359,1046,3354,1044,3329,1030,3326,1028,3325,1028,3325,1010,3325,987,3363,957,3402,927,3402,913,3402,901,3372,866,3370,863,3337,827,3337,826,3291,784,3255,751,3255,743,3255,728,3279,718,3290,713,3305,709,3318,702,3334,693,3345,684,3345,664,3342,643,3342,634,3343,618,3344,486,3346,359,3352,332,3353,328,3362,324,3372,319,3373,317,3378,309,3386,306,3390,305,3400,303,3408,300,3421,282,3434,266,3444,265,3453,263,3470,250,3488,235,3496,232,3506,229,3528,214,3545,204,3555,203,3552,202,3550,200,3528,185,3502,151,3481,126,3460,103,3420,64,3404,64,Q,3392,64,3346,92,Z]],label:"Erlun Township",shortLabel:"EL",labelPosition:[304.4,50.4],labelAlignment:[CEN,MID]},"TW.YL.GK":{outlines:[[M,5520,1829,Q,5507,1824,5482,1827,5439,1833,5392,1828,5351,1825,5334,1814,5319,1804,5299,1804,5248,1804,5218,1810,5197,1810,5185,1811,5164,1814,5150,1834,5130,1862,5091,1908,5045,1961,5037,1961,L,5021,1947,Q,5005,1932,4995,1928,4953,1896,4944,1896,4937,1896,4906,1928,4874,1960,4874,1970,4874,1977,4904,2010,4933,2042,4933,2046,4933,2062,4918,2075,4892,2099,4889,2102,4888,2103,4865,2140,4849,2166,4844,2166,4837,2164,4836,2164,4828,2144,4787,2133,4739,2124,4723,2120,4709,2118,4691,2104,4674,2092,4663,2092,4640,2095,4625,2082,4610,2069,4599,2069,4587,2069,4584,2071,4578,2074,4578,2085,4578,2086,4594,2118,4612,2157,4619,2184,4624,2202,4644,2242,4659,2273,4659,2293,4659,2314,4620,2347,4579,2381,4571,2416,4652,2481,4693,2538,4646,2546,4490,2574,4379,2596,4287,2605,L,4289,2605,Q,4289,2639,4286,2700,4289,2749,4314,2771,4432,2872,4461,2902,4471,2913,4572,3023,4676,3127,4717,3127,4734,3127,4787,3117,4840,3106,4852,3106,4877,3106,4905,3153,4935,3202,4961,3215,4963,3216,4964,3217,L,5046,3217,Q,5059,3221,5071,3228,5079,3233,5087,3233,5107,3233,5157,3230,5207,3228,5246,3228,5264,3228,5315,3215,5359,3205,5392,3209,5402,3210,5425,3203,5447,3196,5457,3196,L,5520,3196,Q,5546,3196,5599,3192,5654,3187,5670,3184,5672,3186,5672,3181,5672,3176,5665,3162,5658,3147,5657,3131,5657,3120,5651,3095,5702,3085,5747,3100,5818,3110,5942,3127,L,5942,3141,Q,5942,3142,5911,3230,5880,3320,5880,3337,5880,3359,5882,3366,5886,3382,5899,3384,5906,3385,5925,3399,5942,3411,5953,3411,5967,3411,6004,3396,6042,3380,6064,3368,6085,3356,6128,3331,L,6176,3331,6204,3376,Q,6225,3401,6238,3416,6251,3432,6264,3453,6276,3474,6284,3473,6291,3471,6341,3446,6390,3421,6407,3408,6424,3394,6471,3362,6517,3329,6528,3329,6538,3329,6562,3362,6574,3378,6588,3399,6597,3408,6618,3438,6639,3464,6657,3461,6675,3457,6690,3456,6705,3455,6711,3446,6717,3435,6723,3434,6728,3433,6741,3435,6752,3436,6760,3434,6770,3431,6778,3425,6786,3419,6795,3418,6819,3414,6868,3410,6915,3407,6950,3407,L,6950,3377,Q,6940,3279,6924,3219,6924,3210,6914,3185,6902,3153,6902,3151,6898,3135,6898,3110,6898,3089,6893,3076,6889,3065,6886,3030,6883,2995,6878,2983,6865,2950,6865,2908,6865,2878,6839,2840,6824,2819,6787,2780,6776,2768,6760,2745,6743,2719,6735,2709,6712,2688,6703,2677,6685,2660,6684,2640,L,6670,2640,Q,6670,2660,6668,2704,6668,2745,6670,2775,6673,2795,6655,2798,6634,2797,6627,2800,6618,2805,6600,2811,6579,2819,6569,2819,6561,2819,6531,2796,6503,2772,6501,2771,6493,2764,6433,2763,6433,2762,6428,2762,6423,2761,6412,2761,6389,2763,6381,2763,6368,2763,6360,2774,6357,2778,6349,2791,6337,2817,6338,2867,6207,2873,6162,2873,6054,2873,6015,2869,L,6015,2821,Q,6021,2798,6024,2795,L,6024,2748,6002,2748,Q,5998,2751,5984,2752,5972,2752,5971,2752,5918,2752,5823,2647,5736,2551,5736,2523,5736,2501,5767,2463,5797,2424,5797,2407,5797,2406,5777,2360,5776,2358,5764,2356,L,5759,2238,Q,5759,2222,5762,2214,5755,2180,5737,2148,5724,2126,5690,2082,5681,2069,5641,2010,5606,1957,5586,1933,5582,1930,5567,1902,5557,1888,5550,1880,5540,1866,5539,1859,Q,5539,1835,5520,1829,Z]],label:"Gukeng Township",shortLabel:"GK",labelPosition:[523.8,263.8],labelAlignment:[CEN,MID]},"TW.YL.KO":{outlines:[[M,761,2818,Q,728,2808,697,2799,651,2788,641,2785,621,2781,545,2757,454,2729,454,2722,454,2705,463,2694,471,2684,471,2654,471,2630,468,2624,463,2609,438,2593,404,2570,410,2538,L,389,2538,Q,386,2551,364,2617,343,2684,341,2716,337,2748,283,2757,212,2774,186,2797,192,2812,192,2847,192,2898,185,2944,178,2990,178,3084,L,178,3174,Q,178,3185,191,3219,204,3253,204,3266,204,3279,190,3299,189,3300,187,3303,164,3326,120,3358,71,3396,45,3421,L,45,3444,Q,72,3447,122,3474,183,3505,191,3508,205,3513,204,3535,204,3547,202,3572,204,3597,202,3665,L,202,3767,Q,202,3808,197,3878,197,3956,235,3981,302,4023,328,4061,341,4080,352,4121,363,4158,387,4186,403,4204,441,4211,466,4215,508,4217,L,634,4217,Q,636,4219,642,4230,647,4203,664,4158,686,4104,688,4095,699,4060,713,4027,714,4006,716,3994,720,3973,741,3969,L,753,3969,Q,754,3971,759,3991,761,4005,776,4006,790,4007,795,4018,802,4033,804,4035,L,821,4035,818,4002,Q,818,3990,838,3955,863,3911,868,3898,870,3890,884,3866,896,3844,896,3838,898,3821,900,3813,904,3799,923,3791,L,923,3759,911,3759,Q,908,3763,908,3769,907,3772,906,3777,893,3779,868,3779,824,3779,816,3776,794,3765,794,3717,794,3670,799,3665,816,3652,839,3620,893,3550,904,3532,896,3511,892,3503,885,3489,874,3485,866,3483,851,3474,833,3462,833,3453,833,3444,847,3434,863,3424,863,3418,864,3412,874,3395,884,3375,887,3368,894,3348,936,3348,958,3349,993,3350,L,993,3325,Q,988,3287,987,3254,983,3260,978,3260,968,3260,932,3235,898,3210,895,3208,859,3187,856,3183,839,3168,839,3146,851,2992,866,2964,L,866,2863,Q,845,2855,812,2840,Q,782,2825,761,2818,Z]],label:"Kouhu Township",shortLabel:"KO",labelPosition:[51.9,338.4],labelAlignment:[CEN,MID]},"TW.YL.LN":{outlines:[[M,5848,681,Q,5767,603,5756,589,5743,572,5709,570,5668,573,5649,570,5569,561,5522,556,5466,550,5283,548,5168,737,5046,869,5004,931,4985,956,4969,979,4946,988,4963,1025,4991,1063,5008,1086,5049,1137,5075,1172,5115,1243,5149,1300,5152,1300,L,5157,1300,Q,5161,1268,5177,1222,5197,1164,5214,1164,5220,1164,5254,1244,5287,1321,5295,1351,5310,1404,5328,1440,5338,1462,5372,1473,5392,1479,5431,1491,5572,1557,5628,1582,5760,1639,5823,1652,L,5823,1524,Q,5823,1351,5825,1286,L,5871,1286,Q,5876,1300,5901,1302,5914,1302,5936,1302,5940,1304,5955,1303,5968,1303,5971,1309,5977,1319,5987,1321,5989,1319,5989,1311,5989,1304,5990,1298,5991,1291,5991,1278,5992,1266,5982,1240,5972,1215,5976,1174,5979,1141,5966,1103,5949,1056,5946,1036,5942,1005,5933,899,5927,831,5914,783,Q,5901,733,5848,681,Z]],label:"Linnei Township",shortLabel:"LN",labelPosition:[551.2,101.3],labelAlignment:[CEN,MID]},"TW.YL.LB":{outlines:[[M,2443,241,Q,2383,245,2290,254,2248,257,2207,256,2189,255,2164,244,2134,232,2123,231,2057,222,2037,216,2036,228,2034,242,2034,248,2047,301,2060,353,2060,374,2060,415,2008,467,1956,518,1956,544,1956,579,1959,635,1962,691,1962,716,1962,737,1982,744,1993,748,2025,757,2054,770,2094,791,L,2094,970,Q,2091,979,2089,1007,2008,1007,1971,1010,1974,1032,2009,1060,2042,1087,2042,1102,2042,1148,2017,1185,1984,1236,1976,1252,1984,1259,1990,1272,1996,1285,2016,1307,2037,1331,2046,1331,2047,1331,2072,1304,2099,1275,2109,1266,2123,1254,2154,1217,2165,1204,2188,1204,L,2289,1241,Q,2311,1241,2369,1204,2371,1203,2373,1202,2379,1195,2419,1182,2458,1169,2474,1169,2481,1169,2536,1182,2589,1193,2606,1199,2621,1203,2685,1231,2714,1243,2744,1243,2759,1243,2802,1229,2850,1212,2856,1212,L,2909,1213,Q,2914,1195,2953,1187,2975,1183,3012,1176,L,3012,1022,Q,2988,987,2993,953,2929,942,2830,895,2802,883,2773,878,2745,874,2736,871,2708,863,2708,798,2708,764,2712,758,2717,750,2747,742,2761,739,2791,729,2818,722,2837,724,L,2837,689,Q,2813,687,2786,648,2757,606,2747,603,2706,590,2697,588,2664,580,2631,580,2629,560,2629,509,L,2629,460,Q,2629,381,2631,337,2632,334,2633,332,2635,323,2635,319,2635,297,2626,255,2618,218,2620,195,2611,195,2603,195,2577,195,2564,201,2529,220,2519,225,Q,2485,237,2443,241,Z]],label:"Lunbei Township",shortLabel:"LB",labelPosition:[241.1,76.3],labelAlignment:[CEN,MID]},"TW.YL.ML":{outlines:[[M,1617,42,Q,1615,40,1600,40,1591,40,1576,44,1562,47,1527,47,1464,53,1459,53,1438,53,1401,48,1363,42,1358,42,1316,42,1289,45,1280,47,1267,65,1251,87,1246,92,1218,112,1191,146,1179,160,1148,206,1114,252,1082,333,1038,438,1026,462,1019,477,1014,499,1009,516,989,517,945,518,923,519,900,518,889,518,868,518,863,531,859,544,845,568,831,592,829,599,811,645,773,732,742,806,732,864,731,865,731,867,735,955,735,1e3,735,1010,735,1027,735,1041,737,1051,743,1071,750,1083,756,1092,756,1102,797,1089,916,1018,1025,953,1043,953,1065,953,1142,1033,1181,1074,1223,1123,1246,1150,1273,1176,1304,1205,1320,1223,1333,1237,1364,1274,1369,1279,1374,1284,1399,1305,1422,1305,1431,1305,1442,1302,1452,1298,1467,1298,1492,1298,1550,1345,1607,1390,1632,1390,1657,1390,1665,1381,1671,1375,1694,1349,1702,1343,1767,1303,1792,1288,1821,1277,1830,1274,1840,1270,1894,1254,1915,1247,1928,1246,1953,1242,1966,1243,1976,1252,1984,1236,2017,1185,2042,1148,2042,1102,2042,1087,2009,1060,1974,1032,1971,1010,2008,1007,2089,1007,2091,979,2094,970,L,2094,791,Q,2054,770,2025,757,1993,748,1982,744,1962,737,1962,716,1962,691,1959,635,1956,579,1956,544,1956,518,2008,467,2060,415,2060,374,2060,353,2047,301,2034,248,2034,242,2036,228,2037,216,2035,216,2034,216,2009,209,1954,180,1936,171,1861,151,1788,130,1761,116,1715,92,1665,75,1639,66,1632,61,Q,1627,56,1617,42,Z]],label:"Mailiao Township",shortLabel:"ML",labelPosition:[141.3,65.7],labelAlignment:[CEN,MID]},"TW.YL.SL":{outlines:[[M,1622,2720,Q,1607,2716,1554,2692,1490,2661,1487,2660,1430,2779,1418,2825,1404,2872,1358,2899,1329,2916,1252,2949,1240,2955,1197,2980,1163,3e3,1127,3015,1105,3023,1078,3035,1059,3043,1056,3054,1054,3060,1054,3071,1052,3075,1042,3091,1033,3105,1034,3115,1035,3134,1016,3166,1014,3169,1001,3219,994,3245,987,3254,988,3287,993,3325,L,993,3350,Q,958,3349,936,3348,894,3348,887,3368,884,3375,874,3395,864,3412,863,3418,863,3424,847,3434,833,3444,833,3453,833,3462,851,3474,866,3483,874,3485,885,3489,892,3503,896,3511,904,3532,893,3550,839,3620,816,3652,799,3665,794,3670,794,3717,794,3765,816,3776,824,3779,868,3779,893,3779,906,3777,907,3772,908,3769,908,3763,911,3759,L,923,3759,923,3791,Q,904,3799,900,3813,898,3821,896,3838,896,3844,884,3866,870,3890,868,3898,863,3911,838,3955,818,3990,818,4002,L,821,4035,804,4035,Q,802,4033,795,4018,790,4007,776,4006,761,4005,759,3991,754,3971,753,3969,L,741,3969,Q,720,3973,716,3994,714,4006,713,4027,699,4060,688,4095,686,4104,664,4158,647,4203,642,4230,643,4232,645,4236,655,4254,662,4262,673,4275,681,4285,686,4288,706,4288,722,4288,726,4287,737,4284,741,4273,750,4254,764,4256,771,4257,776,4258,L,777,4258,Q,803,4258,806,4260,811,4264,829,4288,833,4293,853,4318,871,4341,876,4341,886,4341,904,4338,923,4334,934,4334,945,4334,953,4344,965,4358,978,4364,997,4374,1013,4371,1044,4366,1046,4366,1082,4366,1106,4372,1110,4374,1116,4375,L,1158,4378,1168,4382,1205,4371,Q,1230,4364,1233,4364,1236,4363,1249,4351,1261,4339,1273,4333,1284,4326,1337,4291,L,1365,4277,Q,1380,4265,1386,4264,1392,4262,1406,4253,1420,4244,1420,4204,1420,4165,1417,4123,1413,4080,1414,4055,L,1414,3997,Q,1405,3922,1405,3914,1404,3877,1401,3840,L,1397,3771,1420,3771,1420,3783,Q,1442,3782,1472,3795,1489,3802,1530,3820,1551,3827,1590,3840,1618,3855,1618,3892,1618,3922,1604,3939,1590,3956,1590,3977,1590,3993,1590,3995,1593,4007,1605,4009,1647,4009,1729,4014,1759,4014,1748,3908,1741,3892,1739,3888,1737,3883,1737,3870,L,1741,3820,Q,1741,3807,1737,3790,1727,3755,1698,3704,1655,3628,1655,3627,1655,3611,1705,3568,1754,3524,1754,3509,1754,3494,1729,3469,1704,3443,1641,3382,1631,3366,1598,3330,1579,3309,1579,3289,1579,3282,1600,3221,1620,3159,1628,3143,1637,3124,1643,3097,1647,3069,1650,3057,1655,3032,1664,3013,1670,3001,1670,2981,1670,2956,1667,2953,1654,2947,1633,2928,1630,2926,1620,2925,1609,2924,1606,2922,1592,2915,1590,2910,1588,2907,1588,2894,1588,2863,1603,2852,1618,2840,1618,2821,1618,2808,1615,2797,1613,2786,1613,2780,1613,2771,1617,2753,Q,1622,2736,1622,2720,Z]],label:"Shuilin Township",shortLabel:"SL",labelPosition:[119.8,352.1],labelAlignment:[CEN,MID]},"TW.YL.SH":{outlines:[[M,1214,2362,Q,1154,2317,1138,2317,L,1107,2319,Q,1104,2324,1099,2337,1095,2345,1074,2346,1054,2347,1041,2345,L,932,2340,Q,902,2334,889,2325,851,2277,786,2221,767,2204,739,2169,712,2136,688,2116,646,2090,633,2080,613,2065,613,2032,613,2017,621,1984,628,1954,626,1938,633,1904,636,1889,641,1863,663,1848,L,663,1828,Q,652,1827,624,1816,607,1810,587,1816,588,1818,588,1820,588,1834,578,1846,576,1848,559,1863,L,518,1904,Q,503,1920,483,1953,461,1990,446,2008,418,2043,394,2115,352,2242,348,2253,347,2255,324,2317,303,2371,298,2381,286,2401,274,2457,265,2497,244,2509,240,2512,219,2514,198,2516,187,2525,180,2531,181,2549,181,2559,185,2585,191,2618,178,2653,168,2678,165,2693,165,2699,165,2704,163,2779,178,2787,182,2790,186,2797,212,2774,283,2757,337,2748,341,2716,343,2684,364,2617,386,2551,389,2538,L,410,2538,Q,404,2570,438,2593,463,2609,468,2624,471,2630,471,2654,471,2684,463,2694,454,2705,454,2722,454,2729,545,2757,621,2781,641,2785,651,2788,697,2799,728,2808,761,2818,782,2825,812,2840,845,2855,866,2863,L,866,2964,Q,851,2992,839,3146,839,3168,856,3183,859,3187,895,3208,898,3210,932,3235,968,3260,978,3260,983,3260,987,3254,994,3245,1001,3219,1014,3169,1016,3166,1035,3134,1034,3115,1033,3105,1042,3091,1052,3075,1054,3071,1054,3060,1056,3054,1059,3043,1078,3035,1105,3023,1127,3015,1163,3e3,1197,2980,1240,2955,1252,2949,1329,2916,1358,2899,1404,2872,1418,2825,1430,2779,1487,2660,1490,2661,1554,2692,1607,2716,1622,2720,1625,2720,1626,2720,1641,2720,1670,2704,1701,2684,1712,2679,1746,2662,1798,2644,L,1809,2644,Q,1808,2641,1808,2637,1809,2613,1808,2612,1778,2554,1756,2510,1713,2424,1713,2401,1713,2389,1736,2313,1759,2237,1759,2227,1755,2186,1755,2161,1754,2163,1752,2164,1744,2172,1727,2172,1716,2172,1705,2161,1695,2150,1686,2150,1681,2150,1643,2194,1617,2224,1601,2240,1600,2240,1596,2244,1582,2257,1534,2300,1493,2335,1465,2354,1451,2362,1382,2388,1313,2407,1301,2407,Q,1274,2407,1214,2362,Z]],label:"Sihu Township",shortLabel:"SH",labelPosition:[96.4,259.4],labelAlignment:[CEN,MID]},"TW.YL.TA":{outlines:[[M,916,1018,Q,797,1089,756,1102,L,756,1103,Q,756,1116,751,1123,748,1127,729,1145,L,729,1198,Q,717,1199,662,1195,628,1193,614,1211,605,1223,575,1268,559,1292,540,1313,536,1318,521,1332,509,1345,508,1353,L,508,1409,Q,512,1454,481,1452,427,1449,426,1450,412,1493,412,1542,412,1569,412,1570,414,1583,422,1591,425,1595,442,1608,456,1619,459,1628,460,1634,462,1653,465,1673,475,1683,480,1688,480,1705,480,1715,479,1730,481,1760,534,1782,581,1803,587,1816,607,1810,624,1816,652,1827,663,1828,L,663,1848,Q,641,1863,636,1889,633,1904,626,1938,628,1954,621,1984,613,2017,613,2032,613,2065,633,2080,646,2090,688,2116,712,2136,739,2169,767,2204,786,2221,851,2277,889,2325,902,2334,932,2340,L,1041,2345,Q,1054,2347,1074,2346,1095,2345,1099,2337,1104,2324,1107,2319,L,1107,2159,Q,1106,2134,1105,2119,1104,2092,1109,2075,1111,2067,1131,2066,1155,2065,1164,2059,1173,2054,1195,2054,1212,2050,1212,2018,1212,2003,1216,1985,1219,1965,1225,1955,1230,1949,1230,1915,1230,1908,1237,1899,1245,1888,1248,1876,1256,1840,1256,1816,1256,1805,1241,1789,1222,1773,1214,1765,1210,1761,1196,1736,1183,1711,1183,1707,1183,1698,1189,1693,1195,1688,1199,1666,1201,1655,1213,1648,1224,1642,1229,1635,1230,1634,1231,1632,1252,1604,1277,1555,1314,1484,1326,1464,1350,1427,1355,1368,1360,1306,1374,1284,1369,1279,1364,1274,1333,1237,1320,1223,1304,1205,1273,1176,1246,1150,1223,1123,1181,1074,1142,1033,1065,953,1043,953,Q,1025,953,916,1018,Z]],label:"Taixi Township",shortLabel:"TA",labelPosition:[89.3,153.3],labelAlignment:[CEN,MID]},"TW.YL.YC":{outlines:[[M,2275,1896,Q,2200,1942,2162,1965,2129,1983,2093,1988,2065,1993,2060,2011,2059,2016,2057,2023,2055,2031,2052,2043,2044,2054,2007,2080,1964,2111,1943,2111,1927,2111,1878,2090,1832,2068,1831,2068,1797,2122,1790,2127,1770,2145,1755,2161,1755,2186,1759,2227,1759,2237,1736,2313,1713,2389,1713,2401,1713,2424,1756,2510,1778,2554,1808,2612,1809,2613,1808,2637,1808,2641,1809,2644,1812,2654,1825,2658,1843,2665,1885,2677,1907,2684,1943,2696,1974,2706,2001,2711,2001,2715,2001,2748,2001,2775,2005,2795,2008,2808,2009,2836,2012,2859,2026,2869,2070,2900,2104,2918,2136,2936,2181,2955,2211,2967,2260,2986,2300,3004,2335,3027,2356,3041,2415,3065,2464,3089,2466,3120,2474,3116,2482,3114,L,2571,3114,Q,2637,3118,2656,3118,2702,3118,2715,3101,2767,3031,2768,3029,2782,3016,2816,2951,2837,2911,2856,2896,2877,2862,2909,2801,2957,2709,2962,2700,3013,2609,3016,2598,3022,2581,3022,2510,3022,2496,3023,2483,3023,2459,3022,2439,3022,2420,3010,2411,3008,2409,2988,2401,2980,2397,2960,2394,2935,2391,2925,2388,2902,2382,2890,2373,2882,2368,2868,2368,2858,2368,2724,2444,2577,2527,2504,2550,L,2504,2531,Q,2506,2505,2509,2414,2509,2341,2517,2319,2526,2293,2535,2276,2549,2253,2561,2232,2561,2161,2563,2129,2563,2126,2563,2123,2564,2053,2564,2047,2564,1994,2558,1981,2548,1960,2502,1939,2484,1932,2475,1915,2466,1896,2449,1886,2393,1853,2395,1836,Q,2340,1859,2275,1896,Z]],label:"Yuanchang Township",shortLabel:"YC",labelPosition:[218.4,240.9],labelAlignment:[CEN,MID]},"TW.YL.DL":{outlines:[[M,4946,988,Q,4927,996,4901,994,4824,990,4798,1e3,4747,1017,4708,1032,4706,1033,4704,1034,4691,1045,4651,1072,4603,1104,4586,1118,4566,1135,4519,1159,4473,1183,4455,1198,4404,1240,4377,1257,4355,1270,4314,1284,4275,1291,4246,1297,4189,1309,4189,1320,4189,1323,4190,1328,4196,1346,4231,1381,4274,1422,4274,1434,4274,1454,4143,1493,4140,1494,4138,1495,L,4138,1559,Q,4138,1574,4132,1598,4125,1624,4124,1632,4121,1674,4110,1711,4099,1745,4099,1775,4099,1809,4195,1885,L,4198,2016,Q,4200,2025,4216,2113,4226,2167,4250,2194,4267,2213,4322,2244,4391,2283,4404,2293,4453,2330,4560,2407,4565,2412,4571,2416,4579,2381,4620,2347,4659,2314,4659,2293,4659,2273,4644,2242,4624,2202,4619,2184,4612,2157,4594,2118,4578,2086,4578,2085,4578,2074,4584,2071,4587,2069,4599,2069,4610,2069,4625,2082,4640,2095,4663,2092,4674,2092,4691,2104,4709,2118,4723,2120,4739,2124,4787,2133,4828,2144,4836,2164,4837,2164,4844,2166,4849,2166,4865,2140,4888,2103,4889,2102,4892,2099,4918,2075,4933,2062,4933,2046,4933,2042,4904,2010,4874,1977,4874,1970,4874,1960,4906,1928,4937,1896,4944,1896,4953,1896,4995,1928,5005,1932,5021,1947,L,5037,1961,Q,5045,1961,5091,1908,5130,1862,5150,1834,5164,1814,5185,1811,5197,1810,5218,1810,5248,1804,5299,1804,5319,1804,5334,1814,5351,1825,5392,1828,5439,1833,5482,1827,5507,1824,5520,1829,5539,1835,5539,1859,5540,1866,5550,1880,5557,1888,5567,1902,5582,1930,5586,1933,5606,1957,5641,2010,5681,2069,5690,2082,5724,2126,5737,2148,5755,2180,5762,2214,5763,2210,5766,2209,5782,2200,5809,2194,5852,2183,5861,2168,5866,2161,5866,2124,5866,2088,5861,2072,5852,2050,5848,1987,5839,1878,5844,1832,5846,1808,5837,1788,5827,1760,5825,1747,5823,1732,5823,1671,L,5823,1652,Q,5760,1639,5628,1582,5572,1557,5431,1491,5392,1479,5372,1473,5338,1462,5328,1440,5310,1404,5295,1351,5287,1321,5254,1244,5220,1164,5214,1164,5197,1164,5177,1222,5161,1268,5157,1300,L,5152,1300,Q,5149,1300,5115,1243,5075,1172,5049,1137,5008,1086,4991,1063,Q,4963,1025,4946,988,Z]],label:"Douliu City",shortLabel:"DL",labelPosition:[477.9,157.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"yunlincounty",type:"maps"}}})});