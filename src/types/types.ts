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
  imageLink?: string;
  technology: string
  responsibilities:[""]
}

export type BlogCardType = {
  title: string;
  description: string;
}

export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  imageLink?: string;
  technology: string;
}