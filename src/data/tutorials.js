const tutorials = [
  {
    title: "HTML",
    slug: "html",

    lessons: [
      {
        title: "Introduction",
        slug: "introduction",

        content:
          "HTML adalah bahasa markup yang digunakan untuk membuat struktur halaman web.",

        example: `<h1>Hello World</h1>`,
      },

      {
        title: "Elements",
        slug: "elements",

        content: "Element HTML adalah komponen utama pembangun halaman web.",

        example: `<p>Ini paragraf</p>`,
      },
    ],
  },

  {
    title: "CSS",
    slug: "css",

    lessons: [
      {
        title: "Introduction",
        slug: "introduction",
      },
      {
        title: "Selectors",
        slug: "selectors",
      },
      {
        title: "Flexbox",
        slug: "flexbox",
      },
    ],
  },
];

export default tutorials;
