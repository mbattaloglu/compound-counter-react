import Counter from "./Counter";

function App() {
  return (
    <>
      <h1>Different Counters</h1>
      <p>
        Since Counter is a compound component, you can make different counter
        layouts. It has{" "}
        <code>
          Counter.Label, Counter.Increase, Counter.Decrease, Counter.Count,
        </code>
      </p>
      <div
        style={{
          display: "inline-block",
          border: "1px solid red",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <Counter>
          <Counter.Label>This is counter 1</Counter.Label>
          <Counter.Increase icon="+" />
          <Counter.Decrease icon="-" />
          <Counter.Count />
        </Counter>
      </div>
      <div
        style={{
          display: "inline-block",
          border: "1px solid black",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <Counter>
          <div>
            <Counter.Label>This is counter 2</Counter.Label>
          </div>
          <Counter.Increase icon="+" />
          <Counter.Count />
          <Counter.Decrease icon="-" />
        </Counter>
      </div>
      <div
        style={{
          display: "inline-block",
          border: "1px solid blue",
          margin: "1rem",
          padding: "1rem",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <Counter>
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Increase icon="+" />
          <div>
            <Counter.Label>This is counter 3</Counter.Label>
          </div>
        </Counter>
      </div>
    </>
  );
}

export default App;
