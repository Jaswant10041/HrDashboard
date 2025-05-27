-------Setup instructions------
git clone https://github.com/Jaswant10041/HrDashboard.git
Open command prompt with that path
write command to open vscode. command- code .
npm install
npm start
And Here is your project running on localhost successfully.

........................................................................................................................................................................................................................................

---------Features Implemented(Every thing i wrote is a pure React)---------

1- I created routing in first step
2- I fetched Data from given api(https://dummyjson.com/users?limit=20).I used fetch api inside async function to fetch data.
3- For better user experience I used beauty of useEffect to create a Shimmer effect. While data is being fetched from api it will show empty cards as we see in youtube,swiggy,bookmyshow etc. 
4- After Data is being fetched i stored data in CONTEXT API to use data efficiently in all components.
5- I displayed users data in Cards.
6- I created Search box to search based on name,email,department.
7- I created Drop down box for filtering specific department.
8- I created EmployOverview to show complete details of employ.
9- I created Bookmark feature to keep bookmark and view bookmarks.

........................................................................................................................................................................................................................................

All features images are inside src/utils/features