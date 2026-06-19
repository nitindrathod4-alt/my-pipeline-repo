# Hospital Management System - Frontend

A complete frontend application for hospital management built with HTML, CSS, and JavaScript.

## 🎯 Features

- **Login Page**: User authentication (with localStorage)
- **Dashboard**: Overview of hospital statistics and quick access
- **Patients Management**: Add, view, edit, and delete patient records
- **Doctors Management**: Manage doctor profiles and specializations
- **Appointments**: Schedule and manage appointments between patients and doctors
- **Responsive Design**: Works on desktop and tablets
- **Local Storage**: Data persists in browser storage

## 📁 Folder Structure

```
frontend/
├── index.html                 (Login page)
├── dashboard.html             (Dashboard page)
├── patients.html              (Patients page)
├── doctors.html               (Doctors page)
├── appointments.html          (Appointments page)
├── css/
│   ├── style.css              (Main stylesheet)
│   └── responsive.css         (Responsive design rules)
├── js/
│   ├── auth.js                (Login/Logout functionality)
│   ├── dashboard.js           (Dashboard logic)
│   ├── patients.js            (Patients management)
│   ├── doctors.js             (Doctors management)
│   ├── appointments.js        (Appointments management)
│   ├── storage.js             (LocalStorage helper functions)
│   └── common.js              (Shared utilities)
└── README.md                  (This file)
```

## 🚀 Quick Start

### Step 1: Create the Folder Structure

1. **Create a main folder** for the project:
   - Open File Explorer
   - Navigate to `Desktop` → Right-click → New Folder
   - Name it `hospital-frontend`

2. **Create subfolders**:
   - Inside `hospital-frontend`, create two folders:
     - `css` (for stylesheets)
     - `js` (for JavaScript files)

### Step 2: Create All Files

Follow the file creation guide below for exact file locations.

### Step 3: Open with Live Server

1. **Install Live Server VS Code Extension**:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install (by Ritwick Dey)

2. **Run the Project**:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your default browser opens automatically at `http://127.0.0.1:5500`

## 📝 File Creation Guide

### Root Files (In main folder):

- **index.html** - Login page
- **dashboard.html** - Dashboard page
- **patients.html** - Patients management page
- **doctors.html** - Doctors management page
- **appointments.html** - Appointments management page

### CSS Files (In `css` folder):

- **style.css** - All styling for the application
- **responsive.css** - Mobile responsive rules

### JS Files (In `js` folder):

- **auth.js** - Login/Logout and session management
- **storage.js** - LocalStorage operations
- **common.js** - Shared functions and utilities
- **dashboard.js** - Dashboard page logic
- **patients.js** - Patients page logic
- **doctors.js** - Doctors page logic
- **appointments.js** - Appointments page logic

## 🔐 Test Login Credentials

**Username**: admin  
**Password**: admin123

## 💾 How Data Storage Works

All data is stored in the browser's **LocalStorage**:
- Session information
- Patient records
- Doctor records
- Appointment data

**Note**: Data is cleared when browser cache is cleared. This is perfect for learning/demo purposes.

## ✨ Features Explained

### 1. Login System
- Simple authentication with localStorage
- Remember me functionality
- Session management
- Logout feature

### 2. Dashboard
- Total patients count
- Total doctors count
- Upcoming appointments
- Quick action buttons

### 3. Patients Management
- Add new patients with details
- View all patients in table
- Edit patient information
- Delete patient records
- Search functionality

### 4. Doctors Management
- Add new doctors with specialization
- View all doctors
- Edit doctor details
- Delete doctor records
- Filter by specialization

### 5. Appointments
- Schedule new appointments
- Assign patients to doctors
- View appointment calendar
- Cancel appointments
- Color-coded status indicators

## 🎨 Customization

### Change Colors
Edit `css/style.css` and modify CSS variables:
```css
:root {
    --primary-color: #2563eb;      /* Blue */
    --secondary-color: #64748b;    /* Gray */
    --success-color: #10b981;      /* Green */
    --danger-color: #ef4444;       /* Red */
}
```

### Add More Pages
1. Create new HTML file
2. Include CSS and JS files
3. Add navigation link in header
4. Create corresponding JS file

## 🐛 Troubleshooting

**Live Server not opening?**
- Make sure Live Server extension is installed
- Check if port 5500 is available
- Try using a different browser

**Data not saving?**
- Check browser console (F12 → Console tab)
- Enable localStorage in browser settings
- Try in a different browser

**Styling not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check if CSS files are in correct folders
- Verify file paths in HTML

## 📚 Learning Resources

- **HTML**: Markup structure and forms
- **CSS**: Styling, Flexbox, Grid layouts
- **JavaScript**: DOM manipulation, LocalStorage, Events

## 🎓 Beginner Tips

1. **Understand the Flow**:
   - User logs in on `index.html`
   - Session stored in localStorage
   - Redirected to `dashboard.html`
   - Navigate between pages using menu

2. **Read the Comments**:
   - Every file has detailed comments
   - Comments explain what each function does

3. **Use Browser DevTools**:
   - Press F12 to open DevTools
   - Check Console for errors
   - Check Application → LocalStorage to see stored data

4. **Modify Step by Step**:
   - Change one thing at a time
   - Test to see what breaks
   - Understand why it broke

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🔄 Next Steps (For Learning)

1. Connect to a real backend server
2. Replace localStorage with API calls
3. Add more features (notifications, reports, etc.)
4. Deploy to a hosting platform (Netlify, Vercel)
5. Add authentication with JWT tokens

## 📞 Support

This is a beginner-friendly project. Every section of code has explanations. Start from `index.html` and follow the navigation to understand the flow.

---

**Happy Learning! 🎉**
