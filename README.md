## Getting Started

1. Clone the repository to your local
2. Run the command to install all dependencies
```bash
npm install
```
3. Then, run the development server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> Note: Vercel is shippping React 19 RC with npx create-next-app@latest. However, React 19 requires preexisting libraries such as react-slick to add React 19 to their peer dependency to work. Hence I have downgraded to React 19 for this project which still works smoothly with next 15.
> Only react-slick (along with slick-carousel for its css) is used as external library. 

## Assumptions Made

1. Requirements stated to use getServerSideProps for fetching from api in the server side. Hence I have used Next Page router instead of App router.
2. I have used external images from unsplash for the carousel kept in the public/images folder.
3. Advanced functionalities such as Cart were skipped as I found them deviating from the provided task.

## Summary

1. Header and Footer components are used in Layout.tsx as common layout across all pages. Layout then wraps around the _app.tsx.
2. All the css variables are placed in global.css. All the remaining styling is majorly done through tailwind. Only 1 css module was needed to add style transition on hover in the Header component.
3. ProductCard.tsx can be used in other UIs as well hence I have placed it in common folder. (used it in BestSeller widget with static data for example)
4. Static data for nav, Bestseller and Carousel are placed in data.tsx. All type declarations are kept in types.tsx.
5. Product listing and Product detail page fetches the data using getServerSideProps on the server side as mentioned in the task to take advantage of the SSR capabilities. The fetched data is then rendered according to the requirements.
6. Instead of directly showing the product category in the card I have added a simple filter functionality to filter by category. This is done without using react hooks so we still have the server component.
7. A 404 Not Found error page for error handling. 
8. next/image component requires all external image domains to be explicitly allowed in your next.config.js file. So added pattern for hostname fakestoreapi.com.