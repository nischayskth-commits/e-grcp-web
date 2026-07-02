# Enterprise Governance, Risk, Compliance & Procurement Platform (e-GRCP)

## Overview

The Enterprise Governance, Risk, Compliance & Procurement Platform (e-GRCP) is a frontend enterprise application developed using React and modern frontend technologies. The application provides a centralized platform for managing procurement requests, vendor governance, risk management, compliance monitoring, audit activities, reporting, and user administration.

The project follows enterprise-level architecture with reusable components, modular development, Redux Toolkit for state management, protected routing, and role-based authorization.

---

## Live Demo

https://e-grcp-web.vercel.app/

---

## GitHub Repository

https://github.com/nischayskth-commits/e-grcp-web

---

## Features

- Authentication Module
- Role-Based Authorization
- Protected Routes
- Public Routes
- Executive Dashboard
- Procurement Management
- Vendor Governance
- Risk Management
- Compliance Monitoring
- Audit Center
- Approval Workbench
- Notification Center
- Reporting Module
- User Settings
- Responsive Design
- Enterprise Layout
- Form Validation
- Redux Toolkit State Management
- Mock API Integration
- Unit Testing

---

## Technology Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)
- Material UI

### State Management

- Redux Toolkit
- Redux Persist

### Routing

- React Router DOM

### Forms

- React Hook Form
- Yup Validation

### Charts

- Recharts

### HTTP Client

- Axios

### Testing

- Jest
- React Testing Library

### Deployment

- Vercel

---

---

## User Roles

- Employee
- Procurement Manager
- Compliance Officer
- Auditor
- Administrator

Each role has access only to the modules and pages assigned through role-based authorization.

---

## Authentication

The authentication module includes:

- Login
- Forgot Password
- Reset Password
- Session Expired
- Access Denied

Authentication is implemented using:

- React Hook Form
- Yup Validation
- Redux Toolkit
- Protected Routes
- Role-Based Routing

---

## Application Modules

### Authentication

Handles user login, password recovery, session expiration, and authorization.

### Executive Dashboard

Displays procurement statistics, business KPIs, charts, and recent activities.

### Procurement Workspace

Allows users to create, search, filter, and manage procurement requests.

### Vendor Governance

Provides vendor management, vendor profiles, document tracking, and risk information.

### Risk Center

Displays enterprise risk analytics, trends, and risk matrix visualizations.

### Compliance Center

Tracks compliance violations, expired certifications, and missing documents.

### Audit Center

Maintains audit history, system logs, and user activity tracking.

### Approval Workbench

Allows managers to approve, reject, delegate, or return procurement requests.

### Notification Center

Displays application notifications and alerts.

### Reporting Center

Generates procurement, vendor, compliance, audit, and risk reports.

### User Settings

Allows users to manage profiles, preferences, themes, and security settings.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/nischayskth-commits/e-grcp-web
```

### Navigate to the Project

```bash
cd e-grcp-web
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## Run Tests

```bash
npm test
```

Generate the test coverage report:

```bash
npm run coverage
```

---

## Architecture

The application follows a modular architecture based on feature-driven development.

- Reusable Components
- Redux Toolkit State Management
- Centralized Routing
- Protected Routes
- Role-Based Authorization
- Mock API Services
- Enterprise Folder Structure

---

## Performance Optimizations

- React.memo
- useMemo
- useCallback
- Lazy Loading
- Dynamic Imports
- Route-Based Code Splitting

---

## Testing

The application is tested using:

- Jest
- React Testing Library

Test coverage includes:

- Components
- Redux
- Services
- Forms
- Routes
- Hooks

---

## Future Enhancements

- Backend Integration
- JWT Authentication
- Refresh Token Support
- Multi-Factor Authentication
- Real-Time Notifications
- PDF Report Export
- Excel Report Export
- Internationalization
- Dark Theme Persistence

---



## Author

Nischay Suman Achar

Enterprise Governance, Risk, Compliance & Procurement Platform

React Enterprise Training Project

---

## License

This project was developed for educational and enterprise training purposes.
