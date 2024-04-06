import { CausesProps } from "./Causes";

export interface InstitutionProps {
  id: number;
  name: string;
  about: string;
  photo: string;
  causes: string[];
  necessities: string[];
  contact: {
    address?: string;
    email?: string;
    phone?: string;
    website?: string;
    social_media?: { type: string; user: string }[];
  };
}
