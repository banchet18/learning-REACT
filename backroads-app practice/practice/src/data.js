import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
  { id: 1, icon: "fab fa-facebook" },
  { id: 2, icon: "fab fa-twitter" },
  { id: 3, icon: "fab fa-squarespace" },
];

export const service = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    h4: "saving money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Asperiores, officia.`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    h4: "endless hiking",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Asperiores, officia.`,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    h4: "amazing comfort",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Asperiores, officia.`,
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2020",
    h4: "Tibet Adventure",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    contry: "china",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: img2,
    date: "october 1th, 2020",
    h4: "best of java",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    contry: "indonesia",
    days: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: img3,
    date: "september 15th, 2020",
    h4: "explore hong kong",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    contry: "hong kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    img: img4,
    date: "december 5th, 2019",
    h4: "kenya highlights",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    contry: "kenya",
    days: "20 days",
    price: "from $3300",
  },
];
