function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort()
  let resultSearch:string[][]= []
  let word:string = ''
    for(let i = 0 ; i < searchWord.length ; i++ ) {
      word += searchWord[i]
      let searchArr:string[] = []

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