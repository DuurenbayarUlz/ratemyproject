# CS490 Webstore

`Webstore` is an online shopping application developed by group of K students.

This repo is dedicated to building the app in ReactJS.

## Toolchain

| Tool | Version    |
| ---- | ---------- |
| Node | `^14.17.1` |
| Yarn | `^1.22.17` |

## Setup

1. Install Node version `^14.17.1`.
2. Run `yarn` or `npm install` to install dependencies.
3. Run `yarn start` or `npm run start` to start the app locally.

### Project Description

1. The website will allow registered users to browse a catalog with a brief variety of products
   a. Available number of units in stock.
   b. Price, weight, dimension and some other description specific to the item.
   c. A picture of the item.
   d. Shopping cart

2. Each new registered user will receive a gift card of ¤500 (five hundred webcoins). Each time a user checkout the items in their cart, the amount to be payed will be deducted from the gift card. A user with insufficient funds can't finish the checkout process.

3. If a user wants an item quantity that is bigger than the available number of units in stock, deny it.

4. Items displayed in the Catalog Page should have the options to view it (which will open a Product Page with more details about the item), add to favorite list, and add to cart (which will add 1 unit of the product to the shopping cart). The items should display its name as well as its price, the units available, and the user rating.

5. The Catalog Page should have a side navigation section with options to filter items by: price, popularity, and product specific filters (such as `book genre` for an online book store, etc.)

6. The Product Page should have a thorough description of the specific item, option to choose the number of units to be added to the cart, as well as a Product Review section with options for the users to rate the product from 0 (worthless) to 5 (excellent). These ratings will be displayed as part of the product description. The Product Review section will also allow to answer a "would buy again?" question and display the number of users that answered yes and no, respectively.

7. In your Catalog Page, if there are not units available of a particular product, display it as "sold out" (always display the products).

8. Your website should have a `Landing Page` with the options to register and/or login, as well as a brief description of the products you are selling.

9. The user's `Home Page` should have a history of previous purchases, their favorite items list, and the items in the saved cart.

10. Allow a user to be able to reload their webcoin gift card once every 24 hours from `My Account` page.

### Development

1. When you are making changes, make sure to checkout out a new branch and push it to the repo using

<ul>
   <li>git checkout -b "you-branch-name"</li>
   <li>git add .</li>
   <li>git commit -m "descriptive comment about the changes"</li>
   <li>git push -u origin head</li>
</ul>

2. Once you push the changes, create a pull request using Github dashboard to be reviewed.
