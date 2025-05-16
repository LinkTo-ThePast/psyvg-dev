"use client";
import survey from "@/app/utils/survey/questions/survey";
import { useState } from "react";

const Question = () => {
  // aux counter to mange logic render
  const [counterStepIndex, setCounterStepIndex] = useState<number>(0);
  console.log(counterStepIndex);

  // retrieve current question
  const question = survey[counterStepIndex];

  const handleQuestionType = () => {
    switch (question.type) {
      case "text_free":
    }
  };

  const handleNext = () => {
    event?.preventDefault();
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
    if (counterStepIndex === survey.length - 1) return null; //
    setCounterStepIndex(counterStepIndex + 1); // we pass next question
  };

  // click on "next", => counterStepIndex ++ 1 -> 2
  // render quetion accordingly to the current step

  const handlePrevious = () => {
    event?.preventDefault();
    if (counterStepIndex === 0) return null;
    setCounterStepIndex(counterStepIndex - 1); // we return previous question
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

            {question.type === "multiple_choice" &&
              question.answers.map((question) => (
                <label>
                  <input type="radio" name="answers" key={question} />
                  {question}
                </label>
              ))}

            {question.type === "single_choice" &&
              question.answers.map((question) => (
                <label>
                  <input type="radio" name="answers" key={question} />
                  {question}
                </label>
              ))}

            {question.type === "text_free" &&
              question.answers.map((question) => (
                <label>
                  <input type="text" name="answers" key={question} />
                  {question}
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

export default Question;
