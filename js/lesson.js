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
let tab = 0


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
    tab = index
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


//
// let slideIndex = 0

 showSlides = () => {
    setInterval(()=> {
        tab++
        if (tab > tapContentBlocks.length-1) {
            tab = 0
        }
        hideTapContent()
        showTapContent(tab)
    },3000)

}
showSlides()


const usdInput = document.querySelector("#usd")
const somInput = document.querySelector("#som")
const eurInput = document.querySelector('#eur')


const converter = (element, targetElement, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (element.id === 'som') {
                targetElement.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = (element.value * data.eur/data.usd).toFixed(2)
            }
            if (element.id === 'eur'){
                targetElement.value= (element.value * data.eur).toFixed(2)
                targetElement2.value = (element.value * (data.usd/ data.eur)).toFixed(2)
            }
            if (element.value === '' || targetElement.value ===''){
                targetElement.value = ''
                targetElement2.value = ''
            }
        }
    }
}

converter(somInput, usdInput, eurInput)
converter(usdInput, somInput,eurInput)
converter(eurInput,somInput, usdInput)



// DRY - don`t repeat yourself - не повторяй самого себя !
//KISS - keep it simple stupid - делай проще, идиот!



