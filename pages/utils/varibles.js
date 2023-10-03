const linkName = [
  {
    name: "Коллекция",
    link: "/shop"
  },
  {
    name: "Новости",
    link: "/news"
  },
  {
    name: "Мероприятия",
    link: "/events"
  },
  {
    name: "О нас",
    link: "/about"
  },
  {
    name: "FAQ",
    link: "/faq"
  }
]

const wines = [
  {
    name: "Pfefferer Sun",
    type: "white",
    smell: ["blackberry", "blackberry"],
    classification: "Белое",
    alcohol: 2.5,
    sugar: 16,
    rating: 4,
    iconDesktop: null,
    iconMobile: null,
    species: "сладкое",
    volume: "0,75 л."
  },
  {
    name: "Merlot Reserve",
    type: "red",
    smell: ["cherry", "plum"],
    classification: "Красное",
    alcohol: 14.0,
    sugar: 5,
    rating: 4.3,
    iconDesktop: null,
    iconMobile: null,
    species: "сухое",
    volume: "0,75 л."
  },
  {
    name: "Chardonnay Dream",
    type: "white",
    smell: ["apple", "vanilla"],
    classification: "Белое",
    alcohol: 13.5,
    sugar: 6,
    rating: 4.2,
    iconDesktop: null,
    iconMobile: null,
    species: "сухое",
    volume: "0,75 л."
  },
  {
    name: "Rosé Blush",
    type: "rose",
    smell: ["strawberry", "citrus"],
    classification: "Розовое",
    alcohol: 12.8,
    sugar: 7,
    rating: 4.1,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  },
  {
    name: "Sapphire Blue",
    type: "blue",
    smell: ["blueberry", "lavender"],
    classification: "Голубое",
    alcohol: 11.2,
    sugar: 8,
    rating: 4.0,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  },
  {
    name: "Cabernet Sauvignon Classic",
    type: "red",
    smell: ["black currant", "tobacco"],
    classification: "Красное",
    alcohol: 14.5,
    sugar: 4,
    rating: 4.4,
    iconDesktop: null,
    iconMobile: null,
    species: "сухое",
    volume: "0,75 л."
  },
  {
    name: "Sauvignon Blanc Fresh",
    type: "white",
    smell: ["green apple", "herbs"],
    classification: "Белое",
    alcohol: 13.2,
    sugar: 5,
    rating: 4.3,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  },
  {
    name: "Pink Paradise",
    type: "rose",
    smell: ["raspberry", "floral notes"],
    classification: "Розовое",
    alcohol: 12.0,
    sugar: 6,
    rating: 4.5,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  },
  {
    name: "Blueberry Bliss",
    type: "blue",
    smell: ["blue raspberry", "cherry pit"],
    classification: "Голубое",
    alcohol: 11.5,
    sugar: 7,
    rating: 4.2,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  },
  {
    name: "Pinot Noir Elegance",
    type: "red",
    smell: ["red cherry", "rose"],
    classification: "Красное",
    alcohol: 14.2,
    sugar: 5,
    rating: 4.6,
    iconDesktop: null,
    iconMobile: null,
    species: "сухое",
    volume: "0,75 л."
  },
  {
    name: "Riesling Harmony",
    type: "white",
    smell: ["peach", "honey"],
    classification: "Белое",
    alcohol: 12.8,
    sugar: 8,
    rating: 4.0,
    iconDesktop: null,
    iconMobile: null,
    species: "сладкое",
    volume: "0,75 л."
  },
  {
    name: "Sunset Rosé",
    type: "rose",
    smell: ["orange", "almond"],
    classification: "Розовое",
    alcohol: 12.3,
    sugar: 4,
    rating: 4.3,
    iconDesktop: null,
    iconMobile: null,
    species: "сладкое",
    volume: "0,75 л."
  },
  {
    name: "Electric Blue",
    type: "blue",
    smell: ["eucalyptus", "lime"],
    classification: "Голубое",
    alcohol: 10.5,
    sugar: 6,
    rating: 4.1,
    iconDesktop: null,
    iconMobile: null,
    species: "полу сладкое",
    volume: "0,75 л."
  },
  {
    name: "Malbec Velvet",
    type: "red",
    smell: ["black cherry", "chocolate"],
    classification: "Красное",
    alcohol: 13.9,
    sugar: 5,
    rating: 4.4,
    iconDesktop: null,
    iconMobile: null,
    species: "сухое",
    volume: "0,75 л."
  },
  {
    name: "Sémillon Sunshine",
    type: "white",
    smell: ["pear", "lemon"],
    classification: "Белое",
    alcohol: 11.6,
    sugar: 7,
    rating: 4.2,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  },
  {
    name: "Blush Blossom",
    type: "rose",
    smell: ["pomegranate", "rose petals"],
    classification: "Розовое",
    alcohol: 12.1,
    sugar: 5,
    rating: 4.7,
    iconDesktop: null,
    iconMobile: null,
    species: "полусладкое",
    volume: "0,75 л."
  }
]

const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const wineTypes = ["Красное", "Розовое", "Белое", "Голубое"]
export {wines, linkName, wineTypes, EMAIL_REGEXP}
