import { posterContentType, posterSize, promoPoster } from "@/lib/poster";

export const alt = "Wadhwa Institute — IB Coaching in Gurugram, score your perfect 7";
export const size = posterSize;
export const contentType = posterContentType;

export default function Image() {
  return promoPoster();
}
