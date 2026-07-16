export interface ChildFormData {
  // Dados da criança
  name: string;
  birthDate: string;
  gender: string;
  medicalInfo: string;
  certificate: FileList;

  // Responsável
  responsavel: string;
  telefone: string;
  email: string;

  // Endereço
  cep: string;
  rua: string;
  numero: string;
  cidade: string;
  estado: string;
}