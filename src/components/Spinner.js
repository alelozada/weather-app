import './Spinner.css';

const Spinner = () => {
  return (
    <div className="container">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
        <br />
        <p className='loading'>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
