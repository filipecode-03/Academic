const links = new Map<string, string>();

function generateCode(length = 6) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(
      Math.random() * characters.length
    );

    code += characters[randomIndex];
  }

  return code;
}

export function createShortLink(originalUrl: string) {
  let code = generateCode();

  while (links.has(code)) {
    code = generateCode();
  }

  links.set(code, originalUrl);

  console.log("Link criado:", {
    code,
    originalUrl,
  });

  return code;
}

export function getOriginalUrl(code: string) {
  return links.get(code);
}