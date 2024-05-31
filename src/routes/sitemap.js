import { paths } from "src/routes/paths";

// images
import ClockImage from "src/assets/images/thumbs/clock.png";
import StopwatchImage from "src/assets/images/thumbs/stopwatch.png";
import SplitScreenImage from "src/assets/images/thumbs/split-screen.png";
import TodoImage from "src/assets/images/thumbs/todo.png";
import CounterImage from "/src/assets/images/thumbs/counter.png";
import RandomColorsImage from "/src/assets/images/thumbs/random-colors.png";
import PxToRemImage from "/src/assets/images/thumbs/px-to-rem.png";
import AgeCalculatorImage from "/src/assets/images/thumbs/age-calculator.png";
import PasswordGeneratorImage from "/src/assets/images/thumbs/password-generator.png";
import AlgorithmsImage from "/src/assets/images/thumbs/algorithms.png";
import RotationCounterImage from "/src/assets/images/thumbs/rotation-counter.png";
import MultiplicationTableImage from "/src/assets/images/thumbs/multiplication-table.png";

export const sitemap = [
  {
    id: 1,
    name: "Digital Clock",
    image: ClockImage,
    tags: ["react", "tailwindCSS"],
    link: paths.clock,
  },
  {
    id: 2,
    name: "StopWatch",
    image: StopwatchImage,
    tags: ["react", "tailwindCSS"],
    link: paths.stopwatch,
  },
  {
    id: 3,
    name: "Todo App",
    image: TodoImage,
    tags: ["react", "tailwindCSS"],
    link: paths.todo,
  },
  {
    id: 4,
    name: "Counter",
    image: CounterImage,
    tags: ["react", "tailwindCSS"],
    link: paths.counter,
  },
  {
    id: 5,
    name: "Random Colors",
    image: RandomColorsImage,
    tags: ["react", "tailwindCSS"],
    link: paths.randomColors,
  },
  {
    id: 6,
    name: "Px to REM Converter",
    image: PxToRemImage,
    tags: ["react", "tailwindCSS"],
    link: paths.pxToRem,
  },
  {
    id: 7,
    name: "Age Calculator",
    image: AgeCalculatorImage,
    tags: ["react", "tailwindCSS"],
    link: paths.ageCalculator,
  },
  {
    id: 8,
    name: "Random Password Generator",
    image: PasswordGeneratorImage,
    tags: ["react", "tailwindCSS"],
    link: paths.randomPasswordGenerator,
  },
  {
    id: 9,
    name: "Algorithms",
    image: AlgorithmsImage,
    tags: ["react", "tailwindCSS"],
    link: paths.algorithms,
  },
  {
    id: 10,
    name: "Rotation Counter",
    image: RotationCounterImage,
    tags: ["react", "tailwindCSS"],
    link: paths.rotationCounter,
  },
  {
    id: 11,
    name: "Multiplication Table Generator",
    image: MultiplicationTableImage,
    tags: ["react", "tailwindCSS"],
    link: paths.multiplicationTableGenerator,
  },
  {
    id: 12,
    name: "Split Screen",
    image: SplitScreenImage,
    tags: ["react", "tailwindCSS"],
    link: paths.splitScreen,
  },
];
