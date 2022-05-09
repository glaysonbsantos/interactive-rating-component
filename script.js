let rate_notes = document.querySelectorAll('.circle')
let btn = document.getElementById('btn')
let rating = document.querySelector('.rating')
let thank_you = document.querySelector('.thank-you')
let note = document.getElementById('note')

for (let i = 0; i < rate_notes.length; i++) {
    rate_notes[i].addEventListener('click', () => {
        let chosen_rate = rate_notes[i].innerHTML
        
        for (let i = 0; i < rate_notes.length; i++) {
            rate_notes[i].classList.contains('selected')
            rate_notes[i].classList.remove('selected')
        }

        rate_notes[i].classList.add('selected')

        btn.addEventListener('click', () => {
            rating.style.display = 'none'
            thank_you.style.display = 'block'
            note.innerHTML = chosen_rate
        })
    })
    
}