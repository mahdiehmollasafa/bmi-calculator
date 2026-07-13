# 🧮 Smart BMI Calculator

A modern and responsive **Body Mass Index (BMI) Calculator** built with **HTML, CSS, and JavaScript**. The application allows users to calculate their BMI based on their height and weight while providing personalized health feedback according to their gender.

Designed with a clean user interface and motivational messages, this project demonstrates the use of vanilla JavaScript for DOM manipulation, user input validation, and simple health-related calculations.

---

## 📖 Table of Contents

- Overview
- Features
- Demo
- Technologies Used
- Project Structure
- BMI Formula
- How It Works
- Installation
- Usage
- Screenshots
- Future Improvements
- Contributing
- License
- Author

---

# 📌 Overview

Body Mass Index (BMI) is one of the most commonly used indicators for estimating whether a person's weight is appropriate for their height.

This project provides an interactive web interface where users can:

- Enter their age
- Select their gender
- Enter height
- Enter weight
- Instantly calculate their BMI
- Receive a personalized health message

The application is lightweight and does not require any external libraries or frameworks.

---

# ✨ Features

- 🎯 Simple and intuitive interface
- 📱 Responsive design
- 👨 Male and Female BMI evaluation
- ⚡ Instant BMI calculation
- 💬 Personalized motivational messages
- 🎨 Modern glassmorphism-inspired UI
- 🌄 Full-screen background image
- 🖥️ Built entirely with Vanilla JavaScript

---

# 🚀 Demo

Simply open:

```
smartBMI.html
```

in any modern web browser.

No installation or server is required.

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

No frameworks or external libraries are used.

---

# 📁 Project Structure

```
Smart-BMI/
│
├── smartBMI.html      # Main webpage
├── style.css          # Styling
├── script.js          # BMI calculation logic
├── bg.jpg             # Background image
└── README.md
```

---

# 🧠 BMI Formula

The calculator uses the standard Body Mass Index formula:

\[
BMI = \frac{Weight(kg)}{Height(m)^2}
\]

Example:

```
Weight = 70 kg
Height = 175 cm

BMI = 70 / (1.75 × 1.75)

BMI = 22.9
```

---

# ⚙️ How It Works

### Step 1

The user enters:

- Age
- Gender
- Height (cm)
- Weight (kg)

---

### Step 2

JavaScript retrieves the values from the HTML form.

```javascript
var h = document.querySelector("#height").value;
var w = document.querySelector("#weight").value;
```

---

### Step 3

BMI is calculated.

```javascript
BMI = weight / (height / 100)^2
```

---

### Step 4

The program determines the BMI category based on gender-specific thresholds.

### Male

| BMI | Status |
|------|--------|
| <20 | Underweight |
| 20–25 | Healthy |
| >25 | Overweight |

---

### Female

| BMI | Status |
|------|--------|
| <19 | Underweight |
| 19–24 | Healthy |
| >24 | Overweight |

---

### Step 5

The BMI value and personalized feedback are displayed on the screen.

---

# 📋 Example

### Input

```
Age: 24

Gender: Male

Height: 180 cm

Weight: 76 kg
```

Output

```
BMI: 23.5

Status:

"Great! You have an athletic body. Keep it up!"
```

---

# 💻 Installation

Clone the repository.

```bash
git clone https://github.com/mahdiehmollasafa/bmi-calculator.git
```

Open the project folder.

```bash
cd bmi-calculator
```

Launch the application.

```
Open smartBMI.html
```

That's it!

---

# ▶️ Usage

1. Open the application.
2. Enter your age.
3. Select your gender.
4. Enter your height in centimeters.
5. Enter your weight in kilograms.
6. Click **"مشاهده نتیجه"**.
7. View your BMI and health message instantly.

---

# 🎨 User Interface

The application includes:

- Glassmorphism card
- Dark overlay background
- Rounded inputs
- Animated button hover effects
- Responsive layout
- Minimalist design

---

# 📷 Screenshots

Add screenshots here after uploading them.

```
screenshots/

├── home.png

├── result.png
```

Example:

```markdown
![Home](screenshots/home.png)

![Result](screenshots/result.png)
```

---

# 📚 Concepts Demonstrated

This project demonstrates:

- HTML Forms
- CSS Flexbox
- Responsive Design
- JavaScript Functions
- DOM Manipulation
- Event Handling
- Conditional Statements
- Mathematical Calculations
- User Interaction

---

# 🌟 Future Improvements

Some ideas for future development:

- Input validation for invalid or empty values
- Display standard WHO BMI categories
- BMI color indicator
- Health recommendations based on BMI
- Animated gauge chart
- Dark / Light theme switch
- Save BMI history using Local Storage
- Multi-language support (Persian & English)
- Age-specific recommendations
- Mobile-first optimization
- React.js version
- Body Fat Percentage Calculator
- Ideal Weight Calculator
- Daily Calorie Requirement Calculator

---

# ⚠️ Disclaimer

This application is intended for educational purposes only.

BMI is a simple screening tool and should not be considered a complete assessment of an individual's health. Consult healthcare professionals for medical advice.

---

# 🤝 Contributing

Contributions are welcome.

If you'd like to improve the project:

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for personal and educational purposes.

---

# 👩‍💻 Author

**Mahdieh Mollasafa**

Full Stack Developer

GitHub: https://github.com/mahdiehmollasafa

---

## ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and motivates future improvements.

Happy Coding! 🚀
