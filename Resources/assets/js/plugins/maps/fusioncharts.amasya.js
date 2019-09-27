(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=92)})({92:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(93);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},93:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Amasya.1.02-22-2017 12:07:07
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Amasya",revision:1,standaloneInit:true,baseWidth:650,baseHeight:535,baseScaleFactor:10,entities:{"TR.AM.AM":{outlines:[[M,4770,1732,Q,4764,1710,4765,1699,L,4765,1698,Q,4765,1696,4765,1695,4764,1687,4760,1678,4756,1665,4755,1660,4756,1633,4751,1623,4727,1577,4714,1565,4709,1561,4705,1554,4700,1544,4697,1539,4692,1534,4687,1522,4680,1510,4678,1506,4657,1480,4640,1445,4627,1448,4612,1448,4587,1448,4582,1448,4566,1446,4558,1439,L,4545,1438,Q,4526,1437,4517,1437,4496,1437,4482,1438,4462,1439,4453,1428,4447,1420,4437,1418,4422,1415,4419,1414,4414,1411,4406,1406,4393,1396,4389,1393,4385,1391,4380,1391,4374,1392,4370,1391,4363,1388,4352,1382,4343,1375,4339,1372,4334,1370,4330,1370,4322,1370,4321,1370,4308,1368,4291,1358,4280,1349,4271,1344,4262,1356,4250,1367,4236,1378,4224,1391,4211,1402,4204,1416,4196,1429,4189,1435,4182,1441,4176,1449,4167,1463,4164,1466,4147,1481,4141,1487,4137,1492,4134,1500,4131,1514,4130,1515,4119,1537,4111,1544,4099,1570,4088,1601,4073,1642,4062,1656,4058,1661,4054,1670,4049,1681,4047,1684,4044,1688,4040,1700,4036,1710,4032,1714,4023,1721,4018,1726,4010,1734,4007,1741,4001,1757,3989,1765,3963,1789,3954,1799,3942,1809,3941,1817,3938,1827,3937,1827,L,3923,1838,Q,3894,1855,3883,1864,3876,1869,3863,1873,3849,1878,3844,1880,3834,1884,3822,1892,3809,1901,3802,1905,3797,1908,3776,1913,3773,1913,3766,1917,3757,1921,3754,1922,3753,1922,3744,1923,3739,1924,3733,1928,3722,1936,3709,1936,3702,1936,3688,1941,3675,1947,3667,1944,3659,1944,3650,1945,3641,1946,3633,1950,3626,1954,3614,1956,3603,1957,3599,1958,3597,1958,3592,1964,3587,1969,3586,1970,3583,1974,3580,1987,L,3570,2019,Q,3567,2027,3554,2049,3549,2056,3539,2084,3531,2104,3500,2162,3499,2167,3496,2175,3494,2180,3488,2191,3477,2212,3469,2225,3464,2231,3461,2240,3457,2250,3454,2255,3451,2259,3448,2271,3443,2286,3442,2288,3436,2299,3405,2341,3383,2363,3379,2369,3366,2386,3359,2393,3358,2395,3357,2396,3343,2412,3333,2424,3323,2434,3320,2440,3317,2447,3312,2456,3307,2465,3300,2468,3293,2470,3288,2474,3282,2480,3279,2481,3266,2487,3238,2505,3206,2523,3204,2526,3202,2529,3189,2534,3176,2539,3162,2548,3148,2560,3146,2561,3141,2565,3135,2566,3128,2568,3127,2569,3115,2576,3104,2577,3101,2578,3082,2578,3055,2578,3046,2574,3037,2570,3005,2570,2954,2565,2932,2566,2930,2566,2929,2566,L,2879,2565,Q,2874,2565,2866,2561,2856,2556,2851,2555,2847,2554,2815,2554,2810,2554,2802,2549,2794,2544,2791,2543,2788,2541,2780,2541,2770,2542,2764,2542,2725,2543,2707,2542,2697,2540,2689,2535,2688,2534,2682,2533,2677,2533,2676,2532,2671,2530,2665,2525,2662,2522,2656,2522,2647,2521,2646,2521,2637,2517,2633,2515,2625,2512,2619,2512,2607,2512,2594,2505,2591,2503,2580,2500,2568,2497,2565,2495,2562,2493,2555,2489,2546,2484,2542,2484,2536,2485,2530,2481,2526,2477,2520,2477,2509,2476,2505,2478,2503,2478,2496,2483,2491,2487,2487,2487,2480,2486,2468,2492,2454,2498,2448,2499,2443,2499,2437,2502,2433,2503,2429,2506,2424,2509,2416,2516,L,2382,2535,Q,2377,2542,2356,2559,2352,2562,2344,2570,2337,2577,2328,2579,2322,2580,2316,2589,2312,2595,2305,2605,2299,2612,2290,2612,2279,2612,2274,2613,2234,2613,2225,2613,2220,2613,2213,2618,2206,2623,2202,2624,2176,2624,2174,2624,L,2139,2623,Q,2130,2623,2121,2620,L,2107,2614,Q,2098,2613,2093,2612,2085,2610,2080,2606,2076,2602,2065,2601,2054,2602,2051,2602,2025,2602,2014,2601,2011,2600,2007,2597,2001,2592,2e3,2592,1995,2589,1990,2589,1982,2589,1981,2589,1978,2588,1967,2583,1958,2578,1954,2579,1945,2581,1937,2574,1928,2567,1925,2567,1919,2567,1899,2587,1876,2608,1869,2618,1855,2641,1832,2679,1818,2700,1791,2743,1770,2768,1768,2771,1757,2786,1755,2800,L,1765,2805,Q,1779,2812,1787,2814,1803,2818,1822,2836,1842,2853,1854,2852,1866,2851,1872,2859,1876,2864,1883,2876,1889,2886,1903,2907,1903,2907,1904,2915,1906,2921,1909,2925,1915,2930,1916,2933,1918,2935,1921,2943,1924,2948,1930,2960,1935,2971,1937,2979,1938,2990,1944,2997,L,1955,3012,Q,1960,3018,1961,3031,1961,3037,1961,3057,L,1961,3078,Q,1959,3096,1955,3103,1950,3113,1950,3125,1951,3131,1952,3141,1952,3142,1952,3144,L,1952,3238,Q,1950,3244,1945,3260,1940,3277,1940,3280,L,1940,3331,Q,1940,3346,1942,3377,1943,3399,1941,3415,L,1978,3415,Q,1991,3414,2e3,3417,2006,3419,2023,3423,2040,3427,2067,3427,2094,3427,2106,3426,2117,3425,2137,3430,2159,3436,2171,3436,2219,3435,2245,3442,2320,3460,2376,3492,2403,3508,2441,3533,2491,3567,2504,3575,2524,3587,2536,3593,2553,3600,2571,3600,2591,3600,2621,3610,2635,3615,2647,3620,2651,3620,2708,3572,2759,3529,2783,3507,2806,3485,2867,3445,2930,3403,2943,3403,2946,3403,2995,3426,3040,3447,3045,3450,3087,3470,3129,3523,3139,3537,3163,3562,3184,3589,3191,3616,3196,3637,3208,3668,3215,3686,3230,3723,3234,3733,3243,3751,3252,3769,3257,3774,3264,3784,3281,3790,3291,3793,3310,3799,3328,3806,3370,3828,3405,3847,3434,3856,3436,3852,3437,3847,3444,3830,3478,3756,3485,3739,3495,3713,3507,3680,3513,3666,3516,3658,3536,3625,3555,3594,3555,3586,3562,3565,3575,3537,3591,3502,3594,3492,3603,3467,3626,3455,3645,3445,3668,3448,3675,3448,3694,3445,3714,3440,3722,3440,3759,3440,3774,3439,3779,3438,3793,3433,3806,3429,3817,3429,3831,3429,3861,3426,3878,3426,3885,3430,3896,3437,3914,3441,3929,3444,3966,3442,3993,3442,4039,3437,4044,3437,4085,3448,4086,3448,4088,3449,4094,3449,4102,3448,4113,3447,4120,3453,4127,3458,4141,3460,4156,3461,4161,3464,4171,3470,4176,3472,4187,3476,4198,3475,4229,3473,4240,3475,L,4311,3490,Q,4318,3491,4330,3502,4342,3511,4349,3515,4356,3519,4371,3543,4396,3561,4432,3591,4440,3597,4457,3619,4473,3640,4479,3645,4497,3656,4510,3679,4521,3700,4535,3705,4538,3706,4549,3713,4559,3720,4565,3721,4581,3723,4589,3726,4595,3729,4603,3729,4608,3729,4617,3728,4625,3728,4632,3732,4634,3733,4648,3733,4661,3733,4667,3738,4670,3741,4681,3743,4692,3745,4695,3746,4718,3758,4731,3756,4745,3753,4762,3760,4782,3768,4794,3768,4805,3768,4821,3776,4845,3788,4850,3789,L,4867,3789,Q,4880,3789,4892,3790,4893,3790,4900,3793,4908,3794,4917,3792,4926,3790,4939,3792,4947,3793,4947,3794,4948,3794,4966,3794,4984,3794,5012,3791,5048,3788,5095,3787,5107,3786,5126,3786,5144,3786,5151,3781,5157,3776,5175,3759,5192,3742,5216,3726,5238,3710,5279,3682,5320,3654,5379,3615,5380,3613,5382,3613,5430,3577,5575,3473,5707,3379,5756,3344,5757,3343,5759,3342,5761,3341,5763,3339,L,5737,3313,Q,5734,3311,5726,3297,5716,3282,5714,3280,5694,3254,5690,3248,5682,3235,5676,3230,5672,3226,5670,3221,5668,3213,5668,3212,5664,3206,5656,3198,5648,3189,5644,3183,5640,3176,5630,3165,5622,3156,5619,3150,5610,3140,5606,3135,L,5595,3120,Q,5577,3098,5573,3092,5570,3090,5558,3070,L,5543,3051,Q,5521,3022,5516,3015,5469,2950,5460,2939,L,5446,2923,Q,5434,2913,5431,2906,5429,2899,5418,2891,5414,2887,5410,2881,5404,2872,5404,2872,5401,2868,5399,2862,5396,2857,5393,2853,5390,2851,5377,2834,5374,2830,5362,2817,5355,2807,5350,2800,5325,2765,5320,2761,L,5309,2752,Q,5306,2749,5306,2740,5305,2735,5299,2727,5292,2720,5291,2718,5279,2702,5256,2680,5249,2674,5231,2666,5215,2659,5208,2652,5202,2644,5187,2630,5172,2616,5166,2610,5149,2590,5147,2588,5143,2584,5131,2573,5128,2571,5121,2568,5113,2565,5110,2563,L,5095,2548,Q,5094,2548,5063,2514,L,5030,2487,Q,5019,2480,4995,2461,4975,2451,4974,2450,4971,2448,4967,2444,4964,2439,4959,2436,4945,2429,4940,2426,4927,2413,4923,2410,4901,2395,4887,2373,4872,2347,4862,2333,4848,2315,4836,2292,4822,2264,4822,2249,4823,2239,4823,2223,L,4823,2218,Q,4819,2179,4822,2159,4822,2151,4817,2131,L,4812,2103,4812,1952,Q,4812,1950,4813,1948,4813,1936,4806,1919,4799,1896,4798,1891,4796,1876,4790,1862,4789,1860,4789,1847,4789,1831,4788,1828,4782,1800,4779,1791,4776,1775,4777,1765,Q,4777,1761,4770,1732,Z]],label:"Amasya",shortLabel:"AM",labelPosition:[395.4,279.5],labelAlignment:[CEN,MID]},"TR.AM.GO":{outlines:[[M,2783,3507,Q,2759,3529,2708,3572,2651,3620,2647,3620,2635,3615,2621,3610,2591,3600,2571,3600,2553,3600,2536,3593,2524,3587,2504,3575,2491,3567,2441,3533,2403,3508,2376,3492,2320,3460,2245,3442,2219,3435,2171,3436,2159,3436,2137,3430,2117,3425,2106,3426,2094,3427,2067,3427,2040,3427,2023,3423,2006,3419,2e3,3417,1991,3414,1978,3415,L,1941,3415,Q,1940,3419,1939,3422,1938,3428,1931,3471,1928,3494,1922,3510,1921,3512,1920,3515,1920,3524,1916,3533,1908,3556,1908,3557,1906,3567,1904,3587,1903,3606,1900,3615,1896,3626,1881,3672,1869,3708,1864,3726,1844,3790,1824,3822,1803,3853,1763,3902,1761,3903,1760,3904,1758,3915,1751,3924,1746,3930,1736,3942,1724,3961,1704,3989,1694,4006,1673,4034,1653,4060,1646,4073,1637,4088,1618,4118,1602,4146,1586,4167,1583,4172,1556,4213,1537,4241,1525,4255,1523,4256,1522,4258,1518,4264,1507,4281,1502,4289,1499,4297,1495,4307,1491,4314,1471,4342,1457,4375,L,1442,4401,Q,1433,4417,1430,4433,1429,4438,1430,4454,1431,4468,1428,4473,1425,4480,1422,4493,1421,4503,1421,4510,1422,4512,1422,4513,L,1420,4550,Q,1417,4557,1412,4570,1407,4585,1408,4592,1408,4599,1408,4616,1407,4632,1408,4643,1408,4653,1405,4668,1403,4676,1399,4692,1397,4741,1397,4774,1397,4784,1398,4798,1398,4811,1394,4821,1389,4834,1388,4845,1388,4850,1388,4860,1388,4862,1389,4864,1389,4872,1390,4885,1390,4903,1385,4913,1373,4935,1374,4960,L,1374,5006,Q,1373,5011,1370,5026,1368,5037,1368,5047,1368,5055,1370,5058,1372,5061,1380,5071,1382,5075,1395,5097,1414,5127,1421,5142,1424,5148,1438,5161,1446,5167,1459,5178,L,1499,5211,Q,1558,5250,1574,5268,L,1972,5268,Q,1989,5274,2022,5284,2051,5293,2070,5293,2083,5292,2094,5296,2102,5298,2120,5304,2125,5305,2135,5305,2147,5305,2151,5305,2159,5307,2165,5312,2171,5317,2177,5317,2186,5317,2187,5306,2188,5294,2189,5290,2190,5288,2191,5287,2201,5267,2209,5241,2218,5209,2222,5192,2229,5170,2238,5147,2249,5120,2256,5101,L,2258,5089,Q,2268,5076,2273,5052,2280,5028,2289,5016,2292,5011,2304,4999,2316,4986,2319,4983,2326,4973,2329,4963,2333,4953,2337,4947,2373,4897,2389,4885,2403,4875,2418,4861,2433,4846,2442,4838,2454,4836,2468,4820,2489,4798,2506,4792,2529,4784,2550,4768,2571,4751,2581,4744,2603,4729,2654,4707,2680,4696,2721,4679,2723,4679,2724,4679,2728,4679,2731,4679,2742,4679,2759,4672,2780,4664,2788,4662,2817,4656,2839,4647,2841,4647,2891,4632,2923,4622,2938,4611,2942,4607,2963,4593,2982,4580,2990,4572,3008,4554,3033,4540,3038,4536,3049,4520,3062,4499,3064,4496,3068,4492,3083,4476,3092,4467,3096,4460,3098,4457,3099,4454,3116,4432,3142,4395,3180,4342,3192,4326,3209,4302,3234,4270,3268,4228,3276,4217,3276,4216,3277,4215,L,3277,4215,Q,3283,4206,3298,4189,3316,4169,3323,4154,3346,4097,3354,4073,3362,4042,3366,4030,3371,4012,3377,3995,3384,3980,3395,3958,3405,3941,3410,3926,3410,3925,3411,3923,3417,3897,3434,3856,3405,3847,3370,3828,3328,3806,3310,3799,3291,3793,3281,3790,3264,3784,3257,3774,3252,3769,3243,3751,3234,3733,3230,3723,3215,3686,3208,3668,3196,3637,3191,3616,3184,3589,3163,3562,3139,3537,3129,3523,3087,3470,3045,3450,3040,3447,2995,3426,2946,3403,2943,3403,2930,3403,2867,3445,Q,2806,3485,2783,3507,Z]],label:"Göynücek",shortLabel:"GO",labelPosition:[224.5,436],labelAlignment:[CEN,MID]},"TR.AM.GU":{outlines:[[M,1284,449,Q,1275,415,1273,391,1272,345,1270,327,1264,325,1262,324,1239,312,1214,304,L,1170,289,Q,1111,263,1096,251,1081,241,1055,232,1026,222,1011,214,1e3,207,989,202,975,197,965,192,947,186,942,184,936,179,932,176,926,172,919,172,911,171,892,165,867,151,864,151,852,150,840,144,825,136,820,134,808,128,801,125,791,120,774,123,762,124,751,120,739,115,732,114,719,111,710,103,704,98,690,98,676,98,666,93,658,88,645,88,614,86,600,84,582,80,540,79,535,78,529,75,522,70,517,69,500,64,489,66,484,67,478,65,470,64,466,60,460,55,452,55,444,56,440,55,409,55,384,54,362,53,356,53,349,51,340,43,L,301,43,301,74,Q,313,103,311,124,309,140,311,155,311,159,314,165,319,174,321,181,326,197,326,210,326,219,323,238,322,259,327,272,332,282,335,289,336,293,336,295,336,301,337,308,337,320,333,329,331,332,326,338,321,343,319,348,317,354,311,372,311,374,309,393,309,396,304,402,298,410,296,414,295,417,292,426,290,434,288,438,283,446,278,459,274,476,262,504,251,532,247,548,239,575,228,589,221,599,214,629,213,637,209,645,203,658,202,661,191,688,186,697,181,705,178,715,177,722,175,733,174,740,166,755,159,771,158,774,155,783,143,810,L,130,846,Q,128,849,128,862,127,875,123,883,118,891,121,920,L,122,965,Q,121,975,121,987,121,998,115,1005,108,1013,108,1027,108,1035,109,1048,107,1067,106,1068,98,1089,98,1094,101,1123,95,1135,89,1144,89,1157,88,1174,88,1176,85,1188,85,1200,85,1207,85,1222,84,1227,84,1249,84,1263,83,1267,78,1281,76,1305,97,1314,143,1346,188,1375,227,1378,245,1379,265,1388,289,1400,301,1402,306,1403,321,1404,335,1405,341,1408,354,1415,359,1418,363,1421,373,1428,375,1430,376,1431,401,1459,457,1511,468,1523,488,1553,513,1591,520,1600,566,1660,590,1696,625,1752,644,1797,644,1799,645,1801,654,1832,660,1842,677,1880,681,1896,687,1919,697,1945,711,1980,714,1989,734,2053,775,2175,776,2177,777,2179,L,777,2251,Q,777,2264,783,2291,789,2317,788,2335,788,2347,793,2374,798,2399,797,2407,794,2427,800,2443,809,2468,810,2479,816,2479,817,2479,822,2481,834,2484,844,2487,852,2486,857,2485,866,2489,871,2491,881,2496,884,2497,888,2496,L,896,2496,Q,900,2496,916,2498,L,933,2500,Q,935,2500,943,2504,951,2508,955,2509,963,2510,970,2513,974,2515,987,2521,992,2523,1008,2524,1022,2525,1024,2526,1037,2531,1048,2532,1049,2523,1047,2514,1042,2501,1039,2492,1034,2476,1036,2451,1037,2443,1032,2434,1025,2423,1024,2414,1022,2405,1023,2391,1024,2375,1024,2372,1015,2270,1014,2210,1014,2208,1015,2206,1016,2190,1020,2136,1024,2090,1023,2058,1023,2028,1024,1978,1025,1925,1025,1905,1025,1903,1025,1901,1029,1887,1039,1867,1055,1833,1056,1828,1060,1819,1079,1793,1081,1790,1086,1775,1091,1760,1095,1756,1105,1741,1126,1728,1156,1709,1161,1705,1170,1697,1194,1687,1221,1675,1235,1664,1248,1654,1279,1654,1297,1654,1337,1656,1344,1656,1382,1657,1408,1658,1425,1654,1438,1651,1465,1634,1490,1618,1503,1617,1505,1616,1513,1610,1520,1604,1522,1604,L,1538,1596,Q,1557,1588,1556,1573,1556,1571,1556,1571,1552,1549,1557,1522,1563,1492,1573,1469,1578,1459,1579,1441,1581,1423,1583,1417,1592,1382,1592,1370,1592,1353,1591,1337,1588,1319,1587,1298,1586,1280,1584,1265,1581,1249,1581,1241,1580,1233,1580,1224,1580,1218,1579,1214,1579,1213,1578,1211,1576,1201,1571,1189,1567,1179,1566,1167,1566,1155,1561,1141,1556,1123,1555,1118,L,1555,1071,Q,1555,1042,1544,1024,1533,1007,1523,973,1512,939,1503,927,1493,915,1489,898,1486,880,1485,875,1482,867,1474,851,1466,837,1464,827,1449,803,1412,746,1375,689,1361,671,1347,652,1334,629,1322,607,1316,593,1309,578,1297,540,1284,501,1284,498,1283,496,1285,490,1285,486,1285,454,Q,1285,451,1284,449,Z]],label:"Gümüshaciköy",shortLabel:"GU",labelPosition:[83.4,99.5],labelAlignment:[CEN,MID]},"TR.AM.HA":{outlines:[[M,457,1511,Q,401,1459,376,1431,375,1430,373,1428,363,1421,359,1418,354,1415,341,1408,335,1405,321,1404,306,1403,301,1402,289,1400,265,1388,245,1379,227,1378,188,1375,143,1346,97,1314,76,1305,75,1306,75,1309,75,1312,74,1317,72,1321,67,1327,62,1333,61,1343,61,1344,61,1359,61,1386,61,1391,60,1392,56,1405,52,1416,51,1420,49,1436,49,1449,49,1458,49,1482,49,1501,48,1510,46,1518,40,1540,41,1546,40,1557,40,1568,43,1574,46,1579,50,1591,54,1605,57,1611,69,1634,72,1651,73,1660,78,1672,82,1684,83,1691,84,1699,92,1711,96,1717,102,1729,109,1743,117,1769,119,1774,122,1789,124,1801,130,1808,131,1809,132,1817,133,1825,135,1828,136,1829,140,1836,144,1842,145,1845,149,1859,154,1882,161,1905,172,1927,176,1936,179,1949,182,1962,187,1973,187,1973,203,2017,205,2021,206,2030,208,2039,210,2044,212,2051,221,2067,230,2082,240,2112,245,2130,245,2130,244,2140,250,2152,254,2161,262,2174,266,2183,267,2193,268,2196,269,2199,269,2216,283,2247,287,2253,296,2270,297,2274,298,2283,299,2291,302,2297,303,2299,311,2324,317,2339,325,2351,328,2356,348,2369,L,360,2378,Q,365,2383,368,2390,385,2410,412,2423,413,2423,436,2440,441,2443,447,2446,451,2447,461,2449,465,2451,473,2454,481,2457,490,2456,495,2456,504,2460,514,2465,517,2465,527,2465,543,2471,558,2477,569,2478,L,778,2478,Q,783,2478,800,2478,806,2478,810,2479,809,2468,800,2443,794,2427,797,2407,798,2399,793,2374,788,2347,788,2335,789,2317,783,2291,777,2264,777,2251,L,777,2179,Q,776,2177,775,2175,734,2053,714,1989,711,1980,697,1945,687,1919,681,1896,677,1880,660,1842,654,1832,645,1801,644,1799,644,1797,625,1752,590,1696,566,1660,520,1600,513,1591,488,1553,Q,468,1523,457,1511,Z]],label:"Hamamözü",shortLabel:"HA",labelPosition:[40.6,189.2],labelAlignment:[CEN,MID]},"TR.AM.ME":{outlines:[[M,2168,502,Q,2139,479,2119,466,2095,450,2056,426,2048,422,2045,419,2036,414,2034,410,2029,411,2020,409,2010,407,2004,409,1998,411,1994,414,1990,416,1980,417,1970,418,1963,418,1943,418,1936,422,1921,429,1914,430,1882,434,1860,432,1844,429,1830,436,1821,440,1815,442,1812,442,1806,443,1802,443,1796,444,1783,444,1776,438,1769,433,1754,432,1737,432,1729,432,1724,431,1708,426,1691,421,1684,420,1668,419,1658,418,1640,410,1634,409,1621,407,1616,406,1608,405,1602,401,1595,396,1577,394,1567,392,1551,392,1538,392,1526,388,1496,382,1486,376,1481,373,1464,373,1444,373,1439,371,1422,363,1418,363,1409,362,1405,360,1398,359,1391,354,1386,349,1369,349,1366,349,1358,344,1349,339,1348,339,1331,337,1325,336,1314,334,1303,330,1299,329,1282,328,1275,327,1270,327,1272,345,1273,391,1275,415,1284,449,1285,451,1285,454,1285,486,1285,490,1283,496,1284,498,1284,501,1297,540,1309,578,1316,593,1322,607,1334,629,1347,652,1361,671,1375,689,1412,746,1449,803,1464,827,1466,837,1474,851,1482,867,1485,875,1486,880,1489,898,1493,915,1503,927,1512,939,1523,973,1533,1007,1544,1024,1555,1042,1555,1071,L,1555,1118,Q,1556,1123,1561,1141,1566,1155,1566,1167,1567,1179,1571,1189,1576,1201,1578,1211,1579,1213,1579,1214,1580,1218,1580,1224,1580,1233,1581,1241,1581,1249,1584,1265,1586,1280,1587,1298,1588,1319,1591,1337,1592,1353,1592,1370,1592,1382,1583,1417,1581,1423,1579,1441,1578,1459,1573,1469,1563,1492,1557,1522,1552,1549,1556,1571,1556,1571,1556,1573,1557,1588,1538,1596,L,1522,1604,Q,1520,1604,1513,1610,1505,1616,1503,1617,1490,1618,1465,1634,1438,1651,1425,1654,1408,1658,1382,1657,1344,1656,1337,1656,1297,1654,1279,1654,1248,1654,1235,1664,1221,1675,1194,1687,1170,1697,1161,1705,1156,1709,1126,1728,1105,1741,1095,1756,1091,1760,1086,1775,1081,1790,1079,1793,1060,1819,1056,1828,1055,1833,1039,1867,1029,1887,1025,1901,1025,1903,1025,1905,1025,1925,1024,1978,1023,2028,1023,2058,1024,2090,1020,2136,1016,2190,1015,2206,1014,2208,1014,2210,1015,2270,1024,2372,1024,2375,1023,2391,1022,2405,1024,2414,1025,2423,1032,2434,1037,2443,1036,2451,1034,2476,1039,2492,1042,2501,1047,2514,1049,2523,1048,2532,1053,2533,1058,2532,1092,2533,1149,2556,1153,2558,1161,2557,1169,2557,1174,2559,1185,2565,1197,2566,1220,2568,1252,2577,1260,2579,1272,2582,1273,2582,1285,2587,1294,2590,1297,2590,1308,2588,1326,2594,1349,2602,1350,2602,1361,2603,1377,2609,1392,2616,1401,2621,L,1421,2633,Q,1426,2635,1433,2635,1440,2636,1445,2639,1477,2656,1531,2683,1551,2693,1617,2728,L,1704,2773,Q,1713,2776,1726,2785,1741,2793,1744,2795,L,1755,2800,Q,1757,2786,1768,2771,1770,2768,1791,2743,1818,2700,1832,2679,1855,2641,1869,2618,1876,2608,1899,2587,1919,2567,1925,2567,1928,2567,1937,2574,1945,2581,1954,2579,1958,2578,1967,2583,1978,2588,1981,2589,1982,2589,1990,2589,1995,2589,2e3,2592,2001,2592,2007,2597,2011,2600,2014,2601,2025,2602,2051,2602,2054,2602,2065,2601,2076,2602,2080,2606,2085,2610,2093,2612,2098,2613,2107,2614,L,2121,2620,Q,2130,2623,2139,2623,L,2174,2624,Q,2176,2624,2202,2624,2206,2623,2213,2618,2220,2613,2225,2613,2234,2613,2274,2613,2279,2612,2290,2612,2299,2612,2305,2605,2312,2595,2316,2589,2322,2580,2328,2579,2337,2577,2344,2570,2352,2562,2356,2559,2377,2542,2382,2535,L,2416,2516,Q,2424,2509,2429,2506,2433,2503,2437,2502,2437,2495,2443,2481,2449,2466,2449,2457,2447,2442,2449,2431,2451,2423,2456,2409,2477,2350,2488,2322,2496,2306,2499,2299,2505,2287,2503,2278,2504,2229,2505,2225,2506,2218,2512,2200,2517,2184,2517,2175,2516,2165,2516,2151,2517,2140,2517,2133,2517,2131,2517,2130,2517,2119,2519,2106,2523,2090,2524,2082,2526,2072,2526,2053,2526,2030,2526,2026,2536,2008,2560,1975,2579,1949,2585,1928,2589,1918,2602,1908,2616,1897,2619,1888,2622,1880,2636,1866,2649,1851,2650,1841,2651,1832,2652,1813,2652,1793,2654,1786,2656,1779,2660,1765,2664,1751,2664,1603,2664,1600,2664,1598,2661,1556,2662,1554,2663,1530,2675,1507,2682,1495,2684,1480,2686,1462,2688,1456,2689,1450,2698,1429,2705,1413,2705,1405,2705,1392,2712,1379,2716,1371,2725,1356,2729,1348,2742,1336,2759,1320,2766,1312,2785,1287,2799,1274,2814,1261,2819,1255,2823,1249,2824,1245,2828,1243,2834,1237,2838,1233,2840,1228,2841,1227,2842,1226,2858,1211,2865,1201,2863,1197,2863,1189,2864,1178,2864,1175,2864,1170,2860,1159,2856,1149,2856,1148,2856,1127,2856,1116,2855,1097,2850,1087,2843,1076,2842,1054,2840,1033,2835,1027,2830,1021,2828,1018,L,2821,1004,Q,2820,1001,2814,997,2812,970,2785,947,2785,946,2736,912,2725,905,2686,875,2650,847,2632,835,2564,791,2525,761,2493,732,2478,724,2450,708,2424,688,2399,675,2372,654,2338,628,2319,614,2302,598,2293,591,2279,579,2267,577,2260,576,2245,563,2222,543,2220,541,Q,2203,529,2168,502,Z]],label:"Merzifon",shortLabel:"ME",labelPosition:[209.5,156.3],labelAlignment:[CEN,MID]},"TR.AM.SU":{outlines:[[M,3514,1281,Q,3489,1280,3458,1279,3427,1278,3407,1277,3388,1276,3377,1277,L,3309,1276,Q,3298,1275,3277,1271,3260,1268,3243,1269,3209,1271,3171,1265,3163,1264,3153,1260,3145,1257,3141,1257,3137,1256,3101,1255,3059,1256,3040,1253,3019,1250,3010,1251,3001,1252,2981,1253,2962,1253,2941,1240,L,2923,1233,2867,1203,Q,2866,1202,2865,1201,2858,1211,2842,1226,2841,1227,2840,1228,2838,1233,2834,1237,2828,1243,2824,1245,2823,1249,2819,1255,2814,1261,2799,1274,2785,1287,2766,1312,2759,1320,2742,1336,2729,1348,2725,1356,2716,1371,2712,1379,2705,1392,2705,1405,2705,1413,2698,1429,2689,1450,2688,1456,2686,1462,2684,1480,2682,1495,2675,1507,2663,1530,2662,1554,2661,1556,2664,1598,2664,1600,2664,1603,2664,1751,2660,1765,2656,1779,2654,1786,2652,1793,2652,1813,2651,1832,2650,1841,2649,1851,2636,1866,2622,1880,2619,1888,2616,1897,2602,1908,2589,1918,2585,1928,2579,1949,2560,1975,2536,2008,2526,2026,2526,2030,2526,2053,2526,2072,2524,2082,2523,2090,2519,2106,2517,2119,2517,2130,2517,2131,2517,2133,2517,2140,2516,2151,2516,2165,2517,2175,2517,2184,2512,2200,2506,2218,2505,2225,2504,2229,2503,2278,2505,2287,2499,2299,2496,2306,2488,2322,2477,2350,2456,2409,2451,2423,2449,2431,2447,2442,2449,2457,2449,2466,2443,2481,2437,2495,2437,2502,2443,2499,2448,2499,2454,2498,2468,2492,2480,2486,2487,2487,2491,2487,2496,2483,2503,2478,2505,2478,2509,2476,2520,2477,2526,2477,2530,2481,2536,2485,2542,2484,2546,2484,2555,2489,2562,2493,2565,2495,2568,2497,2580,2500,2591,2503,2594,2505,2607,2512,2619,2512,2625,2512,2633,2515,2637,2517,2646,2521,2647,2521,2656,2522,2662,2522,2665,2525,2671,2530,2676,2532,2677,2533,2682,2533,2688,2534,2689,2535,2697,2540,2707,2542,2725,2543,2764,2542,2770,2542,2780,2541,2788,2541,2791,2543,2794,2544,2802,2549,2810,2554,2815,2554,2847,2554,2851,2555,2856,2556,2866,2561,2874,2565,2879,2565,L,2929,2566,Q,2930,2566,2932,2566,2954,2565,3005,2570,3037,2570,3046,2574,3055,2578,3082,2578,3101,2578,3104,2577,3115,2576,3127,2569,3128,2568,3135,2566,3141,2565,3146,2561,3148,2560,3162,2548,3176,2539,3189,2534,3202,2529,3204,2526,3206,2523,3238,2505,3266,2487,3279,2481,3282,2480,3288,2474,3293,2470,3300,2468,3307,2465,3312,2456,3317,2447,3320,2440,3323,2434,3333,2424,3343,2412,3357,2396,3358,2395,3359,2393,3366,2386,3379,2369,3383,2363,3405,2341,3436,2299,3442,2288,3443,2286,3448,2271,3451,2259,3454,2255,3457,2250,3461,2240,3464,2231,3469,2225,3477,2212,3488,2191,3494,2180,3496,2175,3499,2167,3500,2162,3531,2104,3539,2084,3549,2056,3554,2049,3567,2027,3570,2019,L,3580,1987,Q,3583,1974,3586,1970,3587,1969,3592,1964,3597,1958,3599,1958,3603,1957,3614,1956,3626,1954,3633,1950,3641,1946,3650,1945,3659,1944,3667,1944,3675,1947,3688,1941,3702,1936,3709,1936,3722,1936,3733,1928,3739,1924,3744,1923,3753,1922,3754,1922,3757,1921,3766,1917,3773,1913,3776,1913,3797,1908,3802,1905,3809,1901,3822,1892,3834,1884,3844,1880,3849,1878,3863,1873,3876,1869,3883,1864,3894,1855,3923,1838,L,3937,1827,Q,3938,1827,3941,1817,3942,1809,3954,1799,3963,1789,3989,1765,4001,1757,4007,1741,4010,1734,4018,1726,4023,1721,4032,1714,4036,1710,4040,1700,4044,1688,4047,1684,4049,1681,4054,1670,4058,1661,4062,1656,4073,1642,4088,1601,4099,1570,4111,1544,4119,1537,4130,1515,4131,1514,4134,1500,4137,1492,4141,1487,4147,1481,4164,1466,4167,1463,4176,1449,4182,1441,4189,1435,4196,1429,4204,1416,4211,1402,4224,1391,4236,1378,4250,1367,4262,1356,4271,1344,4265,1341,4261,1339,4249,1336,4245,1334,4238,1332,4226,1323,4214,1314,4210,1310,4203,1306,4191,1302,4179,1299,4174,1296,4163,1287,4158,1284,4128,1267,4120,1267,4104,1265,4089,1259,4084,1257,4072,1257,4062,1256,4056,1251,4051,1247,4016,1247,4004,1247,3998,1249,3981,1253,3975,1255,3961,1258,3930,1256,3924,1254,3912,1261,3898,1267,3893,1267,L,3851,1268,Q,3828,1267,3816,1274,3805,1279,3778,1279,L,3738,1280,Q,3711,1284,3701,1284,3694,1282,3687,1282,L,3676,1282,Q,3672,1282,3651,1285,3649,1285,3641,1290,3638,1292,3636,1292,3633,1292,3631,1292,3582,1292,3576,1292,3557,1289,3548,1286,Q,3536,1282,3514,1281,Z]],label:"Suluova",shortLabel:"SU",labelPosition:[310,188.9],labelAlignment:[CEN,MID]},"TR.AM.TA":{outlines:[[M,5562,727,Q,5528,715,5520,712,5517,711,5498,698,5481,688,5472,685,5456,681,5423,667,5395,655,5373,651,L,5320,640,5292,637,Q,5276,636,5274,629,L,5253,629,Q,5253,632,5252,653,5252,670,5248,676,5240,686,5237,702,5235,710,5231,728,5229,737,5226,752,5225,765,5221,775,5218,781,5214,802,5211,817,5205,826,5202,842,5194,876,5194,898,5181,933,5180,937,5175,961,5172,978,5167,988,5157,1009,5148,1043,5132,1084,5124,1091,5113,1100,5106,1109,5103,1113,5102,1121,5101,1128,5096,1132,5068,1149,5052,1160,5040,1168,5033,1172,5022,1179,5015,1186,5013,1187,5011,1189,4970,1215,4909,1259,4818,1326,4810,1331,4809,1331,4784,1346,4770,1355,4761,1365,4745,1379,4718,1401,4679,1431,4673,1434,4658,1442,4640,1445,4657,1480,4678,1506,4680,1510,4687,1522,4692,1534,4697,1539,4700,1544,4705,1554,4709,1561,4714,1565,4727,1577,4751,1623,4756,1633,4755,1660,4756,1665,4760,1678,4764,1687,4765,1695,4765,1696,4765,1698,L,4765,1699,Q,4764,1710,4770,1732,4777,1761,4777,1765,4776,1775,4779,1791,4782,1800,4788,1828,4789,1831,4789,1847,4789,1860,4790,1862,4796,1876,4798,1891,4799,1896,4806,1919,4813,1936,4813,1948,4812,1950,4812,1952,L,4812,2103,4817,2131,Q,4822,2151,4822,2159,4819,2179,4823,2218,L,4823,2223,Q,4823,2239,4822,2249,4822,2264,4836,2292,4848,2315,4862,2333,4872,2347,4887,2373,4901,2395,4923,2410,4927,2413,4940,2426,4945,2429,4959,2436,4964,2439,4967,2444,4971,2448,4974,2450,4975,2451,4995,2461,5019,2480,5030,2487,L,5063,2514,Q,5094,2548,5095,2548,L,5110,2563,Q,5113,2565,5121,2568,5128,2571,5131,2573,5143,2584,5147,2588,5149,2590,5166,2610,5172,2616,5187,2630,5202,2644,5208,2652,5215,2659,5231,2666,5249,2674,5256,2680,5279,2702,5291,2718,5292,2720,5299,2727,5305,2735,5306,2740,5306,2749,5309,2752,L,5320,2761,Q,5325,2765,5350,2800,5355,2807,5362,2817,5374,2830,5377,2834,5390,2851,5393,2853,5396,2857,5399,2862,5401,2868,5404,2872,5404,2872,5410,2881,5414,2887,5418,2891,5429,2899,5431,2906,5434,2913,5446,2923,L,5460,2939,Q,5469,2950,5516,3015,5521,3022,5543,3051,L,5558,3070,Q,5570,3090,5573,3092,5577,3098,5595,3120,L,5606,3135,Q,5610,3140,5619,3150,5622,3156,5630,3165,5640,3176,5644,3183,5648,3189,5656,3198,5664,3206,5668,3212,5668,3213,5670,3221,5672,3226,5676,3230,5682,3235,5690,3248,5694,3254,5714,3280,5716,3282,5726,3297,5734,3311,5737,3313,L,5763,3339,Q,5784,3321,5812,3283,5844,3241,5866,3224,5871,3221,5881,3212,5891,3203,5893,3198,5895,3193,5902,3182,5909,3170,5932,3151,5954,3132,5978,3107,5979,3105,5981,3104,L,6016,3059,Q,6063,3008,6068,3004,6074,2999,6082,2992,6089,2985,6095,2978,6100,2972,6108,2962,6115,2951,6125,2938,6134,2926,6160,2904,6161,2903,6163,2901,6173,2889,6195,2862,6220,2831,6238,2816,6255,2800,6261,2795,6266,2789,6291,2761,6306,2746,6319,2734,6335,2719,6341,2707,6347,2694,6348,2674,6348,2673,6348,2671,6352,2647,6366,2598,6379,2551,6381,2529,6383,2504,6388,2487,6391,2475,6400,2453,6404,2442,6408,2421,6413,2401,6416,2391,6416,2390,6416,2388,6422,2352,6435,2297,6436,2290,6436,2274,6446,2252,6447,2249,6450,2223,6454,2217,6457,2213,6457,2197,6457,2188,6450,2158,6442,2129,6442,2117,6441,2114,6441,2112,6434,2096,6426,2064,6417,2032,6416,2027,6413,2014,6403,1984,6390,1953,6387,1942,6380,1914,6380,1903,6380,1891,6374,1879,6371,1871,6371,1865,6371,1863,6371,1861,6370,1854,6366,1846,6360,1833,6359,1827,6358,1821,6352,1805,6347,1792,6347,1784,6348,1767,6330,1749,6302,1721,6299,1715,6291,1705,6271,1685,6239,1655,6239,1654,6238,1653,6230,1648,6223,1643,6221,1640,6217,1625,6212,1621,6194,1606,6191,1602,6187,1596,6187,1583,6187,1578,6192,1562,6196,1547,6196,1543,6212,1521,6215,1512,6215,1510,6215,1508,6215,1499,6217,1482,6221,1458,6221,1454,6222,1435,6223,1423,6226,1404,6235,1393,6240,1385,6254,1375,6268,1363,6281,1357,6294,1350,6303,1335,6309,1324,6325,1324,6335,1324,6337,1326,6342,1328,6348,1338,L,6367,1337,6367,1337,6359,1332,Q,6360,1326,6349,1319,6334,1313,6329,1309,6298,1288,6283,1277,6274,1270,6242,1249,6216,1233,6206,1225,6180,1212,6143,1188,6081,1149,6075,1145,6043,1124,6012,1102,5952,1061,5952,1055,5952,1050,5956,1045,5960,1040,5961,1036,5962,1032,5962,1028,5962,1023,5964,1019,5969,1009,5970,996,5973,980,5974,976,5991,916,6012,890,6012,888,6012,886,6015,870,6014,866,6013,860,5998,847,5989,839,5976,831,5964,823,5960,820,5934,797,5921,787,5912,780,5895,779,5873,776,5870,775,5852,769,5817,768,5774,767,5761,766,5752,764,5708,755,5682,750,5660,750,5642,750,5635,749,5626,748,5611,743,5607,742,5598,736,5590,731,5587,731,Q,5569,730,5562,727,Z]],label:"Tasova",shortLabel:"TA",labelPosition:[554.8,198.4],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"amasya",type:"maps"}}})});