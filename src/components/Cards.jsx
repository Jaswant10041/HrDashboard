import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalState";
import Card from "./Card";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

const Cards = ({ bookmarkedIds = [], onBookmark }) => {
  const { usersData } = useContext(GlobalContext);
  const [dummyUsersData, setDummyUsersData] = useState(usersData);
  const [searchString, setSearchString] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  useEffect(() => {
    filterData();
  }, [usersData, selectedDepartments]);

  const handleSearchOperation = () => {
    filterData();
  };

  const handleDepartmentChange = (dept) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const filterData = () => {
    let filtered = usersData;
    if (selectedDepartments.length > 0) {
      filtered = filtered.filter((user) =>
        selectedDepartments.includes(user?.company?.department)
      );
    }

    if (searchString.trim() !== "") {
      filtered = filtered.filter((user) =>
        Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }

    setDummyUsersData(filtered);
  };

  // Full list of departments
  const departments = [
    "Engineering",
    "Support",
    "Research and Development",
    "Human Resources",
    "Product Management",
    "Marketing",
    "Services",
    "Accounting",
    "Sales",
    "Training",
    "Legal",
  ];

  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-center gap-4">
        <input
          type="text"
          name="searchString"
          onChange={(e) => setSearchString(e.target.value)}
          className="w-80 border border-black px-3 text-lg"
          placeholder="Search Users"
        />
        <button
          className="w-20 h-9 cursor-pointer border border-black rounded-sm text-xl font-normal"
          type="submit"
          onClick={handleSearchOperation}
        >
          Search
        </button>
        <Link
          to="/bookmarks"
          className="w-40 h-9 flex items-center justify-center border border-blue-600 bg-blue-100 rounded-sm text-xl font-normal"
        >
          Show Bookmarks
        </Link>
      </div>

      <div className="flex flex-wrap justify-center mt-4 gap-4">
        {departments.map((dept) => (
          <label key={dept} className="text-md flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedDepartments.includes(dept)}
              onChange={() => handleDepartmentChange(dept)}
            />
            {dept}
          </label>
        ))}
      </div>

      <div className="flex flex-wrap justify-around gap-2.5 mt-4">
        {usersData.length === 0 ? (
          <ShimmerUi />
        ) : (
          dummyUsersData.map((item) => (
            <Card
              key={item.id}
              userData={item}
              isBookmarked={bookmarkedIds.includes(item.id)}
              onBookmark={onBookmark}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;