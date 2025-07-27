export type IAboutCourse = {
  courseData: {
    title: string;
    description: string;
    instructor: {
      name: string;
      image: string;
      short_description: string;
      description: string;
    };
    features: { title: string; subtitle: string }[];
    learningPoints: string[];
    exclusiveFeatures: { title: string; checklist: string[] }[];
  };
  isMobile?: boolean;
};
