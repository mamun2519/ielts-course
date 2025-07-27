export type IAboutCourse = {
  courseData: {
    title: string;
    description: string;
    sections: Array<{
      type: string;
      values: Array<string>; // Replace 'string' with the actual type if known
    }>;
  };
  isMobile?: boolean;
};
