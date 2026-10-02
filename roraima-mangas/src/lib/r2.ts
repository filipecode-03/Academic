import { S3Client } from "@aws-sdk/client-s3";

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

if (!accountId) {
  throw new Error("R2_ACCOUNT_ID não configurado.");
}

if (!accessKeyId) {
  throw new Error("R2_ACCESS_KEY_ID não configurado.");
}

if (!secretAccessKey) {
  throw new Error("R2_SECRET_ACCESS_KEY não configurado.");
}

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const r2BucketName =
  process.env.R2_BUCKET_NAME;

export const r2PublicUrl =
  process.env.R2_PUBLIC_URL;

if (!r2BucketName) {
  throw new Error("R2_BUCKET_NAME não configurado.");
}

if (!r2PublicUrl) {
  throw new Error("R2_PUBLIC_URL não configurado.");
}