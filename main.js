(async function() {
	// localStorage.setItem("example_project", "D3: Choropleth");

	// Define body
	const body = d3.select("body");

	const margin = { top: 50, right: 50, bottom: 100, left: 60 };
	const innerWidth = window.innerWidth;
	const width = innerWidth - margin.left - margin.right;
	const height = 600 - margin.top - margin.bottom;

	let svg = d3
		.select("#chart")
		.append("svg")
		.attr("width", width)
		.attr("height", height + margin.top + margin.bottom)
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Define the div for the tooltip
	// const tooltip = body
	// 	.append("div")
	// 	.attr("class", "tooltip")
	// 	.attr("id", "tooltip")
	// 	.style("opacity", 0);

	// const unemployment = d3.map();

	const path = d3.geoPath();

	// const x = d3
	// 	.scaleLinear()
	// 	.domain([2.6, 75.1])
	// 	.rangeRound([600, 860]);

	// const color = d3
	// 	.scaleThreshold()
	// 	.domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
	// 	.range(d3.schemeGreens[9]);

	const COUNTY_FILE =
		"https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json";
	const EDUCATION_FILE =
		"https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json";

	const us = await d3.json(COUNTY_FILE).catch(e => console.log(e));
	const education = await d3.json(EDUCATION_FILE).catch(e => console.log(e));

	/**
	 * arcs: []
	 * bbox: (4) [-56.77775821661018, 12.469025989284091, 942.7924311762474, 596.9298966319916]
	 * objects: {counties: {…}, states: {…}, nation: {…}}
	 * transform: {scale: Array(2), translate: Array(2)}
	 * type: "Topology"
	 */
	console.log(us);
	/**
	 * area_name: "Autauga County"
	 * bachelorsOrHigher: 21.9
	 * fips: 1001
	 * state: "AL"
	 */
	console.log(education);

	// svg
	// 	.append("g")
	// 	.attr("class", "counties")
	// 	.selectAll("path")
	// 	.data(topojson.feature(us, us.objects.counties).features)
	// 	.enter()
	// 	.append("path")
	// 	.attr("class", "county")
	// 	.attr("data-fips", d => d.id)
	// 	.attr("data-education", d => {
	// 		const result = education.filter(obj => obj.fips == d.id);
	// 		if (result[0]) {
	// 			return result[0].bachelorsOrHigher;
	// 		}
	// 		//could not find a matching fips id in the data
	// 		console.log("could find data for: ", d.id);
	// 		return 0;
	// 	})
	// 	.attr("fill", d => {
	// 		const result = education.filter(obj => obj.fips == d.id);
	// 		if (result[0]) {
	// 			return color(result[0].bachelorsOrHigher);
	// 		}
	// 		//could not find a matching fips id in the data
	// 		return color(0);
	// 	})
	// 	.attr("d", path);

	// svg
	// 	.append("path")
	// 	.datum(
	// 		topojson.mesh(us, us.objects.states, function(a, b) {
	// 			return a !== b;
	// 		})
	// 	)
	// 	.attr("class", "states")
	// 	.attr("d", path);
})();
