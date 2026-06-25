import { posterContentType, posterSize, teacherPoster } from "@/lib/poster";

export const alt = "Himani Anand — IB French Teacher, 15+ years — Wadhwa Institute";
export const size = posterSize;
export const contentType = posterContentType;

export default function Image() {
  return teacherPoster("himani-anand");
}
