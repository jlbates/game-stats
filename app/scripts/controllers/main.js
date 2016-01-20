'use strict';

/**
 * @ngdoc function
 * @name ns2StatsProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ns2StatsProjectApp
 */
angular.module('ns2StatsProjectApp')
  .controller('MainCtrl', function($scope) {

    //Team win / loss data
    $scope.winLossData = [{'winner':'1','count':'355','group1':'1'},{'winner':'2','count':'383','group1':'2'}];
    // var foo = JSON.stringify($scope.winLossData);
    // console.log(foo);

    //Map rotation data
    $scope.mapCycleData = [{'map':'ns2_Stratos','numRounds':'3','group1':'ns2_Stratos'},{'map':'ns2_biodome','numRounds':'59','group1':'ns2_biodome'},{'map':'ns2_caged','numRounds':'7','group1':'ns2_caged'},{'map':'ns2_combi','numRounds':'18','group1':'ns2_combi'},{'map':'ns2_derelict','numRounds':'16','group1':'ns2_derelict'},{'map':'ns2_descent','numRounds':'60','group1':'ns2_descent'},{'map':'ns2_docking','numRounds':'95','group1':'ns2_docking'},{'map':'ns2_eclipse','numRounds':'29','group1':'ns2_eclipse'},{'map':'ns2_forge','numRounds':'1','group1':'ns2_forge'},{'map':'ns2_forgotten','numRounds':'2','group1':'ns2_forgotten'},{'map':'ns2_fracture','numRounds':'1','group1':'ns2_fracture'},{'map':'ns2_fusion','numRounds':'4','group1':'ns2_fusion'},{'map':'ns2_gorge','numRounds':'1','group1':'ns2_gorge'},{'map':'ns2_gorgon','numRounds':'2','group1':'ns2_gorgon'},{'map':'ns2_honorguard','numRounds':'2','group1':'ns2_honorguard'},{'map':'ns2_hydra','numRounds':'2','group1':'ns2_hydra'},{'map':'ns2_jambi','numRounds':'8','group1':'ns2_jambi'},{'map':'ns2_kodiak','numRounds':'13','group1':'ns2_kodiak'},{'map':'ns2_mineral','numRounds':'4','group1':'ns2_mineral'},{'map':'ns2_mineshaft','numRounds':'74','group1':'ns2_mineshaft'},{'map':'ns2_new_mineshaft','numRounds':'13','group1':'ns2_new_mineshaft'},{'map':'ns2_nexus','numRounds':'2','group1':'ns2_nexus'},{'map':'ns2_nothing','numRounds':'7','group1':'ns2_nothing'},{'map':'ns2_orbital','numRounds':'1','group1':'ns2_orbital'},{'map':'ns2_outerrimark','numRounds':'7','group1':'ns2_outerrimark'},{'map':'ns2_prison','numRounds':'5','group1':'ns2_prison'},{'map':'ns2_refinery','numRounds':'83','group1':'ns2_refinery'},{'map':'ns2_spaceship','numRounds':'6','group1':'ns2_spaceship'},{'map':'ns2_summit','numRounds':'72','group1':'ns2_summit'},{'map':'ns2_tram','numRounds':'56','group1':'ns2_tram'},{'map':'ns2_triad','numRounds':'2','group1':'ns2_triad'},{'map':'ns2_uplift','numRounds':'5','group1':'ns2_uplift'},{'map':'ns2_veil','numRounds':'50','group1':'ns2_veil'},{'map':'ns2_veil_five','numRounds':'25','group1':'ns2_veil_five'},{'map':'ns2_waterdome','numRounds':'5','group1':'ns2_waterdome'},{'map':'ns2_yakushima','numRounds':'4','group1':'ns2_yakushima'},{'map':'ns2_yana','numRounds':'12','group1':'ns2_yana'}];

    // Map duration played
    $scope.mapDurationData = [{'map':'ns2_Stratos','length_sum':'3042.72','group1':'ns2_Stratos'},{'map':'ns2_biodome','length_sum':'59122.73','group1':'ns2_biodome'},{'map':'ns2_caged','length_sum':'5791.97','group1':'ns2_caged'},{'map':'ns2_combi','length_sum':'22503.52','group1':'ns2_combi'},{'map':'ns2_derelict','length_sum':'14690.16','group1':'ns2_derelict'},{'map':'ns2_descent','length_sum':'55219.81','group1':'ns2_descent'},{'map':'ns2_docking','length_sum':'87748.39','group1':'ns2_docking'},{'map':'ns2_eclipse','length_sum':'23707.02','group1':'ns2_eclipse'},{'map':'ns2_forge','length_sum':'895.73','group1':'ns2_forge'},{'map':'ns2_forgotten','length_sum':'1527.83','group1':'ns2_forgotten'},{'map':'ns2_fracture','length_sum':'689.67','group1':'ns2_fracture'},{'map':'ns2_fusion','length_sum':'1983.3','group1':'ns2_fusion'},{'map':'ns2_gorge','length_sum':'313.62','group1':'ns2_gorge'},{'map':'ns2_gorgon','length_sum':'1377.25','group1':'ns2_gorgon'},{'map':'ns2_honorguard','length_sum':'1732.73','group1':'ns2_honorguard'},{'map':'ns2_hydra','length_sum':'1649.13','group1':'ns2_hydra'},{'map':'ns2_jambi','length_sum':'5924.83','group1':'ns2_jambi'},{'map':'ns2_kodiak','length_sum':'13531.74','group1':'ns2_kodiak'},{'map':'ns2_mineral','length_sum':'2547.93','group1':'ns2_mineral'},{'map':'ns2_mineshaft','length_sum':'67289.08','group1':'ns2_mineshaft'},{'map':'ns2_new_mineshaft','length_sum':'13296.31','group1':'ns2_new_mineshaft'},{'map':'ns2_nexus','length_sum':'2000.17','group1':'ns2_nexus'},{'map':'ns2_nothing','length_sum':'3800.41','group1':'ns2_nothing'},{'map':'ns2_orbital','length_sum':'1232.96','group1':'ns2_orbital'},{'map':'ns2_outerrimark','length_sum':'6965.26','group1':'ns2_outerrimark'},{'map':'ns2_prison','length_sum':'5447.54','group1':'ns2_prison'},{'map':'ns2_refinery','length_sum':'68584.22','group1':'ns2_refinery'},{'map':'ns2_spaceship','length_sum':'6850.09','group1':'ns2_spaceship'},{'map':'ns2_summit','length_sum':'54019.29','group1':'ns2_summit'},{'map':'ns2_tram','length_sum':'48471.19','group1':'ns2_tram'},{'map':'ns2_triad','length_sum':'1093.27','group1':'ns2_triad'},{'map':'ns2_uplift','length_sum':'3211.46','group1':'ns2_uplift'},{'map':'ns2_veil','length_sum':'50830.29','group1':'ns2_veil'},{'map':'ns2_veil_five','length_sum':'22740.86','group1':'ns2_veil_five'},{'map':'ns2_waterdome','length_sum':'5058.02','group1':'ns2_waterdome'},{'map':'ns2_yakushima','length_sum':'3336.06','group1':'ns2_yakushima'},{'map':'ns2_yana','length_sum':'10239.86','group1':'ns2_yana'}];

    //Tutorial data
    //$scope.data = [4, 8, 15, 16, 23, 42];


    var width = 717,
        height = 500;

    var y = d3.scale.linear()
        .range([height, 0]);

    var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);

    d3.tsv('../../resources/tsv/testdata.tsv', type, function(error, data) {
      y.domain([0, d3.max(data, function(d) { return d.value; })]);

      var barWidth = width / data.length;

      var bar = chart.selectAll('g')
          .data(data)
        .enter().append('g')
          .attr('transform', function(d, i) { return 'translate(' + i * barWidth + ',0)'; });

      bar.append('rect')
          .attr('y', function(d) { return y(d.value); })
          .attr('height', function(d) { return height - y(d.value); })
          .attr('width', barWidth - 1);

      bar.append('text')
          .attr('x', barWidth / 2)
          .attr('y', function(d) { return y(d.value) + 3; })
          .attr('dy', '.75em')
          .text(function(d) { return d.value; });
    });

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }

    // d3.select('#chart-test')
    // .style('color', 'black')
    // .style('background-color', 'red');

    // d3.selectAll('h1')
    // .attr('class', 'special')
    // .append('div')
    // .html('Hello, world!');

    // var section = d3.selectAll('#chart-test');
    // section.append('div')
    //     .html('First!');
    // section.append('div')
    //     .html('Second.');

    // // Static bar chart without SVG
    // // Get the scale for the chart based on the data
    // var x = d3.scale.linear()
    // .domain([0, d3.max($scope.data)])
    // .range([0, 420]);
    //
    // //Draw the bar chart using our computed scaler
    // d3.select('.bar-chart')
    //   .selectAll('div')
    //     .data($scope.data)
    //   .enter().append('div')
    //     .style('width', function(d) { return x(d) + 'px'; })
    //     .text(function(d) { return d; });

    // //The same bar chart with SVG and D3
    // var data = [4, 8, 15, 16, 23, 42];
    // var width = 420,
    // barHeight = 20;
    //
    // //Linear scale of chart size based on dataset
    // var x = d3.scale.linear()
    //     .domain([0, d3.max(data)])
    //     .range([0, width]);
    //
    // //Select elements with chart class and set width and height
    // var chart = d3.select('.chart')
    //     .attr('width', width)
    //     .attr('height', barHeight * data.length);
    //
    // // Select SVG G element and append the needed number of elements for the dataset we pass.
    // // For each element, add transform svg attribute, computing the values needed through a function based on barHeight of 20px
    // var bar = chart.selectAll('g')
    //     .data(data)
    //   .enter().append('g')
    //     .attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });
    //
    // // For each G elemnt we've created (row in bar chart), draw a svg rect with our computed width and height
    // bar.append('rect')
    //     .attr('width', x)
    //     .attr('height', barHeight - 1);
    //
    // // Append the text element to each G element. Return
    // bar.append('text')
    //     .attr('x', function(d) { return x(d) - 3; })
    //     .attr('y', barHeight / 2)
    //     .attr('dy', '.35em')
    //     .text(function(d) { return d; });


    // // ASYNC BAR chart Tutorial
    // var width = 420,
    // barHeight = 20;
    //
    // var x = d3.scale.linear()
    //     .range([0, width]);
    //
    // var chart = d3.select('.chart')
    //     .attr('width', width);
    //
    // // The data fetch with it's callback
    // // Set draw width and height here in the callback so the page will draw properly based on data that comes back
    // d3.tsv('../../resources/tsv/testdata.tsv', type, function(error, data) {
    //   x.domain([0, d3.max(data, function(d) { return d.value; })]);
    //
    //   chart.attr('height', barHeight * data.length);
    //
    //   var bar = chart.selectAll('g')
    //       .data(data)
    //     .enter().append('g')
    //       .attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });
    //
    //   bar.append('rect')
    //       .attr('width', function(d) { return x(d.value); })
    //       .attr('height', barHeight - 1);
    //
    //   bar.append('text')
    //       .attr('x', function(d) { return x(d.value) - 3; })
    //       .attr('y', barHeight / 2)
    //       .attr('dy', '.35em')
    //       .text(function(d) { return d.value; });
    // });
    //
    // function type(d) {
    //   d.value = +d.value; // coerce to number
    //   return d;
    // }


  });
