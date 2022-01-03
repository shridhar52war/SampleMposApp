# Introduction

This application(SampleMpos) is a cross-platform application built using React-Native. This project demostrates the working of [react-native-mpos-wrapper](https://github.com/shridhar52war/react-native-mpos-wrapper) as module in the react-native application.

# Pre-requisite

This application is scaffolded using `npx react-native init <ProjectName>`. For more details you can follow up the setup instructions [here](https://reactnative.dev/docs/environment-setup).

# Setup

1. Run command `yarn` in the project root folder. This command will install all the react-native dependencies. If you do not have yarn installed on your system you can refer [this](https://tecadmin.net/install-yarn-macos/) section for mac os users.
2. To check if `yarn` was installed successfully, one can verify it by hitting the command `yarn --version`. This will list the installed version of yarn.

## Android

1. To run android app via command line use : `yarn run android`.
2. To run the project via Android Studio,, import the project's(i.e `<root>/android`) android folder in Android Studio. Before running the application via Android Studio, you will have to start the development server using the command `yarn start` from project root.

## iOS

1. To run iOS, firstly we need to install the pods, that can be done via following command
   `cd ios && pod install`
2. Once the pods are successfully installed, we can use `yarn run ios` command to run iOS application
3. To run the project via XCode, you need to import the workspace folder located at `<root>/ios/SampleMposApp.xcworkspace`

Note:

1. Make sure that you React-Native [setup](https://reactnative.dev/docs/environment-setup) on local machine.
2. `yarn run android` or `yarn run ios` will automatically start the development server running at 8081 port(by default)
