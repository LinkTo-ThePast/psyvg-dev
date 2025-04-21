import survey from "@/app/utils/survey/questions/survey";

const Question = () => {
  // retrieve question
  const question = survey[0];

  return (
    <section id="question-card-container" className="flex flex-col">
      <h1 className="font-bold text-center mt-10 text-2xl">
        {question.question}
      </h1>
    </section>
  );
};

export default Question;
