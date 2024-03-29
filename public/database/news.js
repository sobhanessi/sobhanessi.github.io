const template = {
  title: "",
  href: "",
  slug: "",
  date: "",
  author: "",
  category: [],
  brief: "",
  text: "",
  headerImage: "",
};

const news = [
  // {
  //   title: "What path of web development to take on in 2022!",
  //   href: "",
  //   slug: "",
  //   date: "",
  //   author: "",
  //   category: [],
  //   brief: "",
  //   text: "",
  // },
  {
    title: "First news of the new format of my website!",
    href: "/news/hello-world!",
    slug: "hello world!",
    date: "10/7/2022",
    author: "Sobhan Esfandyari",
    category: ["Computer"],
    brief:
      "Hello World!. As usual programmers write their very first program in hello world, I also have written something in this matter as a first news for my website. Click to read more...",
    text: `Hello World!.
    I have changed my website's format into React along with Next and in future, I will also move to GraphQL for database purposes. I hope you enjoy it.
    I will allocate some time everyday in order to write and publish some news in this website that you can leverage your knowledge as I do everyday.
    News will not be only in Computers' field but also in Politics and Economy. `,
    headerImage: "/pics/sobhanessi.jpg",
  },
];

export default news;
