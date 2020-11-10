studentPromise = d3.json("/classData.json");
        
        var successFCN = function(student) {
            console.log("student performance",student);
        }
        
        var failFCN = function(err) {
            console.log("Error loading data",err);
        }
        
        studentPromise.then(successFCN,failFCN);
        
        
        
        var solve = function(data)
        {
        var xVals = data.map(function(student) {
            return student[0];
        });
        
        var yVals = data.map(function(student) {
            return student[1];
        });
        
        var xScale = d3.scaleLinear()
            .domain([0,d3.max(xVals)])
            .range([0,490]);
        
        var yScale = d3.scaleLinear()
            .domain([0,d3.max(yVals)])
            .range([390,10]);
        
        var xAxis = d3.axisBottom()
            .scale(xScale);
        
        
        
        d3.select("svg")
            .selectAll("circle")
            .data(solve)
            .enter()
            .append("circle")
            .attr("cx", function(student) {
                return xScale(student[0]);
        })
            .attr("cy", function(student) {
                return yScale(student[1]);
        })
            .attr("r", "5")
            .attr("fill", "blue")
            .on("click", function() {
                var xpos = d3.event.pageX;
                var ypos = d3.event.pageY;
            d3.select("tooltip")
                .style("left", xScale(student[0]))
                .style("top", yScale(student[1]))
                .text( "(" + student[0] + "," + student[1] + ")")
        })
        }