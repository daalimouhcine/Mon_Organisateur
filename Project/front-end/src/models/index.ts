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