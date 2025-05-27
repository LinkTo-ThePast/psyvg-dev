interface IQuestionRenderer {
  question: string;
  answers: string[] | string;
}

const QuestionRenderer = ({ question, answers }: IQuestionRenderer) => {
  return (
    <section
      id="question-card-container"
      className="flex flex-col bg-primary_white rounded-lg mt-4 text-yellow-500"
    >
      <div className="justify-center items-center text-center">
        <form className="p-4">
          <fieldset className="space-x-4">
            <legend>
              <h1 className="font-bold text-center mt-4 mb-2 text-2xl">
                {question.question}
              </h1>
            </legend>
            {typeOfQuestion === "text_free" && // text_free generate an input for text
              question.answers.map((q) => (
                <label>
                  <input
                    key={question._id}
                    type="text"
                    placeholder={question.placeholder}
                    value={answer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e.target.value)
                    }
                  />
                  {q}
                </label>
              ))}

            {question.type === "single_choice" && // radio becaus u can just select one
              question.answers.map((q) => (
                <label>
                  <input
                    type="radio"
                    name="answers"
                    key={question._id}
                    value={answer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e.target.value);
                    }}
                  />
                  {q}
                </label>
              ))}
            {question.type === "multiple_choice" && // checkbox to allow multiple choices
              question.answers.map((q) => (
                <label>
                  <input
                    type="checkbox"
                    name="answers"
                    key={question._id}
                    value={answer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e.target.value);
                    }}
                  />
                  {q}
                </label>
              ))}

            {question.type === "hybrid" && // complex, because admit input text when selection one option like "prefiero describirme" --> edge case
              question.answers.map((q) => (
                <label>
                  <input
                    type="radio"
                    name="answers"
                    key={question._id}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e.target.value);
                    }}
                  />
                  {q}
                </label>
              ))}

            <div className="flex-row space-x-5">
              <button
                onClick={() => handlePrevious()}
                className="rounded-2xl bg-primary_pink p-3 max-w-xl"
              >
                Atrás
              </button>
              <button
                onClick={() => handleNext()}
                className="rounded-2xl bg-primary_pink p-3 max-w-xl"
              >
                Siguiente
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
