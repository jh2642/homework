// Using the items variable, use array.map(), array.reduce(), array.forEach, and array.filter() to help you through the following questions.
// The answers should be logged out to your console using console.log()
// Make sure the output matches the answers below each question.
// Please comment your code as you walk through your thought process.

// Questions & Answers
// Show me how to calculate the average price of all items. Please console.log the average.
var total = items.reduce(function(previousItem, currentItem) {
  var previousPrice = isNaN(previousItem) ? previousItem.price : previousItem
  return previousPrice + currentItem.price
})
var average = total/items.length
console.log(total)
console.log(average)

// Show me how to get an array of items that cost between $14.00 and $18.00 USD
var inBetween = items.filter(function(item){
  return item.price >= 14.00 && item.price <= 18.00
})
console.log(inBetween)

// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
var foreignCurrency = items.filter(function(item){
  return item.currency_code == "GBP"
})
console.log(foreignCurrency[0].title+','+foreignCurrency[0].price)

// Show me how to find which items are made of wood. Please console.log the ones you find.
var woodMat = items.filter(function(item){
  return item.materials.includes("wood")
})
console.log(woodMat)


// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
var eightMat = items.filter(function(item){
  return item.materials.length > 7
})
console.log(eightMat)

// Show me how to calculate how many items were made by their sellers
var numberSellers = items.filter(function(item){
  return item.who_made.includes("i_did")
})
console.log(numberSellers.length)
