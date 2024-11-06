# Gadget Heaven - React E-Commerce Website

**Gadget Heaven** is a modern e-commerce website where users can browse, review, and purchase gadgets online. The website features a user-friendly interface, and provides a variety of functions such as adding items to the cart, managing a wishlist, and viewing detailed information about products.

## Live Website Link
https://gadgethubsalman.netlify.app/

## Requirement Document Link
[View the Requirement Document](/public/websiteRequirement.pdf)

## React Fundamental Concepts Used in the Project

This project utilizes the following React fundamental concepts:

- **Components**: The project is built using functional components for modularity and reusability.
- **JSX**: React's syntax extension for JavaScript is used to create the layout of the application.
- **State Management (useState)**: Local state is used in different components like `GadgetDetails` and `AddToCart` to track user interactions and product data.
- **Effect Hook (useEffect)**: To fetch data from APIs and perform side effects like loading product data on page load.
- **Routing (React Router)**: `react-router-dom` is used for handling client-side navigation, allowing users to switch between pages like Home, Reviews, Dashboard, and Gadget Details.
- **Custom Hooks**: Used for reusable logic, such as adding items to the cart and wishlist.
- **Prop drilling**: Props are passed down through components for data flow.
- **Conditional Rendering**: Used for showing different UI elements based on user interactions and data state.
- **Event Handling**: Handled user actions such as clicking buttons to add products to the cart or wishlist.

## Data Handling and Management

For managing and handling data, this project uses:

- **Local Storage**: Data such as the cart items and wishlist is stored in the browser's local storage using utility functions (e.g., `addCart`, `addWishlist`, `removeCart`) to persist user selections even after the page is refreshed.

## 5 Features of the Website/Project

1. **Product Listings**: Users can view a list of gadgets on the homepage. Each product displays essential information like the name, price, and rating.
  
2. **Product Details Page**: On clicking a product, users are directed to the detailed product page where they can view the full description, price, and specifications. There’s also an option to add the product to the cart or wishlist.
   
3. **Cart Management**: Users can add products to the cart and manage the cart items. The total cost is calculated and displayed, and users can remove items from the cart.
   
4. **Wishlist Management**: Users can add products to their wishlist. After clicking the heart icon, it will change color to indicate that the item has been added to the wishlist, and the button will be disabled to prevent repeated additions.
   
5. **Sorting and Filtering**: Users can sort products by price and filter based on categories or availability, making it easier to find the desired gadget.

---

