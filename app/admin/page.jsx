"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category", {
        cache: "no-store",
      });

      const data = await res.json();

      setCategories(data);
    } catch (error) {
      console.error("Failed to load categories", error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: "Total Products",
      value: "0",
      description: "Products in store",
      icon: "📦",
      href: "/admin/products",
    },
    {
      title: "Total Orders",
      value: "0",
      description: "Orders received",
      icon: "🛒",
      href: "/admin/orders",
    },
    {
      title: "Customers",
      value: "0",
      description: "Registered customers",
      icon: "👤",
      href: "/admin/customers",
    },
    {
      title: "Categories",
      value: loading ? "..." : categories.length,
      description: "Active categories",
      icon: "▦",
      href: "/admin/categories",
    },
  ];

  return (
    <div className="min-h-screen p-5 md:p-8">

      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-[28px] font-semibold text-black">
            Dashboard
          </h1>

          <p className="mt-1 text-[14px] text-[#777]">
            Manage your EDYELL store from here.
          </p>
        </div>

        <Link
          href="/"
          className="flex h-[42px] items-center justify-center bg-[#DA291C] px-6 text-[13px] font-medium text-white transition hover:bg-[#b91f15]"
        >
          View Store
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Link
            href={stat.href}
            key={stat.title}
            className="group rounded-[6px] border border-[#e7e7e7] bg-white p-6 transition hover:-translate-y-[2px] hover:shadow-md"
          >
            <div className="flex items-start justify-between">

              <div>
                <p className="text-[13px] text-[#777]">
                  {stat.title}
                </p>

                <p className="mt-3 text-[30px] font-semibold text-black">
                  {stat.value}
                </p>

                <p className="mt-1 text-[11px] text-[#999]">
                  {stat.description}
                </p>
              </div>

              <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[5px] bg-[#f8e9e7] text-[20px]">
                {stat.icon}
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Recent Orders */}
        <div className="rounded-[6px] border border-[#e7e7e7] bg-white xl:col-span-2">

          <div className="flex items-center justify-between border-b border-[#eee] px-6 py-5">
            <div>
              <h2 className="text-[17px] font-semibold">
                Recent Orders
              </h2>

              <p className="mt-1 text-[12px] text-[#999]">
                Latest orders from your store
              </p>
            </div>

            <Link
              href="/admin/orders"
              className="text-[12px] font-medium text-[#DA291C]"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#eee] text-left">
                  <th className="px-6 py-4 text-[11px] font-medium uppercase text-[#999]">
                    Order
                  </th>

                  <th className="px-6 py-4 text-[11px] font-medium uppercase text-[#999]">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-[11px] font-medium uppercase text-[#999]">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-[11px] font-medium uppercase text-[#999]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4].map((item) => (
                  <tr
                    key={item}
                    className="border-b border-[#f2f2f2] last:border-0"
                  >
                    <td className="px-6 py-5 text-[13px] font-medium">
                      #{1000 + item}
                    </td>

                    <td className="px-6 py-5 text-[13px] text-[#555]">
                      Customer {item}
                    </td>

                    <td className="px-6 py-5 text-[13px] font-medium">
                      ₹0
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-[#fff3d6] px-3 py-1 text-[10px] font-medium text-[#a66b00]">
                        Pending
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Categories */}
        <div className="rounded-[6px] border border-[#e7e7e7] bg-white">

          <div className="flex items-center justify-between border-b border-[#eee] px-6 py-5">
            <div>
              <h2 className="text-[17px] font-semibold">
                Categories
              </h2>

              <p className="mt-1 text-[12px] text-[#999]">
                Your store categories
              </p>
            </div>

            <Link
              href="/admin/categories"
              className="flex h-[34px] w-[34px] items-center justify-center bg-[#DA291C] text-[20px] text-white"
            >
              +
            </Link>
          </div>

          <div className="p-5">

            {loading ? (
              <p className="py-8 text-center text-[13px] text-[#999]">
                Loading categories...
              </p>
            ) : categories.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-[13px] text-[#999]">
                  No categories added yet.
                </p>

                <Link
                  href="/admin/categories"
                  className="mt-4 inline-block text-[12px] font-medium text-[#DA291C]"
                >
                  Add Category
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                {categories.slice(0, 6).map((category) => (
                  <div
                    key={category._id}
                    className="flex items-center justify-between rounded-[4px] bg-[#f7f7f7] px-4 py-3"
                  >
                    <span className="text-[13px] font-medium">
                      {category.name}
                    </span>

                    <span className="text-[11px] text-[#999]">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 rounded-[6px] border border-[#e7e7e7] bg-white p-6">

        <h2 className="text-[17px] font-semibold">
          Quick Actions
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

          <Link
            href="/admin/categories"
            className="flex h-[70px] flex-col items-center justify-center border border-[#eee] text-center transition hover:border-[#DA291C]"
          >
            <span className="text-[20px]">＋</span>
            <span className="mt-1 text-[12px]">
              Add Category
            </span>
          </Link>

          <Link
            href="/admin/products"
            className="flex h-[70px] flex-col items-center justify-center border border-[#eee] text-center transition hover:border-[#DA291C]"
          >
            <span className="text-[20px]">📦</span>
            <span className="mt-1 text-[12px]">
              Add Product
            </span>
          </Link>

          <Link
            href="/admin/banners"
            className="flex h-[70px] flex-col items-center justify-center border border-[#eee] text-center transition hover:border-[#DA291C]"
          >
            <span className="text-[20px]">🖼</span>
            <span className="mt-1 text-[12px]">
              Manage Banners
            </span>
          </Link>

          <Link
            href="/admin/orders"
            className="flex h-[70px] flex-col items-center justify-center border border-[#eee] text-center transition hover:border-[#DA291C]"
          >
            <span className="text-[20px]">🛒</span>
            <span className="mt-1 text-[12px]">
              View Orders
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
}