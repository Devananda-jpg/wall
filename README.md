<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# [Wall of Shame] 🎯


## Basic Details
### Team Name: [Buggers]


### Team Members
  [College of Engineering Chengannur]
- Member 1: [Devananda P Nair] - [College of Engineering Chengannur]
- Member 2: [Leesa Serin Ison] - [College of Engineering Chengannur]



### Project Description
[Wall of Shame turns deadlines into friendly high-stakes challenges. Your friends pick an embarrassing photo of you and if you miss the deadline, it hits the Wall of Shame. Finish on time, stay safe, and keep your dignity!]



### The Problem (that doesn't exist)
[People procrastinate not because they lack goals, but because missing deadlines often has no immediate consequences. Unlike reminders and streaks, which depend on self-discipline, procrastination needs a stronger reason to act now.
]


### The Solution (that nobody asked for)
[Wall of Shame turns deadlines into social accountability. Friends upload an embarrassing photo that stays hidden until the deadline. Complete the task and prove it to keep the photo hidden; miss it, and the photo is automatically revealed on the group’s private wall.
]



## Technical Details
### Technologies/Components Used
For Software:
- [ HTML, CSS, JavaScript]
- [None]
- [Firebase SDK, Supabase JavaScript Client]
- [Visual Studio Code, Firebase, Supabase, GitHub]



### Implementation
For Software:Implementation

The Wall of Shame web application is implemented using HTML, CSS, and JavaScript with Firebase and Supabase for backend services.

1. User Authentication
     Firebase Authentication is used to provide secure user registration and login using email and password.

2. Team Management
    Users can create or join a team using a unique team code. Team information and member details are stored in Firebase Firestore.

3. Stake Photo Upload
    Users can upload an embarrassing photo for their teammates. The photos are stored securely in Supabase Storage and organized using the respective user's unique ID.

4. Deadline Creation
   Users can create tasks with a specific deadline. Deadline information such as task name, deadline time, creator, team, and status is stored in Firestore.

5. Deadline Tracking
   The home page displays active deadlines with a real-time countdown. Users can mark their own task as completed using the “I finished this” checkbox.

6. Wall of Shame
   When a deadline expires without being completed, the system identifies the missed deadline and retrieves the corresponding stake photo from Supabase Storage. The photo is then displayed on the Wall of Shame.

7. User Interface
   HTML and CSS are used to create a simple and responsive interface containing the login page, team page, photo submission page, deadline page, and Wall of Shame dashboard.

   
# Installation

### Prerequisites

* Visual Studio Code
* A modern web browser such as Google Chrome
* Firebase account
* Supabase account

### Steps

1. Clone the repository:
```bash
git clone https://github.com/your-username/wall-of-shame.git
```

2. Open the project folder in Visual Studio Code:
```bash
cd wall-of-shame
code .
```

3. Configure Firebase by adding the Firebase configuration details to:
```text
firebase-config.js
```

4. Configure Supabase by adding the Supabase project URL and publishable key to:
```text
supabase-config.js
```

5. Open `index.html` using a local development server such as the **Live Server** extension in VS Code.

6. Open the displayed local URL in your browser.

### No Additional Installation Required

The project does not require Node.js, npm, or any additional framework installation. Firebase and Supabase are accessed through their JavaScript SDKs.



### Project Documentation
For Software:# Project Documentation
## 1) Project Overview
**Wall of Shame** is a social accountability web application designed to help friends stay committed to their tasks and deadlines. Users create deadlines and provide embarrassing stake photos for their teammates. If a user fails to complete a task before the deadline, the corresponding photo is revealed on the Wall of Shame.


## 2) System Workflow
1. User signs up or logs in.
2. User creates or joins a team using a unique team code.
3. Team members upload embarrassing stake photos.
4. A user creates a task with a deadline.
5. The deadline is displayed on the home page with a countdown timer.
6. The user marks the task as completed using the **“I finished this”** checkbox.
7. If the deadline expires without being completed, the task is considered missed.
8. The corresponding stake photo is retrieved from storage.
9. The photo is displayed on the **Wall of Shame**.

## 3) Main Modules
### User Authentication

Firebase Authentication handles user registration and login using email and password.

### Team Management
Users can create or join teams using a unique team code. Team members are stored in Firebase Firestore.

### Stake Photo Management
Team members can upload embarrassing photos for their teammates. The photos are stored in Supabase Storage.

### Deadline Management
Users can create deadlines by entering a task and deadline time. The deadline information is stored in Firestore.

### Deadline Tracking
The application displays a countdown timer for each active deadline. Users can mark their own deadlines as completed.

### Wall of Shame
When a deadline expires without being completed, the application retrieves the corresponding stake photo and displays it on the Wall of Shame.

## 4) Database Structure
### Firestore Collections

**Users**
* Name
* Email
* Team ID

**Teams**
* Team Name
* Team Code
* Creator
* Members

**Deadlines**
* Task
* Deadline
* Created By
* Team ID
* Status

### Supabase Storage
The `wall-of-shame-photos` bucket stores uploaded stake photos. Photos are organized using the user's unique ID.

## 5) Security
Firebase Authentication ensures that only registered users can access the application. Firestore stores user, team, and deadline information, while Supabase Storage policies control photo uploading and viewing.

## 6) User Interface
The application consists of the following pages:

* Login Page
* Sign Up Page
* Create/Join Team Page
* Send Photo Page
* Create Deadline Page
* Home / Wall of Shame Page

The interface is designed using HTML and CSS and is responsive for different screen sizes.

## 7) Technologies Used
| Component       | Technology              |
| --------------- | ----------------------- |
| Frontend        | HTML, CSS, JavaScript   |
| Authentication  | Firebase Authentication |
| Database        | Firebase Firestore      |
| Image Storage   | Supabase Storage        |
| Code Editor     | Visual Studio Code      |
| Version Control | GitHub                  |

## 8) Expected Outcome
The system provides a simple and fun way for friends to maintain accountability. Missed deadlines result in the user's stake photo being displayed on the Wall of Shame, creating a social motivation to complete tasks on time.



# Screenshots (Add at least 3)
Drive Link: https://drive.google.com/drive/folders/1rRIIlsSRS5O3y03G5z1S_VW9V0X6pQMq?usp=sharing
Screenshot 1: Describes the friends in a team, the one who logs in can send their friend's emmbrassing photos
Screenshot 2: Describes the home page that is the Wall of Shame where friend's emmbrassing photo is uploaded after deadline is passed and work is not marked as finished.
Screenshot 3: Shows our active deadlines and friend's deadlines 


### Project Demo
# Video
https://drive.google.com/file/d/1QWl-levV-Eh3TXcBVQNNaaGzO5WBI636/view?usp=sharing

Showed in log in and joining team functionalities and we see the embarasssing photos going live.

Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)
