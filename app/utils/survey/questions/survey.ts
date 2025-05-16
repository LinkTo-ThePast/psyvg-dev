export type QuestionType =
  | "multiple_choice"
  | "single_choice"
  | "hybrid"
  | "text_free";

interface IQuestion {
  _id: number;
  type: QuestionType;
  question: string;
  answers: string[];
}

const survey: IQuestion[] = [
  {
    _id: 1,
    type: "hybrid",
    question: "¿Cuál es tu género?",
    answers: ["Femenino", "Masculino", "No binario", "Prefiero describirme"],
  },
  { _id: 2, type: "text_free", question: "¿Cuántos años tienes?", answers: [] },
  {
    _id: 3,
    type: "single_choice",
    question:
      "En una semana normal o tranquila, ¿cuántos días juegas videojuegos al menos 30 minutos?",
    answers: ["0-1", "2-3", "4-5", "6-7"],
  },
  {
    _id: 4,
    type: "single_choice",
    question: "Te consideras un videojugador...",
    answers: [
      "casual: te sumerges en los videjuegos, pero en sesiones cortas o de manera poco frecuente. ",
      "promedio: juegas videojuegos regularmente, pero no de manera muy seria o competetiva. ",
      "serio: eres un videojugador muy dedicado o competetivo.",
    ],
  },
  {
    _id: 5,
    type: "text_free",
    question:
      "¿Cuáles han sido algunos videjuegos recientes que has disfrutado jugar?",
    answers: [],
  },
  {
    _id: 6,
    type: "multiple_choice",
    question:
      "¿En cuál de las siguientes plataformas usualmente juegas a videjuegos?",
    answers: [
      "Console",
      "PC/MAC",
      "Celular/Tablet",
      "Consola portatil",
      "Sistemas de realidad virtual",
    ],
  },
];

export default survey;
