
import CompareTable from "../components/CompareTable";
import './Compare.css';  // Adjust the path if needed

const Compare = ({ selectedCars }) => {
  return (
    <div className="compare-page">
      <h2>Compare Cars</h2>
      <CompareTable selectedCars={selectedCars} />
    </div>
  );
};

export default Compare;
