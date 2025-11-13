# NLP Text Analyzer

A lightweight Natural Language Processing (NLP) web application that analyzes user-submitted text for emotional tone. The app uses a simple client–server workflow: the frontend collects text from the user, the Express backend forwards it to a cloud NLP API, and the UI displays the resulting sentiment scores (Positive, Negative, Neutral, and Mixed).

This project represents one of my early explorations into API interaction, asynchronous JavaScript, JSON handling, and building a full client ↔ server request cycle.

---

## 📘 App Overview

When a user enters text, the frontend sends it to the Express backend, which then calls a cloud-based NLP service for analysis.  
The API returns both:

- An **overall sentiment** (Positive, Negative, Neutral, or Mixed)
- Detailed **confidence scores** for each category

The UI then updates dynamically to display the results.  
This project demonstrates foundational experience with APIs, asynchronous JS, and understanding the flow of data between the client and server.

---

## 🎨 Features

- Real-time sentiment analysis
- Clean, responsive UI
- Dynamic result cards with confidence values
- Simple client–server architecture
- SCSS-based styling (manually compiled to CSS)

---

## 🛠️ Tech Stack

### **Frontend**

- HTML5
- Vanilla JavaScript (ES6+)
- SCSS → compiled to CSS
- DOM manipulation

### **Backend**

- Node.js
- Express
- External NLP API (AWS Lambda)

---

## 📦 Installation & Setup

```bash
git clone https://github.com/DiyBookOfLife/nlp-analyzer-project.git
cd nlp-analyzer
npm install
npm start
```

## 📦 Project Structure

```text
dist/
  index.html
  js/
    index.js
    formHandler.js
    nameChecker.js
  styles/
    base.css
    form.css
    footer.css
    header.css
    resets.css

src/
  server/
    index.js

src/client/styles/
  base.scss
  form.scss
  footer.scss
  header.scss
  resets.scss
```
