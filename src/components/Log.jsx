function Log({ turns, names }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {names[turn.player]} selected {turn.square.row + 1},{" "}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}

export default Log;
