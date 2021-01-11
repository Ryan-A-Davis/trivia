import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { otd } from "../Services/AxiosService.js"

class QuestionService {
  constructor() {
    console.log("hello from the service")

  }
  async getQuestions() {
    let res = await otd.get()
    ProxyState.questions = res.data.results.map(q => new Question(q))
  }
}


export const questionService = new QuestionService()