export type WorkExperienceCardTypes  = {
  companyName: string;
  startDate: string;
  position: string;
  endDate: string;
  description: string;
}


export type ProjectDataTypes = {
  id: number;
  title: string;
  description: string;
  imageLink: string;
  imageCover?: string;
  technology: string;
  role: string;
  responsibilities: string[]
  liveSite?: string
}

export type BlogCardType = {
  title: string;
  description: string;
  link: string;
}