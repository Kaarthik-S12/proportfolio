import "./CompareTable.css";

const CompareTable = ({ selectedCars }) => {
  if (selectedCars.length === 0) {
    return <p className="no-cars">No cars selected for comparison.</p>;
  }

  return (
    <div className="compare-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {selectedCars.map((car) => (
              <th key={car.id}>{car.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            {selectedCars.map((car) => (
              <td key={car.id}>${car.price}</td>
            ))}
          </tr>
          <tr>
            <td>Fuel Type</td>
            {selectedCars.map((car) => (
              <td key={car.id}>{car.fuelType}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
