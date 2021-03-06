# <a id="project"> Can I Eat This? </a>

![app-logo](./images/logo.png)

General Assembly's Web Development Immersive <br />
Project 3 <br />
Developed by Esraa Alaarag, Naomi Meyer, and Francheska Guzman.

### Table of Contents

1. [Description](#description)
2. [User stories](#userstories)
3. [Wireframes web version](#wireframesweb)
4. [Wireframes mobile version](#wireframesmobile)
5. [Visual representation of the database](#database)
6. [Pseudocode](#pseudocode)
7. [App flowchart](#workflow)
8. [ERD or other visual representation of your database](#database)
9. [Technologies used](#technologies)
10. [Cross-browser compatibility](#compatibility)
11. [Ways to see the project](#deployment)

## <a name="description"> Description </a>

An app for people who care about the ingredients in their food!

Step 1: Users register their dietary restrictions on the user preferences page and can save their issues. Such as allergies to peanuts or shellfish, lactose intolerant, gluten-free, or other specific dietary restrictions. 

**Current allergen list:**

- Peanut
- Tree Nuts
- Milk (lactose intolerant)
- Egg
- Wheat (gluten-free)
- Soy
- Fish
- Shellfish
- Sesame

Step 2: Users quickly and easily take a picture of the barcode of a food item to check the ingredients. Using Optical Character Recognition (OCR) the app checks if any of the ingredients from the product match with any of the saved user preferences. 

Step 4: The app displays the results of the thorough ingredient check (over 60 keywords for each) and indicates whether the user can eat the item or not. Rendering each of the unique allergen issues and whether they are present in the product or not.

Step 5: In history, the user can save their past products searched and preferences, stored in an external database. 

## <a name="userstories"> User stories </a>

- As a user, I want to use the app in the browser and on a mobile device.

- As a user, I want to see cute icons for each of my allergen preferences.

- Like this: ![fish-logo](./images/fish-color.png)  ![milk-icon](./images/milk-color.png)  ![treenut-logo](./images/treenut-color.png)  ![egg-logo](./images/egg-color.png)

- As a user, I want to add and edit the ingredients I am careful about in my User Profile.

- As a user, I want to quickly and easily take a picture of the product's barcode then and immediately see if the product contains any ingredients I don't want.

- As a user, I want the option to write the barcode (maybe is the user's preferred way for security reasons, or camera doesn't work, etc), and immediately see if the product contains any ingredients I don't want.

- As a user, I want to 'red flag' ingredients I am careful about. Such as items I am allergic to examples include: peanuts, gluten, dairy, etc. 

- As a user, when I enter the product barcode, I want to know if I'm using the wrong number of digits or letters by mistake.

- As a user, I want an editable history of all the products I already looked up.

- As a user, I want to see the product picture (if available) and see the list of ingredients.

- As a user, I want to edit my allergen preferences in the profile page and get an updated history page.

## <a name="wireframesweb"> Wireframes web version </a>

### Here is the initial thinking we started with:

![initial-thinking](./images/initial-thinking.jpg)

### Homepage:
![homepage](./images/homepage.png)

### Product Info:
![product-info](./images/product-info.png)

### User Profile:
![user-profile](./images/user-profile.png)

### History:
![history](./images/history.png)

## <a name="wireframesmobile"> Wireframes mobile version </a>

### Homepage, Scan Barcode, and Product Information:
![mobile1-3](./images/mobile1-3.png)

### User Profile and History:
![mobile4-5](./images/mobile4-5.png)

<a name="pseudocode">

## Pseudocode

1. Grab the item barcode (by scanning the UPC number, or write it in an input field)
2. Validate the barcode, 12 digits number
3. Make an axios call to find the product information (product name, ingredients)
4. Use the barcode to call another API for the picture 
5. Get the user list of allergies from the database
6. Compare the product ingredients the user’s allergies 
7. Store the comparison information from the two APIs to database 
8. Display the picture of the product if found or use a placeholder
9. Allow the user to change their list of issues, after clicking on the profile page
10. Display the previously selected issues and allow the user to modify selections 
11. If the user wants to see the previously searched items, allow user to click on History page
12. Allow the user to delete a product by clicking on X
13. For wrong links, 404 page is available.


## <a name="workflow"> App flowchart </a>

![workflow](./images/workflow1.png)
![workflow](./images/workflow2.png)

## <a name="database"> ERD or other visual representation of your database </a>

![database](./images/database.png)

## <a name="technologies"> Technologies used </a>

### Core Stack

- HTML
- CSS
- JavaScript
- jQuery
- React
- Node.js
- Express.js
- PostgreSQL
- Heroku
- Git

### Middleware

- nodemon
- pg-promise
- axios
- react-routers
- cors
- react-webcam
- react-base64-img
- CSS Frameworks

### APIs

- Optical Character Recognition (OCR) API
- Nutritionix API
- Open Food Facts API
- Cloudinary API

### Also

- ZenHub (project boards)
- Balsamiq (wireframes)
- Lucidchart (app/project flow)
- Slack (communication)
- Postman (API and DB testing)
- Ice-cream (for sanity :)

## <a id="compatibility"> Cross-browser compatibility </a>

This site has been tested in the following browsers:

Chrome – Version 59.0.3071.115 

Firefox – Version 54.0.1

Safari – Version 9.1.2

## <a name="deployment"> See the project </a>

### Live Deployment of App: [https://ciethis.herokuapp.com](https://ciethis.herokuapp.com)

### Download Project & Install

1. Git clone or download this project
2. Make sure to `npm install`
3. Cd to the `react` folder
4. Run `npm start` and app should be available on localhost:3000

#### [Go back to the Table of Contents](#project)
