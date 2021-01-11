export default class Question {
  constructor({ category, difficulty, question, correct_answer, incorrect_answers }) {
    this.category = category
    this.difficulty = difficulty
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers
    this.prompts = [...incorrect_answers, correct_answer].sort()

    console.log("hello from the question")
  }

  get Template() {
    return `
    <div class="col-4 card">
        <div class="card-header">
          <h2>${this.category}</h2>
        </div>
        <div class="cardbody">
          <p>${this.question}</p>
          <ul class="list-group">
          ${this.Prompts}
          </ul>
          </div>
          <div class="card-footer">
          <button class="btn btn-success" onclick="app.questionController.makeGuess()">FINAL ANSWER</button>
          </div>
          </div>
          `
  }

  get Prompts() {
    let template = ''
    this.prompts.forEach(p => template += `<li class="list-group-item">${p}</li>`)
    return template
  }

}