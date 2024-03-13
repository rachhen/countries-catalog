import { NativeNameItem } from "~/types/country";

export function convertNativeNameToArray(
  nativeName: Record<string, NativeNameItem>
) {
  return Object.entries(nativeName).map(([key, value]) => ({ key, value }));
}
