import React from "react";

function PizzaForm( {currentPizza, setCurrentPizza, handleSubmit} ) {

  console.log(currentPizza)

  function handleChange(e) {
    if (e.target.name === 'vegetarian') {
      setCurrentPizza({...currentPizza,
        [e.target.name]: !e.target.checked
        })
    }
    else {
      setCurrentPizza({...currentPizza,
        [e.target.name]: e.target.value
        })
    }
    console.log(e.target.name, e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, currentPizza)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={currentPizza.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value ={currentPizza.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={currentPizza.vegetarian? true: false}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={currentPizza.vegetarian? false: true}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
