var inp1=document.getElementById("inp")
    var result = document.getElementById("box")
    var score1=document.getElementById("sco")
    var randomno = Math.floor(Math.random()*10)+1
    score=10

    function call(){
        var inpval=inp1.value

        if(inpval == randomno){
            result.textContent="Right"
            console.log("Right")
            alert("You Won... And your score is "+score)
        }

        else{
            console.log("Wrong")
            result.textContent="Wrong"
            score-=1
            score1.textContent="Score: "+score
        }
    }