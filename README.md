<h1 align="center"><b>REACTions</b></h1>
<div align="center">REACTions is a React Social Media app that lets you post your thoughts, add your friends and follow them.</div>


---

## **Live App**
To view the website live in action visit

[REACTions](https://reactions-app.netlify.app/)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)



https://user-images.githubusercontent.com/47236093/182110969-9bc89b6a-6a42-4e3b-a66d-52f75470c722.mp4



---

## **Functionality** 
* Authentication
  * Sign Up
  * Login
  * Logout
* Posts
  * Add Post
  * Edit Post
  * Delete Post
  * Like/Unlike Post
  * Comment
  * Bookmark
* Profile
  * Follow User
  * Unfollow User
  * Edit Profile
* Sorting and Filtering
  * Sort bookmarked posts by ascending or descending dates
* Searching
  * Search users by their names
  * Search is debounced to reduce API calls.
* Home
  * List of all users in a banner
  * All posts
* Theme
  * Dark Mode and light mode can be toggled from the icon on the navbar
* 404
* Responsiveness
  * All pages/components are made responsive for mobile screens (Width < 480px)

---


## **Backend** 
Backend for this app is a mock backend [MockBee](https://mockbee.netlify.app/).
Refreshing the page will delete all data from the backend as the app restarts.
The data will persist between multiple login/logout/signup sessions if not refreshed.

---

## **How to run this app**
To run this app locally on your machine, clone the repo to your local machine.\
In the project directory, you can run\
`npm start`\
This will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
Make sure you have access to internet to make use of the API call inside the App.
