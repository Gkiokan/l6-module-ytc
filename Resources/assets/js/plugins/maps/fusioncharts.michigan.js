(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=670)})({670:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(671);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},671:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Michigan.20.10-30-2012 06:49:14
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Michigan",revision:20,standaloneInit:true,baseWidth:601,baseHeight:701,baseScaleFactor:10,entities:{101:{outlines:[[M,3142,3958,Q,3140,3966,3136,3972,3133,3976,3134,3982,3136,4020,3129,4054,3127,4062,3125,4070,3124,4074,3124,4077,3118,4109,3127,4136,3130,4148,3124,4156,3121,4160,3120,4165,3118,4176,3111,4190,3107,4199,3103,4207,3098,4216,3090,4223,3048,4259,3053,4330,L,3098,4330,3098,4338,3452,4338,3452,3974,3184,3974,Z]],label:"Manistee",shortLabel:"MS",labelPosition:[327.2,415.3],labelAlignment:[CEN,MID]},103:{outlines:[[M,2081,1556,Q,2022,1530,1982,1494,1972,1485,1963,1484,1958,1482,1953,1480,1951,1478,1940,1478,1907,1478,1875,1469,1851,1462,1827,1455,1823,1454,1819,1453,L,1819,1612,1853,1612,1853,1710,1762,1710,1763,2167,2129,2167,2129,2449,2401,2449,2401,2267,2493,2267,2493,1908,Q,2484,1910,2474,1910,2468,1910,2462,1911,2451,1913,2439,1915,2433,1916,2430,1919,2422,1926,2404,1921,2397,1919,2391,1917,2385,1916,2380,1913,2373,1910,2366,1906,2347,1895,2332,1880,2309,1857,2298,1820,2289,1789,2260,1781,2255,1779,2251,1776,2246,1773,2241,1770,2224,1760,2218,1732,2216,1726,2212,1722,2199,1712,2190,1695,2175,1666,2160,1636,2148,1610,2129,1590,Q,2109,1568,2081,1556,Z]],label:"Marquette",shortLabel:"MQ",labelPosition:[206.8,195.1],labelAlignment:[CEN,MID]},105:{outlines:[[M,2948,4513,Q,2952,4534,2972,4553,2982,4564,2989,4577,3009,4615,3006,4624,3003,4635,3003,4647,3003,4659,3010,4671,3010,4675,3011,4688,3011,4690,3012,4691,L,3291,4691,3291,4338,3098,4338,3098,4330,3053,4330,Q,3053,4331,3053,4333,3022,4355,3001,4378,2976,4407,2959,4438,Q,2940,4475,2948,4513,Z]],label:"Mason",shortLabel:"MA",labelPosition:[312.8,452],labelAlignment:[CEN,MID]},107:{outlines:[[M,3640,4691,L,3640,5040,3991,5040,3991,4689,Z]],label:"Mecosta",shortLabel:"MC",labelPosition:[381.5,486.4],labelAlignment:[CEN,MID]},109:{outlines:[[M,2330,2449,L,2129,2449,2129,2544,2070,2545,2070,2719,1961,2721,Q,1969,2727,1976,2734,1990,2750,1992,2766,1993,2786,1991,2807,1990,2821,1999,2836,2022,2873,1994,2908,1984,2919,1983,2932,1981,2958,1976,2983,1973,3003,1960,3022,1946,3044,1939,3069,1937,3077,1942,3084,1944,3086,1943,3103,1963,3109,1981,3107,1985,3106,2005,3106,2008,3106,2011,3106,2028,3103,2036,3092,2042,3083,2053,3068,2072,3089,2083,3095,2100,3104,2096,3126,2091,3151,2080,3174,2068,3199,2057,3224,2050,3243,2045,3263,2044,3266,2042,3269,2048,3263,2050,3293,2050,3296,2053,3299,2066,3314,2067,3341,2067,3344,2070,3347,2088,3366,2112,3367,2115,3368,2118,3370,2127,3376,2136,3382,2145,3368,2145,3341,2145,3320,2152,3301,2154,3296,2158,3292,2162,3287,2166,3282,2175,3272,2195,3267,2198,3267,2201,3265,2218,3258,2221,3234,2222,3231,2224,3227,2228,3222,2232,3217,2261,3170,2301,3126,2311,3115,2318,3102,2338,3069,2345,3034,2353,3003,2368,2973,2370,2970,2372,2966,2385,2942,2397,2926,2400,2922,2400,2919,2388,2920,2364,2918,2360,2910,2358,2895,2355,2825,2355,2755,2355,2660,2357,2565,2357,2550,2335,2554,Q,2330,2502,2330,2449,Z]],label:"Menominee",shortLabel:"MM",labelPosition:[216.9,286.6],labelAlignment:[CEN,MID]},111:{outlines:[[M,4662,5031,L,4662,4677,4343,4683,4343,5052,4508,5052,4540,5031,Z]],label:"Midland",shortLabel:"MD",labelPosition:[450.2,486.5],labelAlignment:[CEN,MID]},113:{outlines:[[M,3803,4338,L,4164,4338,4164,3973,3803,3974,Z]],label:"Missaukee",shortLabel:"MI",labelPosition:[398.3,415.6],labelAlignment:[CEN,MID]},115:{outlines:[[M,5312,6422,L,4953,6416,4953,6767,5206,6756,Q,5194,6702,5229,6671,5232,6668,5233,6665,5235,6659,5238,6657,5258,6641,5277,6606,5288,6586,5293,6570,5295,6564,5298,6561,5311,6549,5319,6535,5321,6532,5325,6531,5350,6522,5371,6509,5378,6505,5378,6499,5380,6482,5383,6461,Z]],label:"Monroe",shortLabel:"MR",labelPosition:[510.8,659.2],labelAlignment:[CEN,MID]},117:{outlines:[[M,3991,5052,L,3991,5040,3640,5040,3639,5214,3810,5214,3810,5387,4162,5387,4162,5052,Z]],label:"Montcalm",shortLabel:"MN",labelPosition:[395.6,520.3],labelAlignment:[CEN,MID]},119:{outlines:[[M,4532,3363,L,4502,3364,4502,3619,4871,3619,4871,3263,4532,3264,Z]],label:"Montmorency",shortLabel:"MO",labelPosition:[468.7,347.6],labelAlignment:[CEN,MID]},121:{outlines:[[M,3291,5214,L,3291,5035,2980,5035,Q,2983,5043,2986,5050,2996,5076,3003,5104,3015,5155,3028,5198,3035,5222,3044,5252,3047,5264,3050,5276,3066,5328,3102,5366,3110,5375,3119,5390,3122,5396,3125,5401,L,3381,5391,3381,5308,3473,5308,3473,5214,Z]],label:"Muskegon",shortLabel:"MU",labelPosition:[319.2,522.3],labelAlignment:[CEN,MID]},123:{outlines:[[M,3291,4691,L,3291,5214,3639,5214,3640,4691,Z]],label:"Newaygo",shortLabel:"NE",labelPosition:[346.5,495.2],labelAlignment:[CEN,MID]},125:{outlines:[[M,5190,5640,L,5025,5641,5025,5739,5011,5739,5011,6080,5436,6080,5447,5628,5190,5628,Z]],label:"Oakland",shortLabel:"OK",labelPosition:[522.9,587.4],labelAlignment:[CEN,MID]},127:{outlines:[[M,2991,4736,Q,2988,4742,2986,4748,2967,4817,2932,4873,2925,4885,2928,4901,2929,4905,2930,4908,2958,4978,2980,5035,L,3291,5035,3291,4691,3012,4691,Q,3012,4696,3011,4700,3008,4717,2998,4726,Q,2994,4730,2991,4736,Z]],label:"Oceana",shortLabel:"OA",labelPosition:[310.9,486.3],labelAlignment:[CEN,MID]},129:{outlines:[[M,4871,3974,L,4501,3973,4501,4338,4871,4338,Z]],label:"Ogemaw",shortLabel:"OG",labelPosition:[468.6,415.6],labelAlignment:[CEN,MID]},131:{outlines:[[M,1149,1345,Q,1140,1355,1127,1359,1106,1365,1095,1373,1091,1375,1085,1375,1030,1369,1001,1416,987,1438,967,1451,925,1479,878,1502,836,1523,813,1543,795,1558,770,1557,747,1556,734,1563,729,1565,723,1566,690,1568,658,1574,654,1574,651,1575,621,1578,592,1574,566,1571,544,1582,506,1601,475,1633,475,1634,474,1634,L,474,1789,559,1789,559,1895,834,1895,834,2081,1118,2081,1118,1711,1204,1711,1204,1614,1154,1614,1154,1339,Q,1152,1342,1149,1345,Z]],label:"Ontonagon",shortLabel:"ON",labelPosition:[83.9,174],labelAlignment:[CEN,MID]},133:{outlines:[[M,3991,4338,L,3640,4338,3640,4691,3991,4689,Z]],label:"Osceola",shortLabel:"OE",labelPosition:[381.5,451.5],labelAlignment:[CEN,MID]},135:{outlines:[[M,4871,3619,L,4502,3619,4501,3973,4871,3974,Z]],label:"Oscoda",shortLabel:"OC",labelPosition:[468.6,379.6],labelAlignment:[CEN,MID]},137:{outlines:[[M,4532,3264,L,4253,3264,4253,3358,4164,3358,4164,3611,4336,3611,4336,3619,4502,3619,4502,3364,4532,3363,Z]],label:"Otsego",shortLabel:"OS",labelPosition:[434.8,347.1],labelAlignment:[CEN,MID]},139:{outlines:[[M,3381,5308,L,3381,5391,3126,5402,Q,3129,5408,3133,5412,3139,5418,3141,5430,3143,5440,3149,5455,3151,5460,3152,5466,3158,5577,3178,5686,3181,5700,3181,5715,3181,5728,3179,5741,L,3473,5741,3473,5308,Z]],label:"Ottawa",shortLabel:"OT",labelPosition:[329.9,558.9],labelAlignment:[CEN,MID]},141:{outlines:[[M,4848,2985,Q,4842,2981,4836,2981,4780,2975,4736,2948,4716,2937,4711,2907,4708,2889,4693,2880,4677,2871,4664,2860,4652,2851,4641,2841,4626,2829,4609,2820,L,4609,3264,4891,3263,Q,4946,3252,5003,3256,5044,3258,5086,3255,5089,3255,5092,3254,5104,3252,5115,3254,5119,3255,5121,3255,5160,3258,5199,3255,5202,3255,5205,3254,5223,3248,5241,3260,5236,3255,5237,3246,5237,3243,5240,3239,5259,3214,5240,3198,5237,3195,5234,3194,5214,3184,5205,3168,5201,3163,5197,3159,5169,3139,5137,3131,5094,3122,5062,3097,5059,3094,5056,3093,5033,3085,5015,3073,5012,3071,5008,3069,4977,3057,4950,3043,4931,3033,4912,3023,4908,3020,4903,3018,Q,4881,3003,4848,2985,Z]],label:"Presque Isle",shortLabel:"PR",labelPosition:[477.9,311.2],labelAlignment:[CEN,MID]},143:{outlines:[[M,4164,4338,L,4501,4338,4501,3973,4164,3973,Z]],label:"Roscommon",shortLabel:"RO",labelPosition:[433.2,415.6],labelAlignment:[CEN,MID]},145:{outlines:[[M,4751,4989,L,4750,4937,4662,4937,4662,5031,4540,5031,4508,5052,4504,5052,4504,5373,4845,5373,4845,5291,5012,5291,5011,5028,4919,5029,4919,4989,Z]],label:"Saginaw",shortLabel:"SA",labelPosition:[470.8,519],labelAlignment:[CEN,MID]},147:{outlines:[[M,5891,5347,L,5502,5347,5502,5620,5695,5620,5695,5853,Q,5707,5836,5726,5826,5743,5837,5763,5842,5770,5843,5776,5843,5792,5844,5799,5852,5811,5864,5800,5871,5796,5873,5795,5876,5790,5886,5775,5891,5759,5896,5751,5911,5749,5914,5745,5915,5733,5919,5736,5935,5737,5941,5737,5947,5737,5950,5737,5953,5737,5956,5737,5959,5742,5990,5775,5981,5779,5980,5780,5976,5786,5960,5805,5960,5829,5959,5841,5947,5844,5944,5847,5943,5853,5941,5856,5938,5872,5924,5870,5899,5867,5854,5884,5817,5885,5813,5886,5810,5894,5784,5899,5756,5903,5727,5898,5699,5896,5690,5902,5668,5908,5644,5919,5615,5921,5609,5923,5602,5924,5597,5926,5592,5959,5514,5923,5437,5912,5416,5896,5399,5894,5396,5903,5389,5903,5383,5903,5377,Q,5902,5362,5891,5347,Z]],label:"St.Clair",shortLabel:"SC",labelPosition:[571.2,549.8],labelAlignment:[CEN,MID]},149:{outlines:[[M,3485,6414,L,3485,6746,3828,6746,3828,6414,Z]],label:"St.Joseph",shortLabel:"SJ",labelPosition:[365.6,658],labelAlignment:[CEN,MID]},151:{outlines:[[M,5836,4951,Q,5835,4944,5830,4937,5804,4902,5813,4867,5814,4861,5815,4855,5816,4840,5822,4831,L,5433,4831,5433,5180,5434,5185,5434,5232,5502,5232,5502,5347,5892,5347,Q,5890,5345,5888,5342,5885,5339,5884,5335,5871,5306,5868,5276,5865,5229,5871,5181,5873,5164,5873,5146,5873,5143,5872,5139,5870,5134,5869,5128,5855,5078,5849,5026,Q,5844,4988,5836,4951,Z]],label:"Sanilac",shortLabel:"SN",labelPosition:[562.7,508.9],labelAlignment:[CEN,MID]},153:{outlines:[[M,3055,2077,L,2859,2077,2859,2255,2920,2258,2920,2272,2965,2272,2965,2534,2985,2534,2985,2674,Q,2990,2671,2996,2669,3016,2662,3026,2652,3029,2650,3032,2647,3056,2623,3068,2575,L,3071,2566,Q,3074,2563,3076,2558,3083,2539,3090,2527,3097,2514,3116,2500,3142,2480,3171,2473,3213,2462,3258,2464,3307,2466,3332,2502,3335,2507,3340,2511,3359,2527,3382,2525,3386,2525,3388,2521,3391,2516,3392,2510,3394,2494,3396,2479,3399,2453,3403,2427,3403,2421,3405,2414,3406,2411,3407,2408,L,3407,1909,3056,1909,Z]],label:"Schoolcraft",shortLabel:"SH",labelPosition:[318.2,224.1],labelAlignment:[CEN,MID]},155:{outlines:[[M,4522,5475,L,4522,5737,4845,5738,4845,5373,4504,5373,4504,5451,Z]],label:"Shiawassee",shortLabel:"SW",labelPosition:[467.4,555.5],labelAlignment:[CEN,MID]},157:{outlines:[[M,5153,4794,Q,5136,4798,5110,4831,5108,4834,5104,4835,5087,4840,5076,4850,5072,4855,5070,4861,5061,4889,5050,4907,5041,4920,5027,4919,5019,4918,5011,4917,L,5012,5291,5264,5291,5264,5185,5433,5185,5433,4831,5180,4831,5180,4779,Q,5178,4781,5176,4783,Q,5167,4790,5153,4794,Z]],label:"Tuscola",shortLabel:"TU",labelPosition:[520.7,506],labelAlignment:[CEN,MID]},159:{outlines:[[M,3108,6079,Q,3083,6184,3041,6263,L,3140,6271,3140,6414,3499,6414,3499,6079,Z]],label:"Van Buren",shortLabel:"VB",labelPosition:[330.5,624.7],labelAlignment:[CEN,MID]},161:{outlines:[[M,5115,6080,L,4696,6080,4696,6414,5115,6418,Z]],label:"Washtenaw",shortLabel:"WA",labelPosition:[490.5,624.9],labelAlignment:[CEN,MID]},163:{outlines:[[M,5490,6206,Q,5503,6202,5515,6197,5523,6193,5530,6188,5578,6150,5601,6083,5602,6081,5602,6080,L,5115,6080,5115,6418,5312,6422,5383,6461,Q,5384,6457,5384,6454,5409,6447,5415,6422,5416,6419,5416,6416,5417,6368,5424,6321,5425,6315,5428,6311,5437,6299,5427,6281,5434,6273,5437,6262,5442,6237,5455,6226,Q,5469,6213,5490,6206,Z]],label:"Wayne",shortLabel:"WY",labelPosition:[527.8,624.5],labelAlignment:[CEN,MID]},165:{outlines:[[M,3452,4338,L,3803,4338,3803,3974,3452,3974,Z]],label:"Wexford",shortLabel:"WE",labelPosition:[362.7,415.6],labelAlignment:[CEN,MID]},"017":{outlines:[[M,4662,4499,L,4662,4937,4750,4937,4751,4989,4919,4989,4919,5029,5011,5028,5011,4917,Q,4991,4913,4975,4906,4959,4899,4943,4896,4892,4887,4856,4848,4832,4822,4810,4793,4808,4790,4808,4784,4808,4778,4810,4773,4833,4724,4848,4670,4849,4665,4850,4659,4850,4642,4856,4629,4858,4623,4859,4617,4861,4608,4864,4601,4866,4593,4870,4586,L,4743,4586,4743,4499,Z]],label:"Bay",shortLabel:"BY",labelPosition:[494.7,472.6],labelAlignment:[LFT,MID],labelConnectors:[[M,4947,4726,L,4767,4726]]},"011":{outlines:[[M,5114,4338,L,4662,4338,4662,4499,4743,4499,4743,4586,4870,4586,Q,4879,4569,4893,4557,4921,4534,4954,4518,4974,4508,4993,4494,5030,4466,5065,4435,5081,4422,5092,4403,5099,4392,5103,4379,5105,4374,5107,4369,5112,4361,5113,4344,Q,5113,4341,5114,4338,Z]],label:"Arenac",shortLabel:"AR",labelPosition:[519.7,443.1],labelAlignment:[LFT,MID],labelConnectors:[[M,5197,4431,L,4952,4431]]},"021":{outlines:[[M,3039,6268,Q,3030,6285,3019,6308,2999,6347,2978,6386,2972,6398,2965,6407,2952,6422,2946,6441,2922,6511,2878,6570,2839,6622,2812,6683,2805,6698,2797,6704,2792,6707,2787,6710,2780,6713,2772,6716,2752,6721,2737,6738,2732,6742,2729,6746,L,3140,6746,3140,6272,3041,6264,Q,3040,6266,3039,6268,Z]],label:"Berrien",shortLabel:"BI",labelPosition:[299.7,661],labelAlignment:[CEN,MID]},"027":{outlines:[[M,3485,6414,L,3140,6414,3140,6746,3485,6746,Z]],label:"Cass",shortLabel:"CS",labelPosition:[331.2,658],labelAlignment:[CEN,MID]},"023":{outlines:[[M,3828,6746,L,4185,6746,4174,6414,3828,6414,Z]],label:"Branch",shortLabel:"BN",labelPosition:[400.6,658],labelAlignment:[CEN,MID]},"059":{outlines:[[M,4526,6414,L,4174,6414,4185,6800,4519,6786,Z]],label:"Hillsdale",shortLabel:"HI",labelPosition:[435,660.7],labelAlignment:[CEN,MID]},"091":{outlines:[[M,4953,6416,L,4526,6414,4519,6786,4953,6767,Z]],label:"Lenawee",shortLabel:"LE",labelPosition:[473.6,660],labelAlignment:[CEN,MID]},"075":{outlines:[[M,4696,6080,L,4251,6081,4251,6414,4696,6414,Z]],label:"Jackson",shortLabel:"JA",labelPosition:[447.3,624.7],labelAlignment:[CEN,MID]},"025":{outlines:[[M,3828,6414,L,4251,6414,4251,6081,3840,6080,Z]],label:"Calhoun",shortLabel:"CA",labelPosition:[404,624.7],labelAlignment:[CEN,MID]},"077":{outlines:[[M,3499,6414,L,3828,6414,3840,6080,3499,6079,Z]],label:"Kalamazoo",shortLabel:"KM",labelPosition:[366.9,624.7],labelAlignment:[CEN,MID]},"005":{outlines:[[M,3159,5811,Q,3157,5816,3157,5822,3154,5848,3147,5865,3145,5870,3144,5876,3141,5900,3135,5924,3127,5956,3122,5988,3119,6006,3116,6024,3113,6049,3114,6050,3111,6065,3108,6079,L,3649,6079,3649,5739,3179,5741,Q,3177,5749,3175,5757,Q,3169,5781,3159,5811,Z]],label:"Allegan",shortLabel:"AE",labelPosition:[337.8,590.9],labelAlignment:[CEN,MID]},"015":{outlines:[[M,4010,5737,L,3649,5739,3649,6079,4008,6081,4008,5930,3981,5930,3981,5816,4010,5816,Z]],label:"Barry",shortLabel:"BR",labelPosition:[379.9,590.9],labelAlignment:[CEN,MID]},"045":{outlines:[[M,4010,5816,L,3981,5816,3981,5930,4008,5930,4008,6081,4343,6081,4343,5737,4010,5737,Z]],label:"Eaton",shortLabel:"EA",labelPosition:[418.7,590.9],labelAlignment:[CEN,MID]},"065":{outlines:[[M,4343,5737,L,4343,6081,4680,6080,4680,5737,Z]],label:"Ingham",shortLabel:"IN",labelPosition:[451.2,590.9],labelAlignment:[CEN,MID]},"093":{outlines:[[M,5011,5739,L,4680,5737,4680,6080,5011,6080,Z]],label:"Livingston",shortLabel:"LI",labelPosition:[484.5,590.9],labelAlignment:[CEN,MID]},"099":{outlines:[[M,5447,5628,L,5436,6080,5602,6080,Q,5604,6077,5606,6076,5613,6073,5611,6059,5609,6051,5612,6037,5609,6025,5611,6013,5612,6006,5613,6e3,5615,5988,5620,5982,5624,5977,5629,5974,5633,5971,5638,5968,5645,5965,5650,5958,5654,5953,5659,5950,5693,5928,5663,5899,5672,5888,5681,5876,5684,5873,5685,5869,5689,5860,5695,5853,L,5695,5620,5502,5620,Z]],label:"Macomb",shortLabel:"MB",labelPosition:[556.5,585],labelAlignment:[CEN,MID]},"087":{outlines:[[M,5434,5232,L,5433,5185,5264,5185,5264,5291,5190,5291,5190,5628,5447,5628,5502,5620,5502,5232,Z]],label:"Lapeer",shortLabel:"LP",labelPosition:[534.6,540.6],labelAlignment:[CEN,MID]},"049":{outlines:[[M,5025,5641,L,5190,5640,5190,5291,4845,5291,4845,5738,5025,5739,Z]],label:"Genesee",shortLabel:"GE",labelPosition:[501.7,551.5],labelAlignment:[CEN,MID]},"037":{outlines:[[M,4504,5451,L,4504,5394,4162,5394,4162,5737,4522,5737,4522,5475,Z]],label:"Clinton",shortLabel:"CN",labelPosition:[434.2,556.6],labelAlignment:[CEN,MID]},"067":{outlines:[[M,4162,5387,L,3810,5387,3810,5737,4162,5737,Z]],label:"Ionia",shortLabel:"IO",labelPosition:[398.6,556.2],labelAlignment:[CEN,MID]},"081":{outlines:[[M,3810,5214,L,3473,5214,3473,5741,3810,5737,Z]],label:"Kent",shortLabel:"KN",labelPosition:[364.1,547.7],labelAlignment:[CEN,MID]},"057":{outlines:[[M,4162,5394,L,4504,5394,4504,5052,4162,5052,Z]],label:"Gratiot",shortLabel:"GA",labelPosition:[433.3,522.3],labelAlignment:[CEN,MID]},"063":{outlines:[[M,5652,4465,Q,5618,4451,5583,4446,5562,4442,5537,4448,5525,4450,5524,4462,5523,4466,5520,4468,5498,4481,5478,4491,5464,4499,5448,4503,5419,4511,5390,4516,5372,4519,5362,4530,5339,4553,5307,4571,5304,4573,5300,4573,5281,4576,5273,4595,5271,4600,5273,4604,5287,4624,5269,4640,5251,4656,5221,4675,5235,4698,5222,4718,5220,4721,5219,4725,5217,4730,5215,4735,5201,4761,5180,4779,L,5180,4831,5821,4831,Q,5822,4831,5822,4831,5826,4825,5825,4820,5823,4813,5823,4801,5823,4796,5820,4793,5805,4778,5798,4760,5790,4739,5784,4714,5780,4705,5781,4689,5781,4677,5775,4669,5741,4626,5734,4576,5731,4552,5723,4530,5713,4505,5692,4488,Q,5675,4475,5652,4465,Z]],label:"Huron",shortLabel:"HU",labelPosition:[552.7,467.3],labelAlignment:[CEN,MID]},"073":{outlines:[[M,3991,4689,L,3991,5052,4343,5052,4343,4683,Z]],label:"Isabella",shortLabel:"IA",labelPosition:[416.7,486.7],labelAlignment:[CEN,MID]},"085":{outlines:[[M,3640,4338,L,3291,4338,3291,4691,3640,4691,Z]],label:"Lake",shortLabel:"LK",labelPosition:[346.5,451.5],labelAlignment:[CEN,MID]},"035":{outlines:[[M,4343,4338,L,3991,4338,3991,4689,4343,4683,Z]],label:"Clare",shortLabel:"CL",labelPosition:[416.7,451.4],labelAlignment:[CEN,MID]},"051":{outlines:[[M,4343,4683,L,4662,4677,4662,4338,4343,4338,Z]],label:"Gladwin",shortLabel:"GL",labelPosition:[450.2,451],labelAlignment:[CEN,MID]},"069":{outlines:[[M,5281,4024,Q,5282,3999,5283,3974,L,4871,3974,4871,4338,5114,4338,Q,5114,4335,5114,4332,5116,4314,5119,4297,5122,4273,5136,4254,5152,4232,5179,4224,5194,4220,5208,4215,5220,4211,5231,4197,5256,4163,5266,4126,Q,5280,4077,5281,4024,Z]],label:"Iosco",shortLabel:"IS",labelPosition:[503.7,414.6],labelAlignment:[CEN,MID]},"079":{outlines:[[M,3800,3667,L,3803,3975,4164,3974,4164,3611,3851,3611,Z]],label:"Kalkaska",shortLabel:"KA",labelPosition:[398.2,380.7],labelAlignment:[CEN,MID]},"039":{outlines:[[M,4336,3620,L,4336,3611,4164,3611,4164,3974,4501,3974,4502,3620,Z]],label:"Crawford",shortLabel:"CR",labelPosition:[432.8,381.2],labelAlignment:[CEN,MID]},"001":{outlines:[[M,5296,3721,Q,5294,3712,5292,3704,5284,3669,5280,3633,5280,3629,5279,3626,5278,3623,5277,3620,L,4871,3620,4871,3974,5283,3974,Q,5284,3949,5286,3923,5286,3920,5282,3918,5280,3914,5279,3911,5275,3884,5288,3869,5296,3860,5297,3840,5297,3837,5298,3833,5300,3828,5298,3827,5296,3826,5302,3811,5303,3807,5304,3804,5306,3795,5308,3787,5309,3783,5310,3780,5315,3757,5306,3745,5303,3742,5303,3736,Q,5299,3732,5296,3721,Z]],label:"Alcona",shortLabel:"AL",labelPosition:[507.1,379.6],labelAlignment:[CEN,MID]},"007":{outlines:[[M,5200,3255,Q,5161,3258,5122,3255,5120,3255,5116,3254,5105,3252,5093,3254,5090,3255,5087,3255,5045,3258,5004,3256,4947,3252,4892,3263,L,4871,3263,4871,3619,5277,3619,Q,5268,3593,5240,3573,5220,3559,5198,3538,5191,3530,5189,3519,5188,3510,5186,3501,5185,3498,5185,3495,5185,3489,5186,3483,5188,3477,5190,3473,5204,3447,5215,3429,5229,3407,5253,3430,5265,3442,5283,3446,5289,3448,5292,3445,5310,3431,5312,3400,5312,3394,5310,3389,5299,3367,5286,3336,5283,3329,5284,3317,5288,3288,5272,3279,5265,3275,5259,3269,5256,3266,5252,3265,5247,3264,5244,3262,5243,3261,5242,3260,5224,3248,5206,3254,Q,5203,3255,5200,3255,Z]],label:"Alpena",shortLabel:"AP",labelPosition:[503.1,346.5],labelAlignment:[CEN,MID]},"031":{outlines:[[M,4457,2783,Q,4427,2783,4409,2771,4404,2768,4399,2763,4336,2707,4253,2664,L,4253,3264,4610,3263,4610,2820,Q,4571,2798,4523,2795,4517,2794,4512,2792,Q,4490,2783,4457,2783,Z]],label:"Cheboygan",shortLabel:"CE",labelPosition:[443.2,303.4],labelAlignment:[CEN,MID]},"009":{outlines:[[M,3774,3281,Q,3775,3287,3777,3292,3783,3306,3780,3329,3771,3356,3776,3388,3779,3410,3773,3420,3766,3433,3763,3448,3754,3504,3738,3558,3732,3577,3724,3596,L,3800,3667,3851,3611,4164,3611,4164,3358,3891,3358,3892,3260,3774,3260,Q,3774,3270,3774,3281,Z]],label:"Antrim",shortLabel:"AN",labelPosition:[394.4,348.8],labelAlignment:[CEN,MID]},"019":{outlines:[[M,3249,3742,Q,3246,3747,3240,3747,3217,3748,3198,3756,3186,3761,3169,3764,3147,3767,3140,3792,3136,3804,3135,3816,3133,3833,3136,3851,3136,3854,3137,3858,3139,3875,3142,3892,3142,3896,3143,3899,3145,3916,3145,3934,3145,3948,3142,3959,L,3184,3974,3452,3974,3452,3709,3262,3709,Q,3258,3726,3249,3742,Z]],label:"Benzie",shortLabel:"BE",labelPosition:[329.3,384.1],labelAlignment:[CEN,MID]},"055":{outlines:[[M,3691,3566,Q,3700,3558,3705,3543,3706,3540,3706,3537,3703,3516,3692,3512,3677,3507,3665,3525,3653,3543,3653,3566,3653,3596,3646,3623,3638,3653,3621,3679,3611,3694,3600,3707,3599,3708,3599,3709,3595,3712,3590,3715,3588,3712,3587,3709,L,3452,3709,3452,3974,3803,3974,3800,3667,3724,3596,Q,3721,3602,3718,3609,3700,3644,3681,3677,3662,3712,3638,3744,3639,3733,3640,3722,3643,3704,3646,3686,3647,3682,3650,3681,3694,3669,3687,3608,3685,3590,3688,3573,Q,3688,3569,3691,3566,Z]],label:"Grand Traverse",shortLabel:"GT",labelPosition:[362.7,385.8],labelAlignment:[CEN,MID]},"089":{outlines:[[M,3198,3435,Q,3176,3453,3185,3488,3187,3495,3194,3498,3207,3504,3218,3498,3222,3495,3228,3494,3234,3492,3238,3488,3266,3458,3256,3418,3255,3415,3244,3421,3240,3419,3234,3418,3217,3417,3205,3430,Q,3202,3433,3198,3435,Z],[M,3337,3310,Q,3335,3302,3334,3294,3331,3277,3305,3282,3294,3284,3283,3289,3257,3301,3255,3329,3255,3332,3257,3335,3272,3358,3286,3389,3288,3394,3290,3400,3291,3403,3293,3406,3304,3420,3311,3436,3317,3436,3319,3433,3329,3415,3333,3394,3337,3374,3335,3364,3336,3361,3337,3359,3343,3338,3339,3317,Q,3338,3314,3337,3310,Z],[M,3653,3277,Q,3646,3262,3621,3266,3617,3266,3614,3268,3598,3277,3589,3292,3540,3365,3506,3445,3499,3463,3487,3479,3466,3510,3438,3528,3430,3534,3411,3529,3386,3522,3363,3530,3353,3534,3347,3548,3339,3570,3299,3564,3297,3563,3293,3565,3278,3571,3275,3584,3273,3590,3271,3596,3267,3607,3267,3614,3270,3658,3263,3703,3262,3706,3262,3709,L,3587,3709,Q,3584,3703,3583,3696,3582,3685,3583,3673,3585,3653,3582,3632,3591,3596,3603,3567,3614,3543,3621,3517,3623,3507,3622,3495,3620,3486,3619,3478,3617,3471,3612,3467,3604,3461,3612,3443,3617,3430,3619,3417,3620,3409,3615,3400,3603,3372,3593,3356,3590,3353,3591,3347,3594,3336,3615,3331,3644,3325,3655,3297,Q,3659,3287,3653,3277,Z]],label:"Leelanau",shortLabel:"LL",labelPosition:[344,361.7],labelAlignment:[CEN,MID]},"029":{outlines:[[M,3661,2698,Q,3660,2695,3659,2692,3650,2677,3631,2685,3622,2689,3619,2699,3617,2706,3616,2712,3613,2728,3618,2737,3620,2741,3621,2747,3626,2779,3613,2806,3596,2839,3613,2856,3632,2875,3668,2859,3685,2851,3689,2829,3694,2792,3685,2755,3680,2730,3666,2707,Q,3663,2702,3661,2698,Z],[M,4085,3171,Q,4054,3166,4024,3151,4006,3142,3995,3127,3983,3112,3977,3090,3974,3090,3971,3089,3925,3082,3900,3116,3887,3132,3863,3137,3858,3139,3854,3142,3846,3148,3835,3153,3825,3157,3816,3162,3802,3170,3796,3179,3786,3199,3780,3222,3775,3240,3774,3260,L,3892,3260,3891,3358,4253,3358,4253,3180,Q,4243,3180,4232,3178,4216,3174,4215,3175,4211,3177,4208,3177,4185,3177,4161,3177,Q,4122,3177,4085,3171,Z]],label:"Charlevoix",shortLabel:"CH",labelPosition:[404.9,325],labelAlignment:[CEN,MID]},"047":{outlines:[[M,4143,2700,Q,4134,2699,4125,2697,4113,2693,4101,2689,4095,2688,4091,2685,4082,2680,4065,2681,4060,2682,4059,2683,4057,2694,4048,2693,4053,2704,4059,2707,4063,2708,4066,2709,4088,2713,4081,2735,4080,2738,4079,2741,4077,2747,4075,2752,4066,2771,4048,2784,4038,2791,4031,2796,4015,2809,4001,2825,3980,2848,3971,2876,3950,2941,4002,2988,4022,3006,4031,3020,4033,3023,4036,3024,4048,3029,4059,3033,4063,3035,4065,3035,4095,3032,4100,3050,4101,3056,4104,3060,4110,3070,4102,3080,4092,3091,4071,3091,4066,3091,4061,3094,4050,3099,4030,3096,4015,3094,4e3,3093,3988,3092,3977,3090,3983,3112,3995,3127,4006,3142,4024,3151,4054,3166,4085,3171,4122,3177,4161,3177,4185,3177,4208,3177,4211,3177,4215,3175,4216,3174,4232,3178,4243,3180,4253,3180,L,4253,2664,Q,4252,2664,4250,2663,4247,2661,4243,2660,4224,2656,4208,2665,4205,2667,4203,2670,Q,4188,2705,4143,2700,Z]],label:"Emmet",shortLabel:"EM",labelPosition:[413.9,291.9],labelAlignment:[CEN,MID]},"033":{outlines:[[M,4202,1951,Q,4192,1949,4186,1942,4184,1939,4179,1937,4172,1934,4165,1930,4161,1928,4155,1927,4113,1925,4072,1919,4069,1919,4065,1918,4054,1916,4042,1913,4039,1913,4035,1911,4009,1900,4023,1868,4028,1857,4031,1848,4033,1845,4030,1839,4018,1815,4011,1790,4006,1773,4009,1756,4009,1752,4012,1749,4018,1744,4017,1732,4015,1711,4021,1693,4030,1664,4052,1641,4060,1634,4071,1630,4078,1628,4083,1625,4072,1619,4060,1619,4048,1619,4036,1625,4005,1623,3982,1634,3977,1637,3971,1638,3931,1644,3888,1644,L,3888,1709,3861,1709,3861,2167,3969,2167,3970,2271,4528,2274,4528,2359,4613,2359,4613,2450,4717,2450,4717,2479,Q,4720,2479,4723,2480,4749,2486,4773,2495,4799,2504,4825,2501,4829,2501,4832,2499,4872,2477,4910,2496,4923,2503,4935,2512,4938,2515,4944,2517,4947,2518,4951,2521,4956,2524,4962,2524,5010,2524,5057,2523,5093,2521,5124,2510,5149,2501,5168,2479,5188,2456,5173,2434,5170,2429,5164,2426,5151,2419,5139,2411,5134,2409,5129,2407,5118,2404,5122,2385,5126,2364,5113,2358,5108,2355,5104,2350,5090,2334,5070,2323,5056,2315,5028,2321,5025,2322,5021,2324,4981,2344,4936,2317,4904,2333,4926,2350,4940,2361,4951,2373,4953,2376,4956,2379,4959,2382,4959,2385,4959,2400,4951,2405,4930,2417,4903,2417,4891,2417,4884,2426,4872,2440,4863,2429,4861,2426,4856,2424,4852,2423,4851,2420,4841,2398,4810,2388,4769,2376,4736,2349,4725,2340,4722,2325,4744,2314,4745,2290,4720,2277,4706,2267,4698,2260,4691,2251,4689,2248,4683,2248,4663,2246,4652,2252,4648,2254,4642,2253,4632,2250,4618,2241,4615,2239,4613,2236,4602,2209,4631,2197,4636,2195,4642,2195,4674,2199,4700,2187,4710,2182,4709,2171,4708,2146,4698,2133,4695,2130,4695,2124,4695,2112,4701,2106,4715,2095,4713,2076,4705,2057,4691,2049,4686,2046,4684,2040,4680,2032,4682,2024,4692,1978,4706,1934,4713,1913,4708,1894,4704,1877,4686,1870,4666,1862,4645,1871,4624,1880,4607,1899,4594,1913,4579,1918,4559,1925,4535,1920,4532,1919,4528,1918,4511,1916,4494,1914,4478,1912,4471,1926,4461,1949,4441,1962,4419,1978,4396,1972,4372,1966,4347,1954,4318,1940,4286,1943,4259,1946,4231,1951,Q,4217,1954,4202,1951,Z]],label:"Chippewa",shortLabel:"CI",labelPosition:[420,210.1],labelAlignment:[CEN,MID]},"097":{outlines:[[M,4433,2631,Q,4416,2629,4398,2628,4395,2628,4392,2628,4366,2628,4346,2614,4341,2611,4339,2604,4331,2577,4321,2551,4305,2550,4308,2567,4312,2596,4331,2618,4348,2637,4369,2651,4389,2664,4399,2687,4401,2691,4404,2694,4412,2703,4427,2708,4431,2709,4432,2712,4435,2721,4451,2720,4454,2720,4457,2720,4496,2721,4532,2709,4543,2706,4543,2694,4543,2682,4532,2673,4529,2670,4523,2668,4499,2661,4475,2653,4462,2648,4444,2635,Q,4439,2631,4433,2631,Z],[M,3971,2167,L,3408,2167,3408,2407,Q,3407,2411,3406,2414,3405,2420,3404,2427,3401,2452,3397,2478,3403,2478,3407,2477,3428,2476,3449,2471,3464,2468,3479,2468,3500,2468,3520,2466,3556,2462,3581,2439,3610,2412,3629,2373,3631,2370,3634,2368,3655,2357,3671,2346,3675,2343,3681,2343,3701,2340,3705,2341,3719,2343,3734,2346,3737,2346,3740,2346,3746,2346,3753,2345,3788,2339,3810,2357,3828,2371,3853,2373,3874,2383,3901,2382,3904,2382,3907,2382,3921,2385,3936,2383,3949,2381,3953,2383,3981,2400,4012,2412,4025,2418,4037,2426,4099,2472,4127,2509,4129,2512,4132,2515,4155,2539,4169,2562,4171,2566,4174,2566,4190,2568,4197,2576,4207,2587,4222,2589,4254,2593,4287,2593,4269,2575,4254,2555,4251,2551,4249,2546,4248,2542,4245,2540,4232,2529,4250,2519,4270,2508,4267,2480,4266,2474,4265,2467,4261,2452,4267,2443,4280,2421,4298,2403,4340,2409,4371,2428,4388,2438,4403,2452,4417,2465,4431,2478,4447,2492,4463,2502,4474,2509,4488,2510,4507,2511,4524,2504,4521,2497,4536,2498,4616,2488,4696,2479,4708,2477,4718,2478,L,4718,2450,4614,2450,4614,2359,4529,2359,4529,2274,3972,2271,Z]],label:"Mackinac",shortLabel:"MK",labelPosition:[354.1,228.9],labelAlignment:[CEN,MID]},"095":{outlines:[[M,3888,1709,L,3888,1644,Q,3876,1644,3864,1644,3840,1643,3828,1654,3822,1660,3811,1663,3807,1663,3804,1666,3761,1702,3691,1707,3641,1711,3591,1705,3544,1700,3496,1704,3490,1705,3483,1706,3471,1708,3460,1704,3444,1698,3439,1705,3436,1708,3430,1708,3426,1708,3421,1708,L,3421,1813,3407,1807,3407,2167,3861,2167,3861,1709,Z]],label:"Luce",shortLabel:"LU",labelPosition:[364.7,195.5],labelAlignment:[CEN,MID]},"003":{outlines:[[M,2821,1846,Q,2801,1853,2799,1870,2798,1886,2808,1906,2827,1948,2801,1963,2793,1955,2782,1940,2759,1907,2729,1939,2718,1951,2705,1952,2660,1954,2633,1917,2617,1895,2604,1872,2600,1865,2588,1870,2552,1889,2513,1903,2504,1907,2493,1908,L,2493,2259,2638,2259,2638,2272,2859,2273,2859,2077,3055,2077,3056,1908,3407,1908,3407,1807,3421,1813,3421,1708,Q,3411,1709,3401,1710,3398,1711,3394,1712,3334,1731,3270,1735,3267,1735,3264,1735,3244,1738,3223,1735,3220,1735,3217,1732,3207,1722,3197,1730,3187,1738,3177,1746,3100,1807,3051,1840,3026,1844,3003,1856,2997,1859,2991,1859,2979,1859,2967,1856,2964,1862,2963,1869,2961,1874,2959,1879,2952,1889,2937,1891,2929,1892,2922,1896,2905,1907,2887,1911,2869,1916,2845,1904,2846,1876,2839,1861,2837,1856,2834,1852,Q,2828,1844,2821,1846,Z]],label:"Alger",shortLabel:"AG",labelPosition:[268.9,210.1],labelAlignment:[CEN,MID]},"041":{outlines:[[M,2638,2272,L,2638,2259,2493,2259,2493,2267,2401,2267,2401,2449,2330,2449,Q,2330,2502,2335,2554,2357,2550,2357,2565,2355,2660,2355,2755,2355,2825,2358,2895,2360,2910,2364,2918,2388,2920,2400,2919,2400,2908,2399,2896,2399,2886,2406,2880,2409,2878,2411,2872,2412,2869,2415,2867,2425,2864,2429,2854,2433,2843,2438,2830,2447,2810,2461,2792,2471,2780,2486,2772,2510,2759,2532,2745,2549,2735,2563,2729,2554,2714,2536,2691,2533,2688,2534,2682,2536,2667,2538,2652,2541,2630,2553,2618,2561,2609,2579,2616,2581,2617,2583,2622,2584,2625,2587,2627,2597,2633,2592,2652,2590,2658,2590,2664,2590,2667,2590,2670,2599,2727,2593,2783,2650,2771,2694,2723,2700,2717,2705,2711,2715,2700,2720,2682,2725,2665,2741,2659,2762,2650,2749,2633,2723,2599,2759,2575,2779,2561,2787,2581,2789,2587,2788,2593,2785,2621,2812,2614,2816,2614,2819,2612,2829,2607,2834,2602,2826,2597,2848,2580,2870,2562,2899,2544,2902,2542,2908,2545,2935,2559,2928,2576,2925,2581,2923,2585,2916,2599,2916,2616,2917,2619,2914,2623,2902,2642,2882,2655,2878,2658,2872,2660,2869,2661,2866,2663,2846,2674,2840,2699,2839,2702,2839,2706,2837,2726,2827,2743,2824,2747,2823,2752,2822,2756,2818,2758,2808,2764,2809,2770,2811,2784,2803,2787,2828,2815,2858,2828,2872,2833,2890,2830,2897,2829,2899,2818,2900,2813,2899,2789,2899,2780,2900,2771,2902,2753,2912,2739,2929,2717,2948,2698,2952,2694,2957,2690,2968,2681,2985,2673,L,2985,2533,2965,2533,2965,2271,2920,2271,2920,2257,2859,2255,2859,2273,Z]],label:"Delta",shortLabel:"DE",labelPosition:[263.3,243.7],labelAlignment:[CEN,MID]},"043":{outlines:[[M,2070,2719,L,2070,2545,2129,2544,2129,2167,1763,2167,1761,2515,Q,1773,2530,1778,2546,1792,2586,1769,2606,1754,2619,1765,2642,1771,2655,1786,2659,1803,2664,1820,2660,1833,2658,1845,2654,1875,2645,1872,2676,1872,2699,1892,2700,1922,2700,1948,2713,1955,2716,1961,2721,Z]],label:"Dickinson",shortLabel:"DI",labelPosition:[194.5,240.4],labelAlignment:[CEN,MID]},"071":{outlines:[[M,1578,2456,Q,1604,2471,1633,2480,1661,2489,1690,2492,L,1696,2494,Q,1719,2498,1744,2500,1750,2501,1754,2505,1758,2510,1761,2514,L,1763,1987,1118,1987,1119,2329,Q,1132,2339,1150,2345,1153,2346,1157,2349,1176,2365,1195,2392,1201,2401,1215,2409,1221,2412,1227,2412,1244,2413,1253,2418,1257,2421,1263,2422,1282,2425,1290,2418,1293,2415,1297,2413,1327,2400,1341,2420,1343,2424,1346,2424,1359,2428,1366,2437,1373,2444,1387,2442,1391,2441,1393,2438,1399,2429,1408,2423,1411,2421,1414,2418,1417,2415,1423,2414,1445,2411,1455,2417,1471,2427,1488,2433,1500,2438,1513,2440,1524,2441,1536,2438,1539,2439,1541,2440,Q,1560,2445,1578,2456,Z]],label:"Iron",shortLabel:"IR",labelPosition:[143.1,218.5],labelAlignment:[CEN,MID]},"013":{outlines:[[M,1727,1417,Q,1672,1419,1640,1460,1629,1473,1617,1485,1596,1506,1577,1528,1572,1533,1572,1542,1572,1548,1570,1552,L,1562,1574,Q,1543,1586,1526,1585,1507,1583,1492,1563,1478,1546,1483,1524,1486,1521,1488,1517,1501,1491,1508,1463,1513,1447,1518,1431,1519,1427,1521,1423,L,1435,1423,1435,1529,1350,1529,1350,1987,1764,1987,1763,1710,1853,1710,1853,1612,1819,1612,1819,1453,Q,1776,1443,1733,1458,Q,1730,1438,1727,1417,Z]],label:"Baraga",shortLabel:"BA",labelPosition:[156.1,179.1],labelAlignment:[CEN,MID]},"053":{outlines:[[M,559,1895,L,559,1789,474,1789,474,1634,Q,443,1667,410,1698,390,1717,364,1726,316,1744,266,1757,260,1758,254,1761,230,1771,207,1785,188,1797,159,1803,147,1806,135,1810,115,1816,99,1832,93,1838,90,1845,84,1859,93,1869,101,1878,113,1871,133,1857,140,1863,146,1868,149,1879,150,1886,154,1887,174,1892,192,1898,212,1904,229,1917,257,1940,267,1968,268,1972,270,1975,280,1993,285,2012,295,2049,314,2080,319,2088,337,2088,395,2087,451,2109,474,2117,497,2125,548,2141,599,2152,634,2159,669,2163,714,2168,755,2185,760,2187,765,2189,777,2211,799,2220,806,2222,812,2218,828,2223,837,2228,841,2231,847,2230,873,2228,895,2237,901,2239,907,2240,931,2244,944,2252,948,2254,954,2256,966,2260,978,2266,998,2275,1025,2284,1047,2291,1066,2302,1085,2313,1108,2322,1112,2323,1115,2325,1117,2327,1119,2329,L,1118,2081,834,2081,834,1895,Z]],label:"Gogebic",shortLabel:"GO",labelPosition:[48.3,198.6],labelAlignment:[CEN,MID]},"061":{outlines:[[M,1584,1061,Q,1533,1061,1483,1058,1480,1058,1475,1055,L,1474,1055,Q,1472,1057,1470,1060,1453,1079,1430,1086,1426,1087,1423,1089,1403,1099,1376,1115,1367,1120,1352,1127,1349,1129,1347,1132,1340,1141,1329,1145,1310,1153,1303,1173,1302,1176,1299,1179,1271,1208,1251,1244,1246,1254,1237,1259,1233,1262,1227,1262,1206,1275,1188,1285,1186,1286,1183,1291,1180,1298,1176,1305,1166,1324,1154,1339,L,1154,1614,1204,1614,1204,1711,1118,1711,1118,1987,1349,1987,1349,1529,1435,1529,1435,1423,1521,1423,Q,1524,1416,1529,1410,1554,1378,1568,1342,1592,1279,1642,1237,1661,1221,1665,1201,1669,1182,1673,1152,1658,1154,1643,1155,1621,1156,1622,1138,1622,1135,1624,1131,1644,1081,1595,1063,Q,1590,1061,1584,1061,Z]],label:"Houghton",shortLabel:"HO",labelPosition:[137.5,134],labelAlignment:[CEN,MID]},"083":{outlines:[[M,1547,89,Q,1542,87,1537,85,1530,81,1519,79,1462,66,1411,93,1379,111,1354,136,1323,168,1293,200,1267,228,1203,247,1173,256,1145,262,1141,262,1138,263,1132,265,1126,266,1086,274,1050,296,1046,298,1043,299,1037,301,1033,303,1013,317,991,343,966,372,948,405,939,420,939,437,939,443,943,448,952,459,972,467,978,470,984,471,1005,473,1025,470,1036,469,1050,463,1055,461,1059,459,1072,451,1096,447,1100,446,1103,446,1135,441,1162,427,1170,423,1181,416,1200,405,1192,384,1189,387,1185,388,1180,390,1175,392,1162,401,1149,384,1145,378,1147,367,1147,363,1148,360,1152,347,1168,346,1228,341,1280,317,1284,316,1287,315,1293,313,1298,312,1328,306,1342,284,1344,281,1346,277,1358,274,1364,273,1370,271,1371,269,1375,262,1388,265,1407,269,1411,259,1417,242,1411,241,1429,218,1452,199,1456,197,1458,193,1474,173,1492,157,1535,122,1554,93,Q,1551,90,1547,89,Z],[M,1785,862,Q,1710,864,1645,904,1575,948,1508,998,1503,1001,1502,1008,1495,1038,1479,1051,1476,1053,1474,1055,L,1475,1055,Q,1480,1058,1483,1058,1533,1061,1584,1061,1590,1061,1595,1063,1644,1081,1624,1131,1622,1135,1622,1138,1621,1156,1643,1155,1658,1154,1673,1152,1698,1148,1722,1139,1761,1124,1775,1103,1787,1084,1805,1062,1809,1058,1814,1054,1845,1028,1870,1008,1875,1004,1876,1e3,1878,986,1869,978,1875,972,1881,966,1884,963,1887,962,1892,960,1896,957,1915,943,1946,945,1952,945,1958,946,1964,948,1968,950,1977,955,1993,952,2001,951,2012,944,2038,927,2059,906,2053,903,2047,901,2034,895,2030,885,2022,887,2014,880,2011,877,2005,876,1943,869,1898,855,1892,853,1886,852,1861,847,1859,850,1857,853,1851,853,1824,856,1798,861,Q,1791,862,1785,862,Z]],label:"Keweenaw",shortLabel:"KE",labelPosition:[171.4,99.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"michigan",type:"maps"}}})});