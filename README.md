# QuizHive

Welcome to **QuizHive**, a dynamic and engaging quiz application designed to test your knowledge and provide an enjoyable quiz experience. Built with a focus on user experience, QuizHive supports both light and dark themes, responsive design, and a variety of question categories to choose from.

### Live Link - [https://quizhive-opal.vercel.app/](https://quizhive-opal.vercel.app/)

## 🚀 Features
- **Timer**:
  - Keep track of your time while answering questions to add a challenging element to your quiz experience.

- **Question Selection**:
  - Choose questions based on category, difficulty, type, and number of questions, allowing you to tailor the quiz to your preferences.

- **Progress Tracking**:
  - A progress bar shows your current question number and score, helping you stay on track.

- **Navigation**:
  - Navigate through the quiz using Next and Previous buttons. While you can go back to review questions, changing answers is disabled to maintain integrity.

- **Real-Time Feedback**:
  - Upon selecting an answer, the option color changes to red or green, indicating whether it’s correct or not.

- **Interactive Result Page**:
  - View your quiz performance with a visually appealing results page.
  - Includes a pie chart showing the percentage of correct (green) and incorrect (red) answers.
  - Displays a detailed scorecard with your total score, correct and incorrect answers, time taken, and accuracy percentage.
  - Provides a dynamic feedback message based on your score percentage to motivate or challenge you.

- **Restart Functionality**:
  - Start a new quiz at any time with the Restart button.

- **Dynamic Theming**:
  - Toggle between light and dark themes based on your preference or system settings.

- **Responsive Design**:
  - Optimized for devices of all screen sizes, from desktops to mobile phones.

## 🛠️ Technologies Used

- **Frontend**:
  - React.js (with hooks and context API for state management)
  - Tailwind CSS for styling

- **State Management**:
  - useReducer with Context API to manage quiz states and theme toggling.

- **API**:
  - Open Trivia Database (Trivia API) for fetching quiz questions and categories.

## 📂 Project Structure

```
Quizhive/
├── src/
│   ├── components/           # Reusable components (e.g., Header, QuizForm, ToggleButton)
│   ├── context/              # Context API setup for theme and quiz state
│   ├── pages/                # Pages like Home, Quiz, and Results
│   ├── assets/               # Static assets such as images and icons
│   └── styles/               # Tailwind CSS configuration
├── public/                   # Public assets and favicon
├── tailwind.config.js        # Tailwind CSS configuration
├── App.jsx                   # App Component
├── main.jsx                  # Root of App
├── package.json              # Project dependencies and scripts
└── README.md                 # Documentation (this file)
```

## ⚡ Quick Start

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/tapan31/Quizhive.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Quizhive
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## 🌟 Key Components

### 1. Header
- Displays the app logo and theme toggle button.
- Fully responsive and visually appealing.

### 2. Quiz Form
- Allows users to select a quiz category and difficulty.
- Handles API integration to fetch relevant quiz questions.

### 3. Quiz Screen
- Displays questions with multiple-choice answers.
- Provides real-time feedback for each question.

### 4. Results Screen
- Summarizes the user’s performance with a score, pie chart, and motivational feedback.

## 🌗 Dark Mode Implementation

- **System Preference Detection**:
  - Automatically applies the system’s preferred theme on first load.

- **Toggle Functionality**:
  - Users can manually switch themes using a stylish toggle button in the header.

- **Local Storage Persistence**:
  - Saves the user’s theme preference for future visits.
   
## 📝 Contributing

Contributions are welcome! If you’d like to improve QuizHive, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m 'Add feature-name'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## 💬 Feedback

If you have any suggestions or feedback, feel free to open an issue or contact [Tapan Sonak](https://github.com/tapan31).

---

Enjoy quizzing with **QuizHive**! 🐝
