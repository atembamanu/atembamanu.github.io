//draw the doughnut
var doughnutArray = [
 document.getElementById('doughnut').getContext('2d'),
 document.getElementById('doughnut2').getContext('2d'), 
 document.getElementById('doughnut3').getContext('2d'), 
 document.getElementById('doughnut4').getContext('2d'),
 document.getElementById('doughnut5').getContext('2d'),
 document.getElementById('doughnut6').getContext('2d'), 
 document.getElementById('doughnut7').getContext('2d'), 
 document.getElementById('doughnut8').getContext('2d')];
for (var i = 0; i < doughnutArray.length; i++) {
  doughnutArray[i].lineWidth = 5; //thickness of the line
  doughnutArray[i].fillStyle = '#eaeaea';
  doughnutArray[i].strokeStyle = "#eaeaea";
  doughnutArray[i].beginPath();
  doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
  doughnutArray[i].stroke();
}
window.onload = function() {
    loadSkills1();
    loadSkills2();
    loadSkills3();
    loadSkills4();
    loadSkills5();
    loadSkills6();
    loadSkills7();
    loadSkills8();
  }
  /*Load skills one function*/
function loadSkills1() {
  var ctx = document.getElementById('skill1').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#2163af';
    ctx.strokeStyle = "#2163af";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 95) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 20); //speed  	
}
/*loadSkills2 function*/
function loadSkills2() {
  var ctx = document.getElementById('skill2').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#2163af';
    ctx.strokeStyle = "#2163af";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 30); //speed
}

/* loadSkill3 function*/
function loadSkills3() {
  var ctx = document.getElementById('skill3').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#2163af';
    ctx.strokeStyle = "#2163af";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 86) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 40); //speed
}
/* loadSkill4 function*/
function loadSkills4() {
  var ctx = document.getElementById('skill4').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#2163af';
    ctx.strokeStyle = "#2163af";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 96) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 50); //speed
}
  /*Load skills five function*/
  function loadSkills5() {
    var ctx = document.getElementById('skill5').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#323232';
      ctx.strokeStyle = "#2163af";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 93) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 20); //speed  	
  }
  /*Load skills six function*/
  function loadSkills6() {
    var ctx = document.getElementById('skill6').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#323232';
      ctx.strokeStyle = "#2163af";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 96) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 20); //speed  	
  }
   /*Load skills seven function*/
   function loadSkills7() {
    var ctx = document.getElementById('skill7').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#323232';
      ctx.strokeStyle = "#2163af";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 93) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 20); //speed  	
  }
  /*Load skills eight function*/
  function loadSkills8() {
    var ctx = document.getElementById('skill8').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#323232';
      ctx.strokeStyle = "#2163af";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 88) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 20); //speed  	
  }