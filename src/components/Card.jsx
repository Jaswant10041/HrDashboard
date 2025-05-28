import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
const Card = (props) => {
  const { userData, isBookmarked, onBookmark } = props;
  const RenderStars = () => {
    const rating=Math.floor(Math.random()*5)+1;
    const arr=[1,2,3,4,5];
    return (
      <div className="flex">
        {arr.map((item, index) => (
          <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8 flex flex-col p-2.5 hover:border hover:border-black items-center bg-zinc-100 w-120 h-60 hover:rounded-none rounded-sm text-xl">
      <div className="flex w-full justify-between items-center">
        <img
          className="rounded w-10"
          alt="restocard-logo"
          src={userData.image}
        />
        <button
          onClick={() => onBookmark(userData.id)}
          className="text-2xl cursor-pointer"
          title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
        >
          {isBookmarked ? <FaBookmark /> : <CiBookmark />}
        </button>
      </div>
      <h3 className="font-medium">
        {userData.firstName +
          " " +
          userData.maidenName +
          " " +
          userData.lastName}
      </h3>
      <p>Age : {userData.age}</p>
      <p>Email : {userData.email}</p>
      <p className="font-medium">Department : {userData.company.department}</p>
      <RenderStars/>
      <div className="pt-2 hover:bg-amber-50 cursor-pointer">
        <Link to={`/employee/${userData?.id}`}>
          <label className="border-1 p-1 rounded-xl cursor-pointer">View</label>
        </Link>
      </div>
    </div>
  );
};
export default Card;
