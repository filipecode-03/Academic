export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  version: number;
  errors?: Partial<Record<"name" | "email" | "projectType" | "message" | "privacy", string>>;
  values?: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    investment: string;
    message: string;
    privacy: boolean;
  };
};
