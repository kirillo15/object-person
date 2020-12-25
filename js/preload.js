export function preload(){
    const loader = document.querySelector('.loader')
    const tableWrap = document.querySelector('.table-wrap')
    tableWrap.classList.add('hide')
    setTimeout(()=>{
        loader.classList.add('hide')
        tableWrap.classList.remove('hide')
    }, 2000)
}