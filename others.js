const legend = svg
	.append("g")
	.attr("class", "key")
	.attr("id", "legend")
	.attr("transform", "translate(0,40)");

legend
	.selectAll("rect")
	.data(
		color.range().map(function(d) {
			d = color.invertExtent(d);
			if (d[0] == null) d[0] = x.domain()[0];
			if (d[1] == null) d[1] = x.domain()[1];
			return d;
		})
	)
	.enter()
	.append("rect")
	.attr("height", 8)
	.attr("x", function(d) {
		return x(d[0]);
	})
	.attr("width", function(d) {
		return x(d[1]) - x(d[0]);
	})
	.attr("fill", function(d) {
		return color(d[0]);
	});

legend
	.append("text")
	.attr("class", "caption")
	.attr("x", x.range()[0])
	.attr("y", -6)
	.attr("fill", "#000")
	.attr("text-anchor", "start")
	.attr("font-weight", "bold");

const axisXLegend = d3
	.axisBottom(x)
	.tickSize(13)
	.tickFormat(x => Math.round(x) + "%")
	.tickValues(color.domain());

legend
	.call(axisXLegend)
	.select(".domain")
	.remove();

svg
	.on("mouseover", d => {
		tooltip.style("opacity", 0.9);
		tooltip
			.html(() => {
				const result = education.filter(obj => obj.fips == d.id);
				if (result[0]) {
					return `${result[0]["area_name"]}, ${result[0]["state"]}: ${
						result[0].bachelorsOrHigher
					}%`;
				}
				//could not find a matching fips id in the data
				return 0;
			})
			.attr("data-education", () => {
				const result = education.filter(obj => obj.fips == d.id);
				if (result[0]) {
					return result[0].bachelorsOrHigher;
				}
				//could not find a matching fips id in the data
				return 0;
			})
			.style("left", d3.event.pageX + 10 + "px")
			.style("top", d3.event.pageY - 28 + "px");
	})
	.on("mouseout", d => {
		tooltip.style("opacity", 0);
	});
