let Word = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  7,
];
function designerPdfViewer(h, word) {
  let wordHights = [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 7,
  ];

  let AlphbitArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  
  let tallLitWord = 0;
  let wordArr = word.split("");

  for (let i = 0; i < h.length; i++) {
    if (h[i] > tallestLetter) {
      tallestLetter = h[i];
    }
  }
  return tallestLetter * wordHights.length;
}
let result = designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 7,
  ],
  "zaba"
);
console.log(result);
