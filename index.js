const shopRegistry = {
  itemsUpdated: [],
  itemsList(itemName, itemPrice) {
    let input = {
      itemName: itemName,
      itemPrice: itemPrice
    };
    this.itemsUpdated.push(input);
  },
  addCart: [],
  addToCart(buyerGoods) {
    let found = this.itemsUpdated.find(i => i.itemName === buyerGoods);
    if (found) {
      this.addCart.push(found);
      console.log(`${buyerGoods} added successfully into cart`);
    } else {
      console.log(`Sorry, ${buyerGoods} not available at the moment`);
    }
  },
  calculateTotalPrice(addCart) { // addCart = this.addCart
    let total = 0;
    for (let i = 0; i < addCart.length; i++) {
      total += addCart[i].itemPrice;
    }
    // Bug 1 Fixed: Put the log BEFORE the return statement
    console.log(`Your total bill is $${total}`);
    return total;
  },
  pay(amount, discountPrice, discount) {
    // Bug 2 & 3 Fixed: Added () and passed 'this.addCart' to evaluate the actual total number
    let currentTotal = this.calculateTotalPrice(this.addCart);

    if (currentTotal >= discountPrice && amount >= currentTotal) {
      let finalPrice = currentTotal - (currentTotal * discount / 100);
      let balance = amount - finalPrice;
      console.log(`You got a ${discount}% discount and your balance is $${balance}.`);
    } else if (currentTotal < discountPrice && amount >= currentTotal) {
      let balance = amount - currentTotal;
      console.log(`You are not eligible for a ${discount}% discount. Your balance is $${balance}`);
    } else {
      console.log(`Sorry, you have insufficient money for your purchase (Total: $${currentTotal})`);
    }
    console.log(`Thank you for your patronage! Enjoy your purchase.`);
  }
};

// Executing code
shopRegistry.itemsList("Phone", 500);
shopRegistry.itemsList("Smart TV", 220);
shopRegistry.itemsList("Gaming console", 150);

shopRegistry.addToCart("Phone");
shopRegistry.addToCart("Gaming console");
shopRegistry.addToCart("Laptop");

// Process Payment
shopRegistry.pay(1000, 400, 10);

