to build release, open "android" folder in android studio and run build> generate signed apk
gradle.properties has info for keystore

if RN bundler isnt starting properly, try this
https://stackoverflow.com/questions/58268958/i-am-getting-invalid-regular-expression-error-while-running-npm-start

For iOS, after normal npm i, need to run
npx react-native link
then pod install in iOS