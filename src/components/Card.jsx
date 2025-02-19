import PropTypes from "prop-types";

const Card = ({ title, company, category, type, salary, location, time }) => {

    return (
    
        <div className="card bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
        <div className="flex justify-between">
        <h2 className=" text-xl font-semibold text-gray-800">{title}</h2>
            <button>save</button>
        </div>
        <p className="text-gray-600">{company}</p>
        <p className="text-sm text-blue-500 font-medium">{category}</p>
        <div className=" flex items-center space-x-6">
        <p className="text-sm text-green-500">{type}</p>
        <p className="text-lg font-semibold text-gray-700">{salary}</p>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-gray-400 text-xs">{time} ago</p>
        </div>
        <div className="ml-auto text-right ">
            <button className="bg-green-600 p-3 rounded " >Job Details</button>
        </div>
      </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
