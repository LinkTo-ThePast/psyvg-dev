"use client";
import survey, { QuestionType } from "@/app/utils/survey/questions/survey";
import React, { useState } from "react";

interface IQuestionComponent {
  answer: string | string[];
  onChange: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Question = ({
  answer,
  onChange,
  onNext,
  onPrevious,
}: IQuestionComponent) => {
  // aux counter to mange logic render
  const [counterStepIndex, setCounterStepIndex] = useState<number>(0);
  // aux to identify type of questions
  const [typeOfQuestion, setTypeOfQuestion] = useState<QuestionType>();
  // aux to idenfity current answers
  const [currentAnswer, setCurrentAnswer] = useState<String | String[]>("");

  // retrieve current question ---> main variable
  const question = survey[counterStepIndex];

  const handleQuestionType = () => {
    switch (question.type) {
      case "text_free":
        return setTypeOfQuestion("text_free");

      case "single_choice":
        return setTypeOfQuestion("single_choice");

      case "multiple_choice":
        return setTypeOfQuestion("multiple_choice");

      case "hybrid":
        return setTypeOfQuestion("hybrid");
    }
  };

  const handleNext = () => {
    event?.preventDefault();
    setCurrentAnswer(answer);
    const data = {
      user: "currentUser", //---> current user taking the survey
      answers: {
        question: [answer],
      },
    };

    console.log(data);

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

  const formData = {
    idQuestion: "answer or [answers]",
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

export default Question;
