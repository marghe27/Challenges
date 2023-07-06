
// initialized variables
let books, categories;
 

books = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
categories = ["A", "B", "C", "D"]


L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
M = ["A", "B", "C", "W"]



//this function loops over the books array and returns the first letter of the literal code and numbers after the space
function  cycleOfBooks (booksArray){
  let category= [];
    for (const book of booksArray) {
      //first letter of the literal code
      let book_cat = book[0];
      //numbers after the space
      let quantity = book.split(' ')[1];
      // new simplified array
      category.push(book_cat+quantity);
      //console.log(category);
    };
return  category;
}


  //function to sort elements into the books array 
 function bblSort(arr) {
  
    for (var i = 0; i < arr.length; i++) {
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
   //console.log("arr "+arr);
  return arr;
    
}


/** Find all the books with codes belonging to a certain requested  category  and to sum their quantity according to each category. */
function stockList(listOfArt, listOfCat){

  // object that calculates the final result 
  let total_books_by_category = {};

  // Call the function cycleOfBooks
  let category_quantity = cycleOfBooks(listOfArt);

  // Call the function bblSort
  let category_ordered = bblSort(category_quantity);

  
  // if these array are empty return massage
  if(!listOfArt.length || !listOfCat.length){
    return "Books array or Categories array are empty";
  };
  
  
  //  object initialized with zero quantity   
  listOfCat.forEach(el => {
     total_books_by_category[el] = 0;
  });
   
  // loop over the ordered elements (books category)
  category_ordered.forEach(el => {
    const category = el[0];
    
    // I select the quantities by removing the first letter
    const quantity = parseInt(el.slice(1));
    
    // I match the category array to the book code array
    if(listOfCat.includes(category)) {
        
      // If the element doesn't exist into the object, add it 
      if (typeof(total_books_by_category[category]) == 'undefined'){
        total_books_by_category[category] = quantity;
      } else {
        // If the element exists, sum the values converted from string to number
        total_books_by_category[category] = parseInt(total_books_by_category[category]) + quantity;
      } 
        
     // }
        
    };
    
 });
  
return total_books_by_category;
};

console.log(stockList(books,categories));
console.log(stockList(L,M));
 