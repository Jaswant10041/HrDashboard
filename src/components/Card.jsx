import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
const Card = (props) => {
  const { userData, isBookmarked, onBookmark } = props;

  return (
    <div className="mt-8 flex flex-col p-2.5 text-base hover:border hover:border-black hover:cursor-pointer items-center bg-zinc-100 w-120 h-60 hover:rounded-none rounded-sm text-xl">
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
      <div className="rating">
        <span data-twe-rating-icon-ref="1" className="text-yellow-400">★</span>
        <span data-twe-rating-icon-ref="2" className="text-yellow-400">★</span>
        <span data-twe-rating-icon-ref="3" className="text-yellow-400">★</span>
        <span data-twe-rating-icon-ref="4" className="text-yellow-400">★</span>
        <span data-twe-rating-icon-ref="5" className="text-yellow-400">★</span>
      </div>
      <Link to={`/employee/${userData?.id}`}>
      View
      </Link>
    </div>
  );
};
export default Card;