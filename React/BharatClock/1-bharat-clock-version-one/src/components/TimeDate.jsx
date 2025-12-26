function TimeDate() {
  let time = new Date();
  return (
    <p className="lead">
      Time is {time.toLocaleTimeString()} And date is{" "}
      {time.toLocaleDateString()}{" "}
    </p>
  );
}

export default TimeDate;
