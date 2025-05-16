"use client";
import survey from "@/app/utils/survey/questions/survey";

const Question = () => {
  // aux counter
  const counterStep = 0;

  // retrieve current questions
  const question = survey[counterStep];

  const handleNext = (counterStep: number) => {
    const data = {
      user: "currentUser", //---> current user taking the survey
      answers: {
        question1: "answer1",
      },
    };

    // send updates to the initial form
    const updateAndSaveState = () => {
      const initialForm = data;
    };

    return counterStep++; // we pass next question
  };

  // click on "next", => counterStep ++ 1 -> 2
  // render quetion accordingly to the current step

  const handlePrevious = (counterStep: number) => {
    return counterStep--; // we return previous question
  };

  return (
    <section
      id="question-card-container"
      className="flex flex-col bg-primary_white rounded-lg mt-4"
    >
      <div className="justify-center items-center text-center">
        <form className="p-4">
          <fieldset className="space-x-4">
            <legend>
              <h1 className="font-bold text-center mt-4 mb-2 text-2xl">
                {question.question}
              </h1>
            </legend>
            <label>
              <input type="radio" name="firstQ" /> {question.answers[0]}
            </label>
            <label>
              <input type="radio" name="secondQ" /> {question.answers[1]}
            </label>
            <label>
              <input type="radio" name="thirdQ" /> {question.answers[2]}
            </label>
            <div className="flex-row space-x-5">
              <button
                onClick={() => handleNext(counterStep)}
                className="rounded-2xl bg-primary_pink p-3 max-w-xl"
              >
                Atrás
              </button>
              <button
                onClick={() => handlePrevious(counterStep)}
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

export default Question;
