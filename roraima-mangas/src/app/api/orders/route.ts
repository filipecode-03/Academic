import { NextResponse } from "next/server";
import { createOrder } from "@/src/services/order.service";
import { createOrderSchema } from "@/src/schemas/order.schema";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = createOrderSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ message: "Carrinho inválido.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    const phone = process.env.WHATSAPP_STORE_NUMBER?.replace(/\D/g, "");
    if (!phone) return NextResponse.json({ message: "A loja ainda não configurou WHATSAPP_STORE_NUMBER." }, { status: 503 });
    const { order, message } = await createOrder(parsed.data);
    return NextResponse.json({ orderId: order.id, whatsappUrl: `https://wa.me/${phone}?text=${encodeURIComponent(message)}` }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Não foi possível criar o pedido.";
    const status = message.includes("Estoque insuficiente") || message.includes("não existem mais") ? 409 : 500;
    return NextResponse.json({ message }, { status });
  }
}
