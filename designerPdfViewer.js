let Word =[1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
function designerPdfViewer(h, word) {
    // Write your code here
  let tallestLetter = 0;
  let wordArr = word.split('');
  
  for(let i=0; i< h.length; i++) {
    if (h[i] > tallestLetter) {
      tallestLetter = h[i];
    }
  }
  return tallestLetter * wordArr.length;
}
let result = designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba");
console.log(result);
