interface IQuestion {
  _id: number;
  question: string;
  answers: string[] | null[];
}

const survey: IQuestion[] = [
  {
    _id: 1,
    question: "¿Cuál es tu género?",
    answers: ["Femenino", "Masculino", "No binario", "Prefiero describirme"],
  },
  { _id: 2, question: "Cuántos años tienes?", answers: [] },
  {
    _id: 3,
    question:
      "En una semana normal o tranquila, ¿cuántos días juegas videojuegos al menos 30 minutos?",
    answers: ["0-1", "2-3", "4-5", "6-7"],
  },
  {
    _id: 4,
    question: "Te consideras un videojugador...",
    answers: [
      "casual: te sumerges en los videjuegos, pero en sesiones cortas o de manera poco frecuente. ",
      "promedio: juegas videojuegos regularmente, pero no de manera muy seria o competetiva. ",
      "serio: eres un videojugador muy dedicado o competetivo.",
    ],
  },
  {
    _id: 5,
    question:
      "¿Cuáles han sido algunos videjuegos recientes que has disfrutado jugar?",
    answers: [],
  },
];

export default survey;
