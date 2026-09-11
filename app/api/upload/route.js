
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import sharp from "sharp";
import { v4 as uuid } from "uuid";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No files uploaded" },
        { status: 400 }
      );
    }

    const uploadedUrls = [];

    for (const file of files) {
      // Make sure it is actually a file
      if (!file || typeof file.arrayBuffer !== "function") {
        continue;
      }

      // Convert file to buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Optimize image and convert to WebP
      const optimizedImage = await sharp(buffer)
        .webp({ quality: 80 })
        .toBuffer();

      // Generate unique filename
      const fileName = `${uuid()}.webp`;

      // Upload buffer to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "uploads",
              public_id: fileName.replace(".webp", ""),
              resource_type: "image",
              format: "webp",
            },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          )
          .end(optimizedImage);
      });

      uploadedUrls.push(uploadResult.secure_url);
    }

    return NextResponse.json({
      success: true,
      urls: uploadedUrls,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Upload failed",
      },
      { status: 500 }
    );
  }
}

