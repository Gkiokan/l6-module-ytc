(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=214)})({214:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(215);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},215:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Australia2.20.10-30-2012 06:07:23
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Australia2",revision:20,standaloneInit:true,baseWidth:650,baseHeight:600,baseScaleFactor:10,entities:{ACT:{outlines:[[M,5502,4446,Q,5486,4422,5473,4425,5468,4432,5434,4463,5430,4467,5430,4507,L,5436,4527,Q,5437,4531,5445,4534,5453,4535,5453,4539,5453,4542,5449,4549,5449,4557,5461,4556,5468,4556,5478,4554,L,5478,4516,Q,5481,4517,5486,4514,5491,4510,5492,4504,L,5484,4504,5484,4490,Q,5482,4475,5490,4470,5496,4466,5522,4464,Q,5521,4449,5502,4446,Z]],label:"Australian Capital Territory",shortLabel:"ACT",labelPosition:[591.9,449],labelAlignment:[LFT,MID],labelConnectors:[[M,5919,4490,L,5476,4490]]},WA:{outlines:[[M,2073,945,Q,2077,945,2084,948,2093,952,2093,956,2093,963,2082,976,2070,989,2070,992,2070,999,2075,1006,2080,1013,2080,1017,2055,1033,2053,1035,2054,1025,2045,1025,2034,1025,2030,1032,2020,1007,2023,980,2e3,991,2e3,997,2010,1019,2010,1025,2001,1023,1993,1027,1984,1031,1985,1040,L,1968,1040,Q,1964,1032,1953,1032,L,1940,1032,Q,1946,1041,1948,1050,1951,1053,1953,1055,1940,1065,1940,1073,1940,1076,1956,1094,1972,1114,1983,1122,L,1980,1127,Q,1978,1127,1973,1130,1959,1130,1953,1117,L,1918,1117,Q,1920,1122,1920,1130,1898,1138,1898,1146,1898,1150,1900,1152,L,1930,1152,Q,1929,1168,1938,1177,L,1925,1177,Q,1913,1177,1912,1165,1911,1156,1901,1154,1897,1152,1890,1152,1876,1152,1866,1180,1857,1203,1835,1192,L,1835,1207,Q,1833,1222,1833,1228,1833,1245,1839,1249,1845,1254,1863,1252,L,1863,1300,1823,1300,Q,1835,1312,1835,1327,1835,1338,1825,1352,L,1828,1355,1825,1355,Q,1821,1350,1804,1326,1788,1305,1775,1305,1760,1305,1755,1327,L,1753,1327,Q,1758,1303,1737,1304,1711,1306,1705,1290,L,1685,1290,1685,1307,Q,1715,1337,1720,1340,1707,1360,1703,1365,1704,1361,1695,1352,L,1683,1352,1683,1367,Q,1689,1383,1703,1384,1718,1384,1725,1385,1731,1403,1763,1435,1753,1435,1743,1447,1739,1446,1725,1432,L,1708,1432,Q,1708,1440,1712,1445,1715,1450,1715,1453,1715,1457,1710,1466,1705,1475,1705,1496,1705,1511,1706,1512,1708,1512,1713,1515,L,1708,1520,Q,1702,1510,1697,1500,1643,1402,1635,1372,1630,1377,1625,1377,L,1625,1355,Q,1627,1343,1639,1343,1652,1345,1655,1345,L,1655,1332,Q,1621,1325,1610,1342,1610,1347,1609,1351,1606,1361,1598,1365,1591,1367,1588,1374,1589,1378,1589,1382,1590,1392,1588,1397,L,1565,1397,Q,1555,1430,1528,1445,1508,1456,1508,1490,1513,1541,1513,1547,L,1513,1590,Q,1530,1612,1530,1621,1530,1633,1485,1655,1440,1677,1440,1703,L,1443,1710,Q,1438,1705,1435,1705,1426,1712,1425,1727,1426,1752,1388,1800,1387,1801,1369,1840,1357,1866,1330,1877,1233,1917,1233,1917,1215,1922,1168,1920,1142,1918,1131,1944,L,1131,1944,Q,1112,1937,1105,1933,1103,1932,1075,1932,1043,1932,1036,1941,1020,1964,1008,1972,993,1982,928,1987,914,1991,886,2011,859,2030,855,2037,850,2047,825,2042,820,2044,799,2057,792,2057,763,2035,L,758,2035,Q,754,2031,750,2027,743,2027,736,2038,728,2050,723,2052,722,2047,714,2041,706,2034,700,2035,703,2032,703,2020,682,2020,675,2035,672,2055,670,2065,636,2065,625,2075,604,2092,595,2097,578,2108,567,2121,559,2132,550,2135,539,2138,538,2155,537,2165,526,2169,515,2172,510,2181,509,2182,509,2184,423,2217,398,2230,367,2246,360,2285,351,2341,350,2342,L,320,2342,Q,308,2305,308,2295,308,2285,330,2237,L,330,2225,Q,277,2225,270,2270,269,2285,269,2293,268,2306,263,2317,243,2337,243,2352,243,2375,257,2382,270,2388,270,2399,270,2465,254,2502,221,2575,206,2627,L,208,2630,208,2670,Q,223,2687,231,2698,245,2718,245,2737,245,2759,253,2772,267,2797,270,2805,L,307,2862,Q,338,2911,338,2936,323,2973,323,2990,L,298,2990,Q,296,2987,291,2949,286,2921,275,2915,L,275,2930,Q,280,2930,280,2932,274,2937,260,2952,252,2905,245,2886,237,2867,218,2850,L,205,2850,205,2875,Q,208,2883,218,2888,229,2892,230,2897,231,2928,235,2935,238,2939,255,2956,256,2956,256,2957,258,2959,261,2961,275,2975,275,2991,265,3011,268,3022,L,250,3022,227,2969,Q,216,2942,193,2945,168,2896,168,2882,168,2869,158,2851,149,2835,145,2832,148,2840,143,2851,139,2861,137,2867,137,2869,138,2872,142,2898,177,2954,L,177,2955,Q,198,2990,231,3036,320,3163,320,3182,320,3202,308,3232,308,3248,384,3356,385,3356,385,3357,385,3364,383,3372,383,3384,414,3410,445,3449,445,3523,445,3613,450,3635,451,3636,453,3662,454,3679,460,3690,473,3712,481,3731,483,3735,484,3739,524,3816,544,3846,550,3862,550,3880,L,550,3907,Q,539,3919,528,3920,535,3943,546,3949,553,3952,553,3972,553,3990,535,4013,535,4014,540,4086,540,4140,530,4147,510,4160,508,4172,505,4189,494,4190,488,4190,476,4186,471,4182,454,4170,444,4170,440,4182,440,4185,440,4187,441,4241,442,4279,445,4290,480,4290,503,4290,545,4317,565,4330,575,4344,583,4359,590,4367,597,4375,696,4417,754,4405,783,4405,788,4405,835,4425,837,4407,854,4407,859,4407,873,4427,883,4414,900,4406,920,4397,925,4392,930,4387,948,4387,951,4384,951,4374,952,4366,958,4362,979,4363,998,4340,1018,4315,1041,4315,1049,4315,1057,4320,1064,4325,1070,4325,1079,4325,1106,4292,1133,4258,1135,4255,1153,4235,1186,4228,1213,4222,1233,4227,1254,4230,1260,4230,1320,4220,1343,4220,1370,4220,1384,4220,1408,4220,1430,4215,1430,4220,1433,4227,L,1455,4227,Q,1460,4220,1460,4215,1482,4220,1488,4265,L,1503,4265,Q,1498,4260,1498,4253,1498,4244,1512,4245,1526,4246,1525,4230,L,1545,4230,Q,1553,4250,1569,4250,1603,4222,1618,4215,L,1633,4215,Q,1633,4225,1635,4242,1648,4240,1650,4252,1653,4252,1663,4247,1663,4242,1658,4242,1673,4222,1691,4218,1715,4217,1730,4215,L,1728,4210,Q,1736,4193,1738,4191,1745,4184,1765,4180,1763,4175,1758,4170,1773,4129,1782,4110,1797,4077,1820,4070,1904,4055,1915,4045,1919,4041,1922,4039,1923,4037,1925,4036,1927,4035,1929,4034,1948,4024,2007,3991,2082,3950,2092,3950,2160,3962,2178,3962,2191,3962,2205,3960,2207,3960,2209,3960,2217,3960,2227,3955,2242,3948,2260,3950,2280,3951,2294,3943,2306,3935,2314,3933,2315,3931,2316,3930,2317,3930,2317,3930,2324,3928,2330,3927,2407,3916,2465,3877,2475,3870,2509,3863,L,2509,1087,Q,2500,1085,2488,1083,2455,1075,2458,1062,L,2430,1062,Q,2425,1066,2420,1075,L,2428,1085,2428,1105,Q,2425,1106,2420,1104,2416,1102,2415,1100,L,2398,1100,Q,2398,1111,2392,1121,2387,1127,2386,1131,2385,1132,2385,1133,2390,1140,2390,1146,2383,1161,2383,1170,L,2375,1170,Q,2375,1157,2370,1125,2370,1111,2378,1095,2388,1075,2403,1075,2399,1064,2338,1012,2317,989,2270,925,2268,930,2268,940,L,2243,940,Q,2241,938,2220,913,2213,905,2204,905,2198,905,2175,907,2182,910,2184,920,2185,927,2191,932,2190,933,2171,947,2159,956,2163,972,L,2145,972,Q,2141,968,2140,952,2140,940,2125,935,L,2123,937,Q,2122,943,2114,951,2110,954,2109,959,2107,963,2108,967,L,2105,967,Q,2106,963,2106,958,2106,952,2104,945,2099,930,2089,930,Q,2077,930,2073,945,Z]],label:"Western Australia",shortLabel:"WA",labelPosition:[132.3,294.6],labelAlignment:[CEN,MID]},NT:{outlines:[[M,2713,491,Q,2716,501,2716,505,2715,505,2714,505,2704,505,2694,508,2692,516,2692,520,L,2683,519,2683,540,Q,2689,549,2689,555,2689,565,2679,566,2674,567,2667,566,2664,574,2664,577,2678,582,2686,585,L,2686,582,Q,2714,571,2717,571,2734,583,2739,583,2743,583,2746,576,2747,573,2748,571,2748,571,2748,570,2749,568,2749,566,2769,579,2776,582,2799,604,2804,607,2804,599,2808,597,2816,597,2821,595,2825,593,2847,567,2853,559,2893,525,L,2846,482,Q,2840,482,2838,487,2836,493,2829,495,2819,497,2819,505,2818,511,2814,511,2808,511,2803,507,2798,502,2792,502,2778,502,2777,512,2776,522,2769,522,2756,522,2748,514,2737,512,2731,498,2726,484,2720,484,Q,2713,484,2713,491,Z],[M,3641,880,Q,3634,891,3624,894,3619,896,3616,915,L,3605,915,Q,3611,961,3602,977,3606,977,3621,982,3634,986,3645,985,3652,985,3661,992,3671,1e3,3676,1e3,3699,1e3,3699,985,3699,971,3643,964,3641,958,3652,952,3663,946,3663,944,L,3663,940,3656,940,Q,3656,929,3676,910,3676,902,3664,902,3658,902,3650,907,3647,902,3645,880,Z],[M,3253,597,Q,3233,595,3229,581,3226,566,3213,565,3193,585,3183,585,3176,576,3166,574,3160,572,3160,557,3160,551,3164,533,3162,538,3157,556,3152,570,3131,570,3119,570,3118,568,3117,565,3118,542,3103,536,3096,520,3090,505,3084,505,3057,522,3060,535,L,3050,535,Q,3050,534,3050,534,3045,515,3045,507,3045,504,3047,500,3050,491,3063,477,3053,480,3046,470,3040,462,3040,455,L,3023,455,3023,485,3033,495,3025,495,Q,3007,477,3003,477,2997,477,2973,492,2973,482,2966,474,2958,465,2950,465,2941,465,2932,475,2924,484,2923,492,2978,542,2982,542,2988,542,3003,537,2997,523,3005,515,L,3025,515,Q,3030,525,3032,538,L,3032,538,Q,3034,551,3033,567,3038,570,3040,570,3048,584,3048,601,3048,622,3045,630,L,3e3,630,Q,2999,635,3002,640,L,3002,641,Q,2993,637,2984,637,L,2980,637,Q,2981,652,2919,652,2918,652,2887,652,2854,648,2850,625,L,2835,625,Q,2835,635,2840,640,L,2828,640,Q,2808,620,2805,620,2793,666,2793,672,2795,680,2795,682,L,2780,682,Q,2780,679,2773,667,L,2753,667,2753,682,Q,2755,682,2755,692,L,2733,692,Q,2730,707,2730,712,L,2710,712,Q,2715,733,2715,740,2710,746,2710,762,2712,762,2713,762,L,2710,762,2710,762,Q,2702,760,2688,760,2687,760,2685,760,2675,761,2670,772,2668,775,2663,805,2695,815,2705,835,2694,846,2663,853,2639,859,2630,882,2623,919,2618,933,2610,956,2580,955,2579,975,2570,981,2560,988,2560,997,2560,1007,2588,1026,2617,1044,2618,1045,2605,1069,2605,1090,2605,1099,2612,1106,2618,1114,2618,1117,2613,1135,2613,1140,L,2610,1140,Q,2600,1109,2568,1082,L,2543,1082,2543,1107,2555,1122,2555,1135,2550,1135,Q,2543,1130,2535,1130,2535,1115,2533,1092,2528,1091,2509,1087,L,2509,1087,2508,2918,3846,2918,3846,1375,Q,3835,1367,3828,1355,3796,1300,3765,1297,3739,1295,3722,1276,3700,1253,3685,1247,L,3675,1247,Q,3674,1248,3673,1248,3672,1248,3670,1248,L,3675,1247,Q,3688,1243,3688,1230,L,3680,1230,Q,3682,1207,3673,1203,3668,1201,3658,1200,L,3658,1205,3665,1215,Q,3643,1223,3643,1242,L,3643,1242,3640,1242,Q,3640,1241,3639,1240,3636,1235,3627,1230,3620,1226,3620,1215,3596,1224,3582,1200,3574,1186,3563,1160,3554,1147,3520,1142,3502,1122,3488,1115,3487,1114,3486,1114,3477,1109,3466,1098,3450,1082,3450,1070,3450,1052,3513,982,3516,976,3523,964,3530,953,3530,940,3531,928,3539,919,3548,910,3550,898,3546,897,3539,897,3526,896,3523,892,3518,872,3518,848,3518,825,3536,814,3546,808,3568,795,L,3588,795,Q,3587,804,3588,810,3590,820,3600,820,3601,820,3630,802,3623,796,3623,791,3623,778,3630,771,3630,762,3620,752,3620,746,3634,735,3648,723,3648,707,3651,702,3658,699,3663,697,3665,690,3669,674,3680,670,3680,668,3680,666,3680,660,3675,645,L,3640,645,Q,3640,618,3620,615,L,3620,602,Q,3623,600,3633,591,3633,585,3630,582,3596,600,3590,610,3595,610,3595,612,3570,610,3570,630,3570,643,3583,647,3595,652,3595,662,3595,667,3589,670,3583,673,3583,685,L,3568,685,Q,3561,675,3540,675,3540,640,3538,630,L,3533,630,Q,3513,648,3507,653,3506,654,3505,655,L,3503,655,3500,647,Q,3500,639,3502,631,3504,626,3508,621,3515,610,3530,602,L,3530,572,3528,572,Q,3526,580,3508,592,3494,601,3491,611,L,3490,612,3488,612,3488,625,Q,3465,630,3455,644,3448,655,3421,655,3407,655,3401,649,3393,640,3385,637,3375,634,3374,619,3373,607,3356,607,3330,625,3314,625,Q,3255,597,3253,597,Z]],label:"Northern Territory",shortLabel:"NT",labelPosition:[317.7,168.6],labelAlignment:[CEN,MID]},QLD:{outlines:[[M,4103,1345,Q,4073,1340,4067,1340,4060,1340,4050,1345,4037,1351,4018,1355,4016,1370,4015,1375,4013,1381,4004,1395,L,4e3,1397,4e3,1405,Q,4004,1404,4005,1403,4014,1399,4030,1393,4044,1389,4055,1377,4061,1371,4083,1364,Q,4100,1359,4103,1345,Z],[M,4850,1035,L,4850,1032,4842,1032,Q,4838,1033,4835,1033,4800,1034,4808,975,L,4785,975,Q,4790,987,4768,992,4766,970,4753,970,4756,978,4745,997,4733,1017,4720,1017,4686,1017,4679,986,4674,966,4668,915,4654,918,4652,912,4650,909,4650,895,4650,887,4658,872,4665,857,4665,847,4665,843,4658,811,4650,779,4650,762,4638,765,4635,765,4633,742,4633,710,4619,709,4615,698,4613,690,4615,682,4606,682,4590,672,L,4585,672,4585,632,Q,4593,630,4598,622,4602,614,4608,615,4605,612,4605,597,L,4580,599,Q,4567,595,4555,597,L,4555,502,Q,4547,505,4540,466,4534,430,4510,442,4508,435,4508,432,4508,423,4518,416,4518,410,4515,397,4505,402,4491,402,4482,402,4478,402,4473,402,4473,401,4472,398,4470,375,L,4450,375,Q,4445,397,4445,407,4466,407,4476,410,4480,411,4483,412,4484,433,4468,435,4448,437,4445,442,4440,453,4441,471,4441,498,4440,502,4438,517,4426,556,4416,586,4415,612,4415,614,4415,615,L,4413,612,4395,612,Q,4399,629,4387,647,4373,667,4373,688,4373,693,4386,699,4397,705,4403,705,L,4403,732,Q,4374,755,4370,760,4368,762,4368,786,4368,796,4378,814,4388,832,4388,832,4388,839,4367,858,4345,877,4345,916,4345,942,4347,945,4358,953,4375,967,L,4375,980,Q,4360,1002,4358,1057,L,4360,1060,Q,4369,1065,4369,1076,4367,1089,4368,1095,4378,1114,4378,1126,4378,1136,4366,1147,4354,1156,4350,1160,4343,1168,4343,1195,4343,1260,4338,1287,4315,1393,4263,1447,L,4263,1470,4268,1470,4268,1477,Q,4268,1495,4260,1502,4236,1514,4220,1530,4204,1546,4198,1549,4187,1555,4160,1552,4132,1551,4070,1517,4006,1481,4003,1462,L,4003,1442,4023,1442,4023,1435,Q,4019,1435,4e3,1430,4e3,1425,3998,1417,3959,1417,3923,1395,3921,1394,3878,1387,3859,1384,3846,1375,L,3846,2918,4281,2918,4281,3413,5461,3413,Q,5477,3395,5504,3371,5510,3365,5515,3361,5517,3360,5518,3359,5522,3357,5528,3355,5535,3353,5535,3343,5544,3346,5566,3353,5568,3354,5584,3354,5596,3354,5617,3346,5644,3339,5644,3339,5666,3339,5670,3354,5674,3369,5686,3369,5692,3369,5706,3363,5701,3352,5718,3352,5726,3352,5732,3357,L,5742,3366,5771,3379,Q,5771,3381,5769,3381,5769,3386,5786,3392,5801,3397,5796,3409,5793,3417,5801,3430,5809,3442,5816,3442,5820,3442,5833,3435,5827,3396,5853,3406,5853,3399,5854,3396,L,5858,3396,Q,5868,3396,5890,3402,5919,3402,5919,3385,5919,3368,5909,3365,5899,3362,5899,3351,5899,3336,5922,3327,5943,3317,5942,3311,L,5959,3312,Q,5961,3312,5966,3301,5971,3289,5977,3289,5990,3289,5987,3304,5999,3302,6018,3315,L,6027,3315,Q,6027,3303,6033,3303,6043,3303,6042,3316,6043,3316,6045,3317,6054,3317,6069,3309,6078,3306,6077,3291,6081,3287,6097,3283,6111,3281,6117,3276,6118,3275,6118,3275,L,6118,3274,Q,6118,3227,6108,3211,6098,3196,6098,3188,6098,3183,6109,3171,6121,3157,6131,3157,6121,3155,6119,3139,L,6116,3112,Q,6113,3112,6113,3110,6102,3149,6096,3157,6067,3126,6058,3127,L,6058,3107,6076,3107,Q,6058,3080,6058,3076,6081,3062,6081,3055,6081,3043,6073,3036,6066,3029,6066,3020,6066,3004,6070,2977,6075,2936,6086,2927,6086,2917,6078,2910,6068,2910,6061,2911,6060,2888,6058,2877,L,6048,2877,6048,2872,Q,6072,2837,6103,2765,L,6111,2765,Q,6110,2763,6095,2744,6082,2727,6083,2715,6068,2715,6068,2726,6081,2745,6081,2751,6081,2757,6069,2764,6057,2772,6053,2780,6044,2805,6026,2805,6007,2805,5993,2787,5987,2777,5973,2747,5947,2688,5908,2687,5909,2662,5898,2640,5866,2598,5858,2597,5818,2597,5811,2592,5788,2576,5788,2556,5788,2545,5793,2540,5797,2534,5806,2535,L,5806,2532,5770,2500,5755,2515,Q,5760,2516,5765,2523,5770,2529,5775,2530,L,5764,2530,Q,5733,2520,5718,2520,L,5720,2520,Q,5725,2520,5733,2517,5733,2502,5730,2482,L,5748,2482,Q,5748,2474,5753,2452,5753,2446,5750,2445,5737,2446,5730,2457,5735,2457,5735,2462,L,5725,2462,Q,5722,2438,5728,2371,5726,2317,5683,2317,5690,2332,5705,2352,L,5703,2355,5690,2355,Q,5667,2342,5650,2321,5626,2294,5615,2285,L,5598,2285,5598,2292,Q,5605,2297,5605,2305,5605,2308,5599,2316,5593,2323,5593,2331,5598,2344,5600,2350,L,5600,2350,5600,2352,Q,5600,2351,5600,2350,5579,2338,5569,2331,5553,2319,5548,2300,5547,2298,5540,2258,5537,2239,5525,2219,5525,2218,5525,2218,L,5528,2217,Q,5534,2170,5500,2167,L,5500,2130,Q,5505,2125,5505,2122,5505,2113,5481,2091,5454,2067,5433,2067,5439,2048,5427,2039,5413,2028,5413,2023,5413,2012,5423,2010,5429,2009,5443,2010,5443,2005,5440,1997,5455,1997,5483,1995,L,5483,1992,Q,5449,1956,5448,1955,5449,1970,5430,1970,5390,1942,5375,1935,5375,1942,5378,1947,L,5378,1950,5360,1950,Q,5363,1947,5363,1937,5347,1934,5331,1916,5318,1902,5295,1907,5293,1897,5293,1885,L,5278,1885,5278,1897,Q,5280,1900,5280,1902,L,5253,1902,Q,5253,1885,5228,1832,L,5192,1832,Q,5191,1834,5189,1833,L,5189,1832,Q,5188,1831,5187,1831,5176,1817,5175,1805,5170,1806,5160,1812,L,5148,1812,Q,5148,1802,5145,1787,L,5128,1787,Q,5120,1790,5118,1792,L,5090,1792,Q,5090,1782,5078,1771,5065,1760,5065,1755,L,5065,1715,Q,5065,1685,5043,1652,5043,1646,5048,1635,L,5043,1632,Q,5038,1632,5033,1637,L,5020,1637,5020,1621,5023,1621,Q,5023,1605,5024,1602,5027,1594,5040,1590,5030,1578,5030,1571,5030,1562,5035,1557,5040,1553,5040,1545,5040,1544,5021,1478,5023,1458,5003,1430,L,5010,1430,5010,1417,Q,4965,1392,4950,1375,4929,1350,4935,1310,4938,1292,4925,1247,4925,1223,4903,1190,4903,1183,4918,1162,L,4918,1142,Q,4907,1143,4903,1142,4897,1140,4898,1130,4918,1126,4918,1101,4918,1095,4884,1070,Q,4850,1044,4850,1035,Z]],label:"Queensland",shortLabel:"QLD",labelPosition:[478.8,230.8],labelAlignment:[CEN,MID]},NSW:{outlines:[[M,5515,3361,Q,5510,3365,5504,3371,5477,3395,5461,3413,L,4281,3413,4281,4244,4296,4244,Q,4306,4247,4332,4263,4333,4263,4348,4266,4358,4268,4360,4276,4373,4266,4375,4257,4376,4254,4389,4254,4397,4254,4415,4265,4417,4255,4427,4255,4427,4255,4455,4269,4484,4287,4488,4304,4492,4332,4504,4341,4506,4343,4511,4358,4514,4370,4526,4370,4543,4370,4543,4359,4539,4345,4540,4336,L,4546,4336,Q,4553,4341,4563,4350,4568,4352,4581,4353,4604,4360,4627,4379,L,4623,4379,4623,4407,Q,4624,4416,4624,4437,4656,4439,4664,4447,4669,4452,4672,4464,4674,4466,4693,4472,4710,4480,4705,4494,4719,4492,4742,4510,4770,4532,4779,4535,4784,4537,4789,4553,4794,4568,4812,4572,4824,4574,4827,4587,4830,4589,4846,4589,L,4869,4587,Q,4869,4569,4870,4560,4872,4543,4885,4542,4911,4542,4939,4539,4941,4539,4942,4539,4944,4539,4946,4540,L,4959,4540,Q,4959,4541,4975,4550,4982,4555,4981,4564,5012,4569,5018,4576,5021,4579,5048,4579,5072,4579,5079,4572,5085,4564,5097,4564,5115,4564,5119,4573,5123,4583,5139,4587,5156,4590,5179,4590,5189,4590,5188,4581,5187,4572,5197,4572,5207,4572,5217,4580,5228,4580,5223,4565,L,5235,4564,Q,5240,4564,5251,4570,5258,4570,5258,4565,5259,4559,5268,4559,5283,4559,5287,4562,5291,4564,5296,4576,5305,4585,5319,4595,5320,4599,5326,4632,5335,4646,5335,4660,5338,4667,5342,4699,5352,4706,5385,4714,5417,4725,5457,4747,5458,4748,5487,4767,5508,4781,5517,4782,5539,4785,5544,4794,5554,4810,5562,4813,5569,4816,5574,4818,5576,4819,5578,4820,5579,4820,5580,4820,5603,4817,5608,4797,5614,4770,5615,4770,5588,4748,5588,4737,5588,4718,5620,4660,5634,4638,5630,4577,5629,4557,5642,4536,5655,4515,5655,4500,5728,4426,5728,4412,5715,4390,5715,4385,5715,4378,5727,4371,5738,4363,5738,4350,5740,4315,5740,4297,5741,4282,5775,4263,5808,4243,5808,4225,5808,4212,5803,4202,L,5801,4189,Q,5803,4179,5810,4168,5814,4152,5833,4134,5852,4117,5856,4107,5870,4073,5876,4065,5885,4052,5922,4030,5956,4010,5963,4010,L,5963,4005,5958,4006,Q,5955,4005,5953,4002,5949,3988,5963,3984,5982,3978,5986,3970,L,5988,3915,Q,5991,3909,6018,3875,6022,3870,6026,3851,6029,3837,6051,3822,6046,3813,6046,3807,6046,3796,6053,3773,6061,3751,6061,3741,6061,3729,6055,3725,6048,3720,6048,3710,6048,3694,6060,3664,6071,3634,6081,3625,6091,3614,6089,3583,6088,3551,6093,3545,6104,3534,6102,3495,6100,3455,6103,3450,6110,3447,6127,3418,6133,3407,6137,3400,L,6136,3400,6138,3398,Q,6138,3399,6137,3400,L,6146,3400,6146,3360,6151,3360,Q,6136,3353,6135,3347,6133,3343,6133,3311,6133,3310,6138,3275,L,6118,3275,Q,6118,3275,6117,3276,6111,3281,6097,3283,6081,3287,6077,3291,6078,3306,6069,3309,6054,3317,6045,3317,6043,3316,6042,3316,6043,3303,6033,3303,6027,3303,6027,3315,L,6018,3315,Q,5999,3302,5987,3304,5990,3289,5977,3289,5971,3289,5966,3301,5961,3312,5959,3312,L,5942,3311,Q,5943,3317,5922,3327,5899,3336,5899,3351,5899,3362,5909,3365,5919,3368,5919,3385,5919,3402,5890,3402,5868,3396,5858,3396,L,5854,3396,Q,5853,3399,5853,3406,5827,3396,5833,3435,5820,3442,5816,3442,5809,3442,5801,3430,5793,3417,5796,3409,5801,3397,5786,3392,5769,3386,5769,3381,5771,3381,5771,3379,L,5742,3366,5732,3357,Q,5726,3352,5718,3352,5701,3352,5706,3363,5692,3369,5686,3369,5674,3369,5670,3354,5666,3339,5644,3339,5644,3339,5617,3346,5596,3354,5584,3354,5568,3354,5566,3353,5544,3346,5535,3343,5535,3353,5528,3355,5522,3357,5518,3359,Q,5517,3360,5515,3361,Z,M,5502,4446,Q,5521,4449,5522,4464,5496,4466,5490,4470,5482,4475,5484,4490,L,5484,4504,5492,4504,Q,5491,4510,5486,4514,5481,4517,5478,4516,L,5478,4554,Q,5468,4556,5461,4556,5449,4557,5449,4549,5453,4542,5453,4539,5453,4535,5445,4534,5437,4531,5436,4527,L,5430,4507,Q,5430,4467,5434,4463,5468,4432,5473,4425,Q,5486,4422,5502,4446,Z]],label:"New South Wales",shortLabel:"NSW",labelPosition:[501.6,391.7],labelAlignment:[CEN,MID]},VIC:{outlines:[[M,4664,4447,Q,4656,4439,4624,4437,4624,4416,4623,4407,L,4623,4379,4627,4379,Q,4604,4360,4581,4353,4568,4352,4563,4350,4553,4341,4546,4336,L,4540,4336,Q,4539,4345,4543,4359,4543,4370,4526,4370,4514,4370,4511,4358,4506,4343,4504,4341,4492,4332,4488,4304,4484,4287,4455,4269,4427,4255,4427,4255,4417,4255,4415,4265,4397,4254,4389,4254,4376,4254,4375,4257,4373,4266,4360,4276,4358,4268,4348,4266,4333,4263,4332,4263,4306,4247,4296,4244,L,4281,4244,4281,4906,4285,4907,Q,4291,4912,4323,4943,4354,4972,4361,4972,4373,4972,4383,4967,4379,4967,4373,4955,L,4373,4940,4410,4940,Q,4418,4948,4430,4970,L,4475,4970,Q,4474,4947,4484,4947,4499,4947,4520,4975,4542,5003,4560,5005,4611,5011,4625,5037,L,4645,5037,Q,4646,5036,4647,5036,4697,5002,4718,4987,4757,4961,4790,4949,4820,4939,4828,4932,4822,4924,4808,4924,4793,4926,4788,4925,L,4788,4907,Q,4798,4912,4824,4893,4849,4875,4855,4862,4885,4870,4885,4914,4885,4927,4883,4935,4882,4943,4878,4945,4859,4953,4835,4970,L,4835,4975,Q,4863,4975,4873,4977,4871,4967,4886,4965,4887,4982,4905,4982,L,4905,4982,Q,4903,4970,4900,4962,L,4900,4940,Q,4912,4940,4922,4935,4935,4935,4938,4937,4940,4940,4940,4952,4940,4971,4915,4975,4916,4976,4916,4977,4925,4991,4968,4997,4980,4999,4995,5024,5010,5047,5017,5047,5025,5047,5038,5035,5038,5036,5039,5037,5039,5038,5039,5038,5051,5073,5065,5087,L,5090,5087,Q,5093,5087,5093,5081,5080,5064,5080,5037,L,5050,5037,5048,5034,Q,5054,5012,5073,5011,5085,5011,5108,5015,5121,5015,5175,4982,5195,4970,5217,4946,5238,4923,5253,4915,5286,4897,5320,4875,5343,4864,5373,4867,5416,4872,5516,4870,5537,4870,5555,4849,5565,4838,5576,4820,5574,4820,5574,4818,5569,4816,5562,4813,5554,4810,5544,4794,5539,4785,5517,4782,5508,4781,5487,4767,5458,4748,5457,4747,5417,4725,5385,4714,5352,4706,5342,4699,5338,4667,5335,4660,5335,4646,5326,4632,5320,4599,5319,4595,5305,4585,5296,4576,5291,4564,5287,4562,5283,4559,5268,4559,5259,4559,5258,4565,5258,4570,5251,4570,5240,4564,5235,4564,L,5223,4565,Q,5228,4580,5217,4580,5207,4572,5197,4572,5187,4572,5188,4581,5189,4590,5179,4590,5156,4590,5139,4587,5123,4583,5119,4573,5115,4564,5097,4564,5085,4564,5079,4572,5072,4579,5048,4579,5021,4579,5018,4576,5012,4569,4981,4564,4982,4555,4975,4550,4959,4541,4959,4540,L,4939,4539,Q,4911,4542,4885,4542,4872,4543,4870,4560,4869,4569,4869,4587,L,4846,4589,Q,4830,4589,4827,4587,4824,4574,4812,4572,4794,4568,4789,4553,4784,4537,4779,4535,4770,4532,4742,4510,4719,4492,4705,4494,4710,4480,4693,4472,4674,4466,4672,4464,Q,4669,4452,4664,4447,Z]],label:"Victoria",shortLabel:"VIC",labelPosition:[462.8,466.5],labelAlignment:[CEN,MID]},TAS:{outlines:[[M,4705,5197,Q,4705,5211,4704,5239,4704,5242,4707,5247,L,4705,5247,Q,4711,5255,4721,5255,4730,5255,4738,5240,4746,5226,4746,5216,4743,5190,4744,5180,4746,5165,4738,5164,4726,5164,4720,5163,4719,5171,4713,5175,4704,5168,4704,5180,Q,4704,5186,4705,5197,Z],[M,5262,5360,Q,5262,5364,5257,5375,5255,5379,5254,5386,5252,5392,5241,5392,5223,5392,5209,5397,5186,5396,5173,5396,5150,5396,5151,5412,5124,5414,5115,5419,5106,5424,5093,5424,5082,5418,5046,5415,5019,5415,5004,5400,5002,5398,4964,5384,4928,5371,4913,5352,L,4913,5354,Q,4913,5362,4901,5362,4896,5361,4894,5361,4866,5351,4866,5339,L,4866,5338,Q,4866,5332,4869,5330,4872,5329,4872,5321,4872,5310,4865,5304,4857,5301,4857,5300,L,4849,5300,4849,5316,4842,5316,4842,5328,Q,4847,5336,4855,5345,4850,5350,4848,5350,4846,5350,4842,5345,4839,5340,4833,5339,4833,5371,4814,5393,4814,5394,4824,5404,4825,5405,4827,5406,L,4827,5449,Q,4831,5454,4848,5484,4848,5484,4848,5484,4853,5498,4872,5515,4894,5537,4902,5549,4910,5563,4942,5610,4949,5620,4956,5631,4951,5635,4948,5635,4939,5635,4928,5620,4913,5601,4902,5595,L,4902,5626,Q,4922,5663,4943,5710,4958,5725,4978,5732,4980,5738,4987,5764,4996,5786,5013,5780,5016,5802,5030,5802,L,5030,5815,Q,5039,5816,5047,5815,5052,5817,5058,5830,L,5078,5830,Q,5071,5821,5068,5817,L,5065,5815,Q,5079,5812,5098,5821,5120,5830,5127,5830,5148,5830,5160,5807,5170,5790,5170,5774,5158,5763,5158,5752,L,5173,5752,5208,5787,Q,5208,5790,5200,5790,5202,5796,5209,5798,5214,5800,5213,5810,5220,5812,5225,5808,5230,5804,5230,5799,5230,5780,5220,5769,5210,5757,5210,5735,5210,5725,5219,5723,5228,5722,5228,5716,5228,5712,5223,5707,5237,5697,5247,5697,5249,5697,5252,5698,5252,5699,5254,5701,5256,5703,5260,5708,5265,5712,5273,5712,5280,5713,5289,5712,5291,5713,5293,5716,5294,5718,5294,5722,5294,5730,5283,5730,5282,5730,5280,5730,5277,5730,5276,5733,5275,5734,5275,5734,L,5262,5734,5262,5740,Q,5270,5737,5279,5751,5286,5763,5286,5769,5311,5772,5318,5761,5323,5753,5323,5724,5323,5710,5296,5712,5295,5709,5295,5705,5295,5694,5301,5685,5307,5676,5312,5676,5323,5676,5322,5686,5326,5686,5343,5671,5340,5668,5340,5664,L,5340,5658,Q,5339,5656,5333,5654,5327,5651,5323,5652,L,5322,5645,5323,5627,Q,5323,5621,5327,5612,5329,5604,5329,5592,L,5330,5592,Q,5338,5589,5338,5589,5335,5577,5345,5577,5349,5577,5351,5578,5353,5579,5354,5581,5354,5584,5355,5602,5356,5608,5354,5615,5354,5619,5361,5619,5372,5619,5373,5610,5375,5596,5375,5591,5375,5584,5369,5580,5362,5575,5362,5568,5364,5543,5364,5532,5368,5513,5368,5502,L,5369,5497,Q,5369,5488,5364,5484,5358,5479,5358,5464,5358,5457,5365,5456,5372,5455,5372,5449,5372,5443,5365,5443,5358,5434,5358,5421,5358,5414,5362,5410,5365,5406,5365,5402,5360,5389,5358,5385,5357,5380,5351,5380,5344,5379,5343,5378,5343,5377,5340,5359,5338,5352,5314,5352,5302,5352,5302,5360,L,5302,5375,5281,5375,Q,5279,5373,5262,5360,Z],[M,5288,5200,Q,5283,5202,5283,5207,5283,5214,5303,5226,5304,5234,5310,5241,5317,5248,5319,5261,5320,5261,5321,5262,5331,5269,5331,5276,5331,5283,5314,5296,5314,5305,5326,5314,5327,5315,5332,5323,5335,5329,5341,5329,5349,5329,5358,5314,5380,5308,5380,5300,5380,5281,5358,5273,L,5358,5270,Q,5368,5267,5368,5259,5364,5252,5365,5239,5366,5219,5355,5219,5345,5218,5337,5209,5327,5193,5317,5180,5308,5183,5298,5183,5295,5183,5294,5187,5292,5190,5293,5191,Q,5293,5197,5288,5200,Z]],label:"Tasmania",shortLabel:"TAS",labelPosition:[508.2,558.6],labelAlignment:[CEN,MID]},SA:{outlines:[[M,3835,4557,Q,3846,4557,3855,4540,3840,4517,3833,4517,3824,4525,3811,4525,3793,4520,3785,4520,L,3785,4507,Q,3773,4507,3768,4502,L,3720,4502,3720,4512,Q,3699,4512,3668,4519,3628,4527,3628,4539,3628,4553,3640,4550,3640,4570,3643,4575,L,3693,4575,Q,3703,4572,3720,4572,L,3718,4570,3718,4565,3743,4565,Q,3762,4580,3769,4580,3779,4580,3792,4564,3804,4547,3810,4547,Q,3822,4547,3835,4557,Z],[M,3808,4002,Q,3823,4034,3843,4090,3843,4096,3840,4102,L,3818,4102,Q,3818,4100,3813,4100,3813,4105,3810,4120,3810,4123,3830,4162,L,3830,4170,Q,3820,4168,3802,4188,3793,4200,3780,4217,3780,4225,3768,4252,3757,4275,3763,4302,3748,4300,3748,4312,3748,4316,3765,4322,3765,4383,3753,4387,3743,4390,3683,4390,L,3683,4395,Q,3688,4400,3688,4403,3688,4405,3665,4437,3665,4442,3673,4450,L,3720,4450,3720,4432,Q,3745,4432,3763,4427,3782,4422,3795,4422,3809,4398,3816,4361,3822,4318,3825,4297,L,3843,4297,Q,3839,4289,3853,4270,3865,4295,3890,4335,3910,4368,3911,4370,3918,4384,3918,4403,3918,4422,3891,4463,3871,4493,3857,4508,3859,4510,3862,4510,L,3863,4510,Q,3904,4510,3910,4512,3921,4510,3928,4502,3937,4492,3948,4492,3976,4492,4045,4562,4120,4639,4120,4694,4120,4712,4107,4719,4093,4726,4093,4735,4093,4741,4106,4770,4123,4804,4138,4812,4168,4829,4195,4890,4199,4899,4232,4900,4264,4900,4274,4906,4274,4907,4275,4907,L,4281,4907,4281,2918,2509,2918,2509,3863,Q,2536,3857,2580,3851,2674,3837,2680,3832,2700,3834,2698,3845,L,2788,3845,Q,2792,3835,2808,3826,2823,3817,2833,3817,2840,3817,2855,3833,2870,3848,2880,3850,2902,3851,2930,3867,2938,3872,2954,3894,2967,3911,2981,3918,2983,3919,2985,3920,3001,3918,3019,3907,3040,3895,3052,3895,3133,3950,3149,3950,3154,3950,3168,3940,L,3163,3935,3163,3932,3200,3932,Q,3200,3943,3217,3961,3233,3979,3233,4e3,L,3248,4e3,Q,3255,3982,3264,3982,3273,3982,3283,3990,3293,3997,3293,4005,3293,4013,3265,4053,3265,4064,3275,4082,3286,4102,3296,4102,L,3345,4095,Q,3354,4095,3365,4122,3375,4146,3375,4155,3375,4160,3370,4175,L,3370,4192,Q,3391,4191,3403,4208,3420,4232,3428,4240,3429,4241,3431,4242,3431,4249,3430,4259,3430,4273,3435,4287,L,3450,4287,Q,3450,4290,3458,4311,3458,4317,3455,4322,L,3440,4322,Q,3441,4336,3455,4340,3455,4349,3469,4372,3482,4395,3486,4395,L,3510,4387,Q,3512,4387,3527,4405,3542,4422,3551,4422,3558,4422,3575,4420,L,3553,4397,Q,3545,4390,3546,4379,3548,4368,3548,4363,3530,4348,3530,4343,3530,4333,3540,4324,3550,4315,3558,4317,3558,4305,3565,4300,L,3565,4292,3572,4292,Q,3599,4256,3623,4235,3656,4206,3705,4187,3730,4178,3749,4127,3768,4081,3798,4075,3793,4060,3793,4050,3803,4005,3803,4002,Z]],label:"South Australia",shortLabel:"SA",labelPosition:[339.5,351.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"australia2",type:"maps"}}})});