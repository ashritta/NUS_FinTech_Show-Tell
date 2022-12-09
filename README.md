# NUS FinTech Show&Tell
<h3>Caesar Cipher</h3>

A simple Caesar Cipher app built with HTML, CSS and JavaScript. A Caesar Cipher is a type of substitution cipher that encrypts your message by rotating the letters with a pre-determined shift, for example, with a left shift of 3, D would be replaced by A, E would become B, and so on. 

This app lets you try out a Caesar Cipher to encrypt your messages, using either:
<br>1. A fixed shift of 13 characters (ROT13), or
<br>2. A custom user-specified shift.

Live Site: https://ashritta.github.io/NUS_FinTech_Show-Tell/
<br><img src="https://user-images.githubusercontent.com/63718042/206493091-0ff55ea1-3f8c-4b1e-85fa-ae3980dd4470.png" width="900">

<h3>CI/CD pipeline:</h3>
<img src="https://user-images.githubusercontent.com/63718042/206642665-3e50f393-8433-487f-b664-4d000a4be1ad.png" width="900">

1. Send a message to someone when they raise their first issue or pull request - greetings.yml
<br><img src="https://user-images.githubusercontent.com/63718042/206506380-9f36a989-65f1-48d0-80e7-0a7d0e81e015.png" width="700">

2. Deploy to GitHub pages - static.yml
<br><img src="https://user-images.githubusercontent.com/63718042/206510632-a6248cb0-a480-426e-83bc-2e20ff511e95.png" width="500">

3. Send an automated Telegram message informing me of any commits - telegram.yml
<br>Bot: https://t.me/devops_repo_notif_bot
<br><img src="https://user-images.githubusercontent.com/63718042/206471589-78c2cfc3-49e7-4189-a848-25533cc74f9a.png" width="400">

<br>
<h3>What didn't go so well?</h3>
1. Telegram Bot - Chat ID retrieval from Telegram API initially failed with error code 404. The bot had to be initialised with a message before chat ID could be retrieved.
<br><img src="https://user-images.githubusercontent.com/63718042/206472079-cb8a5c73-78de-4b91-b402-26dc0683fce4.png" width="600">

2. JS functions with repeated functionality - I started off with making sure the ROT13 function works correctly, to get the app up and running in order to set up a CI/CD workflow. I then wanted to expand the app's functionality by allowing the user to input a custom shift number, instead of just a fixed ROT13 shift. To do so, I duplicated and modified the ROT13 shift function to test out a custom shift function. I finally managed to get this working but unfortunately, this means my JS script now has a lot of repeated code, which is inefficient and messy. I need to reorganise and streamline my code soon!

If you have any feedback or suggestions, please do let me know! ☺
