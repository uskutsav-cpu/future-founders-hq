export const LEGACY_DRAFT_KEY = "ff-application-v1";
export function clearLegacyDraft(
  storage: Pick<Storage, "getItem" | "removeItem">,
): "removed" | "absent" {
  const existed = storage.getItem(LEGACY_DRAFT_KEY) !== null;
  storage.removeItem(LEGACY_DRAFT_KEY);
  return existed ? "removed" : "absent";
}
