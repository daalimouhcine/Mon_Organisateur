export interface FAQ {
  question: string;
  answer: string;
  status: boolean;
}

export interface RegisterInputs {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  mot_de_passe: string;
}

export interface OrganiserRegisterInputs {
  nom: string;
  prenom: string;
  image_profile: File;
  email: string;
  mot_de_passe: string;
  telephone: number;
  cin: string;
  nom_entreprise: string;
  adresse: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface RegisterMessage {
  message: string;
  type: string;
}

export interface LoginInputs {
  email: string;
  mot_de_passe: string;
}

export interface LoginMessage {
  message: string;
  type: string;
}

export interface OrganisateurData {
  id: number;
  nom: string;
  prenom: string;
  image_profile: string;
  email: string;
  telephone: number;
  cin: string;
  nom_entreprise: string;
  role: string;
  status: number;
  adresse: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface Type {
  id: number;
  nom: string;
}

export interface SalleDetail {
  organisateur_id: number;
  ville: string;
  address: string;
  nombre_places: number;
  type_id: number;
  description: string;
  images: File;
  prix: number;
}