'use client'

import { useState } from "react";
import { UploadIcon } from '@heroicons/react/outline';
import Image from "next/image";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      
      {/* Sidebar */}
      <aside className={`${isCollapsed ? "w-20" : "w-64"} bg-[#0D0D0D] p-5 transition-all duration-500`}>
        <div className="flex justify-between items-center mb-6">
          {!isCollapsed && <div className="text-2xl font-bold">Base</div>}
          <button onClick={toggleSidebar}>
            <img src="/sidebar.png" alt="Toggle" className="w-8 h-auto cursor-pointer" />
          </button>
        </div>

        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🏠</span>
                {!isCollapsed && <span>Dashboard</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📤</span>
                {!isCollapsed && <span>Upload</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🧾</span>
                {!isCollapsed && <span>Invoice</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📅</span>
                {!isCollapsed && <span>Schedule</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📅</span>
                {!isCollapsed && <span>Calendar</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🔔</span>
                {!isCollapsed && <span>Notification</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>⚙️</span>
                {!isCollapsed && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <header className="w-full pt-10 pl-10 text-[30px]">
          Upload CSV
        </header>

        {/* Content Area */}
        <main className="flex-1 flex items-center justify-center">
          <div className="bg-[#0D0D0D] rounded-lg p-10 shadow-lg w-full max-w-md">
            
            <div className="border border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center">
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <Image src="/Excel.png"
                    height={30}
                    width={30}
                  />
                  <p className="mt-4 text-gray-400">
                    {file ? file.name : "Drop your excel sheet here or browse"}
                  </p>
                </div>
              </label>
            </div>
            
            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center">
              <UploadIcon className="h-5 w-5 mr-2" />
              Upload
            </button>
          </div>
        </main>

      </div>
    </div>
  );
}
