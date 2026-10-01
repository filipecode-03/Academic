import bcrypt from "bcryptjs";

import { prisma } from "@/src/lib/prisma";

const email = process.env.ADMIN_EMAIL ?? "";
const password = process.env.ADMIN_PASSWORD ?? "";

if (!email) {
  throw new Error("ADMIN_EMAIL não foi definida.");
}

if (!password) {
  throw new Error("ADMIN_PASSWORD não foi definida.");
}

async function createAdmin() {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      console.log("Já existe um usuário com este e-mail.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: "Administrador",
        email,
        password: hashedPassword,
      },
    });

    console.log("Administrador criado com sucesso.");
    console.log(`ID: ${user.id}`);
    console.log(`E-mail: ${user.email}`);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin().catch((error) => {
  console.error("Erro ao criar administrador:", error);
  process.exit(1);
});