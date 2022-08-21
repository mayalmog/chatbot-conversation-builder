import answers from "@/assets/data/answers.json";
import questions from "@/assets/data/questions.json";
import chats from "@/assets/data/chats.json";
export const conversationService = {
  conversationByChatId,
};

//generate a joint object for a specific chatID, including extended info for questions and answers:
function conversationByChatId(chatID) {
  let chat = chats.filter((chat) => chat.chatID === chatID)[0];
  if (chat.questions) {
    chat.questions.map((question) => {
      const extendedQuestion = questions.filter(
        (q) => q.qid === question.qid
      )[0];
      question["qtype"] = extendedQuestion.qtype;
      question["qtext"] = extendedQuestion.qtext;
      question["answers"] = answers.filter((answer) =>
        answer.qids.includes(question.qid)
      );
    });
  }
  console.log(chat);
}
