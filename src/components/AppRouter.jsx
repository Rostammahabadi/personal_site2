import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import WeatherApp from '../demo/WeatherApp';
import TaskManager from '../demo/TaskManager';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/demo/weather" element={<WeatherApp />} />
        <Route path="/demo/taskflow" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter; 