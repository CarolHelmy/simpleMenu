const menu = [
    {
        id:1 , 
        title: "pink donuts",
        category: "pink",
        price: 30,
        img: "https://i.pinimg.com/564x/29/2c/c1/292cc193927f45611b932bb2397b19cf.jpg",
        desc: "I'm a fluffy donut with a naturally dyed pink raspberry icing that bursts with raspberry flavor"
    },
    {
        id: 2,
        title: "cinnamon rolls",
        category: "cinnamon",
        price: 50,
        img: "https://i.pinimg.com/236x/dd/51/99/dd51990e24465e96826f5dd54c226e89.jpg",
        desc: "I'm a cute cinnamon roll with soft, fluffy dough filled with a sweet cinnamon sugar mixture and topped with a creamy glaze."
    },
    {
        id: 3,
        title:"Pink macarons" ,
        category:"pink" ,
        price: 70,
        img: "https://i.pinimg.com/236x/aa/1d/0f/aa1d0f8b57dbb9f379bc9b1c81e4ee02.jpg" ,
        desc: "I'm a delicate, colorful macaron cookie with a naturally dyed pink raspberry filling that bursts with raspberry flavor"
    },
    {
        id:4 ,
        title: "heart-shaped Strawberry cake"  ,
        category: "Heart-shaped",
        price: 250,
        img: "https://i.pinimg.com/236x/a4/dc/49/a4dc4906b08abdd09ead0e663ce80849.jpg",
        desc: "I'm a delightful dessert with fresh strawberries folded into the batter, sandwiched between two layers of me"
    },
    {
        id:5 ,
        title:"heart-shaped cinnamon rolls" ,
        category: "Heart-shaped",
        price: 40,
        img:"https://i.pinimg.com/236x/ac/77/1c/ac771caec7362c26c3e3b2a6b5ad198e.jpg" ,
        desc: "I'm also a cute cinnamon roll with soft, fluffy dough filled with a sweet cinnamon sugar mixture and topped with a creamy glaze. The difference between me and the classic one is that I have a cute heart shape."
    },
    {
        id:6 ,
        title: "Waffles",
        category: "pink" ,
        price: 50,
        img:"https://i.pinimg.com/236x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg" ,
        desc: "I'm a crispy golden brown Waffle with a crispy exterior and fluffy interior, served with warm syrup"
    },
    {
        id: 7 ,
        title: "heart-shaped waffles" ,
        category: "Heart-shaped",
        price: 50,
        img: "https://i.pinimg.com/236x/f9/01/6a/f9016aa544e66c9722d3edbfed6206e3.jpg",
        desc: "Norwegian Heart Waffles: Deliciously eggy, with a hint of sweetness and vanilla flavor, these heart-shaped waffles are a special treat."
    },
    {
        id:8 ,
        title: "Pancakes",
        category: "cinnamon",
        price: 30,
        img:"https://i.pinimg.com/236x/8e/0f/be/8e0fbef0b2b8932394316af6a040949a.jpg" ,
        desc: "Fluffy Buttermilk Pancakes: Light, airy pancakes made with tangy buttermilk and served with warm syrup"
    },
    {
        id: 9,
        title: "mini-Pancakes",
        category: "pink",
        price: 50,
        img:"https://i.pinimg.com/236x/6e/e0/d8/6ee0d8935e86bd54048677b065c29d98.jpg" ,
        desc: "Rainbow Mini Pancakes: Bite-sized, colorful pancakes that are perfect for sharing and come with a side of warm syrup"
    },
    {
        id: 10,
        title: "Pink cakePops",
        category: "pink",
        price: 10,
        img:"https://i.pinimg.com/564x/11/f1/ab/11f1ab9f35f86202bbba54c5cd739e98.jpg" ,
        desc: "Trendy, bite-sized, fabulous and unique pink cakePops. They are perfect for Valentine's Day, fun occasions, gender reveals, and birthdays!"
    }
]

const secCen = document.querySelector(".secCen");
let filterBtns = document.querySelectorAll(".filter")

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
            return menuItem;
            }
        });
        // console.log(menuCategory);
        if(category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }

    });
});
});

function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        return `
        <article class="menuItem">
                <img src=${item.img} class="img" alt=${item.title}>
        <div class="itemDes">
                <header class="header">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header class="header">
            <p class="itemtxt">${item.desc}</p>
        </div>
            </article>

`;
    })
    displayMenu = displayMenu.join('');
    secCen.innerHTML = displayMenu;
}