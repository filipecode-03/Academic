export function isPrismaUniqueConstraintError(error: unknown) {
    if (
      typeof error !== "object" ||
      error === null ||
      !("code" in error)
    ) {
      return false;
    }
  
    return error.code === "P2002";
  }