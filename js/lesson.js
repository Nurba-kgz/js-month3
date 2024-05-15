//PHON

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tapContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


const hideTapContent = () => {
    tapContentBlocks.forEach((item) => {
         item.style.display = 'none'
    })
    tabContentItems.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })
}

const showTapContent = (index = 0) => {
    tapContentBlocks[index].style.display ='block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTapContent()
showTapContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item , index) => {
            if (event.target === item) {
                hideTapContent()
                showTapContent(index)
            }
        })
    }
}



let slideIndex = 0

function showSlides() {
    for(let i = 0; i < tapContentBlocks.length; i++) {
        tapContentBlocks[i].style.display = 'none'
    }
    slideIndex++
    if (slideIndex > tapContentBlocks.length) {
        slideIndex = 1
    }
    tapContentBlocks [slideIndex - 1].style.display = 'block'
    setTimeout(showSlides,3000)
}
showSlides()


