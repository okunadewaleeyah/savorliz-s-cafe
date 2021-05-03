
  const menu = [
    {
      id: 12,
      title: "melon blast",
      category: "soups",
      price: 29.99,
      img: "./images/item-12.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 12,
      title: "yummy jutes",
      category: "soups",
      price: 9.99,
      img: "./images/item-15.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 11,
      title: "veggie delight",
      category: "soups",
      price: 29.99,
      img: "./images/item 11.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 13,
      title: "fillet mignon",
      category: "dinner",
      price: 19.99,
      img: "./images/item-13.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 14,
      title: "big fat rooster",
      category: "dinner",
      price: 43.99,
      img: "./images/item-14.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  // when page loads, access menu, populate items
  // needs to place the items somewhere 
  // root element for each item is section-center
  // populate/ place items in section center
  // select parent element i.e. section center
  const sectionCenter = document.querySelector('.section-center');
  const filterBtns = document.querySelectorAll('.filter-btn')

  //load items
  window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
  })

//filter items
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    // using a filter
    // look for the array and filter depending on what
    // category each item in the menu array belong to
    //create a new array
    const menuCategory = menu.filter( (menuItem) => {
     // console.log(menuItem.category);
     if(menuItem.category === category) {
       return menuItem
     }
    })
    // console.log(menuCategory);
    if(category === 'all') {
      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory)
    }
  })
})
  

  function displayMenuItems(menuItems) {
    //using map to iterate over each item in the array
    //place the data in html
    // assign a new variable since a new array is being created with map
    let displayMenu = menuItems.map((item) => {
      //  console.log((item));
      // place data in html
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`
      })
      displayMenu = displayMenu.join('')
      // empty parenthesis to get rid of the commas in between articles
      //console.log((displayMenu));
  
      //select section center and display the menu array
      sectionCenter.innerHTML = displayMenu
  }

  // navbar
  const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});