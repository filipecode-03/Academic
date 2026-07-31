import profile from '../assets/images/profile.jpg'

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Cel Jorge André",
        role: "CHEFE DA SPC",
        description:
            "Responsável pela coordenação geral da Seção, tomada de decisões estratégicas sobre os processos de contratação e assinatura dos despachos destinados às demais seções e ao Núcleo de Licitações.",
        image: profile,
    },
    {
        id: 2,
        name: "Cap Fulano",
        role: "SUBCHEFE",
        description:
            "Atua no controle, padronização e revisão de todos os processos da Seção, garantindo a conformidade documental antes do encaminhamento para assinatura e tramitação.",
        image: profile,
    },
    {
        id: 3,
        name: "1º Ten Sicrano",
        role: "LICITAÇÕES",
        description:
            "Responsável pela condução dos processos de renovação de contratos e atas, incluindo a coordenação das pesquisas de preços e consultas formais aos contratados.",
        image: profile,
    },
];