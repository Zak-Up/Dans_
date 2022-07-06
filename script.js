/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
    // reset: true,
})

sr.reveal(`.col-alejo, .cards_a`)
sr.reveal(`.home__handle`, {delay: 50})
sr.reveal(`.col-audio`, {delay: 600, origin: 'bottom'})