# 🚀 Task-01: Responsive Landing Page - Stylish Interactive Navigation Menu

This repository presents a solution for creating a modern, fixed navigation menu with advanced scroll and hover interactivity, designed as a key component of a responsive landing page. The solution is provided in a single `index.html` file for simplicity and ease of testing.

## ✨ Project Highlights

The menu transitions dynamically based on user interaction, enhancing the overall user experience.

| Feature | Description | Implementation |
| :--- | :--- | :--- |
| **Fixed on Scroll** | The navigation bar is `position: fixed` and remains visible at all times. | CSS |
| **Dynamic Style Change** | The menu transitions from **transparent** (initial state) to **semi-transparent white** with a `backdrop-filter: blur()` (scrolled state) after scrolling past 80 pixels. | JavaScript & CSS `.scrolled` class |
| **Advanced Hover** | Menu items use a modern, animated **teal sliding underline** instead of a plain background change. | CSS `::after` pseudo-element with `transform: scaleX()` |
| **Smooth Scrolling** | Clicking internal links (`#home`, `#services`, etc.) results in a smooth, animated scroll to the target section, precisely offset for the fixed menu's height. | JavaScript `window.scrollTo({ behavior: 'smooth' })` |

## 🛠️ Technologies Used

* **HTML5:** Structure (`index.html`).
* **CSS3:** Styling, Fixed positioning, `transition`, and `::after` hover effects.
* **JavaScript (ES6):** DOM manipulation, scroll event handling, and smooth scroll logic.
* **Font:** Google Fonts **Poppins** for a modern aesthetic.

## 📁 Project Contents

This project is consolidated into one file for quick deployment.

* `index.html`: Contains all the HTML structure, CSS styling (in `<style>`), and JavaScript logic (in `<script>`).

## 🌐 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mdkhalid9284-spec/task1.git](https://github.com/mdkhalid9284-spec/task1.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd task1
    ```
3.  **Open the file:** Open the `index.html` file in any web browser.

You can then test the interactivity by scrolling down the page and hovering over the menu links.

## 💡 Key Code Logic

The main interactivity is driven by the JavaScript `handleScroll` function:

```javascript
function handleScroll() {
    const navbar = document.getElementById('navbar');
    // Check if the vertical scroll position is more than 80 pixels
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);
