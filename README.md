![image](https://github.com/Eliud254/city-clock/assets/109294381/1b2af08d-8091-430c-b6e2-8ce69620111b)


# City Clock App

The City Clock App is a web application that displays the current time along with the city and country based on the user's IP address. It utilizes the ipinfo.io API to retrieve the user's location information and updates the clock in real-time.

## Features

- Displays current time in hours, minutes, and seconds.
- Automatically detects user's city and country based on IP address.
- Provides a simple and intuitive user interface.

## Implementation

### Step 1: Obtain an ipinfo.io API Key

1. Sign up for an account on [ipinfo.io](https://ipinfo.io/signup) if you haven't already.
2. After signing up, navigate to the dashboard or account settings to find your API key.
3. Copy the API key to use it in your application.

### Step 2: Integration with the City Clock App

1. Clone or download the City Clock App code from the repository.
2. Open the `index.js` file in your preferred code editor.
3. Replace `"YOUR_IPINFO_IO_API_TOKEN"` with your actual ipinfo.io API key in the `updateCity` function.
   ```javascript
   fetch("https://ipinfo.io/json?token=YOUR_IPINFO_IO_API_TOKEN")
   ```
4. Save the changes to the `index.js` file.

### Step 3: Deployment

1. Deploy the City Clock App to your preferred hosting platform or server.
2. Ensure that the deployed environment allows outbound requests to the ipinfo.io API.
3. Test the deployed app to verify that it correctly displays the current time along with the user's city and country.

## Usage

- Simply open the deployed City Clock App in a web browser.
- The app will automatically detect your location and display the current time along with your city and country.

## Technologies Used

- HTML
- CSS
- JavaScript
- ipinfo.io API

## Credits
Link: https://eliud254.github.io/city-clock
The City Clock App was created by Eliud Obure
