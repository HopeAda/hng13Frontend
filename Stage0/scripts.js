let timeContainer = document.querySelector('.time span')

timeContainer.innerText = Date.now()

timeContainer.addEventListener('click', ()=>{
   timeContainer.innerText = Date.now()

})

// let fileInput = document.getElementById('fileInp')


// fileInput.addEventListener('change', (event)=>{
//    // console.log(URL.createObjectURL(event.target.files[0]))
//    document.getElementById('profile-picture').src = URL.createObjectURL(event.target.files[0])
// })

