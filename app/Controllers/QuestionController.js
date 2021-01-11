import { ProxyState } from "../AppState.js"
import { questionService } from "../Services/QuestionService.js"

function _drawQuestions() {
  let template = ''
  const questions = ProxyState.questions
  questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template
}


export default class QuestionController {
  constructor() {
    ProxyState.on('questions', _drawQuestions)
    questionService.getQuestions()
  }
}