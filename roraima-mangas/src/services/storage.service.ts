import {
    PutObjectCommand,
  } from "@aws-sdk/client-s3";
  
  import {
    getSignedUrl,
  } from "@aws-sdk/s3-request-presigner";
  
  import {
    r2BucketName,
    r2Client,
    r2PublicUrl,
  } from "@/src/lib/r2";
  
  const UPLOAD_URL_EXPIRES_IN = 60 * 10;
  
  const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
  ];
  
  export function validateImageContentType(
    contentType: string
  ) {
    return ALLOWED_IMAGE_TYPES.includes(contentType);
  }
  
  export async function createImageUploadUrl(
    key: string,
    contentType: string
  ) {
    if (!validateImageContentType(contentType)) {
      throw new Error(
        "Tipo de imagem não permitido."
      );
    }
  
    const command = new PutObjectCommand({
      Bucket: r2BucketName,
      Key: key,
      ContentType: contentType,
    });
  
    const uploadUrl = await getSignedUrl(
      r2Client,
      command,
      {
        expiresIn: UPLOAD_URL_EXPIRES_IN,
      }
    );
  
    return {
      uploadUrl,
      publicUrl: `${r2PublicUrl}/${key}`,
    };
  }