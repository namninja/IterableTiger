This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# 1.  Install Required Software: </br>
-Make sure you have Node.js installed. You can download it from nodejs.org.</br>
-Install React Native CLI by running: </br>
--npm install -g react-native-cli.</br>
-Install Xcode (for iOS development) or Android Studio (for Android development) depending on your target platform.
</br></br>

# 2. Clone the GitHub Repository:</br>
- Open your terminal or command prompt.</br>
- Navigate to the directory where you want to clone the repository.</br>
- Run the following command to clone the repository:</br>
- - git clone <repository_url></br>
- Replace <repository_url> with the actual URL of the GitHub repository.</br>
</br></br>

# 3. Install Dependencies:</br>
- Navigate into the cloned project directory using your Terminal App:</br>
- - cd <project_directory></br>
Run the following command to install the project dependencies:</br>
- -npm install</br>
- In the root folder, create a file and name it iterableConfig.js and copy and paste the following:</br>
- - export const iterableAPIKey = 'REPLACE WITH YOUR API KEY';</br>
- - export const userEmail = 'REPLACE WITH YOUR EMAIL';</br>
- - export const phoneNumber = 'REPLACE WITH YOUR number;</br>
</br></br>

# 4. Run the App on iOS Simulator:</br>
- If you're on a Mac, you can run the app on the iOS simulator using Xcode.</br>
- Navigate into the iOS directory:</br>
- - cd ios</br>
- Run the following command to install the iOS dependencies:</br>
- - pod install</br>
- Go back to the root directory:</br>
- - cd ..</br>
- Run the app on the iOS simulator:</br>
- - npx react-native run-ios</br>
</br></br>

# 5. Run the App on Android Emulator:</br>
- If you're on Windows or Linux, you can run the app on an Android emulator.</br>
- Start the Android emulator using Android Studio.</br>
- Run the app on the Android emulator:</br>
- - npx react-native run-android</br>
</br></br>

# 6. View the App:</br>
- After successfully running the above commands, the app should open on the simulator/emulator.</br>
</br></br>

# 7. If you run into errors running the app in iOS, you may need to do the following within XCode:</br>
- Click on Pods in the Project Navigator and open Build Settings</br>
- Select Iterable-React-Native-SDK</br>
- Search for "Require Only App-Extension-Safe API" and change the requirement to "No"</br>
- Next, select "RNScreens" and change "Require Only App-Extension-Safe API" and change the requirement to "No"</br>
</br></br>
</br></br>

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.