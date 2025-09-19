// women images
import w1 from './Women/dress.jpg'
import w2 from './Women/jacket.jpg'
import w3 from './Women/jeans.jpeg'
import w4 from './Women/jeans.jpg'
import w5 from './Women/shirt.jpg'
import w6 from './Women/skirt.jpg'
import w7 from './Women/long.webp'
import w8 from './Women/long2.webp'
import w9 from './Women/dress2.webp'
import w10 from './Women/long3.webp'

//men
import m1 from './Men/MenBlezer.jpg_2000Wx3000H'
import m2 from './Men/MenEth.jpg_2000Wx3000H'
import m3 from './Men/MenJeans.jpg_2000Wx3000H'
import m4 from './Men/MenTrou.jpg_2000Wx3000H'
import m5 from './Men/MenTshirt.jpg_2000Wx3000H'
import m6 from './Men/MenWinter.jpg_2000Wx3000H'
import m7 from './Men/Men1.jpg_2000Wx3000H'
import m8 from './Men/Men2.jpg_2000Wx3000H'

//Kids images
import k1 from './kids/jumpsuit.webp'
import k2 from './kids/jump.webp'
import k3 from './kids/girl1.webp'
import k4 from './kids/pinkdress.webp'
import k5 from './kids/Girl.webp'
import k6 from './kids/Girl2.jpeg'
import k7 from './kids/Girl3.webp'
import k8 from './kids/jeans.webp'

let all_products = [
    {
        id: 1,
        name:"Short One Piece",
        category:"Women",
        image: w1,
        new_price: 800.00,
        old_price: 999.00,
        description: ""
    },
    {
        id: 2,
        name:"long Jacket",
        category:"Women",
        image: w2,
        new_price: 1700.00,
        old_price: 1999.00,
        description: ""
    },
    {
        id: 3,
        name:"Dirk blue wide-leg jeans",
        category:"Women",
        image: w3,
        new_price: 500.00,
        old_price: 800.00,
        description: ""
    },
    {
        id: 4,
        name:"Light blue wide-leg jeans",
        category:"Women",
        image: w4,
        new_price: 699.00,
        old_price: 1000.00,
        description:""
    },
    {
        id: 5,
        name:"CheckShirt",
        category:"Women",
        image: w5,
        new_price: 499.00,
        old_price: 599.00,
        description:""
    },
    {
        id: 6,
        name:"Bright yellow tiered skirt",
        category:"Women",
        image: w6,
        new_price: 700.00,
        old_price: 999.00,
        description:""
    },

    {
        id: 7,
        name:"Perry Tier Cotton Dress",
        category:"Women",
        image: w7,
        new_price: 1850.00,
        old_price: 250.00,
        description:""
    },

    {
        id: 8,
        name:"Linen Georgette Coord Set",
        category:"Women",
        image: w8,
        new_price: 3200.00,
        old_price: 5500.00,
        description:""
    },

    {
        id: 9,
        name:"Red Printed Silk Coord Set",
        category:"Women",
        image: w9,
        new_price: 1850.00,
        old_price: 250.00,
        description:""
    },

    {
        id: 10,
        name:"Cotton 2-Piece Sets",
        category:"Women",
        image: w10,
        new_price: 2599.00,
        old_price: 4500.00,
        description:""
    },

    {
        id: 11,
        name:"Allen Solly",
        category:"Men",
        image: m1,
        new_price: 5000.00,
        old_price: 7500.00,
        description:""
    },
    {
        id: 12,
        name:"Ethenic Kurta",
        category:"Men",
        image: m2,
        new_price: 650.00,
        old_price: 1200.00,
        description:""
    },
    {
        id: 13,
        name:"Allen Solly Jeans",
        category:"Men",
        image: m3,
        new_price: 2000.00,
        old_price: 3000.00,
        description:""
    },
    {
        id: 14,
        name:"Work Wear Trousers",
        category:"Men",
        image: m4,
        new_price: 1400.00,
        old_price: 3300.00,
        description:""
    },
    {
        id: 15,
        name:"Black Tshirt",
        category:"Men",
        image: m5,
        new_price: 500.00,
        old_price: 800.00,
        description:""
    },
    {
        id: 16,
        name:"ShwetShirt",
        category:"Men",
        image: m6,
        new_price: 1100.00,
        old_price: 1500.00,
        description:""
    },
    {
        id: 17,
        name:"Solid Cotton Mens Shirt",
        category:"Men",
        image: m7,
        new_price: 850.00,
        old_price: 1599.00,
        description:""
    },
    {
        id: 18,
        name:"Casual Shirt",
        category:"Men",
        image: m8,
        new_price: 899.00,
        old_price: 1300.00,
        description:""
    },

    {
        id: 20,
        name:"Printed Basic Jumpsuit",
        category: "Kids",
        image: k1,
        new_price: 800.00,
        old_price: 999.00,
        description:""
    },
    {
        id: 21,
        name:"Denim Jumpsuit",
        category: "Kids",
        image: k2,
        new_price: 799.00,
        old_price: 1200.00,
        description:""
    },
    {
        id: 22,
        name:"Embellished A-Line Dress",
        category: "Kids",
        image: k3,
        new_price: 999.00,
        old_price: 1900.00,
        description:""
    },
    {
        id: 23,
        name:"Satin Lehenga Set",
        category: "Kids",
        image: k4,
        new_price: 1500.00,
        old_price: 3000.00
    },
    {
        id: 24,
        name:"Rosella Smocked Tie & Dye Dressr",
        category: "Kids",
        image: k5,
        new_price: 1500.00,
        old_price: 2500.00,
        description:""
    },
    {
        id: 25,
        name:"Red Embroidered Lehenga",
        category: "Kids",
        image: k6,
        new_price: 1700.00,
        old_price: 3500.00,
        description:""
    },
    {
        id: 26,
        name:"Floral Print Lehenga Choli",
        category: "Kids",
        image: k7,
        new_price: 1799.00,
        old_price: 2000.00,
        description:""
    },
    {
        id: 27,
        name:"Black Pant",
        category: "Kids",
        image: k8,
        new_price: 699.00,
        old_price: 999.00,
        description:""
    }
]

export default all_products;