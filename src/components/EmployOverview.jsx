import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../GlobalState';

const EmployOverview = () => {
  const {usersData}=useContext(GlobalContext);
  const newData=usersData;
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [performance, setPerformance] = useState(0);

  useEffect(() => {
    const selected = newData.filter((item) => item.id == id);
    console.log(selected);
    setEmployee(selected.length>0 ? selected[0] : null);
    setPerformance(Math.floor(Math.random() * 5) + 1);
  }, [id, newData]);

  const getPerformanceLabel = (rating) => {
    if (rating >= 4) return 'Excellent';
    if (rating === 3) return 'Average';
    return 'Poor';
  };

  const renderStars = (rating) => {
    const arr=[1,2,3,4,5];
    return arr
      .map((item, index) => (
        <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      ));
  };

  if (!employee) {
    return <div className="p-4 text-center text-red-600 font-semibold">Employee not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Employee Details</h2>

      <div className="mt-8 flex flex-col p-2.5 items-center">
        <div className="p-2">
          <img
            className="rounded w-10"
            alt="restocard-logo"
            src={employee.image}
          />
        </div>

        <h3 className="p-2">
          {employee.firstName +
            " " +
            employee.maidenName +
            " " +
            employee.lastName}
        </h3>

        <p className="p-2">Age : {employee.age}</p>

        <p className="p-2">Email : {employee.email}</p>

        <p className='p-2'>Department : {employee?.company?.department}</p>
        <div className="text-xl">{renderStars(performance)}</div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {['overview', 'projects', 'feedback'].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-blue-500 hover:cursor-pointer'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      
      <div>
        {activeTab === 'overview' && (
          <div>
            <p className="mb-2"><span className="font-semibold">Performance:</span> {getPerformanceLabel(performance)}</p>
            <div className="text-xl">{renderStars(performance)}</div>
          </div>
        )}

        {activeTab === 'projects' && (
          <ul className="list-disc pl-6">
            <li>Project A</li>
            <li>Project B</li>
            <li>Project C</li>
          </ul>
        )}

        {activeTab === 'feedback' && (
          <div className="text-gray-700 italic">
            "Consistently meets deadlines and exceeds expectations."
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployOverview;
