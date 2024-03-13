import { NativeNameItem } from "~/types/country";

export function convertNativeNameToArray(
  nativeName: Record<string, NativeNameItem> | null,
) {
  if (!nativeName) return [];

  return Object.entries(nativeName).map(([key, value]) => ({ key, value }));
}
