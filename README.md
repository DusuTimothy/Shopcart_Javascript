# Shopcart JavaScript

A lightweight shopping cart management system built with JavaScript. This project demonstrates core JavaScript concepts including object-oriented patterns, array methods, and conditional logic to create a functional e-commerce checkout system.

## 📋 Project Overview

Shopcart is a simple but functional shopping cart application that allows users to:
- Maintain a registry of available items with prices
- Add items to a shopping cart
- Calculate total purchase amounts
- Process payments with optional discount eligibility

This project is ideal for learning JavaScript fundamentals and understanding how state management works in client-side applications.

## 🎯 Features

### 1. **Item Registry Management**
   - Store available items with their prices
   - Add new items to the inventory dynamically
   - Track all registered items in `itemsUpdated` array

### 2. **Shopping Cart Operations**
   - Search and add items to cart by name
   - Validate item availability before adding
   - Maintain a list of items selected for purchase
   - Friendly user feedback for successful/failed additions

### 3. **Price Calculation**
   - Calculate the total bill from all items in the cart
   - Support for itemized pricing
   - Display formatted price output

### 4. **Payment Processing**
   - Accept payment amounts from customers
   - Apply conditional discounts based on purchase thresholds
   - Calculate remaining balance after payment
   - Handle insufficient payment scenarios
   - Provide transaction feedback and gratitude message

### 5. **Discount System**
   - Automatic discount qualification when total exceeds a threshold
   - Percentage-based discount calculation
   - Clear eligibility messages to users

## 🛠️ Code Structure

### `shopRegistry` Object

The main object containing all shopping cart functionality:

| Method | Parameters | Description |
|--------|-----------|-------------|
| `itemsList()` | `itemName`, `itemPrice` | Adds a new item to the inventory |
| `addToCart()` | `buyerGoods` | Adds an item to the cart if it exists in inventory |
| `calculateTotalPrice()` | `addCart` | Computes the total price of all items in the cart |
| `pay()` | `amount`, `discountPrice`, `discount` | Processes payment and applies discounts if applicable |

### Data Structures

- **`itemsUpdated[]`**: Array storing all available items with their prices
  ```javascript
  { itemName: "Phone", itemPrice: 500 }
  ```

- **`addCart[]`**: Array storing items added to the shopping cart

## 💡 Usage Example

```javascript
// Add items to inventory
shopRegistry.itemsList("Phone", 500);
shopRegistry.itemsList("Smart TV", 220);
shopRegistry.itemsList("Gaming console", 150);

// Add items to cart
shopRegistry.addToCart("Phone");              // ✓ Added successfully
shopRegistry.addToCart("Gaming console");     // ✓ Added successfully
shopRegistry.addToCart("Laptop");             // ✗ Not available

// Process payment ($1000 for items totaling $650, with 10% discount if total >= $400)
shopRegistry.pay(1000, 400, 10);
```

### Expected Output

```
Phone added successfully into cart
Gaming console added successfully into cart
Sorry, Laptop not available at the moment
Your total bill is $650
You got a 10% discount and your balance is $415.
Thank you for your patronage! Enjoy your purchase.
```

## 🔧 How It Works

### 1. **Item Registration Phase**
Users register available inventory items with their respective prices.

### 2. **Shopping Phase**
Users add items to their cart. The system validates each item exists in inventory before adding.

### 3. **Calculation Phase**
The system calculates the total bill by summing all item prices in the cart.

### 4. **Payment Phase**
The system processes the payment by:
- Calculating the current total
- Checking if the customer qualifies for a discount (total ≥ discountPrice)
- Verifying the customer has sufficient funds
- Applying the discount if eligible
- Calculating the balance/change
- Displaying appropriate messages

## 🐛 Bug Fixes Implemented

This code includes fixes for common JavaScript pitfalls:

1. **Bug 1: Console Log Placement**
   - Fixed by placing the total bill log BEFORE the return statement
   - Ensures the message displays before the function returns

2. **Bug 2: Missing Function Call Parentheses**
   - Fixed by adding `()` to properly invoke `calculateTotalPrice()`
   - Passed `this.addCart` as an argument instead of passing the method reference

3. **Bug 3: Incorrect Context**
   - Fixed by passing `this.addCart` to the calculation method
   - Ensures the method evaluates the actual items in the cart

## 📊 Sample Scenarios

### ✅ Successful Purchase with Discount
```javascript
shopRegistry.itemsList("Shoe", 100);
shopRegistry.itemsList("Hat", 50);
shopRegistry.addToCart("Shoe");
shopRegistry.addToCart("Hat");
shopRegistry.pay(500, 100, 15);
// Total: $150 | Discount eligible | Balance: $277.50
```

### ⚠️ Insufficient Funds
```javascript
shopRegistry.itemsList("Camera", 800);
shopRegistry.addToCart("Camera");
shopRegistry.pay(500, 400, 20);
// Total: $800 | Insufficient money
```

### ❌ Item Not Available
```javascript
shopRegistry.addToCart("NonExistentItem");
// Sorry, NonExistentItem not available at the moment
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/DusuTimothy/Shopcart_Javascript.git
   ```

2. Navigate to the project:
   ```bash
   cd Shopcart_Javascript
   ```

3. Run the code in Node.js:
   ```bash
   node index.js
   ```

   Or in a browser by including the script in an HTML file:
   ```html
   <script src="index.js"></script>
   ```

## 📚 Learning Objectives

This project demonstrates:
- **Object-oriented JavaScript**: Using objects to organize related data and methods
- **Array methods**: `.find()`, `.push()` for collection manipulation
- **Conditional logic**: if/else statements for discount and payment validation
- **String interpolation**: Template literals for formatted output
- **Control flow**: Loop-based calculations and conditional branching

## 🔮 Potential Enhancements

Consider these improvements for a production version:
- Add quantity support for multiple instances of the same item
- Implement a remove-from-cart function
- Add tax calculation
- Support for coupon codes
- Cart persistence using localStorage
- Input validation and error handling
- Refactor to class-based syntax for better organization
- Add unit tests for reliability
- Create a user interface (HTML/CSS)

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**DusuTimothy**

---

**Happy Shopping! 🛒**
