document.querySelector(".box-serdse").addEventListener("click", off)
function off(){
    document.querySelector(".box-serdse").classList.add("an")
    document.querySelector(".audio_two").play()
    setTimeout(function(){
        document.querySelector(".box-serdse").remove()
    },1400)
    document.querySelector(".text_one").textContent = "Нажми на открытку"
}

document.querySelector(".card").addEventListener("click", off_2)
function off_2(){
    document.querySelector(".part_two").classList.add("off_2")
    document.querySelector(".audio_fo").play()
    setTimeout(function(){
        document.querySelector(".part_two").classList.add("left")
    },900)
    document.querySelector(".text_one").textContent = "Нажми на розу"
}   

document.querySelector(".rouse").addEventListener("click", noned)
function noned(){
    document.querySelector(".box_part").classList.add("fld")
    setTimeout(function(){
        document.querySelector(".box_part").style.display = "none"
    }, 900)
    document.querySelector(".box_two").style.display = "flex"
    document.querySelector(".text_one").textContent = "Нажми на белую часть"

}

document.querySelector(".box_two_startList").addEventListener("click", fffff)
function fffff(){
    document.querySelector(".box_two").classList.add("faa")
    document.querySelector(".audio_free").play()
    setTimeout(function(){
        document.querySelector(".box_two").style.display = "none"
    }, 900)
    document.querySelector(".box_free").style.display = "flex"
    document.querySelector(".text_one").textContent = "А теперь читай :)"
}

document.querySelector(".round_container").addEventListener("click", audio)

function audio(){
    document.querySelector(".audio_one").play()
}
setTimeout(function(){
    document.querySelector(".text_one").textContent = "Нажми на сердечко"
},9000)
