const menu = [
    {
        id: 1,
        title: "alguma coisa",
        category: "breakfast",
        price: 15.99,
        img:"../images/item-1.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 2,
        title: "alguma coisa",
        category: "lunch",
        price: 15.99,
        img:"../images/item-2.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 3,
        title: "alguma coisa",
        category: "shakes",
        price: 15.99,
        img:"../images/item-3.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 4,
        title: "alguma coisa",
        category: "breakfast",
        price: 15.99,
        img:"../images/item-4.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 5,
        title: "alguma coisa",
        category: "lunch",
        price: 15.99,
        img:"../images/item-5.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 6,
        title: "alguma coisa",
        category: "shakes",
        price: 15.99,
        img:"../images/item-6.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 7,
        title: "alguma coisa",
        category: "breakfast",
        price: 15.99,
        img:"../images/item-7.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 8,
        title: "alguma coisa",
        category: "lunch",
        price: 15.99,
        img:"../images/item-8.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 9,
        title: "alguma coisa",
        category: "shakes",
        price: 15.99,
        img:"../images/item-9.jpeg",
        desc: "alguma coisa"
    },
    {
        id: 10,
        title: "alguma coisa",
        category: "dinner",
        price: 15.99,
        img:"../images/item-10.jpeg",
        desc: "alguma coisa"
    },

]
// Selecionar elemento pai
const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")
// Exibir tudo quando carregar
window.addEventListener("DOMContentLoaded", ()=>{
    displayMenuItems(menu)
    displayMenuButtons()
})
const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item)=>{
        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title}
                class="photo"/>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">R$: ${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
                </article>`
    })
    displayMenu = displayMenu.join("")

    sectionCenter.innerHTML = displayMenu
}
const displayMenuButtons = () => {
    const categories = menu.reduce((values, item) =>{
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },["all"])
    
    const categoryBtns = categories.map((category)=>{
        return`<button type="button" class="filter-btn" data-id=${category}>
        ${category}
      </button>`
    }).join("")
    
    btnContainer.innerHTML = categoryBtns

    const filterBtns = btnContainer.querySelectorAll(".filter-btn")

    filterBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter((menuItem)=>{
                if(menuItem.category === category){
                    return menuItem
                }
            })
            if(category === "all"){
                displayMenuItems(menu)
            }
            else
            {
                displayMenuItems(menuCategory)
            }
        })
    })
}