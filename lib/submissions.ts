// Submission boundary. Replace these adapters with a validated API integration.
// This development build never transmits a form or claims delivery.
export type SubmissionResult =
  | { status: "local-only"; message: string }
  | { status: "sent"; reference: string };
export async function submitApplication(
  _data: Record<string, string>,
): Promise<SubmissionResult> {
  void _data;
  return {
    status: "local-only",
    message:
      "Your application is ready, but has not been sent. Applications are not connected to a submission service in this preview. Download a copy to keep your work.",
  };
}
export async function submitContact(
  _data: Record<string, string>,
): Promise<SubmissionResult> {
  void _data;
  return {
    status: "local-only",
    message:
      "Your message is ready, but has not been sent. A contact service has not been connected. Download a copy below; official contact details will be added before launch.",
  };
}
export function downloadData(data: Record<string, string>, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
