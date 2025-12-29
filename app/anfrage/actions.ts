'use server';

import { sendInquiryEmail, type InquiryPayload } from "@/lib/mailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(formData: FormData) {
  const payload: InquiryPayload = {
    name: (formData.get("name") as string | null)?.trim() || "",
    email: (formData.get("email") as string | null)?.trim() || "",
    phone: (formData.get("phone") as string | null)?.trim() || undefined,
    mobile: (formData.get("mobile") as string | null)?.trim() || undefined,
    company: (formData.get("company") as string | null)?.trim() || undefined,
    customerId: (formData.get("customerId") as string | null)?.trim() || undefined,
    message: (formData.get("message") as string | null)?.trim() || ""
  };

  if (!payload.name || !payload.email || !payload.message) {
    return { success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." };
  }

  if (!emailPattern.test(payload.email)) {
    return { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse an." };
  }

  await sendInquiryEmail(payload);
  return { success: true };
}
