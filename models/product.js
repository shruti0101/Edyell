import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    sku: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    // --------------------------------------------------
    // PRICING
    // --------------------------------------------------

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    oldPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    sale: {
      type: Boolean,
      default: false,
    },

    // --------------------------------------------------
    // INVENTORY
    // --------------------------------------------------

    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    trackInventory: {
      type: Boolean,
      default: true,
    },

    // --------------------------------------------------
    // STATUS
    // --------------------------------------------------

    active: {
      type: Boolean,
      default: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    hot: {
      type: Boolean,
      default: false,
    },

    // --------------------------------------------------
    // IMAGES
    // --------------------------------------------------

    images: [
      {
        type: String,
      },
    ],

    mainImage: {
      type: String,
      default: "",
    },

    // --------------------------------------------------
    // COLORS
    // --------------------------------------------------

    colors: [
      {
        name: {
          type: String,
          default: "",
        },

        value: {
          type: String,
          default: "#000000",
        },

        image: {
          type: String,
          default: "",
        },
      },
    ],

    // --------------------------------------------------
    // PRODUCT FILTERS
    // These match your storefront filters
    // --------------------------------------------------

    communicationMode: {
      type: [String],
      default: [],
    },

    numberOfUsers: {
      type: [String],
      default: [],
    },

    bluetoothVersion: {
      type: [String],
      default: [],
    },

    processorChip: {
      type: [String],
      default: [],
    },

    batteryCapacity: {
      type: [String],
      default: [],
    },

    waterproofRating: {
      type: [String],
      default: [],
    },

    otherFunctions: {
      type: [String],
      default: [],
    },

    // --------------------------------------------------
    // CONTENT
    // --------------------------------------------------

    shortDescription: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    features: [
      {
        type: String,
      },
    ],

    whatsIncluded: [
      {
        type: String,
      },
    ],

    // --------------------------------------------------
    // SPECIFICATIONS
    // --------------------------------------------------

    specifications: [
      {
        label: {
          type: String,
          default: "",
        },

        value: {
          type: String,
          default: "",
        },
      },
    ],

    // --------------------------------------------------
    // SEO
    // --------------------------------------------------

    metaTitle: {
      type: String,
      default: "",
    },

    metaDescription: {
      type: String,
      default: "",
    },

    // --------------------------------------------------
    // SORTING
    // --------------------------------------------------

    displayOrder: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);