interface Question {
    question: string 
    options: string[]
    answer: string
}

export const questions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which programming language is primarily used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      question: "What is 15 + 7?",
      options: ["20", "21", "22", "23"],
      answer: "22"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
      answer: "Da Vinci"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars"
    }
  ];