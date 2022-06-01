export interface FAQ {
  question: string;
  answer: string;
  status: boolean;
}

export interface RegisterInputs {
  nom: string;
  prenom: string;
  nom_utilisateur: string;
  telephone: string;
  email: string;
  mot_de_passe: string;
}

export interface OrganiserRegisterInputs {
  nom: string;
  prenom: string;
  nom_utilisateur: string;
  telephone: string;
  email: string;
  mot_de_passe: string;
  nom_entreprise: string;
  cin: string;
  adresse: string;
  logo: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
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