let details = [
  {
    image: "Images/img1.jpg",
    name: "Jhon",
    description: "Jhon a perfect web developer. I like to develope web applications and i have 5 years of exprience."
}, {
    image: "Images/img2.jpg",
    name: "Alexa",
    description: "Alexa a perfect Full Stack Developer. I like to develope web applications, backend, ui/ux  and i have 10 years of exprience."
}, {
    image: "Images/img3.jpg",
    name: "Rohan",
    description: "Rohan a perfect Full Stack Developer. I like to develope fontend, backend, ui/ux  and i have 15 years of exprience."
}, {
    image: "Images/img4.jpg",
    name: "Anglena",
    description: "Anglena a application developer . I like to develope web applications, mobile application and much more. I have 10 years of exprience."
}, {
    image: "Images/img5.jpg",
    name: "Dharmesh",
    description: "Dharmesh a Full Stack Developer and a Game Developer. I develope hundreds of web applications, Games and i have 20 years of exprience."
}
]

let img = document.getElementById('img')
let name = document.getElementById('name')
let description = document.getElementById('description')
let btn = document.querySelectorAll('.btn')
let btnLeft = document.getElementsByClassName('btnLeft')
let btnRight = document.getElementsByClassName('btnRight')
let counter = 0

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.classList.contains('btnRight')) {
      counter++
      if (counter > details.length - 1) { counter = 0 }
      img.style.backgroundImage = `url(${details[counter].image})`

      name.innerHTML = `${details[counter].name}`

      description.innerHTML = `${details[counter].description}`
    }
    if (btn.classList.contains('btnLeft')) {
      counter--

      if (counter < 0) {
        counter = details.length - 1
      }
      img.style.backgroundImage = `url(${details[counter].image})`

      name.innerHTML = `${details[counter].name}`

      description.innerHTML = `${details[counter].description}`

    }
  })
})