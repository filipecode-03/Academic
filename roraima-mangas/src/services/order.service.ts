import { prisma } from "@/src/lib/prisma";
import { createOrderSchema } from "@/src/schemas/order.schema";

const money = (cents: number) => (cents / 100).toFixed(2);
const formatPrice = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);

export async function createOrder(input: unknown) {
  const { items } = createOrderSchema.parse(input);
  const quantities = new Map<string, number>();
  for (const item of items) quantities.set(item.productId, (quantities.get(item.productId) ?? 0) + item.quantity);
  const products = await prisma.product.findMany({ where: { id: { in: [...quantities.keys()] } } });
  if (products.length !== quantities.size) throw new Error("Um ou mais produtos não existem mais.");

  const productById = new Map(products.map((product) => [product.id, product]));
  const snapshots = [...quantities.keys()].map((productId) => {
    const product = productById.get(productId)!;
    const quantity = quantities.get(product.id)!;
    if (product.status !== "ACTIVE" || product.stock < quantity) throw new Error(`Estoque insuficiente para ${product.name}.`);
    const unitCents = Math.round(Number(product.price) * 100);
    return { productId: product.id, productName: product.name, quantity, unitCents, subtotalCents: unitCents * quantity };
  });
  const totalCents = snapshots.reduce((total, item) => total + item.subtotalCents, 0);

  const order = await prisma.order.create({ data: {
    total: money(totalCents),
    items: { create: snapshots.map((item) => ({ productId: item.productId, productName: item.productName, unitPrice: money(item.unitCents), quantity: item.quantity, subtotal: money(item.subtotalCents) })) },
  }, include: { items: true } });

  const message = ["Olá! Gostaria de verificar a disponibilidade dos seguintes produtos:", "", ...snapshots.flatMap((item) => [
    `• ${item.productName}`, `  Quantidade: ${item.quantity}`, `  Valor unitário: ${formatPrice(item.unitCents)}`, `  Subtotal: ${formatPrice(item.subtotalCents)}`, "",
  ]), `Total: ${formatPrice(totalCents)}`].join("\n");
  return { order, message, totalCents };
}
