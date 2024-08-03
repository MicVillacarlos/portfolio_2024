export type WorkExperienceCardTypes  = {
  companyName: string;
  startDate: string;
  position: string;
  endDate: string;
  description: string;
  technologies: string[];
}


export type ProjectDataTypes = {
  id: number;
  title: string;
  description: string;
  imageLink?: string;
}

export type BlogCardType = {
  title: string;
  description: string;
}