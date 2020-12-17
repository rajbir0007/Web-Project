var playing=false;
var score;
var trialsLeft;
var step;
var action;
var fruits=['apple','mango','banana','grapes','orange','peach','pear','pineapple','watermelon'];
$(function()
{
$("#startreset").click(function()
{
if(playing==true){
    location.reload();
}
else{
    playing=true;
    score=0;
    $("#scorevalue").html(score);
    $("#trialsLeft").show(); 
    trialsLeft=3;
    addHearts();
    $("#gameOver").hide();   /*jdh khel k hatge dubara reset kita */

    $("#startreset").html("Reset game")
     startAction();
}

});

/*cutting fruit*/
$("#fruit1").mouseover(function()
{
score++;
$("#scorevalue").html(score);
clearInterval(action);/*we want to hide it bt using jquery UI*/
$("#fruit1").hide("explode",500);

setTimeout(startAction,500);
});







function addHearts()
{
    $('#trialsLeft').empty();
    for(i=0;i<trialsLeft;i++)
    {
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

function startAction()
{
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-100});
    step=1+Math.round(5*Math.random());


    action=setInterval(function()
    {
$("#fruit1").css('top',$("#fruit1").position().top+step)
if($("#fruit1").position().top>$("#fruitsContainer").height())
{
    if(trialsLeft>1){
        $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-100});
    step=1+Math.round(5*Math.random());

       trialsLeft--;
       addHearts();

    }
    else{
        playing=false;
        $("#startreset").html("Start Game");
$("#gameOver").show();

$("#gameOver").html('<p>game over</p><p>your score '+score+'</p>');
$('#trialsLeft').hide();
stopAction();
    }
}

    },10);
}

function chooseFruit()
{
$("#fruit1").attr('src','images/'+fruits[Math.round(8*Math.random())]+'.png');
}


function stopAction()   /* stop fruits coming down*/
{
    clearInterval(action);
   $("#fruit1").hide();
}

});