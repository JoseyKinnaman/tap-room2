# **Tap Room 2.0**

#### Author: **Jozy Kinnaman**
#### July 10, 2020

### Description

_A Friday Project for Epicodus that serves as an introduction to React/Redux with create-react-app, components, JSX, and props while building a dynamic site. This tap room displays a list of kombucha on tap and lets a user select a keg, add new kegs, update kegs, delete kegs, or buy pints._

![Wireframe](src/img/tap-room.jpg)

### Instructions for use:

1. Open Terminal (macOS) or PowerShell (Windows)
2. To download the project Directory to your desktop enter the following commands:
```
cd Desktop
git clone https://github.com/JoseyKinnaman/tap-room.git
cd tap-room
```
3. To view the downloaded files, open them in a text editor or IDE of your choice.
* if you have VSCode for example, when your terminal is within the main project Directory you can open all of the files with the command:
```
code .
```
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
```
npm install
```
6. The command npm run start will build and open the compiled code in a browser of your choice using a local host.
```
npm run start
```

### Known Bugs

None at this time. 

### Support and Contact Information

Please contact jozypants@gmail.com with questions. 

### Technologies Used

* React
* Redux
* Jest 
* JavaScript
* JSX
* HTML
* Git and GitHub

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User can view a static header** | User Input:"localhost:3000" | Output: “Header is displayed" |
| **User can view a list of kombucha on tap** | User Input:"localhost:3000" | Output: “Kombucha list is displayed" |
| **User can view details about each kombucha** | User Input:"localhost:3000" | Output: "Kombucha is displayed" |
| **User can add a kombucha to the list** | User Input:"localhost:3000' "Submit " form | Output: "Kombucha is added" |
| **User can update a kombucha on the list** | User Input:"localhost:3000" "Submit" update | Output: "Kombucha is updated" |
| **User can buy a kombucha pint** | User Input:"localhost:3000" | Output: "Kombucha is decremented" |
| **User can delete a kombucha from the list** | User Input:"localhost:3000" "Delete" | Output: "Kombucha is deleted" |

#### License

This software is licensed under the MIT license.

Copyright © 2020 **_Jozy Kinnaman_**
