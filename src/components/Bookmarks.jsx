import { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import Card from "./Card";
import ShimmerUi from "./ShimmerUi";

const Bookmarks = ({ bookmarkedIds = [], onBookmark }) => {
  const { usersData } = useContext(GlobalContext);

  
  const bookmarkedUsers = usersData.filter(user => bookmarkedIds.includes(user.id));

  return (
    <div className="flex flex-col mt-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Bookmarked Employees</h2>
      <div className="flex flex-wrap justify-around gap-2.5 mt-4">
        {usersData.length === 0 ? (
          <ShimmerUi />
        ) : bookmarkedUsers.length === 0 ? (
          <p className="text-lg mt-8">No bookmarks yet.</p>
        ) : (
          bookmarkedUsers.map(user => (
            <Card
              key={user.id}
              userData={user}
              isBookmarked={true}
              onBookmark={onBookmark}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;