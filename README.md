📸 React Photo Gallery

A modern Photo Gallery web application built with React and Tailwind CSS.
Users can browse photos, search by author, and mark photos as favorites. Favorites are saved in localStorage, so they persist even after refreshing the page.
<hr>

🚀 Features

<ul>
<li>🔍 Search Photos by author name</li>
<li>❤️ Favorite Photos with a toggle heart button</li>
<li>💾 Persist Favorites using localStorage</li>
<li>⚡ Optimized Performance using React hooks</li>
<li>🎨 Responsive UI with Tailwind CSS</li>
<li>⏳ Loading Spinner while fetching data</li>
</ul>
<hr>

🧠 React Concepts Used

This project demonstrates important React concepts:
<ul>
  <li>Custom Hooks (useFetchPhotos)</li>
  <li>useReducer for managing favorites</li>
  <li>useMemo for optimized filtering</li>
  <li>useCallback for stable event handlers</li>
  <li>LocalStorage persistence</li>
</ul>
<hr>

🛠️ Tech Stack

<ul>
  <li>React</li>
  <li>Tailwind CSS</li>
  <li>Javascript (ES6+)</li>
  <li>Picsum Photo API</li>
</ul>

API used:

https://picsum.photos/v2/list
<hr>

📂 Project Structure

src<br>
 ├── components<br>
 │   ├── useFetchPhotos.js<br>
 │   └── favouritesReducer.js<br>
 │<Br>
 ├── App.jsx<Br>
 ├── main.jsx<Br>
 └── index.css<br>

 <hr>

📜 License

This project is open source and available under the MIT License.
<hr>

👨‍💻 Author

Built with ❤️ using React.
