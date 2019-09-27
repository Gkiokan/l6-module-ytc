//Including Vue
import Vue from 'vue';

// Include the vue-fusioncharts component
import VueFusionCharts from 'vue-fusioncharts';

//Include the FusionCharts library
import FusionCharts from 'fusioncharts';

//Include the chart type
import Charts from 'fusioncharts/fusioncharts.charts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import Gantt from 'fusioncharts/fusioncharts.gantt';
import Treemap from 'fusioncharts/fusioncharts.treemap';
import Zoomscatter from 'fusioncharts/fusioncharts.zoomscatter';
import Zoomline from 'fusioncharts/fusioncharts.zoomline';
import OverlapBar from 'fusioncharts/fusioncharts.overlappedbar2d';
import OverlapColumn from 'fusioncharts/fusioncharts.overlappedcolumn2d';
import Maps from 'fusioncharts/fusioncharts.maps';
import ExcelExport from 'fusioncharts/fusioncharts.excelexport';

import World from './maps/fusioncharts.world';
import Worldwithcountries from './maps/fusioncharts.worldwithcountries';
import World8 from './maps/fusioncharts.world8';
import Europa from './maps/fusioncharts.europe';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts,
       Charts, PowerCharts, Widgets, Gantt, Treemap, Zoomscatter, Zoomline, OverlapBar, OverlapColumn,
       Maps, World, World8, Worldwithcountries, Europa,
       ExcelExport, FusionTheme, CandyTheme)

import x from './fusionChartTheme/candy';
FusionCharts.register('theme', x)
