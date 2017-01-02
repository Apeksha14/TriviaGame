$("#start").on("click",function(){

$("#start").css("display","none");
$("#formdiv1").css("display","block");
$(".timediv").css("display","block");
timeCounter.start();

});

var intervalId;
var correct = 0;
var wrong = 0;
var noans = 0;
var timeCounter = {

time: 30,

reset: function() {

    timeCounter.time = 30;
    $("#time").html(timeCounter.time);
},
start: function() {

	intervalId = setInterval(timeCounter.count,1000);

},
count: function() {

     timeCounter.time--;
	 $("#time").html(timeCounter.time);
	 if(timeCounter.time === 0)
	 {

	 timeCounter.stop();
	 timeCounter.timeOut();

	}

},
stop: function() {

    clearInterval(intervalId);

 },
timeOut:function(){

	$("#timeout").html("Time Out!!");
	if($("#formdiv1").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: The Arc Reactor");
		$("#formdiv1").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/aWigfwnxzqIuc.gif");
		setTimeout(displayDiv1,3000);
	}
	if($("#formdiv2").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: Bucky Barnes");
		$("#formdiv2").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/GzhrOhL0dv9jG.gif");
		setTimeout(displayDiv2,3000);
	}
	if($("#formdiv3").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: Knowhere");
		$("#formdiv3").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/AlX6UnfVVxQiI.gif");
		setTimeout(displayDiv3,3000);
	}
	if($("#formdiv4").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: Captain Marvel");
		$("#formdiv4").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/26ybv3WJDjDb2xlIc.gif");
		setTimeout(displayDiv4,3000);
	}
	if($("#formdiv5").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: Iron Man 2");
		$("#formdiv5").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/8JcquOvfH3ARy.gif");
		setTimeout(displayDiv5,3000);
	}
	if($("#formdiv6").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was:  Matt Damon");
		$("#formdiv6").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/WqMS5HIiaa31C.gif");
		setTimeout(displayDiv6,3000);
	}
	if($("#formdiv7").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: Sif");
		$("#formdiv7").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/Viv9wKLP1BOc8.gif");
		setTimeout(displayDiv7,3000);
	}
	if($("#formdiv8").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was: Thanos");
		$("#formdiv8").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/TGP2OlbTirYXu.gif");
		setTimeout(displayDiv8,3000);
	}
	if($("#formdiv9").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was:  Black Panther");
		$("#formdiv9").css("display","none");
		$("#ans1").attr("src","https://media.giphy.com/media/eYFjD1LQVeTKw/source.gif");
		setTimeout(displayDiv9,3000);
	}
	if($("#formdiv10").css("display") === "block")
	{
		noans++;
		$("#noans").html("The correct answer was:  Vin Diesel");
		$("#formdiv10").css("display","none");
		$("#ans1").attr("src","http://i.giphy.com/znXPZJUqZLeda.gif");
		setTimeout(displayDiv10,3000);
	}

	$("#answer").css("display","block");

}
};

$("#formdiv1 button").on("click",function(){

			if($(this).val() === "arc")
				{
					correct++;
					$("#yes").html("Correct!");
					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was: The Arc Reactor");
					}

			clearInterval(timeCounter.stop());
			$("#formdiv1").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/aWigfwnxzqIuc.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv1,3000);

		});

		function displayDiv1(){
			
			reset();
			$("#formdiv2").css("display","block");

		} 



		$("#formdiv2 button").on("click",function(){

			if($(this).val() === "bucky")
				{
					correct++;
					$("#yes").html("Correct!");
				
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was:  Bucky Barnes ");
						
					}

			clearInterval(timeCounter.stop());
			$("#formdiv2").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/GzhrOhL0dv9jG.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv2,3000);
			
		});

		function displayDiv2(){

			reset();
			$("#formdiv3").css("display","block");

		}

		$("#formdiv3 button").on("click",function(){

			if($(this).val() === "know")
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was: Knowhere");
						
					}


			clearInterval(timeCounter.stop());
			$("#formdiv3").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/AlX6UnfVVxQiI.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv3,3000);
			
		});

		function displayDiv3(){

			reset();
			$("#formdiv4").css("display","block");

		}

$("#formdiv4 button").on("click",function(){

			if($(this).val() === "cmarvel")
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was: Captain Marvel");
						
					}

			clearInterval(timeCounter.stop());
			$("#formdiv4").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/26ybv3WJDjDb2xlIc.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv4,3000);

		});

		function displayDiv4(){

			reset();
			$("#formdiv5").css("display","block");

		}

$("#formdiv5 button").on("click",function(){

			if($(this).val() === "ironman")
		
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was:  Iron Man 2");

					}

			clearInterval(timeCounter.stop());
			$("#formdiv5").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/8JcquOvfH3ARy.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv5,3000);
		});

		function displayDiv5(){

			reset();
			$("#formdiv6").css("display","block");

		}

$("#formdiv6 button").on("click",function(){

			if($(this).val() === "matt")
		
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was: Matt Damon");

					}

			clearInterval(timeCounter.stop());
			$("#formdiv6").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/WqMS5HIiaa31C.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv6,3000);
		});

		function displayDiv6(){

			reset();
			$("#formdiv7").css("display","block");

		}

$("#formdiv7 button").on("click",function(){

			if($(this).val() === "sif")
		
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was:  Sif");

					}

			clearInterval(timeCounter.stop());
			$("#formdiv7").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/Viv9wKLP1BOc8.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv7,3000);
		});

		function displayDiv7(){

			reset();
			$("#formdiv8").css("display","block");

		}

$("#formdiv8 button").on("click",function(){

			if($(this).val() === "thanos")
		
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was: Thanos");

					}

			clearInterval(timeCounter.stop());
			$("#formdiv8").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/TGP2OlbTirYXu.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv8,3000);
		});

		function displayDiv8(){

			reset();
			$("#formdiv9").css("display","block");

		}

$("#formdiv9 button").on("click",function(){

			if($(this).val() === "panther")
		
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was:  Black Panther");

					}

			clearInterval(timeCounter.stop());
			$("#formdiv9").css("display","none");
			$("#ans1").attr("src","https://media.giphy.com/media/eYFjD1LQVeTKw/source.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv9,3000);
		});

		function displayDiv9(){

			reset();
			$("#formdiv10").css("display","block");

		}

$("#formdiv10 button").on("click",function(){

			if($(this).val() === "vin")
		
				{
					correct++;
					$("#yes").html("Correct!");

					
				}

				else
					{
						wrong++;
						$("#no").html("Nope!");
						$("#noans").html("The correct answer was: Vin Diesel");

					}

			clearInterval(timeCounter.stop());
			$("#formdiv10").css("display","none");
			$("#ans1").attr("src","http://i.giphy.com/znXPZJUqZLeda.gif");
			$("#answer").css("display","block");
			setTimeout(displayDiv10,3000);
		});

		function displayDiv10(){

			
			$("#answer").css("display","none");
			$("#formdiv11").css("display","block");
			$("#correct").html(correct);
			$("#wrong").html(wrong);
		 	$("#unans").html(noans);
		
		}

	$("#startover").on("click",function(){

			reset();
			correct = 0;wrong=0;noans=0;
			$("#formdiv11").css("display","none");
			$("#correct").html("");
			$("#wrong").html("");
			$("#unans").html("");
			$("#formdiv1").css("display","block");


	});



	 function reset()
	 	{
			timeCounter.reset();
			timeCounter.start();
			$("#yes").html("");
			$("#no").html("");
			$("#noans").html("");
			$("#timeout").html("");
			$("#answer").css("display","none");

		}


