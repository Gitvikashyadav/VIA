Description
A MERN stack web app integrating Agora SDK for group video calls and Socket.io for real-time chat. Includes admin controls for participants and privacy, as well as speech-to-text and typing indicators, enhancing communication and boosting engagement by 40%.

Features
Real-Time Chat: Instantly exchange messages using Socket.io-powered real-time communication.
Group Video Calls: Join high-quality, real-time video sessions enabled by the Agora SDK.
Screen Sharing: Share your screen during video calls for presentations, demos, or collaboration.
Admin Controls: Admins can add or remove participants from the group and manage group settings.
Privacy Settings: Admins can set groups to private, restricting non-admin users from sending messages.
Stream Control Requests: Users can request others to enable or disable their audio/video streams.
Speech-to-Text Messaging: Automatically convert spoken words to text for improved accessibility and communication.
Typing Indicators: See when other users are typing for a more responsive chat experience.
Webinar Mode: In private groups, only admins can share audio, video, or screens—participants can view and listen only.
Call Popup Notification: When a user is online and a call begins, a popup is displayed to alert and allow quick joining.
Tech Used
JavaScript React NodeJS Express.js Redux MongoDB Socket.io CSS3 HTML5 Heroku Netlify MUI NPM

How to Install and Run this project?
Pre-Requisites:
Install Git Version Control https://git-scm.com/

Install Node Latest Version https://nodejs.org/en/

Installation
1. Navigate to directory where you want to save the project

2. Clone this project

git clone https://github.com/Minal-singh/VIA.git
Then, Enter the project

cd VIA
3. Open two terminals

In first terminal
Navigate to client folder

cd client
Install all dependency

npm install
Create .env file and add these lines

REACT_APP_AGORA_APPID=<YOUR AGORA APPID>
REACT_APP_ENDPOINT=http://localhost:5000/
Create a free Agora account https://sso2.agora.io/en/v4/signup/with-email

While creating project, in authentication mechanism, select Testing mode

Start app

npm start
In second terminal
Navigate to server folder

cd server
Install all dependency

npm install
Create .env file and add these lines

CONNECTION_URL=<YOUR MONGODB DATABASE URL>
FRONTEND_URL=http://localhost:3000
Create Mongodb Atlas account https://account.mongodb.com/account/register

Start server

node index.js
For contributing to this project create pull requests to dev branch