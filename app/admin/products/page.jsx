"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import {
  Plus,
  Trash2,
  Pencil,
  X,
  Upload,
  Image as ImageIcon,
  Save,
  Search,
  ChevronDown,
  ChevronUp,
  Eye,
  Package,
} from "lucide-react";

// =====================================================
// OPTIONS
// =====================================================

const COMMUNICATION_MODES = [
  "Mesh Intercom",
  "Bluetooth Intercom",
  "Group Chat Mode",
];

const NUMBER_OF_USERS = [
  "Unlimited",
  "Up to 24",
  "1 : 1",
];

const BLUETOOTH_VERSIONS = [
  "BT 6.0",
  "BT 5.4",
  "BT 5.3",
];

const PROCESSOR_CHIPS = [
  "Single-core",
  "Dual-core",
];

const BATTERY_CAPACITIES = [
  "1500mAh",
  "1000mAh",
  "800mAh",
];

const WATERPROOF_RATINGS = [
  "IPX5",
  "IPX6",
  "IPX7",
];

const OTHER_FUNCTIONS = [
  "Audio Mix Mode",
  "Radio Mode",
  "FM Radio",
  "Music Sharing",
  "Dual Phone Connection",
  "Noise Cancelling",
  "LED Light",
];

// =====================================================
// EMPTY PRODUCT
// =====================================================

const emptyProduct = {
  name: "",
  slug: "",
  sku: "",

  category: "",

  price: "",
  oldPrice: "",

  sale: false,

  stock: 0,
  trackInventory: true,

  active: true,
  featured: false,
  hot: false,

  images: [],
  mainImage: "",

  colors: [],

  communicationMode: [],
  numberOfUsers: [],
  bluetoothVersion: [],
  processorChip: [],
  batteryCapacity: [],
  waterproofRating: [],
  otherFunctions: [],

  shortDescription: "",
  description: "",

  features: [],
  whatsIncluded: [],

  specifications: [],

  metaTitle: "",
  metaDescription: "",

  displayOrder: 0,
};

// =====================================================
// HELPERS
// =====================================================

function slugify(value) {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// =====================================================
// CHECKBOX GROUP
// =====================================================

function CheckboxGroup({
  title,
  options,
  values,
  onChange,
}) {
  const [open, setOpen] = useState(true);

  const toggle = (value) => {
    if (values.includes(value)) {
      onChange(values.filter((item) => item !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div className="border border-[#e5e5e5] bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-4"
      >
        <span className="text-[13px] font-semibold text-[#222]">
          {title}
        </span>

        {open ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}
      </button>

      {open && (
        <div className="grid grid-cols-1 gap-2 border-t border-[#eee] p-4 sm:grid-cols-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 text-[12px] text-[#555]"
            >
              <input
                type="checkbox"
                checked={values.includes(option)}
                onChange={() => toggle(option)}
                className="h-4 w-4 accent-[#DA291C]"
              />

              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

// =====================================================
// INPUT
// =====================================================

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#333]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[44px] w-full rounded-[4px] border border-[#ddd] bg-white px-3 text-[13px] outline-none transition focus:border-[#DA291C]"
      />
    </div>
  );
}

// =====================================================
// TEXTAREA
// =====================================================

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
}) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#333]">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full resize-none rounded-[4px] border border-[#ddd] bg-white p-3 text-[13px] outline-none transition focus:border-[#DA291C]"
      />
    </div>
  );
}

// =====================================================
// SECTION
// =====================================================

function Section({ title, description, children }) {
  return (
    <div className="rounded-[6px] border border-[#e5e5e5] bg-white">
      <div className="border-b border-[#eee] px-5 py-4">
        <h2 className="text-[16px] font-semibold text-[#222]">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-[11px] text-[#999]">
            {description}
          </p>
        )}
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}

// =====================================================
// PRODUCT PAGE
// =====================================================

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [product, setProduct] =
    useState(emptyProduct);

  const [editingId, setEditingId] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [showForm, setShowForm] =
    useState(false);

  // ===================================================
  // FETCH
  // ===================================================

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const [productsRes, categoriesRes] =
        await Promise.all([
          fetch("/api/products", {
            cache: "no-store",
          }),

          fetch("/api/categories", {
            cache: "no-store",
          }),
        ]);

      const productsData =
        await productsRes.json();

      const categoriesData =
        await categoriesRes.json();

      setProducts(
        Array.isArray(productsData)
          ? productsData
          : []
      );

      setCategories(
        Array.isArray(categoriesData)
          ? categoriesData
          : []
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load products"
      );
    } finally {
      setLoading(false);
    }
  };

  // ===================================================
  // FORM CHANGE
  // ===================================================

  const updateProduct = (
    field,
    value
  ) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ===================================================
  // NAME -> SLUG
  // ===================================================

  const handleNameChange = (value) => {
    setProduct((prev) => ({
      ...prev,

      name: value,

      slug:
        editingId
          ? prev.slug
          : slugify(value),
    }));
  };

  // ===================================================
  // UPLOAD
  // ===================================================

  const uploadImages = async (
    files
  ) => {
    if (!files?.length) return;

    try {
      setUploading(true);

      const formData =
        new FormData();

      Array.from(files).forEach(
        (file) => {
          formData.append(
            "files",
            file
          );
        }
      );

      const res = await fetch(
        "/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (!data.success) {
        throw new Error(
          data.message ||
            "Upload failed"
        );
      }

      setProduct((prev) => {
        const images = [
          ...prev.images,
          ...data.urls,
        ];

        return {
          ...prev,

          images,

          mainImage:
            prev.mainImage ||
            images[0] ||
            "",
        };
      });

      toast.success(
        "Images uploaded"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Image upload failed"
      );
    } finally {
      setUploading(false);
    }
  };

  // ===================================================
  // REMOVE IMAGE
  // ===================================================

  const removeImage = (index) => {
    setProduct((prev) => {
      const images =
        prev.images.filter(
          (_, i) => i !== index
        );

      let mainImage =
        prev.mainImage;

      if (
        mainImage ===
        prev.images[index]
      ) {
        mainImage =
          images[0] || "";
      }

      return {
        ...prev,
        images,
        mainImage,
      };
    });
  };

  // ===================================================
  // ADD COLOR
  // ===================================================

  const addColor = () => {
    setProduct((prev) => ({
      ...prev,

      colors: [
        ...prev.colors,

        {
          name: "",
          value: "#000000",
          image: "",
        },
      ],
    }));
  };

  // ===================================================
  // UPDATE COLOR
  // ===================================================

  const updateColor = (
    index,
    field,
    value
  ) => {
    setProduct((prev) => ({
      ...prev,

      colors: prev.colors.map(
        (color, i) =>
          i === index
            ? {
                ...color,
                [field]: value,
              }
            : color
      ),
    }));
  };

  // ===================================================
  // REMOVE COLOR
  // ===================================================

  const removeColor = (
    index
  ) => {
    setProduct((prev) => ({
      ...prev,

      colors: prev.colors.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // ===================================================
  // ARRAY FIELD
  // ===================================================

  const addArrayItem = (
    field
  ) => {
    setProduct((prev) => ({
      ...prev,

      [field]: [
        ...prev[field],
        "",
      ],
    }));
  };

  const updateArrayItem = (
    field,
    index,
    value
  ) => {
    setProduct((prev) => ({
      ...prev,

      [field]: prev[field].map(
        (item, i) =>
          i === index
            ? value
            : item
      ),
    }));
  };

  const removeArrayItem = (
    field,
    index
  ) => {
    setProduct((prev) => ({
      ...prev,

      [field]: prev[field].filter(
        (_, i) => i !== index
      ),
    }));
  };

  // ===================================================
  // SPECIFICATION
  // ===================================================

  const addSpecification = () => {
    setProduct((prev) => ({
      ...prev,

      specifications: [
        ...prev.specifications,

        {
          label: "",
          value: "",
        },
      ],
    }));
  };

  const updateSpecification = (
    index,
    field,
    value
  ) => {
    setProduct((prev) => ({
      ...prev,

      specifications:
        prev.specifications.map(
          (item, i) =>
            i === index
              ? {
                  ...item,
                  [field]: value,
                }
              : item
        ),
    }));
  };

  const removeSpecification = (
    index
  ) => {
    setProduct((prev) => ({
      ...prev,

      specifications:
        prev.specifications.filter(
          (_, i) => i !== index
        ),
    }));
  };

  // ===================================================
  // EDIT
  // ===================================================

  const handleEdit = (item) => {
    setEditingId(item._id);

    setProduct({
      ...emptyProduct,

      ...item,

      category:
        item.category?._id ||
        item.category ||
        "",

      images: item.images || [],

      colors: item.colors || [],

      communicationMode:
        item.communicationMode ||
        [],

      numberOfUsers:
        item.numberOfUsers || [],

      bluetoothVersion:
        item.bluetoothVersion ||
        [],

      processorChip:
        item.processorChip ||
        [],

      batteryCapacity:
        item.batteryCapacity ||
        [],

      waterproofRating:
        item.waterproofRating ||
        [],

      otherFunctions:
        item.otherFunctions ||
        [],

      features:
        item.features || [],

      whatsIncluded:
        item.whatsIncluded ||
        [],

      specifications:
        item.specifications ||
        [],
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ===================================================
  // RESET
  // ===================================================

  const resetForm = () => {
    setProduct(emptyProduct);

    setEditingId(null);

    setShowForm(false);
  };

  // ===================================================
  // SAVE
  // ===================================================

  const handleSubmit = async () => {
    if (!product.name.trim()) {
      return toast.error(
        "Product name is required"
      );
    }

    if (!product.category) {
      return toast.error(
        "Please select category"
      );
    }

    if (
      product.price === "" ||
      Number(product.price) < 0
    ) {
      return toast.error(
        "Enter valid price"
      );
    }

    try {
      setSaving(true);

      const payload = {
        ...product,

        price: Number(
          product.price || 0
        ),

        oldPrice: Number(
          product.oldPrice || 0
        ),

        stock: Number(
          product.stock || 0
        ),

        displayOrder: Number(
          product.displayOrder || 0
        ),
      };

      const url = editingId
        ? `/api/products/${editingId}`
        : "/api/products";

      const method = editingId
        ? "PUT"
        : "POST";

      const res = await fetch(
        url,
        {
          method,

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Something went wrong"
        );
      }

      toast.success(
        editingId
          ? "Product updated"
          : "Product created"
      );

      resetForm();

      await loadData();
    } catch (error) {
      console.error(error);

      toast.error(
        error.message ||
          "Failed to save product"
      );
    } finally {
      setSaving(false);
    }
  };

  // ===================================================
  // DELETE
  // ===================================================

  const handleDelete = async (
    id
  ) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this product?"
      );

    if (!confirmed) return;

    try {
      const res =
        await fetch(
          `/api/products/${id}`,
          {
            method: "DELETE",
          }
        );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Delete failed"
        );
      }

      setProducts((prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
      );

      toast.success(
        "Product deleted"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to delete product"
      );
    }
  };

  // ===================================================
  // FILTER PRODUCTS
  // ===================================================

  const filteredProducts =
    useMemo(() => {
      const value =
        search
          .trim()
          .toLowerCase();

      if (!value) {
        return products;
      }

      return products.filter(
        (item) =>
          item.name
            ?.toLowerCase()
            .includes(value) ||
          item.sku
            ?.toLowerCase()
            .includes(value) ||
          item.category?.name
            ?.toLowerCase()
            .includes(value)
      );
    }, [products, search]);

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div className="min-h-screen bg-[#F5F6F8] p-5 md:p-8">
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-[28px] font-semibold text-black">
            Products
          </h1>

          <p className="mt-1 text-[13px] text-[#777]">
            Add and manage all EDYELL products.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="flex h-[42px] items-center justify-center gap-2 bg-[#DA291C] px-5 text-[13px] font-medium text-white hover:bg-[#b91f15]"
        >
          <Plus size={16} />

          Add Product
        </button>
      </div>

      {/* =================================================
          FORM
      ================================================= */}

      {showForm && (
        <div className="mb-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-[21px] font-semibold text-black">
                {editingId
                  ? "Edit Product"
                  : "Add New Product"}
              </h2>

              <p className="mt-1 text-[12px] text-[#888]">
                Enter complete product information.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="flex h-[38px] items-center gap-2 border border-[#ddd] bg-white px-4 text-[12px]"
            >
              <X size={15} />

              Close
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_350px]">
            {/* =========================================
                LEFT
            ========================================= */}

            <div className="space-y-6">
              {/* BASIC INFORMATION */}

              <Section
                title="Basic Information"
                description="Product name, SKU, category and URL."
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input
                    label="Product Name *"
                    value={product.name}
                    onChange={
                      handleNameChange
                    }
                    placeholder="EDYELL C9 Intercom"
                  />

                  <Input
                    label="SKU"
                    value={product.sku}
                    onChange={(value) =>
                      updateProduct(
                        "sku",
                        value
                      )
                    }
                    placeholder="EDYELL-C9"
                  />

                  <Input
                    label="Slug"
                    value={product.slug}
                    onChange={(value) =>
                      updateProduct(
                        "slug",
                        slugify(value)
                      )
                    }
                    placeholder="edyell-c9-intercom"
                  />

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold text-[#333]">
                      Category *
                    </label>

                    <select
                      value={
                        product.category
                      }
                      onChange={(e) =>
                        updateProduct(
                          "category",
                          e.target.value
                        )
                      }
                      className="h-[44px] w-full rounded-[4px] border border-[#ddd] bg-white px-3 text-[13px] outline-none focus:border-[#DA291C]"
                    >
                      <option value="">
                        Select Category
                      </option>

                      {categories.map(
                        (category) => (
                          <option
                            key={
                              category._id
                            }
                            value={
                              category._id
                            }
                          >
                            {
                              category.name
                            }
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              </Section>

              {/* PRICING */}

              <Section
                title="Pricing & Inventory"
                description="Set price, sale price and inventory."
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  <Input
                    label="Selling Price *"
                    type="number"
                    value={
                      product.price
                    }
                    onChange={(value) =>
                      updateProduct(
                        "price",
                        value
                      )
                    }
                    placeholder="999"
                  />

                  <Input
                    label="Old Price"
                    type="number"
                    value={
                      product.oldPrice
                    }
                    onChange={(value) =>
                      updateProduct(
                        "oldPrice",
                        value
                      )
                    }
                    placeholder="1299"
                  />

                  <Input
                    label="Stock Quantity"
                    type="number"
                    value={
                      product.stock
                    }
                    onChange={(value) =>
                      updateProduct(
                        "stock",
                        value
                      )
                    }
                    placeholder="100"
                  />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">
                  <Toggle
                    label="On Sale"
                    checked={
                      product.sale
                    }
                    onChange={(value) =>
                      updateProduct(
                        "sale",
                        value
                      )
                    }
                  />

                  <Toggle
                    label="Active"
                    checked={
                      product.active
                    }
                    onChange={(value) =>
                      updateProduct(
                        "active",
                        value
                      )
                    }
                  />

                  <Toggle
                    label="Featured"
                    checked={
                      product.featured
                    }
                    onChange={(value) =>
                      updateProduct(
                        "featured",
                        value
                      )
                    }
                  />

                  <Toggle
                    label="HOT"
                    checked={
                      product.hot
                    }
                    onChange={(value) =>
                      updateProduct(
                        "hot",
                        value
                      )
                    }
                  />
                </div>
              </Section>

              {/* IMAGES */}

              <Section
                title="Product Images"
                description="Upload product gallery images."
              >
                <label className="flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-[6px] border-2 border-dashed border-[#ccc] bg-[#fafafa] hover:border-[#DA291C]">
                  <Upload
                    size={28}
                    className="text-[#888]"
                  />

                  <p className="mt-3 text-[13px] font-medium">
                    {uploading
                      ? "Uploading..."
                      : "Click to upload product images"}
                  </p>

                  <p className="mt-1 text-[11px] text-[#999]">
                    PNG, JPG, WEBP
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    disabled={
                      uploading
                    }
                    onChange={(e) =>
                      uploadImages(
                        e.target.files
                      )
                    }
                  />
                </label>

                {product.images
                  .length > 0 && (
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {product.images.map(
                      (
                        image,
                        index
                      ) => (
                        <div
                          key={`${image}-${index}`}
                          className="group relative overflow-hidden border border-[#ddd] bg-[#f7f7f7]"
                        >
                          <img
                            src={image}
                            alt=""
                            className="h-[160px] w-full object-contain"
                          />

                          {product.mainImage ===
                            image && (
                            <div className="absolute left-2 top-2 bg-[#DA291C] px-2 py-1 text-[9px] text-white">
                              MAIN IMAGE
                            </div>
                          )}

                          <div className="absolute inset-x-0 bottom-0 flex gap-1 bg-black/70 p-2 opacity-0 transition group-hover:opacity-100">
                            <button
                              type="button"
                              onClick={() =>
                                updateProduct(
                                  "mainImage",
                                  image
                                )
                              }
                              className="flex-1 bg-white py-2 text-[9px]"
                            >
                              Set Main
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                removeImage(
                                  index
                                )
                              }
                              className="bg-[#DA291C] px-3 text-white"
                            >
                              <Trash2
                                size={
                                  12
                                }
                              />
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </Section>

              {/* COLORS */}

              <Section
                title="Product Colors"
                description="Add available product colors."
              >
                <div className="space-y-3">
                  {product.colors.map(
                    (
                      color,
                      index
                    ) => (
                      <div
                        key={index}
                        className="grid grid-cols-[1fr_70px_1fr_40px] items-end gap-3"
                      >
                        <Input
                          label="Color Name"
                          value={
                            color.name
                          }
                          onChange={(
                            value
                          ) =>
                            updateColor(
                              index,
                              "name",
                              value
                            )
                          }
                          placeholder="Black"
                        />

                        <div>
                          <label className="mb-2 block text-[12px] font-semibold">
                            Color
                          </label>

                          <input
                            type="color"
                            value={
                              color.value ||
                              "#000000"
                            }
                            onChange={(
                              e
                            ) =>
                              updateColor(
                                index,
                                "value",
                                e.target.value
                              )
                            }
                            className="h-[44px] w-full cursor-pointer"
                          />
                        </div>

                        <Input
                          label="Image URL"
                          value={
                            color.image
                          }
                          onChange={(
                            value
                          ) =>
                            updateColor(
                              index,
                              "image",
                              value
                            )
                          }
                          placeholder="/uploads/black.jpg"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeColor(
                              index
                            )
                          }
                          className="flex h-[44px] items-center justify-center bg-red-50 text-red-500"
                        >
                          <Trash2
                            size={15}
                          />
                        </button>
                      </div>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={addColor}
                  className="mt-4 flex items-center gap-2 border border-[#ddd] px-4 py-2 text-[12px]"
                >
                  <Plus size={14} />

                  Add Color
                </button>
              </Section>

              {/* FILTERS */}

              <div className="space-y-3">
                <CheckboxGroup
                  title="Communication Mode"
                  options={
                    COMMUNICATION_MODES
                  }
                  values={
                    product.communicationMode
                  }
                  onChange={(value) =>
                    updateProduct(
                      "communicationMode",
                      value
                    )
                  }
                />

                <CheckboxGroup
                  title="Number of Users"
                  options={
                    NUMBER_OF_USERS
                  }
                  values={
                    product.numberOfUsers
                  }
                  onChange={(value) =>
                    updateProduct(
                      "numberOfUsers",
                      value
                    )
                  }
                />

                <CheckboxGroup
                  title="Bluetooth Version"
                  options={
                    BLUETOOTH_VERSIONS
                  }
                  values={
                    product.bluetoothVersion
                  }
                  onChange={(value) =>
                    updateProduct(
                      "bluetoothVersion",
                      value
                    )
                  }
                />

                <CheckboxGroup
                  title="Processor Chip"
                  options={
                    PROCESSOR_CHIPS
                  }
                  values={
                    product.processorChip
                  }
                  onChange={(value) =>
                    updateProduct(
                      "processorChip",
                      value
                    )
                  }
                />

                <CheckboxGroup
                  title="Battery Capacity"
                  options={
                    BATTERY_CAPACITIES
                  }
                  values={
                    product.batteryCapacity
                  }
                  onChange={(value) =>
                    updateProduct(
                      "batteryCapacity",
                      value
                    )
                  }
                />

                <CheckboxGroup
                  title="Waterproof Rating"
                  options={
                    WATERPROOF_RATINGS
                  }
                  values={
                    product.waterproofRating
                  }
                  onChange={(value) =>
                    updateProduct(
                      "waterproofRating",
                      value
                    )
                  }
                />

                <CheckboxGroup
                  title="Other Functions"
                  options={
                    OTHER_FUNCTIONS
                  }
                  values={
                    product.otherFunctions
                  }
                  onChange={(value) =>
                    updateProduct(
                      "otherFunctions",
                      value
                    )
                  }
                />
              </div>

              {/* DESCRIPTION */}

              <Section
                title="Product Content"
                description="Add product description and marketing content."
              >
                <div className="space-y-5">
                  <TextArea
                    label="Short Description"
                    value={
                      product.shortDescription
                    }
                    onChange={(value) =>
                      updateProduct(
                        "shortDescription",
                        value
                      )
                    }
                    placeholder="Short product description..."
                    rows={3}
                  />

                  <TextArea
                    label="Full Description"
                    value={
                      product.description
                    }
                    onChange={(value) =>
                      updateProduct(
                        "description",
                        value
                      )
                    }
                    placeholder="Complete product description..."
                    rows={8}
                  />
                </div>
              </Section>

              {/* FEATURES */}

              <Section
                title="Product Features"
                description="Add feature bullet points."
              >
                <DynamicArray
                  items={
                    product.features
                  }
                  onAdd={() =>
                    addArrayItem(
                      "features"
                    )
                  }
                  onUpdate={(
                    index,
                    value
                  ) =>
                    updateArrayItem(
                      "features",
                      index,
                      value
                    )
                  }
                  onRemove={(index) =>
                    removeArrayItem(
                      "features",
                      index
                    )
                  }
                  placeholder="50mm Graphene Vibrating Unit"
                />
              </Section>

              {/* INCLUDED */}

              <Section
                title="What's Included"
                description="Products/accessories included in the box."
              >
                <DynamicArray
                  items={
                    product.whatsIncluded
                  }
                  onAdd={() =>
                    addArrayItem(
                      "whatsIncluded"
                    )
                  }
                  onUpdate={(
                    index,
                    value
                  ) =>
                    updateArrayItem(
                      "whatsIncluded",
                      index,
                      value
                    )
                  }
                  onRemove={(index) =>
                    removeArrayItem(
                      "whatsIncluded",
                      index
                    )
                  }
                  placeholder="C9 Bluetooth Intercom"
                />
              </Section>

              {/* SPECIFICATIONS */}

              <Section
                title="Specifications"
                description="Add technical specifications."
              >
                <div className="space-y-3">
                  {product.specifications.map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={index}
                        className="grid grid-cols-[1fr_1fr_40px] gap-3"
                      >
                        <input
                          value={
                            item.label
                          }
                          onChange={(
                            e
                          ) =>
                            updateSpecification(
                              index,
                              "label",
                              e.target.value
                            )
                          }
                          placeholder="Battery"
                          className="h-[44px] rounded border border-[#ddd] px-3 text-[13px] outline-none"
                        />

                        <input
                          value={
                            item.value
                          }
                          onChange={(
                            e
                          ) =>
                            updateSpecification(
                              index,
                              "value",
                              e.target.value
                            )
                          }
                          placeholder="1000mAh"
                          className="h-[44px] rounded border border-[#ddd] px-3 text-[13px] outline-none"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeSpecification(
                              index
                            )
                          }
                          className="flex items-center justify-center bg-red-50 text-red-500"
                        >
                          <Trash2
                            size={15}
                          />
                        </button>
                      </div>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={
                    addSpecification
                  }
                  className="mt-4 flex items-center gap-2 border border-[#ddd] px-4 py-2 text-[12px]"
                >
                  <Plus size={14} />

                  Add Specification
                </button>
              </Section>

              {/* SEO */}

              <Section
                title="SEO"
                description="Search engine optimization information."
              >
                <div className="space-y-5">
                  <Input
                    label="Meta Title"
                    value={
                      product.metaTitle
                    }
                    onChange={(value) =>
                      updateProduct(
                        "metaTitle",
                        value
                      )
                    }
                    placeholder="EDYELL C9 Motorcycle Bluetooth Intercom"
                  />

                  <TextArea
                    label="Meta Description"
                    value={
                      product.metaDescription
                    }
                    onChange={(value) =>
                      updateProduct(
                        "metaDescription",
                        value
                      )
                    }
                    placeholder="Buy EDYELL C9 motorcycle Bluetooth intercom..."
                    rows={4}
                  />
                </div>
              </Section>
            </div>

            {/* =========================================
                RIGHT SIDEBAR
            ========================================= */}

            <div className="space-y-6">
              {/* PUBLISH */}

              <Section title="Publish">
                <button
                  onClick={
                    handleSubmit
                  }
                  disabled={saving}
                  className="flex h-[46px] w-full items-center justify-center gap-2 bg-[#DA291C] text-[13px] font-medium text-white hover:bg-[#b91f15] disabled:opacity-50"
                >
                  <Save size={16} />

                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update Product"
                      : "Publish Product"}
                </button>

                <button
                  type="button"
                  onClick={
                    resetForm
                  }
                  className="mt-3 h-[44px] w-full border border-[#ddd] bg-white text-[12px]"
                >
                  Cancel
                </button>
              </Section>

              {/* PRODUCT PREVIEW */}

              <Section title="Product Preview">
                <div className="overflow-hidden border border-[#eee]">
                  <div className="relative aspect-square bg-[#f7f7f7]">
                    {product.mainImage ? (
                      <img
                        src={
                          product.mainImage
                        }
                        alt=""
                        className="h-full w-full object-contain p-8"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[#aaa]">
                        <ImageIcon
                          size={40}
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="text-[9px] text-[#DA291C]">
                      {product.hot
                        ? "HOT"
                        : ""}
                    </p>

                    <h3 className="mt-1 text-[13px] font-medium">
                      {product.name ||
                        "Product Name"}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[15px] font-semibold">
                        ₹
                        {Number(
                          product.price ||
                            0
                        ).toFixed(2)}
                      </span>

                      {Number(
                        product.oldPrice ||
                          0
                      ) > 0 && (
                        <span className="text-[11px] text-[#999] line-through">
                          ₹
                          {Number(
                            product.oldPrice
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Section>

              {/* DISPLAY ORDER */}

              <Section title="Display Order">
                <Input
                  label="Order"
                  type="number"
                  value={
                    product.displayOrder
                  }
                  onChange={(value) =>
                    updateProduct(
                      "displayOrder",
                      value
                    )
                  }
                  placeholder="0"
                />

                <p className="mt-2 text-[10px] text-[#999]">
                  Lower numbers appear first.
                </p>
              </Section>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          PRODUCT LIST
      ================================================= */}

      <div className="rounded-[6px] border border-[#e5e5e5] bg-white">
        {/* LIST HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-[#eee] px-5 py-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-[17px] font-semibold">
              All Products
            </h2>

            <p className="mt-1 text-[11px] text-[#999]">
              {products.length} products
            </p>
          </div>

          <div className="relative w-full md:w-[280px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search products..."
              className="h-[38px] w-full border border-[#ddd] pl-9 pr-3 text-[12px] outline-none focus:border-[#DA291C]"
            />
          </div>
        </div>

        {/* LOADING */}

        {loading ? (
          <div className="p-10 text-center text-[13px] text-[#999]">
            Loading products...
          </div>
        ) : filteredProducts.length ===
          0 ? (
          <div className="p-12 text-center">
            <Package
              size={40}
              className="mx-auto text-[#ccc]"
            />

            <p className="mt-3 text-[14px] font-medium">
              No products found
            </p>

            <p className="mt-1 text-[11px] text-[#999]">
              Add your first product.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-[#eee] text-left">
                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    Product
                  </th>

                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    SKU
                  </th>

                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    Category
                  </th>

                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    Price
                  </th>

                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    Stock
                  </th>

                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    Status
                  </th>

                  <th className="px-5 py-4 text-[10px] uppercase text-[#999]">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map(
                  (item) => (
                    <tr
                      key={item._id}
                      className="border-b border-[#f2f2f2] last:border-0"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-[55px] w-[55px] shrink-0 bg-[#f7f7f7]">
                            {item.mainImage ||
                            item.images?.[0] ? (
                              <img
                                src={
                                  item.mainImage ||
                                  item
                                    .images?.[0]
                                }
                                alt=""
                                className="h-full w-full object-contain p-1"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <ImageIcon
                                  size={18}
                                  className="text-[#ccc]"
                                />
                              </div>
                            )}
                          </div>

                          <div>
                            <p className="max-w-[260px] truncate text-[12px] font-medium">
                              {item.name}
                            </p>

                            {item.hot && (
                              <span className="text-[9px] text-[#DA291C]">
                                HOT
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-[11px] text-[#555]">
                        {item.sku ||
                          "-"}
                      </td>

                      <td className="px-5 py-4 text-[11px] text-[#555]">
                        {item.category
                          ?.name ||
                          "-"}
                      </td>

                      <td className="px-5 py-4 text-[12px] font-medium">
                        ₹
                        {Number(
                          item.price ||
                            0
                        ).toFixed(2)}
                      </td>

                      <td className="px-5 py-4 text-[11px]">
                        {item.trackInventory
                          ? item.stock
                          : "Unlimited"}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-[9px] font-medium ${
                            item.active
                              ? "bg-green-50 text-green-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.active
                            ? "Active"
                            : "Hidden"}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handleEdit(
                                item
                              )
                            }
                            className="flex h-[32px] w-[32px] items-center justify-center border border-[#ddd] hover:border-black"
                          >
                            <Pencil
                              size={13}
                            />
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(
                                item._id
                              )
                            }
                            className="flex h-[32px] w-[32px] items-center justify-center border border-red-100 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <Trash2
                              size={13}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// =====================================================
// TOGGLE
// =====================================================

function Toggle({
  label,
  checked,
  onChange,
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded border border-[#eee] p-3">
      <span className="text-[11px] text-[#555]">
        {label}
      </span>

      <button
        type="button"
        onClick={() =>
          onChange(!checked)
        }
        className={`relative h-5 w-9 rounded-full transition ${
          checked
            ? "bg-[#DA291C]"
            : "bg-[#ccc]"
        }`}
      >
        <span
          className={`absolute top-[3px] h-3.5 w-3.5 rounded-full bg-white transition ${
            checked
              ? "left-[18px]"
              : "left-[3px]"
          }`}
        />
      </button>
    </label>
  );
}

// =====================================================
// DYNAMIC ARRAY
// =====================================================

function DynamicArray({
  items,
  onAdd,
  onUpdate,
  onRemove,
  placeholder,
}) {
  return (
    <div>
      <div className="space-y-3">
        {items.map(
          (item, index) => (
            <div
              key={index}
              className="flex gap-2"
            >
              <input
                value={item}
                onChange={(e) =>
                  onUpdate(
                    index,
                    e.target.value
                  )
                }
                placeholder={
                  placeholder
                }
                className="h-[42px] flex-1 border border-[#ddd] px-3 text-[12px] outline-none focus:border-[#DA291C]"
              />

              <button
                type="button"
                onClick={() =>
                  onRemove(index)
                }
                className="flex h-[42px] w-[42px] items-center justify-center bg-red-50 text-red-500"
              >
                <Trash2
                  size={14}
                />
              </button>
            </div>
          )
        )}
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="mt-4 flex items-center gap-2 border border-[#ddd] px-4 py-2 text-[12px]"
      >
        <Plus size={14} />

        Add Item
      </button>
    </div>
  );
}