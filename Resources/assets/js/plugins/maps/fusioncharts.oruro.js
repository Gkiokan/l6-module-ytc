(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=352)})({352:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(353);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},353:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Oruro.1.04-14-2017 12:49:00
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Oruro",revision:1,standaloneInit:true,baseWidth:600,baseHeight:523,baseScaleFactor:10,entities:{"BO.OR.CR":{outlines:[[M,2610,1467,Q,2608,1471,2567,1457,2524,1443,2497,1426,2483,1418,2472,1408,2461,1396,2459,1386,2454,1363,2454,1337,L,2456,1295,Q,2456,1259,2440,1254,2410,1253,2381,1247,2380,1247,2379,1248,2378,1248,2378,1249,2364,1256,2350,1276,2329,1301,2323,1322,2319,1334,2313,1366,2305,1392,2276,1394,2223,1398,2210,1400,2184,1403,2152,1410,2138,1412,2118,1420,2098,1429,2091,1432,2074,1438,2065,1445,2062,1447,2055,1454,2048,1460,2047,1460,2046,1464,2043,1472,2036,1488,2036,1498,2036,1523,2052,1542,2069,1561,2069,1578,2069,1606,2046,1640,2025,1671,2024,1692,2024,1694,2024,1696,2024,1703,2024,1716,2024,1743,2029,1755,2033,1764,2047,1775,2097,1814,2133,1861,2153,1888,2196,1944,2228,1991,2228,2023,2228,2044,2219,2072,2209,2101,2198,2112,2148,2160,2118,2174,2117,2174,2116,2174,2115,2175,2114,2176,2097,2189,2080,2206,2052,2234,2041,2244,2033,2251,2004,2273,1979,2294,1979,2311,1979,2328,2008,2376,2027,2408,2041,2426,L,2041,2430,Q,2050,2431,2066,2445,2081,2459,2086,2468,2095,2490,2117,2536,2129,2565,2138,2595,2154,2642,2154,2667,2154,2689,2144,2711,2134,2734,2134,2755,2134,2808,2229,2918,2278,2976,2350,3053,2352,3043,2372,3032,2390,3020,2405,3017,2423,3013,2443,3012,2459,3010,2482,2992,2487,2988,2509,2984,2531,2980,2544,2972,2556,2964,2572,2951,2589,2936,2601,2928,2648,2891,2667,2877,2698,2854,2723,2846,2740,2840,2754,2822,2762,2811,2774,2786,2787,2760,2797,2752,2806,2745,2824,2745,2859,2745,2888,2758,2952,2789,2963,2794,L,2991,2794,Q,2993,2777,3003,2771,3009,2767,3024,2767,3031,2767,3046,2758,3054,2753,3067,2743,3112,2707,3130,2672,3131,2670,3131,2668,3166,2590,3178,2562,3185,2547,3185,2546,3230,2439,3230,2421,3230,2412,3217,2389,3215,2384,3200,2362,3190,2349,3184,2332,3180,2322,3173,2297,3170,2284,3149,2230,3135,2194,3135,2166,3135,2153,3144,2142,3151,2133,3165,2124,L,3181,2112,Q,3192,2104,3198,2094,3203,2087,3206,2071,3207,2055,3208,2053,3209,2048,3216,2035,3223,2022,3225,2018,3227,2011,3227,2e3,3227,1998,3227,1978,3227,1949,3226,1944,3222,1931,3203,1930,L,3203,1930,Q,3203,1924,3173,1937,3148,1949,3141,1954,3128,1966,3119,1973,3105,1984,3095,1984,3086,1984,3085,1983,3085,1982,3081,1968,3080,1963,3077,1959,3072,1952,3071,1950,3051,1916,3050,1901,3044,1838,3034,1784,3027,1745,3022,1727,3019,1714,3005,1712,3001,1711,2981,1713,2957,1715,2940,1690,2926,1670,2926,1649,2926,1627,2956,1604,2983,1584,2984,1557,2984,1556,2984,1555,2985,1546,2993,1536,2961,1538,2939,1521,2926,1511,2910,1485,2892,1456,2882,1447,2865,1430,2840,1430,2828,1430,2808,1442,2788,1453,2776,1453,2755,1453,2738,1441,2720,1428,2707,1428,2684,1428,2654,1447,2625,1465,2610,1466,Z]],label:"Carangas",shortLabel:"CR",labelPosition:[260.4,215],labelAlignment:[CEN,MID]},"BO.OR.CE":{outlines:[[M,4022,252,Q,4e3,242,3967,212,3896,146,3869,124,3814,79,3761,51,3760,50,3759,50,3744,49,3736,49,3721,50,3714,58,3709,62,3694,81,3681,97,3675,101,3646,124,3628,137,3613,148,3608,158,3605,165,3603,188,3603,192,3598,204,3593,217,3590,219,3579,226,3573,228,3566,231,3557,232,3537,234,3527,238,3522,240,3499,251,3491,254,3474,269,3459,282,3455,286,3452,290,3438,312,3431,323,3423,327,3421,328,3420,328,3419,329,3419,329,3411,339,3398,361,3390,377,3381,377,3375,377,3367,376,3369,411,3371,419,3376,439,3395,451,3409,460,3438,477,3462,492,3475,504,3486,514,3506,543,3520,565,3541,573,3577,586,3587,596,3602,609,3602,636,3602,661,3586,669,3565,674,3554,678,3541,684,3518,700,3494,718,3487,722,3478,728,3452,730,3429,731,3423,739,3416,748,3414,780,3412,788,3404,791,3397,793,3393,795,L,3383,795,Q,3374,800,3331,800,3297,800,3289,797,3271,791,3248,760,3242,752,3229,753,3211,753,3207,752,3197,748,3194,736,3193,732,3192,708,3192,690,3193,653,3194,621,3192,606,3192,599,3185,596,3178,593,3178,589,3177,584,3177,577,3178,570,3178,566,L,3178,521,Q,3171,529,3158,535,3134,543,3125,548,3097,564,3063,595,3021,635,3003,649,2982,664,2941,692,2904,716,2878,738,2877,739,2877,739,2837,762,2803,785,2735,831,2735,849,2735,851,2745,873,2750,884,2755,896,2759,905,2767,923,2775,943,2775,945,2775,953,2771,982,2767,1013,2764,1020,2760,1027,2757,1040,2754,1056,2753,1059,2752,1062,2739,1074,2727,1085,2728,1093,2740,1093,2746,1094,2745,1098,2744,1101,2752,1106,2769,1105,2788,1104,2795,1108,2806,1115,2824,1131,2842,1147,2851,1153,2857,1157,2908,1175,2963,1194,2978,1194,3001,1194,3014,1185,3018,1181,3021,1176,3039,1145,3059,1131,3071,1123,3107,1110,3139,1098,3154,1085,3170,1070,3209,1054,3242,1042,3258,1017,3264,1008,3298,977,3335,943,3345,943,3360,943,3396,1022,3405,1043,3436,1117,3445,1135,3448,1159,3450,1167,3452,1184,3455,1199,3462,1208,3473,1224,3493,1249,3508,1270,3518,1290,3518,1291,3519,1292,3525,1347,3557,1406,3577,1443,3624,1510,3673,1580,3692,1614,3724,1672,3734,1725,3734,1726,3734,1728,3747,1834,3757,1886,3759,1904,3759,1989,3759,1990,3759,2018,3758,2047,3759,2059,3760,2074,3757,2096,3755,2107,3754,2123,3754,2125,3754,2127,3753,2156,3742,2192,3740,2197,3720,2250,3709,2279,3679,2336,3659,2372,3659,2401,3659,2425,3667,2438,3670,2445,3680,2461,3705,2452,3726,2449,3747,2446,3749,2451,L,3749,2452,Q,3783,2452,3820,2460,3858,2469,3899,2469,3954,2469,4007,2441,4060,2412,4071,2375,4090,2312,4099,2270,4110,2226,4111,2219,4116,2194,4114,2163,4114,2162,4115,2161,4118,2146,4118,2126,4117,2101,4118,2087,L,4118,1999,Q,4119,1885,4118,1841,4118,1841,4117,1840,4116,1836,4105,1828,4092,1819,4089,1816,4072,1800,4066,1794,4061,1788,4041,1768,4027,1754,4019,1741,4007,1732,4007,1698,4007,1680,4023,1653,4033,1637,4055,1602,4066,1580,4091,1563,4118,1546,4143,1546,4169,1546,4239,1561,4309,1575,4351,1575,4369,1575,4390,1553,4410,1532,4416,1509,4419,1498,4421,1482,4424,1467,4428,1454,4429,1428,4430,1427,4432,1413,4442,1413,4444,1413,4488,1423,4542,1432,4597,1432,4613,1432,4621,1430,4650,1423,4658,1421,4668,1419,4691,1417,4710,1415,4717,1413,4718,1413,4719,1413,4736,1411,4772,1400,4810,1387,4826,1387,4838,1387,4840,1388,4842,1388,4853,1391,4854,1390,4855,1390,4858,1387,4866,1386,4875,1385,4885,1386,L,4885,1379,Q,4831,1272,4809,1234,4809,1233,4808,1232,4808,1231,4807,1229,4801,1209,4772,1119,4750,1047,4725,1015,4700,980,4688,965,4667,939,4646,922,4637,914,4627,896,4615,874,4609,867,4579,834,4565,817,4558,804,4542,787,4528,770,4521,758,4512,739,4493,727,4466,711,4462,708,L,4438,683,Q,4418,664,4403,654,4358,625,4340,613,4323,602,4280,566,4268,555,4247,547,4223,538,4214,533,4190,518,4176,472,4163,425,4153,412,4152,411,4151,410,4144,400,4111,354,4085,317,4066,299,4062,295,4056,286,L,4048,271,Q,4043,262,4022,252,Z]],label:"Cercado",shortLabel:"CE",labelPosition:[397.9,106.3],labelAlignment:[CEN,MID]},"BO.OR.AV":{outlines:[[M,5054,4114,Q,5037,4114,5028,4114,5018,4114,4990,4116,4962,4119,4954,4119,4946,4119,4937,4115,4929,4112,4912,4101,4903,4096,4890,4093,4877,4091,4868,4093,4847,4098,4823,4088,4779,4069,4769,4066,4763,4064,4747,4057,4730,4048,4720,4044,4704,4038,4678,4024,4674,4022,4659,4011,4645,3999,4641,3998,4624,3992,4616,3989,4603,3983,4592,3972,4574,3954,4561,3933,4543,3907,4543,3887,4542,3855,4539,3842,4535,3817,4522,3800,4515,3792,4504,3786,4489,3779,4480,3774,4477,3772,4463,3763,4449,3754,4443,3751,4427,3741,4407,3721,4387,3700,4378,3690,4362,3679,4302,3635,4264,3608,4239,3583,4240,3590,4240,3596,4240,3612,4201,3734,4174,3815,4172,3855,4172,3858,4172,3860,L,4169,3860,Q,4166,3868,4160,3887,4152,3913,4152,3919,4152,3952,4177,3971,4203,3990,4203,4031,4203,4109,4177,4174,4171,4190,4160,4214,4152,4234,4152,4246,4152,4260,4165,4287,4172,4302,4185,4330,4193,4350,4200,4378,4201,4383,4209,4420,4217,4456,4217,4506,L,4218,4589,4218,4589,Q,4240,4588,4245,4587,4279,4578,4302,4571,4324,4564,4337,4564,4349,4564,4365,4554,4383,4549,4400,4543,4417,4536,4437,4532,4472,4523,4493,4512,4539,4489,4555,4479,4570,4468,4595,4446,4619,4424,4622,4422,4626,4421,4647,4403,4667,4384,4683,4381,4705,4377,4711,4374,4731,4365,4766,4344,4797,4326,4829,4318,4860,4309,4899,4305,4937,4301,4959,4293,4981,4285,4987,4282,5005,4274,5016,4265,5039,4246,5042,4244,5052,4238,5061,4237,L,5062,4235,Q,5068,4221,5089,4204,5105,4191,5105,4171,5105,4159,5096,4141,5087,4122,5080,4119,Q,5069,4114,5054,4114,Z],[M,4953,2735,Q,4950,2732,4940,2718,4928,2703,4927,2702,4922,2697,4913,2690,4901,2681,4897,2677,4894,2675,4885,2661,4877,2647,4872,2644,4854,2633,4853,2632,4851,2630,4851,2619,4851,2609,4848,2606,4838,2596,4821,2585,4795,2610,4780,2627,4751,2657,4751,2680,4751,2701,4762,2732,4773,2763,4773,2819,4773,2864,4770,2878,4763,2903,4737,2938,4719,2963,4697,2981,4667,3006,4645,3006,4588,3006,4575,2961,4570,2944,4569,2913,4568,2874,4566,2853,4564,2833,4563,2827,4560,2809,4553,2801,4549,2795,4531,2793,4509,2791,4498,2788,4407,2772,4379,2772,4370,2772,4358,2774,4341,2776,4335,2780,4328,2784,4319,2795,4310,2806,4304,2809,4285,2822,4257,2836,4246,2842,4214,2857,4194,2867,4167,2878,4129,2894,4117,2895,4096,2897,4073,2904,4045,2912,4033,2925,4045,2940,4055,2961,4058,2966,4077,3013,4090,3044,4101,3062,4128,3104,4148,3166,4160,3201,4183,3271,4180,3316,4191,3354,4194,3363,4197,3372,4202,3369,4213,3369,4215,3369,4230,3369,4231,3369,4327,3372,4425,3374,4465,3373,4466,3373,4466,3373,4467,3373,4467,3373,4468,3373,4468,3373,4469,3373,4469,3373,L,4470,3373,Q,4489,3372,4518,3363,4552,3353,4571,3353,4604,3353,4735,3356,4766,3356,4789,3341,4822,3320,4853,3311,4867,3307,4908,3307,4950,3308,4967,3304,4981,3301,5030,3297,5063,3294,5084,3282,5097,3275,5112,3259,5130,3241,5135,3226,5142,3207,5147,3197,5156,3179,5167,3179,5191,3179,5204,3206,5211,3220,5219,3244,5231,3264,5245,3283,5253,3297,5262,3322,5264,3327,5270,3361,5274,3386,5286,3397,5288,3399,5314,3421,5341,3445,5341,3455,5341,3480,5252,3551,5262,3584,5297,3630,5327,3670,5355,3694,5426,3752,5500,3774,5509,3777,5534,3777,5558,3778,5574,3783,5587,3788,5608,3799,5620,3806,5641,3817,5665,3830,5713,3855,5751,3877,5773,3902,5778,3904,5783,3907,5790,3912,5796,3912,5804,3912,5835,3893,5865,3874,5871,3866,5881,3854,5891,3833,5908,3793,5910,3790,5918,3767,5923,3752,5933,3723,5945,3710,5954,3699,5955,3666,5955,3632,5956,3619,5956,3618,5956,3617,5952,3586,5919,3554,5917,3552,5853,3500,5808,3461,5784,3444,5742,3415,5697,3410,5652,3405,5625,3385,5598,3364,5586,3335,5575,3306,5570,3296,5566,3286,5564,3277,5562,3268,5563,3258,5563,3248,5558,3224,5553,3201,5551,3162,5545,3150,5539,3093,5531,3013,5522,2972,5486,2808,5374,2808,5350,2808,5328,2821,5311,2830,5289,2852,5267,2870,5256,2881,5243,2898,5221,2902,5216,2904,5211,2905,5205,2904,5199,2903,5181,2899,5165,2891,5123,2873,5075,2837,Q,5057,2824,4953,2735,Z]],label:"Eduardo Avaroa",shortLabel:"AV",labelPosition:[494.3,302.1],labelAlignment:[CEN,MID]},"BO.OR.LC":{outlines:[[M,3634,3574,Q,3612,3567,3556,3547,3485,3521,3458,3517,3444,3516,3361,3516,3230,3516,3136,3546,3076,3566,3070,3567,3033,3576,2992,3576,2965,3576,2962,3563,2959,3550,2939,3550,2920,3550,2895,3580,2870,3609,2841,3609,2814,3609,2813,3605,2808,3593,2782,3580,2761,3568,2749,3562,2728,3551,2720,3550,2680,3543,2655,3538,2620,3530,2578,3517,2494,3504,2463,3506,2464,3523,2440,3529,2415,3536,2412,3553,2410,3564,2408,3585,2406,3602,2401,3615,2400,3617,2400,3620,2392,3627,2378,3637,2360,3649,2347,3654,2339,3658,2320,3670,2300,3682,2296,3685,2285,3690,2274,3706,2273,3709,2259,3734,2250,3751,2255,3798,2255,3850,2275,4060,2275,4061,2275,4062,2277,4098,2282,4148,2285,4173,2285,4213,2285,4244,2283,4270,2281,4297,2281,4337,2281,4384,2279,4399,2275,4427,2262,4445,2261,4447,2260,4448,2237,4467,2199,4484,2156,4502,2138,4511,2105,4528,2078,4553,2061,4568,2028,4601,2009,4618,1989,4655,1962,4702,1954,4713,1943,4729,1922,4769,1911,4790,1894,4824,1900,4824,1904,4826,1913,4831,1928,4844,1942,4857,1953,4862,1977,4875,2015,4890,2048,4902,2079,4909,2114,4918,2199,4938,2277,4958,2326,4978,2388,5004,2449,5026,2490,5041,2561,5064,2581,5070,2616,5076,2620,5077,2629,5077,2638,5077,2641,5078,2649,5081,2656,5085,2665,5091,2667,5092,2690,5101,2725,5112,2772,5127,2777,5129,2788,5133,2806,5140,2821,5145,2834,5146,2847,5146,2863,5147,2874,5148,2888,5153,2939,5172,2999,5191,3031,5190,3071,5169,3121,5141,3149,5126,3176,5110,3190,5102,3216,5088,3233,5080,3243,5076,3281,5062,3312,5050,3324,5044,3384,5013,3484,4966,3587,4917,3635,4893,3636,4892,3638,4892,3677,4874,3767,4834,3852,4800,3917,4765,3941,4753,3951,4748,3968,4739,3978,4730,3995,4716,4009,4711,4033,4703,4038,4699,4056,4690,4095,4666,4138,4641,4152,4633,4157,4628,4170,4616,4185,4601,4194,4595,4201,4590,4217,4589,L,4217,4506,Q,4216,4456,4209,4420,4201,4383,4199,4378,4192,4350,4184,4330,4171,4302,4164,4287,4152,4260,4152,4246,4152,4234,4159,4214,4171,4190,4177,4174,4202,4109,4202,4031,4202,3990,4177,3971,4152,3952,4152,3919,4152,3913,4160,3887,4166,3868,4169,3860,4170,3857,4171,3855,4173,3815,4201,3734,4240,3612,4240,3596,4240,3590,4238,3583,4235,3570,4225,3554,4223,3552,4222,3550,4199,3546,4164,3543,4130,3539,4074,3536,4019,3533,3969,3542,3920,3550,3909,3553,3892,3558,3884,3560,3826,3574,3807,3576,3802,3577,3793,3577,3783,3576,3745,3576,Q,3706,3576,3634,3574,Z]],label:"Ladislao Cabrera",shortLabel:"LC",labelPosition:[306.7,434.8],labelAlignment:[CEN,MID]},"BO.OR.LT":{outlines:[[M,1884,2389,Q,1865,2383,1840,2383,1820,2383,1790,2398,1748,2419,1733,2424,1715,2430,1674,2432,1644,2432,1623,2445,1602,2456,1569,2477,1542,2491,1518,2491,1511,2491,1491,2499,1471,2509,1466,2511,1430,2526,1415,2536,1409,2542,1390,2557,1388,2559,1369,2586,1361,2599,1351,2617,1342,2623,1333,2626,1334,2635,1335,2648,1336,2660,1333,2669,1333,2677,1328,2710,1327,2722,1320,2756,1316,2777,1316,2796,1316,2805,1317,2810,L,1308,2865,Q,1307,2873,1302,2892,1297,2908,1297,2918,1297,2936,1304,2951,1310,2964,1324,2982,1330,2988,1350,3006,1363,3017,1370,3033,1373,3041,1376,3062,1378,3079,1388,3093,1393,3100,1402,3106,1414,3114,1418,3118,1421,3120,1430,3130,1435,3136,1440,3138,1459,3156,1501,3181,1542,3205,1562,3224,1597,3257,1624,3274,1632,3279,1687,3308,1702,3316,1723,3325,1741,3332,1753,3339,1773,3352,1773,3364,1772,3373,1773,3404,1774,3418,1784,3427,1791,3432,1815,3443,1837,3453,1866,3456,1890,3458,1893,3455,1892,3456,1892,3455,1890,3455,1889,3455,1891,3455,1893,3455,1926,3455,1933,3454,1950,3452,1963,3444,2003,3418,2030,3413,L,2304,3413,Q,2326,3413,2353,3422,2378,3431,2393,3440,2412,3453,2429,3460,2442,3465,2465,3472,2465,3470,2466,3468,2470,3452,2483,3443,2504,3432,2521,3414,2538,3396,2537,3387,2536,3378,2518,3337,2499,3295,2488,3276,2475,3253,2456,3227,2435,3199,2423,3181,2422,3179,2421,3178,2405,3166,2379,3122,2350,3074,2350,3054,2350,3053,2350,3053,2278,2976,2229,2918,2134,2808,2134,2755,2134,2734,2144,2711,2154,2689,2154,2667,2154,2642,2138,2595,2129,2565,2117,2536,2095,2490,2086,2468,2081,2459,2066,2445,2050,2431,2041,2430,L,2041,2432,2023,2433,Q,2013,2433,1976,2427,1937,2420,1932,2417,Q,1904,2397,1884,2389,Z]],label:"Litoral",shortLabel:"LT",labelPosition:[180.9,292.7],labelAlignment:[CEN,MID]},"BO.OR.NC":{outlines:[[M,2726,1112,Q,2717,1112,2705,1108,2693,1104,2686,1100,2685,1100,2661,1091,2644,1085,2638,1077,2633,1070,2617,1062,2594,1051,2594,1051,2590,1049,2579,1034,2569,1021,2565,1017,2564,1016,2563,1015,2552,1006,2523,977,2497,952,2485,947,2481,944,2463,934,2454,928,2441,927,2427,926,2421,913,2412,895,2408,892,2387,875,2358,861,2315,838,2314,837,2300,829,2294,826,2282,821,2271,821,2267,821,2263,819,2252,837,2233,860,2218,878,2209,892,2209,892,2209,892,2208,893,2206,895,2197,905,2191,914,2175,933,2175,945,2175,968,2198,984,2225,1004,2233,1023,2237,1034,2249,1062,2259,1089,2258,1110,2256,1134,2276,1150,2291,1160,2330,1175,2357,1185,2368,1201,2380,1219,2378,1249,2378,1248,2379,1248,2380,1247,2381,1247,2410,1253,2440,1254,2456,1259,2456,1295,L,2454,1337,Q,2454,1363,2459,1386,2461,1396,2472,1408,2483,1418,2497,1426,2524,1443,2567,1457,2608,1471,2610,1467,2609,1466,2608,1466,2609,1466,2610,1466,2625,1465,2654,1447,2684,1428,2707,1428,2720,1428,2738,1441,2755,1453,2776,1453,2788,1453,2808,1442,2828,1430,2840,1430,2865,1430,2882,1447,2892,1456,2910,1485,2926,1511,2939,1521,2961,1538,2993,1536,3e3,1527,3013,1516,3043,1493,3043,1484,3043,1472,3027,1440,3012,1408,3012,1400,3012,1386,3020,1382,3034,1375,3042,1367,3049,1359,3060,1348,3069,1338,3069,1328,3069,1305,3060,1286,3054,1274,3038,1254,3024,1235,3019,1221,3014,1208,3014,1185,3001,1194,2978,1194,2963,1194,2908,1175,2857,1157,2851,1153,2842,1147,2824,1131,2806,1115,2795,1108,2788,1104,2769,1105,2752,1106,2744,1101,2742,1107,2739,1108,Q,2735,1112,2726,1112,Z]],label:"Nor Carangas",shortLabel:"NC",labelPosition:[262.2,125.8],labelAlignment:[CEN,MID]},"BO.OR.PD":{outlines:[[M,4717,1413,Q,4710,1415,4691,1417,4668,1419,4658,1421,4650,1423,4621,1430,4613,1432,4597,1432,4542,1432,4488,1423,4444,1413,4442,1413,4432,1413,4430,1427,4429,1428,4428,1454,4424,1467,4421,1482,4419,1498,4416,1509,4410,1532,4390,1553,4369,1575,4351,1575,4309,1575,4239,1561,4169,1546,4143,1546,4118,1546,4091,1563,4066,1580,4055,1602,4033,1637,4023,1653,4007,1680,4007,1698,4007,1732,4019,1741,4027,1754,4041,1768,4061,1788,4066,1794,4072,1800,4089,1816,4092,1819,4105,1828,4116,1836,4117,1840,4156,1817,4163,1815,4169,1814,4203,1814,4320,1814,4381,1853,4430,1885,4529,2011,4535,2021,4556,2047,4580,2076,4587,2087,4594,2098,4620,2126,4643,2149,4651,2166,4674,2219,4702,2261,4708,2271,4758,2337,4758,2334,4758,2332,4758,2313,4780,2284,4807,2245,4809,2242,4817,2225,4842,2201,4855,2188,4880,2165,4898,2148,4956,2097,5007,2051,5016,2030,5017,2030,5017,2029,5028,2002,5066,1966,5088,1945,5093,1937,5100,1926,5100,1908,5100,1887,5092,1882,5090,1880,5057,1875,5014,1867,4998,1862,4951,1848,4929,1843,4892,1833,4868,1833,4856,1833,4840,1850,4823,1866,4789,1866,L,4789,1866,Q,4788,1869,4780,1866,4764,1862,4754,1861,4748,1861,4743,1857,4740,1855,4733,1847,4721,1831,4700,1798,4687,1776,4677,1744,4666,1712,4666,1692,4666,1679,4670,1669,4677,1656,4681,1646,4682,1642,4683,1640,4690,1622,4698,1611,4704,1603,4722,1582,4741,1557,4745,1553,4760,1535,4770,1532,4810,1517,4850,1504,4870,1491,4870,1451,4870,1428,4869,1421,4868,1418,4860,1406,4852,1396,4852,1393,4852,1391,4853,1391,4842,1388,4840,1388,4838,1387,4826,1387,4810,1387,4772,1400,4736,1411,4719,1413,Q,4718,1413,4717,1413,Z]],label:"Pantaleón Dalence",shortLabel:"PD",labelPosition:[446.1,172.4],labelAlignment:[CEN,MID]},"BO.OR.PP":{outlines:[[M,4381,1853,Q,4320,1814,4203,1814,4169,1814,4163,1815,4156,1817,4117,1840,4118,1841,4118,1841,4119,1885,4118,1999,L,4118,2087,Q,4117,2101,4118,2126,4118,2146,4115,2161,4114,2162,4114,2163,4116,2194,4111,2219,4110,2226,4099,2270,4090,2312,4071,2375,4060,2412,4007,2441,3954,2469,3899,2469,3858,2469,3820,2460,3783,2452,3749,2452,3748,2452,3746,2452,3748,2452,3749,2451,3747,2446,3726,2449,3705,2452,3680,2461,3685,2469,3692,2479,3696,2488,3698,2500,3700,2515,3701,2520,3710,2548,3715,2561,3716,2562,3717,2563,3722,2583,3753,2604,3785,2626,3789,2641,3794,2661,3813,2691,3828,2716,3843,2734,3874,2770,3905,2814,3917,2832,3937,2853,3965,2882,3981,2887,L,3982,2887,Q,4011,2896,4033,2925,4045,2912,4072,2904,4095,2897,4117,2895,4128,2894,4167,2878,4194,2867,4213,2857,4245,2842,4256,2836,4284,2822,4304,2809,4310,2806,4319,2795,4327,2784,4334,2780,4340,2776,4357,2774,4370,2772,4379,2772,4407,2772,4497,2788,4509,2791,4530,2793,4548,2795,4553,2801,4559,2809,4563,2827,4564,2833,4566,2853,4567,2874,4568,2913,4570,2944,4575,2961,4587,3006,4644,3006,4666,3006,4696,2981,4719,2963,4737,2938,4763,2903,4769,2878,4772,2864,4772,2819,4772,2763,4761,2732,4750,2701,4750,2680,4750,2657,4779,2627,4795,2610,4820,2585,4819,2584,4819,2583,4817,2582,4814,2577,4811,2571,4809,2570,4796,2566,4796,2559,4795,2532,4795,2524,4793,2502,4790,2488,4791,2472,4775,2415,4760,2360,4758,2337,4708,2271,4702,2261,4674,2219,4651,2166,4643,2149,4620,2126,4594,2098,4587,2087,4580,2076,4556,2047,4535,2021,4529,2011,Q,4430,1885,4381,1853,Z]],label:"Poopó",shortLabel:"PP",labelPosition:[431.9,252.5],labelAlignment:[CEN,MID]},"BO.OR.MJ":{outlines:[[M,1102,3120,Q,1082,3117,1069,3107,1064,3103,1046,3084,1037,3073,1033,3070,1027,3066,1013,3066,1008,3066,995,3063,981,3060,976,3060,950,3060,906,3071,867,3081,840,3093,838,3093,813,3108,794,3120,780,3120,755,3122,741,3122,729,3122,722,3129,720,3132,716,3141,715,3142,715,3144,713,3152,713,3168,713,3195,722,3200,726,3202,769,3205,782,3205,806,3214,835,3226,835,3239,835,3257,809,3274,774,3297,764,3312,761,3316,733,3352,713,3377,706,3390,702,3398,673,3435,651,3462,651,3477,651,3502,647,3516,640,3534,621,3545,631,3549,637,3554,649,3563,664,3575,677,3585,692,3592,701,3597,720,3607,738,3616,754,3618,770,3620,780,3632,786,3640,796,3657,796,3658,797,3659,801,3671,819,3686,844,3708,847,3713,850,3717,861,3721,873,3725,878,3729,880,3731,883,3734,L,883,3725,Q,892,3700,895,3695,906,3679,927,3679,941,3678,962,3680,981,3680,1010,3672,1045,3662,1045,3615,1043,3587,1043,3572,1043,3546,1048,3528,1052,3514,1074,3505,1097,3495,1104,3479,1107,3460,1111,3445,1118,3415,1130,3401,1145,3384,1149,3361,1151,3335,1152,3323,1154,3294,1166,3282,1177,3271,1177,3248,1177,3232,1168,3203,1159,3175,1154,3168,1142,3149,1135,3140,Q,1121,3124,1102,3120,Z]],label:"Puerto de Mejillones",shortLabel:"MJ",labelPosition:[89.9,339.7],labelAlignment:[CEN,MID]},"BO.OR.AT":{outlines:[[M,1723,3325,Q,1702,3316,1687,3308,1632,3279,1624,3274,1597,3257,1562,3224,1542,3205,1501,3181,1459,3156,1440,3138,1435,3136,1430,3130,1421,3120,1418,3118,1414,3114,1402,3106,1393,3100,1388,3093,1378,3079,1376,3062,1373,3041,1370,3033,1363,3017,1350,3006,1330,2988,1324,2982,1310,2964,1304,2951,1297,2936,1297,2918,1297,2908,1302,2892,1307,2873,1308,2865,L,1317,2810,Q,1316,2805,1316,2796,1316,2777,1320,2756,1327,2722,1328,2710,1333,2677,1333,2669,1336,2660,1335,2648,1334,2635,1333,2626,1332,2627,1330,2627,1321,2630,1312,2630,1291,2630,1259,2619,1208,2603,1201,2602,1152,2590,1140,2590,1123,2590,1107,2585,1086,2578,1072,2574,1048,2566,1020,2545,982,2518,964,2508,932,2484,914,2471,880,2446,853,2446,841,2446,822,2451,806,2455,799,2459,777,2472,766,2476,752,2482,740,2481,700,2475,672,2491,622,2520,618,2521,529,2553,488,2565,421,2584,384,2584,347,2584,338,2580,329,2575,317,2565,309,2557,301,2554,301,2561,301,2568,301,2605,303,2614,304,2618,305,2640,306,2659,310,2668,312,2677,320,2690,327,2704,331,2712,343,2751,345,2756,351,2777,352,2796,352,2798,352,2800,353,2807,355,2820,357,2833,361,2841,364,2849,364,2864,364,2878,370,2890,375,2900,416,2985,427,3008,438,3030,448,3051,452,3058,457,3063,469,3107,481,3151,481,3169,481,3193,461,3224,461,3225,437,3260,435,3262,434,3264,430,3266,423,3269,416,3273,416,3281,416,3294,432,3313,440,3323,455,3339,466,3352,475,3370,479,3379,490,3404,495,3415,508,3432,515,3441,530,3460,535,3468,547,3491,560,3512,572,3519,578,3523,602,3535,613,3540,621,3545,640,3534,647,3516,651,3502,651,3477,651,3462,673,3435,702,3398,706,3390,713,3377,733,3352,761,3316,764,3312,774,3297,809,3274,835,3257,835,3239,835,3226,806,3214,782,3205,769,3205,726,3202,722,3200,713,3195,713,3168,713,3152,715,3144,715,3142,716,3141,720,3132,722,3129,729,3122,741,3122,755,3122,780,3120,794,3120,813,3108,838,3093,840,3093,867,3081,906,3071,950,3060,976,3060,981,3060,995,3063,1008,3066,1013,3066,1027,3066,1033,3070,1037,3073,1046,3084,1064,3103,1069,3107,1082,3117,1102,3120,1121,3124,1135,3140,1142,3149,1154,3168,1159,3175,1168,3203,1177,3232,1177,3248,1177,3271,1166,3282,1154,3294,1152,3323,1151,3335,1149,3361,1145,3384,1130,3401,1118,3415,1111,3445,1107,3460,1104,3479,1097,3495,1074,3505,1052,3514,1048,3528,1043,3546,1043,3572,1043,3587,1045,3615,1045,3662,1010,3672,981,3680,962,3680,941,3678,927,3679,906,3679,895,3695,892,3700,883,3725,L,883,3734,Q,883,3735,884,3736,887,3739,891,3745,901,3758,902,3760,984,3853,1018,3882,1086,3942,1158,3992,1182,4009,1293,4080,1360,4126,1380,4142,1440,4193,1440,4233,1440,4259,1414,4294,1393,4321,1372,4341,1350,4360,1335,4380,1320,4401,1304,4420,1288,4438,1287,4439,1268,4462,1245,4499,1220,4538,1220,4554,1220,4592,1268,4614,1317,4635,1389,4660,1476,4703,1596,4733,1613,4740,1652,4760,1691,4779,1714,4779,1733,4779,1780,4799,1834,4822,1847,4825,1856,4827,1877,4825,1887,4824,1894,4824,1911,4790,1922,4769,1943,4729,1954,4713,1962,4702,1989,4655,2009,4618,2028,4601,2061,4568,2078,4553,2105,4528,2138,4511,2156,4502,2199,4484,2237,4467,2260,4448,2261,4447,2262,4445,2275,4427,2279,4399,2281,4384,2281,4337,2281,4297,2283,4270,2285,4244,2285,4213,2285,4173,2282,4148,2277,4098,2275,4062,2275,4061,2275,4060,2255,3850,2255,3798,2250,3751,2259,3734,2273,3709,2274,3706,2285,3690,2296,3685,2300,3682,2320,3670,2339,3658,2347,3654,2360,3649,2378,3637,2392,3627,2400,3620,2400,3617,2401,3615,2406,3602,2408,3585,2410,3564,2412,3553,2415,3536,2440,3529,2464,3523,2463,3506,L,2463,3505,Q,2462,3484,2465,3472,2442,3465,2429,3460,2412,3453,2393,3440,2378,3431,2353,3422,2326,3413,2304,3413,L,2030,3413,Q,2003,3418,1963,3444,1950,3452,1933,3454,1926,3455,1893,3455,L,1893,3455,Q,1890,3458,1866,3456,1837,3453,1815,3443,1791,3432,1784,3427,1774,3418,1773,3404,1772,3373,1773,3364,1773,3352,1753,3339,Q,1741,3332,1723,3325,Z]],label:"Sabaya",shortLabel:"AT",labelPosition:[165.3,390.6],labelAlignment:[CEN,MID]},"BO.OR.SJ":{outlines:[[M,1193,734,Q,1124,790,1056,863,1037,883,945,990,942,993,939,996,913,1029,873,1069,844,1097,804,1137,765,1176,716,1201,666,1226,637,1231,607,1236,605,1237,575,1239,560,1240,529,1244,515,1257,504,1267,481,1294,459,1316,445,1316,438,1316,421,1309,402,1302,395,1302,376,1302,329,1329,306,1342,282,1357,267,1365,231,1395,228,1397,204,1412,190,1419,186,1426,185,1428,185,1429,174,1439,168,1455,165,1464,159,1493,163,1512,155,1532,150,1543,137,1561,134,1567,116,1587,98,1607,92,1616,81,1632,54,1671,52,1679,47,1686,42,1692,42,1698,42,1699,66,1731,91,1762,106,1779,114,1788,146,1815,174,1842,173,1859,171,1884,177,1906,182,1926,196,1954,206,1975,217,2004,231,2042,231,2055,231,2067,231,2068,230,2069,227,2084,226,2085,226,2087,229,2156,231,2184,233,2212,235,2238,236,2263,252,2340,268,2416,267,2425,267,2432,267,2437,267,2438,267,2439,267,2440,267,2441,271,2479,271,2481,272,2486,282,2500,294,2516,296,2521,300,2533,301,2553,301,2553,301,2554,309,2557,317,2565,329,2575,338,2580,347,2584,384,2584,421,2584,488,2565,529,2553,618,2521,622,2520,672,2491,700,2475,740,2481,752,2482,766,2476,777,2472,799,2459,806,2455,822,2451,841,2446,853,2446,880,2446,914,2471,932,2484,964,2508,982,2518,1020,2545,1048,2566,1072,2574,1086,2578,1107,2585,1123,2590,1140,2590,1152,2590,1201,2602,1208,2603,1259,2619,1291,2630,1312,2630,1321,2630,1330,2627,1332,2627,1333,2626,1342,2623,1351,2617,1361,2599,1369,2586,1388,2559,1390,2557,1409,2542,1415,2536,1430,2526,1466,2511,1471,2509,1491,2499,1511,2491,1518,2491,1542,2491,1569,2477,1602,2456,1623,2445,1644,2432,1674,2432,1715,2430,1733,2424,1748,2419,1790,2398,1820,2383,1840,2383,1865,2383,1884,2389,1904,2397,1932,2417,1937,2420,1976,2427,2013,2433,2023,2433,L,2041,2432,2041,2426,Q,2027,2408,2008,2376,1979,2328,1979,2311,1979,2294,2004,2273,2033,2251,2041,2244,2052,2234,2080,2206,2097,2189,2114,2176,2115,2175,2116,2174,2117,2174,2118,2174,2148,2160,2198,2112,2209,2101,2219,2072,2228,2044,2228,2023,2228,1991,2196,1944,2153,1888,2133,1861,2097,1814,2047,1775,2033,1764,2029,1755,2024,1743,2024,1716,2024,1703,2024,1696,2024,1694,2024,1692,2025,1671,2046,1640,2069,1606,2069,1578,2069,1561,2052,1542,2036,1523,2036,1498,2036,1488,2043,1472,2046,1464,2047,1460,2049,1454,2049,1452,2049,1448,2036,1430,2023,1413,2017,1409,2012,1405,1993,1401,1975,1397,1967,1397,1948,1397,1942,1401,1930,1408,1900,1415,1894,1417,1883,1417,1861,1417,1860,1417,1855,1417,1842,1421,1829,1426,1821,1426,1773,1428,1739,1431,1722,1433,1676,1433,1644,1433,1645,1410,1648,1364,1641,1347,1638,1338,1629,1328,1619,1315,1617,1312,1607,1295,1603,1290,1583,1268,1583,1235,1583,1219,1607,1177,1631,1134,1631,1122,1631,1118,1625,1108,1618,1095,1615,1088,1611,1065,1609,1055,1606,1035,1606,1018,1606,983,1610,974,1617,953,1624,915,L,1624,789,Q,1624,738,1624,731,1627,702,1639,686,1660,660,1675,648,1691,636,1725,619,1724,617,1723,614,1722,611,1719,590,1717,579,1713,569,1712,568,1697,556,1683,544,1677,540,1658,523,1637,516,1614,508,1609,507,1598,504,1586,504,1558,504,1536,518,1513,533,1508,556,1509,558,1508,559,1490,583,1482,594,1467,612,1446,623,1444,624,1428,635,1414,646,1407,648,1396,653,1385,653,1369,653,1364,654,1299,666,1269,680,1250,689,1231,704,Q,1227,706,1193,734,Z]],label:"Sajama",shortLabel:"SJ",labelPosition:[113.5,173.9],labelAlignment:[CEN,MID]},"BO.OR.ST":{outlines:[[M,2230,778,Q,2190,778,2166,762,2101,720,2084,712,2054,696,1988,681,1928,666,1928,669,1927,669,1927,669,1922,670,1913,672,1904,675,1903,675,1901,675,1866,659,1828,640,1810,634,1804,632,1787,630,1770,628,1761,628,1745,628,1739,627,1729,625,1725,619,1691,636,1675,648,1660,660,1639,686,1627,702,1624,731,1624,738,1624,789,L,1624,915,Q,1617,953,1610,974,1606,983,1606,1018,1606,1035,1609,1055,1611,1065,1615,1088,1618,1095,1625,1108,1631,1118,1631,1122,1631,1134,1607,1177,1583,1219,1583,1235,1583,1268,1603,1290,1607,1295,1617,1312,1619,1315,1629,1328,1638,1338,1641,1347,1648,1364,1645,1410,1644,1433,1676,1433,1722,1433,1739,1431,1773,1428,1821,1426,1829,1426,1842,1421,1855,1417,1860,1417,1861,1417,1883,1417,1894,1417,1900,1415,1930,1408,1942,1401,1948,1397,1967,1397,1975,1397,1993,1401,2012,1405,2017,1409,2023,1413,2036,1430,2049,1448,2049,1452,2049,1454,2047,1460,2048,1460,2055,1454,2062,1447,2065,1445,2074,1438,2091,1432,2098,1429,2118,1420,2138,1412,2152,1410,2184,1403,2210,1400,2223,1398,2276,1394,2305,1392,2313,1366,2319,1334,2323,1322,2329,1301,2350,1276,2364,1256,2378,1249,2380,1219,2368,1201,2357,1185,2330,1175,2291,1160,2276,1150,2256,1134,2258,1110,2259,1089,2249,1062,2237,1034,2233,1023,2225,1004,2198,984,2175,968,2175,945,2175,933,2191,914,2197,905,2206,895,2208,893,2209,892,2209,892,2209,892,2218,878,2233,860,2252,837,2263,819,2257,817,2253,811,2249,804,2248,793,2251,788,2244,783,Q,2236,778,2230,778,Z]],label:"San Pedro de Totora",shortLabel:"ST",labelPosition:[191.2,110.8],labelAlignment:[CEN,MID]},"BO.OR.SA":{outlines:[[M,3519,1292,Q,3518,1291,3518,1290,3508,1270,3493,1249,3473,1224,3462,1208,3455,1199,3452,1184,3450,1167,3448,1159,3445,1135,3436,1117,3405,1043,3396,1022,3360,943,3345,943,3335,943,3298,977,3264,1008,3258,1017,3242,1042,3209,1054,3170,1070,3154,1085,3139,1098,3107,1110,3071,1123,3059,1131,3039,1145,3021,1176,3018,1181,3014,1185,3014,1208,3019,1221,3024,1235,3038,1254,3054,1274,3060,1286,3069,1305,3069,1328,3069,1338,3060,1348,3049,1359,3042,1367,3034,1375,3020,1382,3012,1386,3012,1400,3012,1408,3027,1440,3043,1472,3043,1484,3043,1493,3013,1516,3e3,1527,2993,1536,2985,1546,2984,1555,2984,1556,2984,1557,2983,1584,2956,1604,2926,1627,2926,1649,2926,1670,2940,1690,2957,1715,2981,1713,3001,1711,3005,1712,3019,1714,3022,1727,3027,1745,3034,1784,3044,1838,3050,1901,3051,1916,3071,1950,3072,1952,3077,1959,3080,1963,3081,1968,3085,1982,3085,1983,3086,1984,3095,1984,3105,1984,3119,1973,3128,1966,3141,1954,3148,1949,3173,1937,3203,1924,3203,1930,L,3203,1930,Q,3222,1931,3226,1944,3227,1949,3227,1978,3227,1998,3227,2e3,3227,2011,3225,2018,3223,2022,3216,2035,3209,2048,3208,2053,3207,2055,3206,2071,3203,2087,3198,2094,3192,2104,3181,2112,L,3165,2124,Q,3151,2133,3144,2142,3135,2153,3135,2166,3135,2194,3149,2230,3170,2284,3173,2297,3180,2322,3184,2332,3190,2349,3200,2362,3215,2384,3217,2389,3230,2412,3230,2421,3230,2439,3185,2546,3185,2547,3178,2562,3197,2575,3221,2583,3239,2588,3274,2596,3287,2599,3296,2633,3303,2661,3303,2682,3302,2708,3327,2723,3343,2731,3379,2748,3420,2773,3472,2803,3514,2827,3587,2846,3618,2854,3676,2868,3734,2882,3823,2884,3911,2887,3943,2888,L,3981,2888,3981,2887,Q,3965,2882,3937,2853,3917,2832,3905,2814,3874,2770,3843,2734,3828,2716,3813,2691,3794,2661,3789,2641,3785,2626,3753,2604,3722,2583,3717,2563,3716,2562,3715,2561,3710,2548,3701,2520,3700,2515,3698,2500,3696,2488,3692,2479,3685,2469,3680,2461,3670,2445,3667,2438,3659,2425,3659,2401,3659,2372,3679,2336,3709,2279,3720,2250,3740,2197,3742,2192,3753,2156,3754,2127,3754,2125,3754,2123,3755,2107,3757,2096,3760,2074,3759,2059,3758,2047,3759,2018,3759,1990,3759,1989,3759,1904,3757,1886,3747,1834,3734,1728,3734,1726,3734,1725,3724,1672,3692,1614,3673,1580,3624,1510,3577,1443,3557,1406,Q,3525,1347,3519,1292,Z]],label:"Saucarí",shortLabel:"SA",labelPosition:[345.3,191.5],labelAlignment:[CEN,MID]},"BO.OR.SP":{outlines:[[M,5147,3197,Q,5142,3207,5135,3226,5129,3241,5112,3259,5097,3275,5084,3282,5063,3294,5029,3297,4980,3301,4966,3304,4949,3308,4908,3307,4867,3307,4852,3311,4821,3320,4788,3341,4765,3356,4735,3356,4604,3353,4570,3353,4551,3353,4518,3363,4489,3372,4469,3373,L,4469,3373,Q,4468,3373,4468,3373,4467,3373,4467,3373,4466,3373,4466,3373,4465,3373,4464,3373,4424,3374,4326,3372,4230,3369,4230,3369,4214,3369,4213,3369,4202,3369,4196,3372,4209,3417,4212,3434,4215,3460,4212,3512,4211,3529,4222,3550,4223,3552,4225,3554,4235,3570,4238,3583,4263,3608,4301,3635,4362,3679,4377,3690,4386,3700,4406,3721,4426,3741,4442,3751,4449,3754,4462,3763,4476,3772,4480,3774,4488,3779,4503,3786,4515,3792,4521,3800,4535,3817,4539,3842,4541,3855,4542,3887,4543,3907,4560,3933,4573,3954,4592,3972,4603,3983,4616,3989,4624,3992,4640,3998,4644,3999,4658,4011,4673,4022,4677,4024,4703,4038,4719,4044,4730,4048,4747,4057,4762,4064,4769,4066,4778,4069,4823,4088,4846,4098,4867,4093,4877,4091,4890,4093,4903,4096,4912,4101,4929,4112,4936,4115,4945,4119,4954,4119,4962,4119,4990,4116,5018,4114,5028,4114,5036,4114,5053,4114,5068,4114,5079,4119,5087,4122,5096,4141,5105,4159,5105,4171,5105,4191,5089,4204,5068,4221,5062,4235,L,5060,4237,Q,5065,4237,5070,4238,5120,4259,5237,4298,5291,4317,5314,4337,5327,4349,5383,4364,5390,4364,5405,4354,5413,4348,5426,4337,5443,4327,5459,4297,5471,4276,5488,4250,5498,4235,5518,4204,5542,4169,5582,4105,5589,4094,5599,4082,5610,4068,5616,4063,5621,4058,5638,4046,5652,4034,5654,4022,5660,4008,5677,3992,5703,3968,5713,3957,5715,3954,5735,3928,5757,3902,5769,3902,5771,3902,5772,3902,5750,3877,5712,3855,5665,3830,5640,3817,5620,3806,5608,3799,5587,3788,5574,3783,5557,3778,5533,3777,5508,3777,5500,3774,5426,3752,5355,3694,5326,3670,5296,3630,5261,3584,5251,3551,5340,3480,5340,3455,5340,3445,5314,3421,5287,3399,5285,3397,5273,3386,5269,3361,5264,3327,5262,3322,5253,3297,5244,3283,5231,3264,5219,3244,5211,3220,5204,3206,5190,3179,5166,3179,Q,5156,3179,5147,3197,Z]],label:"Sebastian Pagador",shortLabel:"SP",labelPosition:[491.2,370],labelAlignment:[CEN,MID]},"BO.OR.SC":{outlines:[[M,3587,2846,Q,3514,2827,3472,2803,3420,2773,3379,2748,3343,2731,3327,2723,3302,2708,3303,2682,3303,2661,3296,2633,3287,2599,3274,2596,3239,2588,3221,2583,3197,2575,3178,2562,3166,2590,3131,2668,3131,2670,3130,2672,3112,2707,3067,2743,3054,2753,3046,2758,3031,2767,3024,2767,3009,2767,3003,2771,2993,2777,2991,2794,L,2963,2794,Q,2952,2789,2888,2758,2859,2745,2824,2745,2806,2745,2797,2752,2787,2760,2774,2786,2762,2811,2754,2822,2740,2840,2723,2846,2698,2854,2667,2877,2648,2891,2601,2928,2589,2936,2572,2951,2556,2964,2544,2972,2531,2980,2509,2984,2487,2988,2482,2992,2459,3010,2443,3012,2423,3013,2405,3017,2390,3020,2372,3032,2352,3043,2350,3053,2350,3053,2350,3054,2350,3074,2379,3122,2405,3166,2421,3178,2422,3179,2423,3181,2435,3199,2456,3227,2475,3253,2488,3276,2499,3295,2518,3337,2536,3378,2537,3387,2538,3396,2521,3414,2504,3432,2483,3443,2470,3452,2466,3468,2465,3470,2465,3472,2462,3484,2463,3505,L,2463,3506,Q,2494,3504,2578,3517,2620,3530,2655,3538,2680,3543,2720,3550,2728,3551,2749,3562,2761,3568,2782,3580,2808,3593,2813,3605,2814,3609,2841,3609,2870,3609,2895,3580,2920,3550,2939,3550,2959,3550,2962,3563,2965,3576,2992,3576,3033,3576,3070,3567,3076,3566,3136,3546,3230,3516,3361,3516,3444,3516,3458,3517,3485,3521,3556,3547,3612,3567,3634,3574,3706,3576,3745,3576,3783,3576,3793,3577,3802,3577,3807,3576,3826,3574,3884,3560,3892,3558,3909,3553,3920,3550,3969,3542,4019,3533,4074,3536,4130,3539,4164,3543,4199,3546,4222,3550,4211,3529,4212,3512,4215,3460,4212,3434,4209,3417,4196,3372,4194,3363,4191,3354,4179,3316,4182,3271,4159,3201,4148,3166,4128,3104,4101,3062,4090,3044,4076,3013,4057,2966,4055,2961,4045,2940,4033,2925,4011,2896,3982,2887,L,3981,2887,3981,2888,3943,2888,Q,3911,2887,3823,2884,3734,2882,3676,2868,Q,3618,2854,3587,2846,Z]],label:"Sud Carangas",shortLabel:"SC",labelPosition:[328.6,315.4],labelAlignment:[CEN,MID]},"BO.OR.TB":{outlines:[[M,3475,504,Q,3462,492,3438,477,3409,460,3395,451,3376,439,3371,419,3369,411,3367,376,3365,375,3363,375,3353,373,3341,373,3330,373,3315,382,3298,393,3277,396,3264,398,3244,409,3223,422,3215,433,3202,453,3196,469,3193,476,3184,509,3182,516,3178,521,L,3178,566,Q,3178,570,3177,577,3177,584,3178,589,3178,593,3185,596,3192,599,3192,606,3194,621,3193,653,3192,690,3192,708,3193,732,3194,736,3197,748,3207,752,3211,753,3229,753,3242,752,3248,760,3271,791,3289,797,3297,800,3331,800,3374,800,3383,795,L,3393,795,Q,3397,793,3404,791,3412,788,3414,780,3416,748,3423,739,3429,731,3452,730,3478,728,3487,722,3494,718,3518,700,3541,684,3554,678,3565,674,3586,669,3602,661,3602,636,3602,609,3587,596,3577,586,3541,573,3520,565,3506,543,Q,3486,514,3475,504,Z]],label:"Tomás Barrón",shortLabel:"TB",labelPosition:[333.2,59.8],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"oruro",type:"maps"}}})});