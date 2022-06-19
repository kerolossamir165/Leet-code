/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort()
  let resultSearch = []
  let word = ''
    for(let i = 0 ; i < searchWord.length ; i++ ) {
      word += searchWord[i]
      let searchArr = []

      for(let product of products) {
        if(product.indexOf(word) === 0) {
          searchArr.push(product)
          if(searchArr.length === 3) {
            break
          }
        }
      }
      resultSearch.push(searchArr)
    }
    return resultSearch 
};