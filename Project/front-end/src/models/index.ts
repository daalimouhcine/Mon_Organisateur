export interface FAQ {
  question: string;
  answer: string;
  status: boolean;
}

export interface NavLinks {
  name: string;
  component: string;
  current: boolean;
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
  image_profile: any;
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

export interface SalleInputs {
  organisateur_id: number;
  titre: string;
  ville: string;
  address: string;
  nombre_places: number;
  type_id: number;
  description: string;
  images?: any;
  prix: number;
}

export interface SalleDetails {
  id: number;
  organisateur_id: number;
  titre: string;
  nom: string;
  prenom: string;
  image_profile: string;
  nom_entreprise: string;
  telephone: number;
  email: string;
  ville: string;
  address: string;
  nombre_places: number;
  type: string;
  type_id: number;
  description: string;
  images: string;
  prix: number;
}