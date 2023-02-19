import Link from 'next/link';
import React from 'react';

export default function DashboardSidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-[6rem] left-0 z-40 w-[12rem] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard/"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/products"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
