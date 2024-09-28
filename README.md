# IntimatesPlus Mobile App

Welcome to **IntimatesPlus Mobile**, the mobile version of IntimatesPlus — a dynamic dating platform connecting individuals seeking meaningful relationships. This version is built using React Native, TypeScript, and Redux Toolkit, with a fully serverless backend powered by AWS for scalability and performance.

## 🚀 Features

- **User Authentication:** Secure login and registration with authentication handled by AWS services for reliable and secure session management.
- **Profile Creation:** Users can create detailed profiles to share their interests, preferences, and personality traits.
- **Real-time Messaging:** Instant messaging functionality powered by AWS services to ensure fast and reliable communication between users.
- **Push Notifications:** Integrated notifications to keep users updated on new messages, matches, and interactions.
- **In-app Purchases:** Premium features available through **Stripe** for flexible payment options.
- **Offline Support:** Leveraging Redux Toolkit's state persistence, users can access certain features even when offline.
- **Responsive and Adaptive UI:** A clean and responsive user interface developed using **React Native** and **TypeScript** for smooth performance across various mobile devices.

## 🛠️ Technologies Used

- **Frontend:**
  - React Native
  - TypeScript
  - Redux Toolkit
- **Backend:**
  - AWS Lambda (Serverless Functions)
  - AWS DynamoDB (NoSQL Database)
  - AWS API Gateway
  - AWS S3 (Storage for media and profile images)
- **Authentication:**
  - AWS Cognito
- **Payment Processing:**
  - Stripe (for in-app purchases)
- **Notifications:**
  - AWS SNS (Simple Notification Service)
- **State Management:**
  - Redux Toolkit

## 🌱 Getting Started

To run a local copy of the mobile app, follow these steps:

Clone the repository:
```git clone https://github.com/YourGitHubUsername/IntimatesPlus-Mobile.git
```
Navigate to the project directory:
```
cd IntimatesPlus-Mobile
```
Install the dependencies:
```
npm install
```
Link the native dependencies (if required):
```
npx react-native
```
Run the app:
For iOS:
```
npx react-native run-ios
```
For Android:
```
npx react-native run-android
```
##🌐 AWS Backend Setup
Ensure you have an AWS account and have set up your AWS credentials locally.
Set up your Lambda functions, API Gateway, DynamoDB tables, and S3 buckets according to the serverless backend architecture.
Configure AWS Cognito for user authentication and connect it with the frontend for secure login and registration.
Integrate Stripe for handling in-app purchases.

##📫 How to Reach Me
For any inquiries or collaboration opportunities, feel free to reach out:

Email: jngatia045@gmail.com
Social Media: @jdtheefirst
🤝 Contributions
We welcome any contributions, suggestions, or feedback. Feel free to submit issues or pull requests to help improve the platform!
