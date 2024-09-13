# ACONEWS README

Welcome to **ACONEWS** - your go-to hub for the freshest news on the internet, straight from the reliable gnews.io API. 
Here's a complete guid on how to set up, understand, and troubleshoot the project. Let's dive in!


Building **ACONEWS**, the News App was an exciting adventure, combining various technologies and tackling challenges to create a sleek news app. Here’s a glimpse into my journey from start to finish:

## 🛠️ The Coding Journey

### 1. Choosing the Framework
I kicked off the project by selecting React as the frontend framework. Its component-based architecture promised flexibility and ease of maintenance, which was perfect for building a dynamic news app. Setting up the React environment was smooth, and I was ready to start crafting components.

### 2. Designing the Layout
The design phase was all about creating a clean, user-friendly interface. Here’s how I approached it:

- **News Feed:** I implemented a news feed that displays articles in a card format using tailwindcss styling. Each card showcases the article’s title, snippet, and image, offering a visually appealing way for users to browse through the news.
  
- **Search Bar:** Adding a search bar was crucial for allowing users to find specific news articles based on keywords. Integrating it with the API required a bit of tweaking to ensure search results were accurate and fast.
  
- **Filters:** I added filters to let users narrow down news by categories, countries, or languages. This involved setting up dropdowns and making sure they interacted seamlessly with the API to fetch the filtered news.

- **Pagination:** To handle multiple pages of news articles, I implemented a pagination component. This involved managing the current page state and fetching the right set of articles based on user interactions. But, unfortunately , due to GNEWS limitation can't be used on a FREE account. Need a paid subscriptions.

### 3. Ensuring Responsive Design
I knew that a responsive design was essential for a good user experience. Here’s how I tackled it:

- **TailwindCSS:** I used TailwindCSS for styling. Its utility-first approach allowed me to quickly apply styles and ensure that the layout adjusted beautifully across devices. Tailwind’s responsive utilities made it easy to handle different screen sizes.
  
- **Testing:** Testing was done rigorously using Chrome DevTools. I made sure the app looked and worked well on mobile, tablet, and desktop views. This included adjusting Flexbox/Grid layouts and ensuring all interactive elements were touch-friendly.

### 4. Implementing the Backend
For the backend, I set up Next.js API routes to handle data fetching from gnews.io. This ensured that sensitive API keys were secure and allowed me to manage requests efficiently. Handling pagination and search at the backend meant that the frontend stayed snappy and responsive.

### 5. Deployment
Deploying on Fly.io was a new experience, but the process was straightforward. Setting up the Fly.io configuration and deploying the app was the final step. It was exciting to see ACONEWS go live, with all the hard work paying off in a fully functional news app.

## 🛠️ Overview of My Approach

Here's a rundown of all the technologies and tools that made ACONEWS possible:

- **Frontend:**
  - **ReactJS:** For building a dynamic, component-based user interface.
  - **Next.js:** For server-side rendering and API route handling.
  - **ShadcnUI:** For modern UI components and design consistency.
  - **TailwindCSS:** For responsive and utility-first styling.

- **Backend:**
  - **Next.js API Routes:** For securely fetching news from gnews.io and handling search.

- **Deployment:**
  - **Fly.io:** For deploying the application and managing server infrastructure.

- **API:**
  - **gnews.io:** For fetching news articles and updates.

- **Tools & Libraries:**
  - **Chrome DevTools:** For testing and ensuring responsive design.

Building ACONEWS was a fantastic experience, combining different tools and technologies to create a cohesive and functional news application. Each step brought its own set of challenges and learning opportunities, making the journey both rewarding and educational.


## ⚠️ Challenges and How I Overcame Them

### 1. Responsive Design
**Challenge:** Ensuring the UI was responsive across various devices.
**Solution:** Leveraged TailwindCSS’s responsive utilities and tested extensively on different screen sizes. Used media queries to adjust styles as needed.

### 2. Deployment Issues
**Challenge:** Initial deployment on Fly.io had some configuration hiccups.
**Solution:** Consulted Fly.io’s documentation and community forums for guidance. Made sure environment variables were correctly set and the build process was properly configured.

### 3. Handling Async Data
**Challenge:** Managing asynchronous data fetching and state updates.
**Solution:** Utilized React useeffects and states for efficient data fetching  and state management. 

That’s a wrap on ACONEWS! 