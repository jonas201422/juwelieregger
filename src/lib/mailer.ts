export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  mobile?: string;
  company?: string;
  customerId?: string;
  message: string;
};

// TODO: Replace with SMTP, Resend, or SendGrid integration.
export async function sendInquiryEmail(payload: InquiryPayload) {
  console.info("[stub] send inquiry", payload);
}
