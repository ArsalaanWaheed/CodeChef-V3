export interface ClubLead {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export const clubLeads: ClubLead[] = [
  {
    id: 1,
    name: "Jauwad Jamal Khan",
    role: "President",
    image: "",
    bio: "Related Info",
    github: "github",
    linkedin: "linkedin",
    email: "email"
  },
  {
    id: 2,
    name: "Maimoona ",
    role: "Post",
    image: "",
    bio: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "email"
  },
  {
    id: 3,
    name: "Asna Fatima",
    role: "PR joint coodinator",
    image: "",
    bio: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "email"
  }
];