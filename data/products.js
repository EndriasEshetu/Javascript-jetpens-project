import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }
}

export let products = [];

export function loadProductsFetch() {
  const promise = fetch("https://supersimplebackend.dev/products")
    .then((response) => {
      return response.json();
    })
    .then((productsData) => {
      products = productsData.map((productDetails) => {
        if (productDetails.type === "clothing") {
          return new Clothing(productDetails);
        }
        if (productDetails.type === "appliance") {
          return new Appliance(productDetails);
        }
        return new Product(productDetails);
      });

      console.log("load products");
    })
    .catch((error) => {
      console.log("Unexpected error, Please try again later.");
    });
  return promise;
}

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      return new Product(productDetails);
    });

    fun();
  });

  xhr.addEventListener("error", (error) => {
    console.log("Unexpected error, Please try again later.");
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}

/*
export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/pens/bags.jpg",
    name: "Delfonics Carrying Bag - M (A5) - Pink",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 3600,
    keywords: ["socks", "sports", "apparel"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3",
    image: "images/pens/tri-zip-bag.jpg",
    name: "Lihit Lab Book Style Pen Case - Triple Zipper - Jet Black",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/caffe.jpg",
    name: "TWSBI ECO Caffè Bronze Fountain Pen - Extra Fine - Limited Edition",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/kamio.jpg",
    name: "Kamio Japan Paco-Tray Pen Case - Black",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "156fce6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/atramentis.jpg",
    name: "De Atramentis Document Black Ink - 45 ml Bottle",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896-486349e85a3d",
    image: "images/pens/lihit.jpg",
    name: "Lihit Lab Smart Fit PuniLabo Stand Pen Case - Fox - Limited Edition",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "15b6fc6f-327a-4ec4-86f-486349e85a3d",
    image: "images/pens/lamy.jpg",
    name: "LAMY T 52 Violet Blackberry Ink - 50 ml Bottle - Special Edition",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/pens/fountain.jpg",
    name: "TWSBI ECO Caffè Bronze Fountain Pen - Fine - Limited Edition",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/pens/frixion.jpg",
    name: "Pilot FriXion Waai Retractable Gel Pen - 0.5 mm - 8 Color Set",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    keywords: ["toaster", "kitchen", "appliances"],
    type: "appliance",
    instructionLink: "images/appliance-instructions.png",
    warrantyLink: "images/appliance-warranty.png",
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/eraser.jpg",
    name: "Sakura Sumo Grip Eraser B80",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/sticker.jpg",
    name: "Bande Washi Tape Sticker Roll - Cats - Set of 2",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/pens/gear-slim.jpg",
    name: "Sailor Pro Gear Slim Fountain Pen Set - Japanese Sweets - Sakuramochi - 14k Medium - Limited Edition",
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    keywords: ["plates", "kitchen", "dining"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/pens/hobonich.jpg",
    name: "JetPens Hobonichi Techo Gel Pen Sampler - Original & Cousin Matching Colors",
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    keywords: ["kitchen", "cookware"],
  },
  {
    id: "15b6f6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/bags1.jpg",
    name: "Delfonics Carrying Bag - M (A5) - Yellow",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/sharpener.jpg",
    name: "TWSBI ECO Caffè Bronze Fountain Pen - Extra Fine - Limited Edition",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },

  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/pens/safari.jpg",
    name: "LAMY safari Fountain Pen - Violet Blackberry - Fine - Special Edition",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    keywords: ["hoodies", "sweaters", "apparel"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/pens/twsbi.jpg",
    name: "TWSBI ECO Indigo Blue Bronze Fountain Pen - Extra Fine - Limited Edition",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d1",
    image: "images/pens/carbon.jpg",
    name: "Platinum Carbon Black Ink - 60 ml Bottle",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/pens/zebra.jpg",
    name: "Zebra Mildliner Double-Sided Highlighter - US - Fine / Bold - Mild Olive",
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    keywords: ["bathroom", "cleaning"],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/pens/uni-ball.jpg",
    name: "Uni-ball One F Gel Pen - 0.38 mm - Studio Ghibli - My Neighbor Totoro - Susuwatar",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-48639e85ad",
    image: "images/pens/noodlers.jpg",
    name: "Noodler's Heart of Darkness Ink - 4.5 oz Bottle with Free Pen",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/pens/hobonichi.jpg",
    name: "JetPens Black Gel Pen Sampler",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 2070,
    keywords: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "15b6c6f-327a-4ec4-896f-486349e85a3d",
    image: "images/pens/charcoal.jpg",
    name: "Pilot Iroshizuku Take-sumi Ink (Bamboo Charcoal) - 50 ml Bottle",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/pens/twsbicreme.jpg",
    name: "TWSBI ECO Crème Rose Gold Fountain Pen - Fine - Limited Edition",
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
    keywords: ["accessories", "shades"],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/pens/twsbieco.jpg",
    name: "TWSBI ECO Indigo Blue Bronze Fountain Pen - Fine - Limited Edition",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
    keywords: ["footwear", "sandals", "womens", "beach", "summer"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-48639e85a3d",
    image: "images/pens/colorverse.jpg",
    name: "Colorverse Coffee Break Ink (No. 79) - Joy in the Ordinary - 30 ml Bottle",
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "basketballs"],
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/pens/platinium.jpg",
    name: "Platinum Preppy Fountain Pen - Black - 03 Fine",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    keywords: ["bedroom", "curtains", "home"],
  },

  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf5969",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "Platinum Preppy Fountain Pen - Black - 03 Fine",
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    keywords: ["bedroom", "curtains", "home"],
  },

  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    keywords: ["shorts", "apparel", "mens"],
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
    keywords: ["water boiler", "appliances", "kitchen"],
    type: "appliance",
    instructionLink: "images/appliance-instructions.png",
    warrantyLink: "images/appliance-warranty.png",
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,
    keywords: ["kleenex", "tissues", "kitchen", "tissues box", "napkins"],
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,
    keywords: ["hats", "straw hats", "summer", "apparel"],
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,
    keywords: ["jewelry", "accessories", "womens"],
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465,
    },
    priceCents: 1374,
    keywords: ["hooded", "hoodies", "sweaters", "womens", "apparel"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119,
    },
    priceCents: 1250,
    keywords: ["bathmat", "bathroom", "home"],
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326,
    },
    priceCents: 2640,
    keywords: ["shoes", "flats", "womens", "footwear"],
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
    keywords: ["tshirts", "shirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286,
    },
    priceCents: 8300,
    keywords: ["garbage", "bins", "cans", "kitchen"],
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456,
    },
    priceCents: 2399,
    keywords: ["bedroom", "bed sheets", "sheets", "covers", "home"],
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    keywords: ["hats", "winter hats", "beanies", "tuques", "apparel", "womens"],
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017,
    },
    priceCents: 2290,
    keywords: ["pants", "apparel", "mens"],
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229,
    },
    priceCents: 3890,
    keywords: ["shoes", "running shoes", "footwear", "mens"],
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42,
    },
    priceCents: 1690,
    keywords: ["sunglasses", "glasses", "accessories", "shades"],
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511,
    },
    priceCents: 6797,
    keywords: ["cooking set", "kitchen"],
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130,
    },
    priceCents: 1649,
    keywords: ["bathroom", "washroom", "mirrors", "home"],
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248,
    },
    priceCents: 2400,
    keywords: ["pants", "sweatpants", "jogging", "apparel", "womens"],
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117,
    },
    priceCents: 2400,
    keywords: ["accessories", "womens"],
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126,
    },
    priceCents: 2899,
    keywords: ["boxes", "food containers", "kitchen"],
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211,
    },
    priceCents: 2250,
    keywords: ["coffeemakers", "kitchen", "appliances"],
    type: "appliance",
    instructionLink: "images/appliance-instructions.png",
    warrantyLink: "images/appliance-warranty.png",
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363,
    },
    priceCents: 3099,
    keywords: ["bedroom", "home"],
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93,
    },
    priceCents: 2110,
    keywords: ["bathroom", "home", "towels"],
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ["shoes", "running shoes", "footwear", "womens"],
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3,
    },
    priceCents: 10747,
    keywords: ["food blenders", "kitchen", "appliances"],
    type: "appliance",
    instructionLink: "images/appliance-instructions.png",
    warrantyLink: "images/appliance-warranty.png",
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
    keywords: ["mixing bowls", "baking", "cookware", "kitchen"],
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045,
    },
    priceCents: 5799,
    keywords: ["kitchen", "kitchen towels", "tissues"],
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
    keywords: ["sweaters", "hoodies", "apparel", "mens"],
  },
].map((productDetails) => {
  return new Product(productDetails);
});
*/
