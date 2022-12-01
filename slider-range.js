$(document).ready(function(){//keeps error messages hidden until error
    $('#input1-error-msg').hide();
    $('#input2-error-msg').hide();
    $('#input3-error-msg').hide();
    $('#input4-error-msg').hide();

    error_slidederA = false;
    error_slidederB = false;
    error_slidederC = false;
    error_slidederD = false;

	  $("#input1,#input2").on('change', function (){//This ensure change in unput valu is valid
        var min_row = parseInt($("#input1").val());
        var max_row = parseInt($("#input2").val());
        var inputCheck2 = /^\d*$/;

        if (!(inputCheck2.test(max_row))) {
          $('#input2').css("background-color", "red");
          $('#input2-error-msg').show();
          $('#input2').focus()
          $('#input2-error-msg').html("Input2 emty")    
        }else if(min_row == max_row){
          $('#input2').css("background-color", "red");
          $('#input2-error-msg').show();
          $('#input2').focus()
          $('#input2-error-msg').html("1&2 r equal");
        }else if(min_row > max_row){
          $('#input1').css("background-color", "orange");
          $('#input2-error-msg').show();
          // $('#input1').focus()
          $('#input2-error-msg').html("input1 is > 2");
        }else if(min_row === ""){
          $('#input1').css("background-color", "orange");
          $('#input2-error-msg').show();
          $('#input1').focus()
          $('#input2-error-msg').html("Input1 is empty");
        }  
        else{
          $('#input2-error-msg').hide();
          $('#input1').css("background-color", "green");
          $('#input2').css("background-color", "green");
          $("#input1").val(min_row);		
          $("#input2").val(max_row);
          error_slidederA = true;
            $("#slider-range").slider({
              values: [min_row, max_row]
          });
        }
	  });

	$("#input3,#input4").on('change', function (){
      var min_col = parseInt($("#input3").val());
      var max_col = parseInt($("#input4").val());  
      if(min_col == max_col){
        $('#input4').css("background-color", "red");
        $('#input4-error-msg').show();
        $('#input4').focus()
        $('#input4-error-msg').html("3&4 r equal");
      }else if(min_col > max_col){
        $('#input3').css("background-color", "orange");
        $('#input4-error-msg').show();
        $('#input4-error-msg').html("input3 is > 4");
      }else if(min_col === ""){/////////////////
        $('#input3').css("background-color", "orange");
        $('#input4-error-msg').show();
        $('#input3').focus()
        $('#input4-error-msg').html("Input3 is empty");
      }  
      else{
        $('#input4-error-msg').hide();
        $('#input3').css("background-color", "green");
        $('#input4').css("background-color", "green");
        $("#input3").val(min_col);		
        $("#input4").val(max_col);
        error_slidederB = true;
      $("#slider-rangeA").slider({
        values: [min_col, max_col]
      });
    }
	});

//This valiodates the input os key movemnest and checks for valid inputs
	$("#input1,#input2").on("paste keyup",  function (){                                        
	  var min_row = parseInt($("#input1").val());
	  var max_row = parseInt($("#input2").val());  
	  if(min_row == max_row){
      $('#input2').css("background-color", "red");
      $('#input2-error-msg').show();
      $('#input2').focus()
      $('#input2-error-msg').html("Input 1&2 are equal");
    }else if(min_row > max_row){
      $('#input1').css("background-color", "orange");
      $('#input2-error-msg').show();
      // $('#input1').focus()
      $('#input2-error-msg').html("input1 is > input2");
    }else if(min_row === ""){
      $('#input1').css("background-color", "orange");
      $('#input2-error-msg').show();
      $('#input1').focus()
      $('#input2-error-msg').html("Input1 is empty");
    }  
    else{
      $('#input2-error-msg').hide();
      $('#input1').css("background-color", "green");
      $('#input2').css("background-color", "green");
			$("#input1").val(min_row);		
			$("#input2").val(max_row);
      error_slidederC = true;
	  $("#slider-range").slider({
		    values: [min_row, max_row]
	    });
    }
	});

//This valiodates the input os key movemnest and checks for valid inputs
  $("#input3,#input4").on("paste keyup", function (){                                        
	  var min_col = parseInt($("#input3").val());
	  var max_col = parseInt($("#input4").val());  
	  if(min_col == max_col){
      $('#input4').css("background-color", "red");
      $('#input4-error-msg').show();
      $('#input4').focus()
      $('#input4-error-msg').html("Input 3&4 are equal");
    }else if(min_col > max_col){
      $('#input3').css("background-color", "orange");
      $('#input4-error-msg').show();
      $('#input4-error-msg').html("input3 is > input4");
      $('#input3').focus()

    }else if(min_col === ""){
      $('#input3').css("background-color", "orange");
      $('#input4-error-msg').show();
      $('#input3').focus()
      $('#input4-error-msg').html("Input3 is empty");
    }  
    else{
      $('#input4-error-msg').hide();
      $('#input3').css("background-color", "green");
      $('#input4').css("background-color", "green");
			$("#input3").val(min_col);		
			$("#input4").val(max_col);
      error_slidederD = true;
	  $("#slider-rangeA").slider({
		values: [min_col, max_col]
	  });
    }
	});

  // Function perthe binding of the rows values to the slider for the inputs
  $(function () {
      $("#slider-range").slider({
      range: true,
      orientation: "horizontal",
      min: -50,
      max: 50,
      values: [-50, 50],
      step: 1,

      slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
              return false;
          }
          $("#input1").val(ui.values[0]);
          $("#input2").val(ui.values[1]);
          multiplyTable(
            $('#input1').val(),
            $('#input2').val(),
            $('#input3').val(),
            $('#input4').val())
      },

    change: function (event, ui){
        if (ui.values[0] == ui.values[1]) {
          return false;
        }
        $("#input1").val(ui.values[0]);
        $("#input2").val(ui.values[1]);
        multiplyTable(
          $('#input1').val(),
          $('#input2').val(),
          $('#input3').val(),
          $('#input4').val())
    
      }
  });
	  $("#input1").val($("#slider-range").slider("values", 0));
	  $("#input2").val($("#slider-range").slider("values", 1));
	});

  // Function link binding of the column values to the slider for the inputs
  $(function () {
      $("#slider-rangeA").slider({
      range: true,
      orientation: "horizontal",
      min: -50,
      max: 50,
      values: [-50, 50],
      step: 1,

      slide: function (event, ui) {
        if (ui.values[0] == ui.values[1]) {
          return false;
        }
        $("#input3").val(ui.values[0]);
        $("#input4").val(ui.values[1]);

        multiplyTable(
          $('#input1').val(),
          $('#input2').val(),
          $('#input3').val(),
          $('#input4').val())
      },

      change: function (event, ui) {
        if (ui.values[0] == ui.values[1]) {
          return false;
        }
        
        $("#input3").val(ui.values[0]);
        $("#input4").val(ui.values[1]);
        
        multiplyTable(
          $('#input1').val(),
          $('#input2').val(),
          $('#input3').val(),
          $('#input4').val())
      }
	});

	  $("#input3").val($("#slider-rangeA").slider("values", 0));
	  $("#input4").val($("#slider-rangeA").slider("values", 1));
  
  });

/////////////////Table/////////////////
  function multiplyTable(a,b,c,d) {
    a = parseInt(a);//Parsint ensure input values are entered as numerical integer
    b = parseInt(b);
    c = parseInt(c);
    d = parseInt(d);
    //Establishes table first position value. Fucus return cusor to opropriate field to be inputed
  var table1 = document.getElementsByTagName("TABLE")[0];
    //Prior to append descendants.remove() remove prior values from table

    descendants = document.getElementsByTagName('tbody')[0];
    //onsole.log(descendants);
    descendants.remove();

    
    row = table1.insertRow();
    for (let y = c; y <= d; y++) {
      if(y === c ){
        row.insertCell().textContent='';
      }
      row.insertCell().textContent=y; 
    }
    for (let x = a; x <= b; x++) {
      row = table1.insertRow();
      row.insertCell().textContent = x;
      for(let y=c; y<=d; y++){
        row.insertCell().textContent = x*y;
      }
    }
  }

  //Opens the new window with table and the values

  let tab;
  var keepTrack = new Array();

  document.getElementById("open-tab").onclick = function(){
      var min_col = parseInt($("#input1").val());
      var max_col = parseInt($("#input2").val());
      var min_row = parseInt($("#input3").val());
      var max_row = parseInt($("#input4").val());
      
      keepTrack [keepTrack.length] = tab = window.open("", "", "width=700,height=700,resizeable,scrollbars");
      var table = document.getElementById("table-container");
      tab.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css"/></head><body>')
      //Output the user values to the new tab window
      tab.document.write('<p>'+"Table Column1 Value:",+  min_col+ '</p>')
      tab.document.write("<br>");
      tab.document.write('<p>'+"Table Column2 Value:",+ max_col+ '</p>')
      tab.document.write("<br>");
      tab.document.write('<p>'+"Table Row1 Value:",+ min_row+ '</p>')
      tab.document.write("<br>");
      tab.document.write('<p>'+"Table Row2 Value:",+ max_row+ '</p>')

      tab.document.write(table.outerHTML)
      tab.document.write();
      tab.document.close();
      if (window.focus) 
      tab.focus();
      //keepTrack.push(tab)
      console.log(keepTrack.length)
  }
  
  //Closes the current tab
  document.getElementById("close-current-tab").onclick = function(){
    tab.close(); 
  }

  //Closes all session open tab
  document.getElementById("close-all-tabs").onclick = function(){
    for(var i = 0; i < keepTrack.length; i++){
      if(!keepTrack[i].close())
      {
        keepTrack[i].close()
      }
    }
  }
  
});
