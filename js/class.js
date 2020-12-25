import {Table} from './Table.js'
import {preload} from './preload.js'

const itemTab = document.querySelector('.table__body-wrap'),
      itemClearInput = document.querySelector('.clear-input'),
      inputSearch = document.querySelector('.search__input'),
      tableMessage = document.querySelector('.table__message')
let arrRenderFullName = []
let arrSearchName = []

let promise = new Promise((resolve,reject) =>{
    resolve()
})
    .then(resp => {
           return  preload()   
    })
   .then(url => fetch('https://randomuser.me/api/?results=15'))
   .then(response => response.json())
   .then(resp => {
        for(let i = 0; i < resp.results.length; i++) {
            new Table(resp.results[i]).render(itemTab)
            arrRenderFullName.push(resp.results[i])
        }
        showLargeImg()
    })
    .then(resp => {
        inputSearch.addEventListener('input', (e) => {
            itemTab.innerHTML = ''
            arrSearchName = []
            debunce(getFullName, renderSearchFullName)
            setTimeout(() => {
                if(arrSearchName.length === 0) {
                    tableMessage.style.display = 'block'
                } else {
                    tableMessage.style.display = 'none'
                }
            }, 500)
        })

        itemClearInput.addEventListener('click', (e) => {
            inputSearch.value = ''
            debunce(getFullName, renderSearchFullName)
            showLargeImg()
            tableMessage.style.display = 'none'
        })
    })
    
    
function getFullName() {
    
    for(let i = 0; i < arrRenderFullName.length; i++) {
        if(arrRenderFullName[i].name.first.toLowerCase().includes(inputSearch.value) || arrRenderFullName[i].name.last.toLowerCase().includes(inputSearch.value)) {
            arrSearchName.push(arrRenderFullName[i])
        }
    }

}

function renderSearchFullName() {
    for(let i = 0; i < arrSearchName.length; i++) {
        new Table(arrSearchName[i]).render(itemTab)
    }
}



 function showLargeImg(){
    const imgThumbnail = document.querySelectorAll('.table__img-thumbnail')
    const imgLarge = document.querySelectorAll('.table__img-large')

    for(let i = 0; i < imgThumbnail.length; i++) {
        imgThumbnail[i].addEventListener('mouseover', () => {
            imgLarge[i].classList.toggle('isActive')
        })

        imgLarge[i].addEventListener('mouseout', () => {
            imgLarge[i].classList.toggle('isActive')
        })
    }
}


function debunce(func1, func2) {
    setTimeout(() => {
        func1()
        func2()
    }, 500)
}