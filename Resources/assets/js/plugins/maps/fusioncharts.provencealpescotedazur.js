(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=488)})({488:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(489);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},489:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.ProvenceAlpesCotedAzur.1.09-25-2017 11:37:36
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"ProvenceAlpesCotedAzur",revision:1,creditLabel:false,standaloneInit:false,baseWidth:600,baseHeight:517,baseScaleFactor:10,firstEntity:"FR.PR.AP",entities:{"FR.PR.AP":{outlines:[[M,4509,1150,L,4420,1150,4420,1203,4365,1239,4356,1290,4293,1290,4261,1352,4223,1369,4223,1407,4089,1407,4089,1547,4040,1564,4040,1623,4004,1657,3750,1657,3750,1619,3673,1619,3663,1574,3624,1574,3597,1623,3406,1636,3406,1835,3325,1835,3325,1795,3270,1795,3230,1714,3207,1714,3207,1646,3111,1646,3111,1710,3058,1710,2988,1757,2924,1780,2823,1914,2823,2119,2685,2119,2685,2164,2776,2262,2776,2338,2693,2338,2693,2304,2381,2317,2381,2463,2326,2455,2305,2408,2241,2408,2241,2467,2169,2510,2142,2567,2140,2679,2214,2679,2214,2754,2161,2802,2129,2843,2129,2945,2188,2945,2188,2983,2254,2983,2254,3034,2309,3034,2309,3089,2261,3135,2220,3155,2220,3233,2392,3233,2441,3261,2557,3398,2871,3396,2882,3443,2920,3443,2982,3479,3024,3530,3107,3530,3211,3435,3272,3362,3366,3314,3535,3322,3578,3369,3629,3369,3737,3292,3796,3235,4029,3235,4099,3191,4167,3191,4210,3169,4210,2985,4326,2985,4352,2936,4430,2936,4430,2887,4500,2887,4500,2945,4598,2945,4598,2898,4549,2839,4507,2824,4388,2705,4267,2614,4267,2512,4206,2459,4203,2162,4244,2098,4282,2052,4343,2007,4352,1926,4379,1878,4481,1856,4479,1630,4424,1621,4424,1502,4377,1502,4377,1447,4422,1447,4517,1335,4517,1275,4594,1275,4598,1106,4509,1106,Z]],label:"Alpes-de-Haute-Provence",shortLabel:"AP",labelPosition:[330.8,256.5],labelAlignment:[CEN,MID],nextId:"FR.PR.AM"},"FR.PR.AM":{outlines:[[M,5654,2206,L,5654,2262,5516,2262,5516,2298,5398,2298,5398,2359,5183,2357,5183,2306,5126,2291,5126,2266,5065,2255,5065,2217,5018,2217,5018,2166,4942,2166,4942,2134,4810,2134,4810,2122,4636,2122,4636,1960,4481,1859,4481,1856,4379,1878,4352,1926,4343,2007,4282,2052,4244,2098,4203,2162,4206,2459,4267,2512,4267,2614,4388,2705,4507,2824,4549,2839,4598,2898,4598,2945,4500,2945,4500,2887,4430,2887,4430,2936,4352,2936,4326,2985,4210,2985,4210,3169,4167,3191,4140,3191,4140,3282,4172,3326,4259,3326,4259,3360,4337,3360,4339,3483,4379,3536,4379,3585,4439,3602,4526,3602,4547,3662,4594,3662,4594,3905,4640,3905,4642,4073,Q,4645,4071,4647,4069,4647,4056,4655,4050,4657,4048,4659,4043,4666,4037,4670,4033,4687,4031,4696,4018,4700,4016,4702,4009,L,4706,3988,4706,3984,4732,3821,4878,3799,5039,3746,5071,3500,5215,3481,5315,3398,5402,3348,5546,3312,5563,3244,5629,3195,5682,3119,5658,3119,5658,3019,5639,3019,5639,2947,5692,2928,5692,2868,5722,2860,5722,2737,5792,2737,5792,2699,5909,2699,5909,2599,5955,2599,5955,2391,5905,2391,5905,2342,5873,2342,5875,2160,5748,2160,5748,2206,Z]],label:"Alpes-Maritimes",shortLabel:"AM",labelPosition:[502,288.2],labelAlignment:[CEN,MID],nextId:"FR.PR.BD"},"FR.PR.BD":{outlines:[[M,1824,3479,L,1556,3477,1556,3449,1457,3449,1457,3403,1387,3403,1387,3362,1334,3331,1281,3261,1245,3233,1187,3169,1149,3142,1107,3142,1079,3102,1018,3102,960,3044,842,3091,761,3091,746,3148,693,3148,663,3210,655,3507,608,3507,608,3615,405,3615,405,3570,345,3570,345,3668,313,3708,313,3831,356,3831,356,3865,307,3865,265,3914,218,3914,199,3965,156,3965,135,3988,91,4009,61,4065,48,4147,48,4198,640,4194,640,4230,691,4230,691,4287,576,4287,576,4321,542,4325,504,4387,504,4457,689,4457,689,4504,1001,4504,1085,4438,1007,4332,Q,1007,4315,1007,4296,1009,4285,1009,4279,1009,4277,1013,4274,1015,4270,1015,4268,1026,4266,1028,4258,1028,4253,1032,4253,1037,4251,1039,4251,1045,4247,1056,4249,1075,4249,1094,4249,1117,4249,1138,4253,1149,4253,1153,4258,1158,4260,1162,4260,1166,4262,1170,4262,1177,4264,1179,4264,1185,4270,1189,4272,1189,4279,1194,4279,1202,4287,1208,4294,1213,4298,1213,4300,1217,4304,1219,4306,1225,4308,1225,4311,1232,4321,1238,4328,1238,4344,1242,4355,1245,4361,1245,4364,L,1249,4370,Q,1255,4378,1255,4387,1259,4395,1259,4402,1268,4406,1272,4412,1278,4419,1283,4421,1295,4423,1300,4429,1300,4431,1304,4434,1308,4436,1310,4440,L,1317,4442,Q,1321,4446,1329,4446,1338,4453,1351,4455,1355,4457,1357,4457,L,1819,4457,1870,4423,1923,4423,1925,4745,2343,4745,Q,2339,4756,2350,4756,2362,4756,2371,4756,2379,4756,2386,4762,2394,4764,2396,4769,2398,4771,2405,4773,2409,4775,2411,4777,2422,4775,2426,4781,2434,4788,2437,4790,2441,4792,2445,4794,2454,4794,2460,4798,2471,4805,2479,4807,2483,4809,2487,4813,2494,4815,2500,4817,2507,4822,2515,4822,L,2515,4675,2572,4618,2655,4557,2655,4525,2589,4474,2524,4448,2524,4315,2466,4298,2466,4251,2651,4251,2651,4221,2634,4164,2562,4122,2557,3927,2515,3927,2515,3871,2479,3871,2479,3793,2517,3780,2530,3706,2574,3670,2630,3640,2706,3570,2640,3547,2570,3449,2570,3511,2487,3572,2388,3572,2388,3615,2068,3615,2053,3566,1961,3566,1961,3534,1883,3534,Z]],label:"Bouches-du-Rhône",shortLabel:"BD",labelPosition:[151.4,393.3],labelAlignment:[CEN,MID],nextId:"FR.PR.HA"},"FR.PR.HA":{outlines:[[M,3707,166,L,3673,183,3673,232,3537,232,3537,189,3497,145,3497,100,3457,51,3270,51,3270,98,3238,136,3238,302,3279,340,3408,348,3455,393,3455,440,3542,527,3542,641,3378,641,3378,684,3321,684,3321,717,3062,728,3030,773,2903,773,2850,813,2848,813,2820,851,2846,900,2846,936,2787,987,2598,987,2602,1188,2532,1188,2507,1231,2309,1231,2309,1292,2267,1337,2267,1507,2314,1528,2314,1625,2256,1659,2174,1659,2129,1606,2002,1606,2002,1710,2061,1742,1961,1829,1968,1878,2008,1878,2e3,1963,2091,1963,2108,2001,2250,2001,2290,2045,2316,2119,2381,2119,2381,2317,2693,2304,2693,2338,2776,2338,2776,2262,2685,2164,2685,2119,2823,2119,2823,1914,2924,1780,2988,1757,3058,1710,3111,1710,3111,1646,3207,1646,3207,1714,3230,1714,3270,1795,3325,1795,3325,1835,3406,1835,3406,1636,3597,1623,3624,1574,3663,1574,3673,1619,3750,1619,3750,1657,4004,1657,4040,1623,4040,1564,4089,1547,4089,1407,4223,1407,4223,1369,4261,1352,4293,1290,4356,1290,4365,1239,4420,1203,4420,1150,4509,1150,4509,1106,4598,1106,4598,1072,4645,1072,4645,1025,4715,1025,4715,957,4685,957,4685,908,4640,908,4640,855,4623,855,4623,681,4589,681,4589,654,4379,654,4379,599,4286,599,4286,563,4159,563,4159,304,4123,304,4123,272,3993,272,3993,185,3949,174,3949,49,3707,49,Z]],label:"Hautes-Alpes",shortLabel:"HA",labelPosition:[342,116.6],labelAlignment:[CEN,MID],nextId:"FR.PR.VR"},"FR.PR.VR":{outlines:[[M,3796,3235,L,3737,3292,3629,3369,3578,3369,3535,3322,3366,3314,3272,3362,3211,3435,3107,3530,3024,3530,2982,3479,2920,3443,2882,3443,2871,3396,2557,3398,2570,3413,2570,3449,2640,3547,2706,3570,2630,3640,2574,3670,2530,3706,2517,3780,2479,3793,2479,3871,2515,3871,2515,3927,2557,3927,2562,4122,2634,4164,2651,4221,2651,4251,2466,4251,2466,4298,2524,4315,2524,4448,2589,4474,2655,4525,2655,4557,2572,4618,2515,4675,2515,4822,Q,2521,4826,2528,4828,2532,4830,2534,4832,2538,4839,2543,4843,2547,4856,2549,4864,2551,4868,2555,4868,2566,4873,2568,4879,2579,4877,2581,4885,2587,4887,2591,4894,2596,4896,2598,4898,2602,4898,2604,4898,2608,4904,2611,4907,2619,4913,2617,4926,2615,4932,2619,4934,2625,4934,2632,4934,2647,4934,2661,4936,2674,4945,2678,4951,2681,4964,2681,4972,2681,4985,2687,4991,2693,5019,2691,5042,2691,5053,2691,5061,2691,5070,2695,5074,L,2697,5080,Q,2704,5087,2717,5087,2723,5087,2729,5091,2740,5095,2750,5093,2753,5104,2753,5108,2750,5121,2761,5121,2774,5121,2787,5123,2799,5123,2810,5123,2829,5123,2846,5123,2861,5119,2861,5110,2863,5100,2869,5093,2874,5089,2876,5089,2888,5085,2893,5076,2903,5068,2910,5064,2916,5061,2922,5053,2927,5049,2931,5047,2937,5044,2937,5042,2941,5038,2948,5040,2960,5040,2971,5040,2984,5042,2990,5038,2992,5034,2997,5032,3003,5030,3009,5030,3018,5025,3026,5025,3052,5027,3077,5023,3084,5023,3090,5021,3100,5017,3111,5019,3132,5019,3154,5019,3187,5019,3221,5019,3238,5019,3257,5019,3274,5019,3287,5015,3300,5017,3302,5013,3306,5010,3310,5010,3315,5010,3317,5008,3325,5004,3336,5002,3342,4996,3344,4987,3344,4981,3351,4979,3355,4970,3368,4968,3370,4966,3372,4966,3378,4960,3385,4953,3393,4941,3397,4934,3402,4928,3410,4924,3414,4924,3419,4921,3427,4917,3431,4911,3436,4909,3438,4907,3444,4904,3455,4904,3465,4904,3474,4904,3482,4907,3487,4907,3497,4907,3508,4909,3514,4909,3520,4911,3529,4915,3531,4919,3533,4924,3540,4921,3550,4921,3561,4921,3576,4921,3590,4924,3597,4924,3603,4924,3614,4924,3624,4926,3637,4926,3648,4926,3669,4926,3688,4930,3692,4930,3694,4930,3707,4930,3718,4928,3722,4928,3722,4924,3726,4919,3728,4915,3730,4909,3730,4907,3733,4904,3735,4902,3737,4898,3739,4894,3741,4890,3745,4885,3747,4881,3747,4877,3747,4871,3750,4868,3754,4864,3754,4862,3754,4858,3754,4851,3758,4843,3764,4839,3769,4834,3771,4834,3792,4828,3800,4813,3803,4811,3805,4809,3805,4796,3809,4794,3813,4786,3820,4788,3824,4790,3826,4786,3856,4786,3879,4784,3885,4781,3887,4781,3915,4781,3943,4781,3949,4779,3951,4779,3957,4771,3964,4773,3970,4773,3972,4769,3985,4764,3996,4764,4e3,4764,4004,4762,4017,4760,4029,4756,4034,4754,4036,4752,4046,4747,4053,4741,4063,4731,4080,4731,4085,4733,4087,4731,4104,4722,4125,4724,4144,4724,4161,4724,4169,4718,4180,4720,4193,4720,4208,4720,4220,4722,4229,4718,4233,4716,4235,4716,4250,4716,4256,4709,4263,4703,4271,4697,4273,4688,4273,4684,4276,4682,4278,4677,4280,4673,4280,4667,4282,4641,4282,4622,4282,4603,4280,4584,4280,4582,4278,4578,4278,4567,4278,4557,4280,4550,4276,4544,4276,4540,4273,4535,4273,4525,4267,4516,4263,4518,4254,4512,4248,4510,4246,4508,4242,4508,4235,4508,4210,4508,4184,4508,4182,4501,4178,4504,4174,4504,4174,4497,4167,4484,4169,4474,4169,4463,4176,4457,4178,4453,4180,4451,4186,4446,4191,4440,4195,4436,4203,4434,4214,4421,4229,4414,4239,4408,4250,4402,4252,4398,4256,4395,4261,4393,4265,4387,4269,4385,4271,4378,4273,4376,4276,4374,4282,4372,4286,4364,4286,4353,4288,4351,4295,4344,4297,4336,4309,4315,4307,4291,4307,4283,4307,4272,4307,4238,4307,4202,4309,4188,4316,4179,4318,4177,4318,4173,4320,4162,4331,4162,4337,4162,4337,4160,4348,4160,4356,4160,4363,4160,4367,4162,4405,4164,4447,4164,4488,4164,4526,4164,4530,4164,4532,4162,4536,4162,4539,4162,4549,4160,4553,4151,4560,4141,4564,4137,4568,4130,4575,4130,4583,4130,4585,4124,4594,4122,4596,4118,4598,4115,4604,4113,4606,4109,4611,4103,4613,4092,4619,4090,4623,4086,4626,4086,4630,4081,4632,4081,4636,4075,4642,4073,L,4640,3905,4594,3905,4594,3662,4547,3662,4526,3602,4439,3602,4379,3585,4379,3536,4339,3483,4337,3360,4259,3360,4259,3326,4172,3326,4140,3282,4140,3191,4099,3191,4029,3235,Z]],label:"Var",shortLabel:"VR",labelPosition:[338.9,410.2],labelAlignment:[CEN,MID],nextId:"FR.PR.VC"},"FR.PR.VC":{outlines:[[M,1686,2315,L,1474,2313,1474,2147,1520,2147,1520,2083,1484,2083,1484,2130,1450,2130,1448,2166,1272,2166,1208,2139,1225,2064,1270,2018,1270,1895,Q,1334,1859,1221,1820,L,1136,1820,1083,1856,1037,1946,1037,2128,1162,2128,1147,2215,1030,2215,962,2293,865,2293,863,2094,746,2094,746,2088,693,2088,646,2130,606,2130,606,2206,608,2209,710,2378,733,2389,733,2588,780,2637,795,2660,867,2730,903,2756,937,2805,982,2845,996,2953,960,2974,960,3044,1018,3102,1079,3102,1107,3142,1149,3142,1187,3169,1245,3233,1281,3261,1334,3331,1387,3362,1387,3403,1457,3403,1457,3449,1556,3449,1556,3477,1824,3479,1883,3534,1961,3534,1961,3566,2053,3566,2068,3615,2388,3615,2388,3572,2487,3572,2570,3511,2570,3413,2441,3261,2392,3233,2220,3233,2220,3155,2261,3135,2309,3089,2309,3034,2254,3034,2254,2983,2188,2983,2188,2945,2129,2945,2129,2843,2161,2802,2214,2754,2214,2679,2140,2679,2142,2567,2082,2556,1983,2506,1915,2425,1887,2351,1686,2351,Z]],label:"Vaucluse",shortLabel:"VC",labelPosition:[153.3,280],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"provencealpescotedazur",type:"maps"}}})});