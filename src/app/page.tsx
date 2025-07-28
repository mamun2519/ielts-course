import CoursePage from "@/components/CourseInfo";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const data = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"
  );
  const courseData = await data.json();
  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <CoursePage courseData={courseData?.data} />
    </div>
  );
}
