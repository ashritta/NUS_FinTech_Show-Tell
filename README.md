# NUS FinTech Show&Tell
Caesar Cipher - A substitution cipher that will encrypt your message by rotating the letters with a left shift of 13 characters (ROT13).
<br><br><img src="https://user-images.githubusercontent.com/63718042/206416797-5592681c-4eeb-4041-aefb-7f061e6245a6.png" width="350">

<br> 
This project's CI/CD pipeline aims to achieve the following:

1. Sends a message to someone when they raise their first issue or pull request - greetings.yml
<br><img src="https://user-images.githubusercontent.com/63718042/206472234-2977dd6a-df96-4034-87fb-305c59062c07.png" width="800">


2. Deploy to GitHub pages - static.yml
<br>Live Site: https://ashritta.github.io/NUS_FinTech_Show-Tell/
<br><img src="https://user-images.githubusercontent.com/63718042/206434359-1a7f301e-ba7d-420d-9d54-531df923102c.png" width="500">

3. Send a Telegram message to me informing me of any commits - telegram.yml
<br><img src="https://user-images.githubusercontent.com/63718042/206471589-78c2cfc3-49e7-4189-a848-25533cc74f9a.png" width="400">

4. Build and push Docker image - In Progress.

<br><br>
What didn't go so well?
1. Telegram Bot - Chat ID retrieval from Telegram API initially failed with error code 404. The bot had to be initialised with a message before chat ID could be retrieved.
<br><img src="https://user-images.githubusercontent.com/63718042/206472079-cb8a5c73-78de-4b91-b402-26dc0683fce4.png" width="600">

2. Encryption shift - Currently fixed at 13 characters. I would like to expand the functionality to enable the user to choose a custom number to shift.

