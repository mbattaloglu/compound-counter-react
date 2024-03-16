import { createContext, useContext, useState } from "react";

const CounterContext = createContext({});

const Counter: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((c) => c + 1);
  const decrease = () => setCounter((c) => c - 1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        increase,
        decrease,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default Counter;

const Label: React.FC = ({ children }) => {
  return <span>{children}</span>;
};

const Increase: React.FC = ({ icon }) => {
  const { increase } = useContext(CounterContext);

  return <button onClick={increase}>{icon}</button>;
};

const Decrease: React.FC = ({ icon }) => {
  const { decrease } = useContext(CounterContext);

  return <button onClick={decrease}>{icon}</button>;
};

const Count: React.FC = () => {
  const { counter } = useContext(CounterContext);

  return <span>{counter}</span>;
};

Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
Counter.Count = Count;
