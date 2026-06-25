import { posterContentType, posterSize, teacherPoster } from "@/lib/poster";

export const alt = "IB Mathematics Specialist — AA SL & AI SL — Wadhwa Institute";
export const size = posterSize;
export const contentType = posterContentType;

export default function Image() {
  return teacherPoster("maths-mentor");
}
