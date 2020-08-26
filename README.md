# Getting started

## iOS

### Install all dependencies

- Install [CocoaPods](https://cocoapods.org/) `sudo gem install cocoapods`
- And install ios dependencies `cd ios && pod install`

### Run instructions for iOS:

- `npm run ios`

--- or ---

- Open `ios\phutball.xcodeproj` in Xcode or run `xed -b ios`
- Hit the Run button

## Android

### Run instructions for Android:

- Have an Android emulator running (quickest way to get started), or a device connected.
- `npm run android`

## Windows 

### Install all dependencies 

```powershell
Start-Process -Verb RunAs powershell -ArgumentList @("-command", "iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/microsoft/react-native-windows/master/vnext/Scripts/rnw-dependencies.ps1'))")
```

### Run instructions for Windows and macOS:

- `npm run windows`

--- or ---

- Open `windows\phutball.sln` in Visual Studio and press `F5`

## Troubleshooting

1. Clear watchman watches: watchman watch-del-all
2. Delete node_modules: rm -rf node_modules and run yarn install
3. Reset Metro's cache: yarn start --reset-cache
4. Remove the cache: rm -rf /tmp/metro-*
