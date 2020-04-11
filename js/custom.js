d3.select('#photos')
    .on('mousemove', function() {
        var pos = d3.mouse(this);
        d3.timer.flush();
        d3.timer(function() {
            d3.select('#sep').style("left", pos[0] + 'px');
            d3.select('#photo-before').node().style.clip = 'rect(0px ' + pos[0] + 'px 9999999px 0px)';
            return true;
        }, 0);
    });
    
    
d3.select('#photos-1')
    .on('mousemove', function() {
        var pos = d3.mouse(this);
        d3.timer.flush();
        d3.timer(function() {
            d3.select('#sep-1').style("left", pos[0] + 'px');
            d3.select('#photo-before-1').node().style.clip = 'rect(0px ' + pos[0] + 'px 9999999px 0px)';
            return true;
        }, 0);
    });