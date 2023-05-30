import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

function App () {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const countersCopy = [...counters];
    const index = countersCopy.indexOf(counter);
    countersCopy[index] = { ...countersCopy[index] };
    countersCopy[index].value++;
    setCounters(countersCopy);
  };

  const handleDecrement = (counter) => {
    const countersCopy = [...counters];
    const index = countersCopy.indexOf(counter);
    countersCopy[index] = { ...countersCopy[index] };
    countersCopy[index].value--;
    setCounters(countersCopy);
  };

  const handleReset = () => {
    const countersCopy = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(countersCopy);
  };

  const handleDelete = (counterId) => {
    const countersCopy = counters.filter((c) => c.id !== counterId);
    setCounters(countersCopy);
  };

  const handleRestart = () => {
    window.location.reload();
  };


  return (
    <div className="main__wrap">
      <main className="container">
        <div className="card__box">
          <NavBar
            totalCounters={
              counters.filter((c) => c.value > 0).length
            }
          />
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </div>
      </main>
    </div>
  );
}



export default App;
