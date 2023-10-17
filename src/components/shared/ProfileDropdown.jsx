import React, { useState } from 'react';
import { Popover } from '@headlessui/react';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = 'John Doe';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="relative">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button onClick={toggleDropdown} className="flex items-center space-x-2">
              <img src="https://source.unsplash.com/100x100?macbook" alt="Profile " className="w-8 h-8 rounded-full" />
              <span>{username}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Popover.Button>
            <Popover.Panel>
              <ul className="py-1">
                <li
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
};

export default ProfileDropdown;
