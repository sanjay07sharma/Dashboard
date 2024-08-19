const ProgressBarComponent = ({ subValues }) => {
  return (
    <div className="w-full bg-gray-200 h-4 flex">
      {subValues &&
        subValues.map((subValue, index) => (
          <div
            key={index}
            className={
              `${subValue.colorClass} h-4 flex` +
              `${index === 0 ? " rounded-l-lg" : ""}` +
              `${index === subValues.length - 1 ? " rounded-r-lg" : ""}`
            }
            style={{ width: `${subValue.value}%` }}
          >
            <span className="mt-4">{subValue.value}%</span>
          </div>
        ))}
    </div>
  );
};

export default ProgressBarComponent;
