import { connectDB } from "@/lib/db";
import Product from "@/models/product";



export async function GET() {
  try {
    await connectDB();

    const products = await Product.find()
      .populate("category", "name slug")
      .sort({
        displayOrder: 1,
        createdAt: -1,
      });

    return Response.json(products);
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}



export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.name) {
      return Response.json(
        {
          success: false,
          message: "Product name is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!body.category) {
      return Response.json(
        {
          success: false,
          message: "Category is required",
        },
        {
          status: 400,
        }
      );
    }

    if (body.price === undefined || body.price === "") {
      return Response.json(
        {
          success: false,
          message: "Product price is required",
        },
        {
          status: 400,
        }
      );
    }

    const product = await Product.create(body);

    return Response.json(
      {
        success: true,
        product,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);

    if (error.code === 11000) {
      return Response.json(
        {
          success: false,
          message: "A product with this slug already exists",
        },
        {
          status: 409,
        }
      );
    }

    return Response.json(
      {
        success: false,
        message: "Failed to create product",
      },
      {
        status: 500,
      }
    );
  }
}