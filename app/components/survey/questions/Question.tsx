import survey from "@/app/utils/survey/questions/survey";

const Question = () => {
  // retrieve question
  const question = survey["¿Cuál es tu género?"];

  return (
    <section id="question-card-container" className="flex flex-col">
      <h1 className="font-bold text-center">{question}</h1>
    </section>
  );
};

export default Question;
