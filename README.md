# ReachInbox Web App Documentation

## 1. Login Page Implementation

Implement a login page based on the provided design. Users should be able to login with google account

## 2. Onebox Screen

After successful login, users should be directed to the onebox screen at `/google-login`.


## 3. Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```
   cd Reach-in-Box
   npm i
   npm run dev
   ```

## 4. Fetching Data in Onebox

### API Endpoints:
- `GET /onebox/list`: Retrieve a list of threads for the user.
- `GET /onebox/:thread_id`: Retrieve details of a specific thread.
- `DELETE /onebox/:thread_id`: Delete a thread.

## 5. Keyboard Shortcuts in Onebox

- Pressing "d" should delete the selected thread.
- Pressing "r" should open the reply box for the selected thread.

## 6. Custom Text Editor

Implement a custom text editor with the following features:
- Addition of custom buttons like "SAVE" and "Variables" to enhance functionality.

## 7. Reply Functionality

Implement the ability to reply to threads:
- Clicking on the send button should send the reply.
- Use the API endpoint `POST /reply/:thread_id` to send the reply with the following payload:
  ```json
  {
    "from": "email",
    "to": "email",
    "subject": "",
    "body": "<html></html>"
  }

## 8. Light and Dark Mode
  Provide support for both light and dark mode themes within the web app.

## 9. Screenshots
-Login
![Screenshot (211)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/74336928-e822-40da-80f9-017da08f3ef7)

-Google Auth
![Screenshot (212)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/96152937-2229-4b86-85b2-a100ba8504c4)

-FirstPage
![Screenshot (213)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/2ca32281-35ff-4b87-81d2-2c90abe00121)
![Screenshot (214)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/3fd8fffb-7207-4271-a528-5b4183d4bb03)

-AllMailPage
![Screenshot (215)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/e1550ecd-76ab-489c-b093-fdbad7dc9c14)

![Screenshot (222)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/4e8f7986-de6c-42e5-9cb6-29d0e031b66f)

-Reply And Delete <br>
When you press the letter 'D', the reply box will open. You can also use the reply button to open it. Reply box is where you can type your response and send it back to the thread. You can also add variable to sending your reply.<br> Pressing 'D' opens a dialog box. Clicking 'Delete' will remove the current thread.
![Screenshot (217)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/8a13f329-490f-47b4-916c-15b0385834be)
![Screenshot (218)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/9ac53569-bf5b-4c9b-abf5-0939f57be154)
![Screenshot (219)](https://github.com/Aishu1123/Reach-in-Box/assets/147596468/439cb11b-ab16-4444-ba2d-fc0174e111e4)

 ## Technical Stack

- **Frontend:**
  - Tailwind
  - Material-UI
  - React
 
