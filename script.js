const audio1 = document.querySelector('.audio1'),
      audio2 = document.querySelector('.audio2'),
      audio3 = document.querySelector('.audio3'),
      audio4 = document.querySelector('.audio4'),
      audio5 = document.querySelector('.audio5'),
      audio6 = document.querySelector('.audio6'),
      audio7 = document.querySelector('.audio7'),
      audio8 = document.querySelector('.audio8'),
      audio9 = document.querySelector('.audio9'),
      audio10 = document.querySelector('.audio10'),
      audio11 = document.querySelector('.audio11'),
      audio12 = document.querySelector('.audio12'),
      audio13 = document.querySelector('.audio13'),
      nameSong1 = document.querySelector('.nameSong1'),
      nameSong2 = document.querySelector('.nameSong2'),
      nameSong3 = document.querySelector('.nameSong3'),
      nameSong4 = document.querySelector('.nameSong4'),
      nameSong5 = document.querySelector('.nameSong5'),
      nameSong6 = document.querySelector('.nameSong6'),
      nameSong7 = document.querySelector('.nameSong7'),
      nameSong8 = document.querySelector('.nameSong8'),
      nameSong9 = document.querySelector('.nameSong9'),
      nameSong10 = document.querySelector('.nameSong10'),
      nameSong11 = document.querySelector('.nameSong11'),
      nameSong12 = document.querySelector('.nameSong12'),
      nameSong13 = document.querySelector('.nameSong13'),
      albumImage = document.getElementById('album'),
      playStop1 = document.getElementById('1'),
      playStop2 = document.getElementById('2'),
      playStop3 = document.getElementById('3'),
      playStop4 = document.getElementById('4'),
      playStop5 = document.getElementById('5'),
      playStop6 = document.getElementById('6'),
      playStop7 = document.getElementById('7'),
      playStop8 = document.getElementById('8'),
      playStop9 = document.getElementById('9'),
      playStop10 = document.getElementById('10'),
      playStop11 = document.getElementById('11'),
      playStop12 = document.getElementById('12'),
      playStop13 = document.getElementById('13'),
      avatar = document.querySelector('.avatarInst'),
      link = document.querySelector('.link')



let stop = true


function loadSong(nameSong,playStop,audio) {
    stop = false
    audio.play()
    nameSong.classList.add('play')
    albumImage.classList.add('active')
    playStop.textContent = '❚❚'

}

function stopSong(nameSong,playStop,audio) {
    stop = true
    audio.pause()
    nameSong.classList.remove('play')
    albumImage.classList.remove('active')
    playStop.textContent = 'ᐅ'

}



nameSong1.addEventListener('click', () =>{
    stop===true?loadSong(nameSong1,playStop1,audio1):stopSong(nameSong1,playStop1,audio1)
})


nameSong2.addEventListener('click', () =>{

    stop===true?loadSong(nameSong2,playStop2,audio2):stopSong(nameSong2,playStop2,audio2)
})

nameSong3.addEventListener('click', () =>{

    stop===true?loadSong(nameSong3,playStop3,audio3):stopSong(nameSong3,playStop3,audio3)
})

nameSong4.addEventListener('click', () =>{

    stop===true?loadSong(nameSong4,playStop4,audio4):stopSong(nameSong4,playStop4,audio4)
})

nameSong5.addEventListener('click', () =>{

    stop===true?loadSong(nameSong5,playStop5,audio5):stopSong(nameSong5,playStop5,audio5)
})

nameSong6.addEventListener('click', () =>{

    stop===true?loadSong(nameSong6,playStop6,audio6):stopSong(nameSong6,playStop6,audio6)
})

nameSong7.addEventListener('click', () =>{

    stop===true?loadSong(nameSong7,playStop7,audio7):stopSong(nameSong7,playStop7,audio7)
})

nameSong8.addEventListener('click', () =>{

    stop===true?loadSong(nameSong8,playStop8,audio8):stopSong(nameSong8,playStop8,audio8)
})

nameSong9.addEventListener('click', () =>{

    stop===true?loadSong(nameSong9,playStop9,audio9):stopSong(nameSong9,playStop9,audio9)
})

nameSong10.addEventListener('click', () =>{

    stop===true?loadSong(nameSong10,playStop10,audio10):stopSong(nameSong10,playStop10,audio10)
})

nameSong11.addEventListener('click', () =>{

    stop===true?loadSong(nameSong11,playStop11,audio11):stopSong(nameSong11,playStop11,audio11)
})

nameSong12.addEventListener('click', () =>{

    stop===true?loadSong(nameSong12,playStop12,audio12):stopSong(nameSong12,playStop12,audio12)
})

nameSong13.addEventListener('click', () =>{

    stop===true?loadSong(nameSong13,playStop13,audio13):stopSong(nameSong13,playStop13,audio13)
})

avatar.addEventListener('mousemove',()=>{
    avatar.src = 'images/instagram_icon-8.png'
    link.style.visibility = 'visible'

})

avatar.addEventListener('mouseleave',()=>{
    avatar.src = 'images/instAva.JPG'
    link.style.visibility = 'hidden'

})





