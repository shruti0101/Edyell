import { connectDB } from "@/lib/db";
import Product from "@/models/product";

// =====================================================
// GET SINGLE PRODUCT
// =====================================================

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const product = await Product.findById(id).populate(
      "category",
      "name slug"
    );

    if (!product) {
      return Response.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(product);
  } catch (error) {
    console.error("GET PRODUCT ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch product",
      },
      {
        status: 500,
      }
    );
  }
}

// =====================================================
// UPDATE PRODUCT
// =====================================================

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const updated = await Product.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      return Response.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      success: true,
      product: updated,
    });
  } catch (error) {
    console.error("UPDATE PRODUCT ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to update product",
      },
      {
        status: 500,
      }
    );
  }
}

// =====================================================
// DELETE PRODUCT
// =====================================================

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return Response.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to delete product",
      },
      {
        status: 500,
      }
    );
  }
}