export class Table {
    constructor(options){
        this.first = options.name.first
        this.last = options.name.last
        this.img = {
            thumbnail: options.picture.thumbnail,
            large: options.picture.large
        }
        this.location = options.location.city
        this.state = options.location.state
        this.email = options.email
        this.phone = options.phone
        this.registered = options.registered.date
        this.date = new Date(this.registered)
    }



    render(item){
        let tableItem = document.createElement('div')
        tableItem.classList.add('table__item')
        tableItem.innerHTML = `
            <span class="table__fullname">${this.first} ${this.last}</span>
            <img src="${this.img.thumbnail}" alt="" class="table__img-thumbnail">
            <img src="${this.img.large}" alt="" class="table__img-large">
            <span class="table__data">${this.location} ${this.state}</span>
            <a href="mailto:${this.email}">${this.email}</a>
            <a href="tel:${this.phone}">${this.phone}</a>
            <span class="table__data">${(this.date.getDay(this.registered)+1) < 10 ? '0'+(this.date.getDay(this.registered)+1) : this.date.getDay(this.registered)+1}:${(this.date.getMonth(this.registered)+1) < 10 ? '0'+(this.date.getMonth(this.registered)+1) : (this.date.getMonth(this.registered)+1)}:${this.date.getFullYear(this.registered)}</span>
        `
        item.appendChild(tableItem)
    }
}
