import MainLayout from "@/app/components/layouts/main-layout/MainLayout";
import Question from "@/app/components/survey/questions/Question";

const QuestionsPage = () => {
  return (
    <MainLayout>
      <section className="min-h-40 flex flex-col items-center justify-start mt-20 ">
        <h1 className="text-2xl font-bold">Personalidad y videojuegos</h1>
        <Question />
      </section>
    </MainLayout>
  );
};

export default QuestionsPage;
