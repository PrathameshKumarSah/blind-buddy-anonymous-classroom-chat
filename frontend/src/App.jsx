import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  // console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={authUser ? <div data-theme={theme}><Navbar /> <HomePage /><Toaster /> </div> : <Navigate to="/login" />} />  
        <Route path="/signup" element={!authUser ? <div data-theme={theme}><Navbar /> <SignUpPage /> <Toaster /> </div> : <Navigate to="/chat" />} />
        <Route path="/login" element={!authUser ? <div data-theme={theme}><Navbar /> <LoginPage /><Toaster /> </div> : <Navigate to="/chat" />} />
        <Route path="/settings" element={<div data-theme={theme}><Navbar /> <SettingsPage /><Toaster /> </div>} />
        <Route path="/profile" element={authUser ? <div data-theme={theme}><Navbar />  <ProfilePage /> <Toaster /> </div> : <Navigate to="/login" />} />
      </Routes>
  );
};
export default App;
