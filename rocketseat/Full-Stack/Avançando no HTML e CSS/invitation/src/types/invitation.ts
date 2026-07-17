// types/invitation.ts

export interface InvitationFormData {
  title: string;
  startsAt: string;
  endsAt: string;

  eventType: "presential" | "online";

  local: string;

  description: string;

  primaryColor: string;

  theme: string;

  isDark: boolean;

  cover: FileList;

  name: string;

  email: string;

  phone: string;
}