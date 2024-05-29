import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./routes/paths";

// pages
import Home from "./pages/home";
import Clock from "./pages/projects/Clock";
import Stopwatch from "./pages/projects/Stopwatch";
import Todo from "./pages/projects/Todo";
import Counter from "./pages/projects/counter";
import RandomColors from "./pages/projects/random-colors";
import PxToREM from "./pages/projects/PxToREM";
import AgeCalculator from "./pages/projects/AgeCalculator";
import PasswordGenerator from "./pages/projects/password-generator";
import Algorithms from "./pages/projects/algorithms";
import RotationCounter from "./pages/projects/RotationCounter";
import MultiplicationTableGenerator from "./pages/projects/multiplication-table-generator";
import SplitScreen from "./pages/projects/split-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.root} element={<Home />} />
        <Route path={paths.clock} element={<Clock />} />
        <Route path={paths.stopwatch} element={<Stopwatch />} />
        <Route path={paths.todo} element={<Todo />} />
        <Route path={paths.counter} element={<Counter />} />
        <Route path={paths.randomColors} element={<RandomColors />} />
        <Route path={paths.pxToRem} element={<PxToREM />} />
        <Route path={paths.ageCalculator} element={<AgeCalculator />} />
        <Route
          path={paths.randomPasswordGenerator}
          element={<PasswordGenerator />}
        />
        <Route path={paths.algorithms} element={<Algorithms />} />
        <Route path={paths.rotationCounter} element={<RotationCounter />} />
        <Route
          path={paths.multiplicationTableGenerator}
          element={<MultiplicationTableGenerator />}
        />
        <Route path={paths.splitScreen} element={<SplitScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
