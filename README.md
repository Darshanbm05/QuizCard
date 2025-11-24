# QuizCard 🎴

An interactive quiz card game with role-based access for teachers and students. Built with React, Firebase, and Material-UI.

## ✨ Features

### For Teachers 👨‍🏫
- Create and manage quizzes with multiple-choice questions
- Edit existing quizzes
- Delete quizzes with confirmation
- Generate unique quiz codes for sharing
- View detailed analytics and student performance
- Track quiz attempts and scores

### For Students 🎓
- Play quizzes using quiz codes
- Interactive card-based answer selection
- Countdown timer for each question
- View score history and statistics
- Compete on leaderboards with rankings
- Track overall performance metrics

## 🎨 UI Highlights

- Beautiful gradient backgrounds
- Smooth animations and transitions
- Responsive 2x2 card layout
- Role-based color themes
- Floating logo animations
- Real-time timer with visual feedback

## 🛠️ Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Firebase (Authentication + Firestore)
- **Routing**: React Router
- **Styling**: Styled Components, CSS-in-JS
- **Icons**: Material-UI Icons
- **API Documentation**: OpenAPI 3.0 (Swagger)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SaherMahtab/QuizCard.git
cd QuizCard
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication
   - Create a Firestore database
   - Copy `src/firebase/config.example.js` to `src/firebase/config.js`
   - Add your Firebase credentials to `config.js`

4. Run the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Firebase Setup

1. Go to Firebase Console → Project Settings
2. Under "Your apps", click the web icon `</>`
3. Copy your Firebase configuration
4. Paste it into `src/firebase/config.js`

Required Firebase services:
- Authentication (Email/Password)
- Firestore Database

## 📚 API Documentation

QuizCard includes API documentation using OpenAPI 3.0 (Swagger).

**View API Documentation:**

```bash
# Start interactive Swagger UI on localhost:8080
npm run api-docs
```

Then open http://localhost:8080 in your browser to explore all API endpoints.

**Files:**
- `swagger.yaml` - OpenAPI 3.0 specification
- `postman_collection.json` - Import into Postman for API testing

**Alternative:** Open [Swagger Editor](https://editor.swagger.io/) and import `swagger.yaml`

### As a Teacher:
1. Sign up with teacher role
2. Create a new quiz with questions
3. Share the quiz code with students
4. Monitor student performance in analytics

### As a Student:
1. Sign up with student role
2. Enter a quiz code on the dashboard
3. Play the quiz and answer questions
4. View your score and compete on leaderboards

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Saher Mahtab**
- GitHub: [@SaherMahtab](https://github.com/SaherMahtab)

## 🙏 Acknowledgments

- Material-UI for the component library
- Firebase for backend services
- React community for inspiration

---

Made with ❤️ for educational purposes