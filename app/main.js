import QuestionController from "../app/Controllers/QuestionController.js"

class App {
  questionController = new QuestionController()
}

window["app"] = new App();
