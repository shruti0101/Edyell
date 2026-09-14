"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 5h16" />
        <path d="M4 12h16" />
        <path d="M4 19h16" />
        <circle cx="8" cy="5" r="2" fill="white" />
        <circle cx="16" cy="12" r="2" fill="white" />
        <circle cx="10" cy="19" r="2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 9l9-5 9 5-9 5-9-5Z" />
        <path d="M3 9v6l9 5 9-5V9" />
        <path d="M12 14v6" />
      </svg>
    ),
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 2h12v20H6z" />
        <path d="M9 6h6" />
        <path d="M9 10h6" />
        <path d="M9 14h4" />
      </svg>
    ),
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </svg>
    ),
  },
  {
    name: "Banners",
    href: "/admin/banners",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="9" r="1.5" />
        <path d="m4 17 5-5 4 4 3-3 4 4" />
      </svg>
    ),
  },
  {
    name: "Coupons",
    href: "/admin/coupons",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 12a2 2 0 0 0 0-4V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3Z" />
        <path d="M9 8h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V20h-2.4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.5-1H6v-2.4h.9a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L8 8.6l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V5h2.4v.8a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.8v2.4h-.8a1.7 1.7 0 0 0-1.5 1Z"
      />
    </svg>
    ),
  },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-roboto">

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-[64px] items-center justify-between bg-black px-5 lg:hidden">
        <Link
          href="/admin"
          className="text-[22px] font-bold tracking-[3px] text-white"
        >
          EDYELL
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[250px]
          flex-col
          bg-black
          transition-transform
          duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-[90px] items-center border-b border-[#222] px-7">
          <Link
            href="/admin"
            className="text-[25px] font-bold tracking-[5px] text-white"
          >
            EDYELL
          </Link>
        </div>

        {/* Admin */}
        <div className="flex items-center gap-3 border-b border-[#222] px-6 py-5">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DA291C] text-[16px] font-bold text-white">
            A
          </div>

          <div>
            <p className="text-[14px] font-medium text-white">
              Administrator
            </p>
            <p className="text-[11px] text-[#888]">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#666]">
            Management
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex
                    h-[46px]
                    items-center
                    gap-3
                    rounded-[4px]
                    px-3
                    text-[14px]
                    transition
                    ${
                      active
                        ? "bg-[#DA291C] text-white"
                        : "text-[#aaa] hover:bg-[#181818] hover:text-white"
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#222] p-5">
          <Link
            href="/"
            className="flex items-center gap-3 text-[13px] text-[#888] transition hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18" />
              <path d="m12 3 9 9-9 9" />
            </svg>

            View Website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:ml-[250px]">

        {/* Desktop Topbar */}
        <header className="hidden h-[80px] items-center justify-between border-b border-[#e5e5e5] bg-white px-8 lg:flex">
          <div>
            <p className="text-[13px] text-[#888]">
              Admin Panel
            </p>
            <h1 className="text-[21px] font-semibold text-black">
              EDYELL
            </h1>
          </div>

          <div className="flex items-center gap-5">

            {/* Notification */}
            <button className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#eee]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M10 21h4" />
              </svg>

              <span className="absolute right-[6px] top-[5px] h-[6px] w-[6px] rounded-full bg-[#DA291C]" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#DA291C] text-[14px] font-bold text-white">
                A
              </div>

              <div>
                <p className="text-[13px] font-medium">
                  Administrator
                </p>
                <p className="text-[11px] text-[#999]">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="pt-[64px] lg:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}