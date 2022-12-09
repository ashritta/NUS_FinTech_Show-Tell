# NUS FinTech Show&Tell
Caesar Cipher - A substitution cipher app that will encrypt your message by rotating the letters with a left shift of either 13 characters (ROT13) or a custom user-specified shift.

<h3>CI/CD pipeline:</h3>
<img src="https://user-images.githubusercontent.com/63718042/206505604-ab81ec1a-6e48-40b7-9a0f-8c7229f23791.png" width="900">

1. Send a message to someone when they raise their first issue or pull request - greetings.yml
<br><img src="https://user-images.githubusercontent.com/63718042/206506380-9f36a989-65f1-48d0-80e7-0a7d0e81e015.png" width="700">

2. Deploy to GitHub pages - static.yml
<br>Live Site: https://ashritta.github.io/NUS_FinTech_Show-Tell/
<br><img src="https://user-images.githubusercontent.com/63718042/206510632-a6248cb0-a480-426e-83bc-2e20ff511e95.png" width="500">

3. Send an automated Telegram message informing me of any commits - telegram.yml
<br><img src="https://user-images.githubusercontent.com/63718042/206471589-78c2cfc3-49e7-4189-a848-25533cc74f9a.png" width="400">

4. Build and push Docker image - In Progress.

<br>
<h3>What didn't go so well?</h3>
1. Telegram Bot - Chat ID retrieval from Telegram API initially failed with error code 404. The bot had to be initialised with a message before chat ID could be retrieved.
<br><img src="https://user-images.githubusercontent.com/63718042/206472079-cb8a5c73-78de-4b91-b402-26dc0683fce4.png" width="600">

2. JS functions with repeated functionality - I duplicated the ROT13 shift function to test out and implement a custom shift function, which means both functions now have a lot of repeated code, which is inefficient. I need to reorganise and simplify my code. 

<br>
<h3>Live Site:</h3>
<img src="https://user-images.githubusercontent.com/63718042/206493091-0ff55ea1-3f8c-4b1e-85fa-ae3980dd4470.png" width="700">
