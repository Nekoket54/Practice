
let products = []
products.push(
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон A1",
        price: 3500,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон B2",
        price: 4500,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон C3",
        price: 12000,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон D4",
        price: 20000,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон E5",
        price: 8000,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон F6",
        price: 9500,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон G7",
        price: 13500,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон H8",
        price: 7000,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон I9",
        price: 5000,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон J10",
        price: 16000,
        available: true
    },
    { photo: "https://via.placeholder.com/150", name: "Смартфон K11", price: 3000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон L12", price: 18000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон M13", price: 22000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон N14", price: 5000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон O15", price: 14000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон P16", price: 7000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон Q17", price: 8000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон R18", price: 12000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон S19", price: 15000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон T20", price: 9500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон U21", price: 17000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон V22", price: 11000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон W23", price: 19000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон X24", price: 4000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон Y25", price: 6000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон Z26", price: 15500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AA27", price: 20000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AB28", price: 3500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AC29", price: 10000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AD30", price: 22000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AE31", price: 2000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AF32", price: 7500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AG33", price: 13500, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AH34", price: 18000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AI35", price: 5000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AJ36", price: 6000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AK37", price: 15000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AL38", price: 13000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AM39", price: 16000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AN40", price: 3000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AO41", price: 4000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AP42", price: 9500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AQ43", price: 17000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AR44", price: 12500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AS45", price: 20000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AT46", price: 3500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AU47", price: 10000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AV48", price: 22000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AW49", price: 2000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AX50", price: 7500, available: false }
);



const container = document.querySelector('.container')


products.forEach(function(element){
    container.innerHTML += `
    <div class="card">
    <img src="${element.photo}" alt="" class="photo">
    <h1 class="name">${element.name}</h1>
    <p class="price">${element.price}₴</p>
    <p class="availability">${element.available == true ? 'Доступний' : 'Недоступний'}</p>
    <button class="buy">Buy</button>
</div>
    `
})
const price = document.querySelector('.price')
const buy = document.querySelectorAll('.buy')
let cash = 100000
const balance = document.querySelector('.balance')
balance.textContent = cash + '₴'



// buy.forEach(button => {
//     button.addEventListener('click',function(element){
//         let jojo = 
//         cash -= parseInt(price.textContent)
//         balance.textContent = cash + '₴'
//     // alert('Дякую за покупку')
//     })
// })

buy.forEach(function(element){
    element.addEventListener('click',function(){
        let jojo = parseInt(element.previousElementSibling.previousElementSibling.textContent)
        cash = cash - jojo
        // cash -= parseInt(price.textContent)
        balance.textContent = `${cash}₴`
    // alert('Дякую за покупку')
    })
})















// const searchInput = document.getElementById('search-input')

// const accessibleProducts = products.filter(function(element){
//     return element.available == true
// })

// let searchInputValue = searchInput.value  
// if(accessibleProducts == 'Доступні'){
//     container.innerHTML += `
//     <div class="card">
//     <img src="${element.photo}" alt="" class="photo">
//     <h1 class="name">${element.name}</h1>
//     <p class="price">${element.price}₴</p>
//     <p class="availability">${element.available == true ? 'Доступний' : 'Недоступний'}</p>
//     <button class="buy">Buy</button>
//     </div>
//     `
// }
