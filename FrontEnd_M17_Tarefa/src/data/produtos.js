import osso from '../assets/osso.svg'
import bolinha from '../assets/bolinha.svg'
import caminha from '../assets/caminha.svg'
import comedouro from '../assets/comedouro.svg'

// Dados de produtos mockados (sem API), usados na carga inicial do catálogo.
export const produtosIniciais = [
  {
    id: 'osso-de-brinquedo',
    nome: 'Osso de brinquedo',
    preco: 24.9,
    imagem: osso,
    descricao: 'Resistente, ótimo para roer e brincar.',
  },
  {
    id: 'bolinha-divertida',
    nome: 'Bolinha divertida',
    preco: 14.9,
    imagem: bolinha,
    descricao: 'Leve e colorida, para horas de brincadeira.',
  },
  {
    id: 'caminha-macia',
    nome: 'Caminha macia',
    preco: 89.9,
    imagem: caminha,
    descricao: 'Conforto para noites tranquilas.',
  },
  {
    id: 'comedouro-de-ceramica',
    nome: 'Comedouro de cerâmica',
    preco: 39.9,
    imagem: comedouro,
    descricao: 'Estável e fácil de limpar.',
  },
]
