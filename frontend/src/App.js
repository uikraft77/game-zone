import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { UserDataProvider } from './context/UserDataContext';
import { useAuth } from './context/AuthContext';

// Screen imports
import SplashScreen from './screens/SplashScreen';
import UserDashboard from './screens/user/UserDashboard';
import AstrologersListing from './screens/user/AstrologersListing';
import AstrologerDashboard from './screens/astrologer/AstrologerDashboard';
import AdminDashboard from './screens/admin/AdminDashboard';

// Placeholder components for future development
const LoginScreen = () => <div>Login Screen</div>;
const SignupScreen = () => <div>Signup Screen</div>;
const NotFound = () => <div>404 - Not Found</div>;

// Protected Route Component
const ProtectedRoute = ({ children, requiredUserType }) => {
  const { isAuthenticated, userType } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredUserType && userType !== requiredUserType) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Main App Component
function App() {
  return (
    <Router>
      <LanguageProvider defaultLanguage="en">
        <AuthProvider>
          <UserDataProvider>
            <div className="app">
              <Routes>
                {/* Splash Screen */}
                <Route path="/splash" element={<SplashScreen />} />

                {/* Public Routes */}
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<SignupScreen />} />

                {/* User Routes */}
                <Route
                  path="/user/dashboard"
                  element={
                    <ProtectedRoute requiredUserType="user">
                      <UserDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/user/astrologers"
                  element={
                    <ProtectedRoute requiredUserType="user">
                      <AstrologersListing />
                    </ProtectedRoute>
                  }
                />

                {/* Astrologer Routes */}
                <Route
                  path="/astrologer/dashboard"
                  element={
                    <ProtectedRoute requiredUserType="astrologer">
                      <AstrologerDashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Admin Routes */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute requiredUserType="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Fallback Route */}
                <Route path="/" element={<Navigate to="/splash" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </UserDataProvider>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
