
$(document).ready(function() {


    var chaSiuBaoPrice = null;
    var harGowPrice = null;
    var wuGokPrice = null;
    var zongZiPrice = null;

    var chenShifuAmount = null;
    var yourBillAmount = 0;

    var wins = 0;
    var losses = 0;
    $("#htmlWins").html("Meals paid: " + wins);
    $("#htmlLosses").html("Arrests: " + losses);
    
    function resetGame() {
        // randomizes Chen Shifu $ and food prices
        chenShifuAmount = Math.floor(Math.random()*101 + 19);
        chaSiuBaoPrice = Math.floor(Math.random()*11 + 1);
        harGowPrice = Math.floor(Math.random()*11 + 1);
        wuGokPrice = Math.floor(Math.random()*11 + 1);
        zongZiPrice = Math.floor(Math.random()*11 + 1);

        yourBillAmount = 0;

        // for DEV
        console.log("Chen Shifu $: " + chenShifuAmount);
        console.log("Cha siu bao price: " + chaSiuBaoPrice);
        console.log("Har gow price: " + harGowPrice);
        console.log("Wu gok price: " + wuGokPrice);
        console.log("Zong zi price: " + zongZiPrice);

        $("#htmlChenShifu").html("Chen Shifu gave you $" + chenShifuAmount);
        addBill();
    }
    resetGame();

    // prints bill
    function addBill() {
        $("#htmlYourBill").html("Your bill is $" + yourBillAmount);
    };
    addBill();

    // win / lose alerts
    function winOrLose() {
        if (yourBillAmount === chenShifuAmount) {
            wins += 1;
            $("#htmlWins").html("Meals paid: " + wins);
            alert("You win. You paid in full! Good on you.");
            resetGame();
        } else if (yourBillAmount > chenShifuAmount) {
            losses += 1;
            $("#htmlLosses").html("Arrests: " + losses);
            alert("GAME OVER. You got arrested for not being able to pay the bill!");
            resetGame();
        }
    };

    // Restart game
    $("#restartButton").on("click", function() {
        resetGame();
    });


    // Food item click events
    $("#chaSiuBao").on("click", function() {
        yourBillAmount += chaSiuBaoPrice;
        addBill();
        winOrLose();
    });

    $("#harGow").on("click", function() {
        yourBillAmount += harGowPrice;
        addBill();
        winOrLose();
    });

    $("#wuGok").on("click", function() {
        yourBillAmount += wuGokPrice;
        addBill();
        winOrLose();
    });

    $("#zongZi").on("click", function() {
        yourBillAmount += zongZiPrice;
        addBill();
        winOrLose();
    });



    // MUSIC
    var chineseMusic = document.createElement("audio");
    chineseMusic.setAttribute("src", "assets/music/traditional-chinese-music.mp3");

    // Play / Pause buttons
    $(".play-button").on("click", function() {
        chineseMusic.play();
    });
    $(".pause-button").on("click", function() {
        chineseMusic.pause();
    });

    



});
