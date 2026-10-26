# 🛒 JetPens – E-Commerce Store

A front-end e-commerce web application inspired by [JetPens](https://www.jetpens.com/), built with vanilla **HTML**, **CSS**, and **JavaScript**. The project demonstrates core web development skills including dynamic product rendering, cart management, checkout flow, order history, and package tracking.

## ✨ Features

- **Product Listing** – Browse a catalog of products dynamically rendered from a data source
- **Add to Cart** – Select quantities and add items to a persistent shopping cart
- **Checkout** – View an order summary with itemized costs, delivery options, and a payment summary
- **Order History** – Review past orders with dates, totals, and order IDs
- **Package Tracking** – Track shipment status with a visual progress bar (Preparing → Shipped → Delivered)
- **Responsive Design** – Optimized for desktop, tablet, and mobile screen sizes

## 🛠️ Tech Stack

| Layer     | Technology            |
| --------- | --------------------- |
| Structure | HTML5                 |
| Styling   | CSS3 (vanilla)        |
| Logic     | JavaScript (ES Modules) |
| Font      | Google Fonts – Roboto |
| Data      | JSON (local)          |

## 📁 Project Structure

```
Javascript-jetpens-project/
├── jetpens.html          # Main product listing page
├── checkout.html         # Shopping cart & checkout page
├── orders.html           # Order history page
├── tracking.html         # Package tracking page
├── favicon.ico
├── data/
│   └── products.json     # Product catalog data
├── images/               # Product images & icons
├── scripts/
│   ├── jetpens.js        # Product grid rendering
│   ├── checkout.js       # Checkout page logic
│   ├── checkout/
│   │   ├── orderSummary.js   # Order summary component
│   │   └── paymentSummary.js # Payment summary component
│   └── utils/
│       └── money.js      # Currency formatting utility
├── backend/
│   ├── products.js       # Product data module
│   ├── cart.js            # Cart state management
│   ├── cart-class.js      # Cart (class-based OOP)
│   ├── cart-oop.js        # Cart (prototype-based OOP)
│   ├── deliveryOptions.js # Shipping / delivery options
│   ├── order.js           # Order data model
│   └── backend-practice.js
└── styles/
    ├── shared/            # Shared styles (general, header)
    └── pages/             # Page-specific styles
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/EndriasEshetu/Javascript-jetpens-project.git
   cd Javascript-jetpens-project
   ```

2. **Open in a browser**

   Since the project uses ES Modules, you need to serve it via a local server:
   ```bash
   # Using VS Code Live Server extension (recommended)
   # Or with Python:
   python -m http.server 8000

   # Or with Node.js:
   npx serve .
   ```

3. **Navigate to** `http://localhost:8000/jetpens.html`

## 📸 Pages Overview

| Page              | Description                                      |
| ----------------- | ------------------------------------------------ |
| `jetpens.html`    | Main storefront – browse and add products to cart |
| `checkout.html`   | Review cart items, select delivery, view totals   |
| `orders.html`     | View order history with details                  |
| `tracking.html`   | Track package delivery status                    |

## 📝 License

This project is for educational purposes.

---

Built by **Endrias Eshetu**
