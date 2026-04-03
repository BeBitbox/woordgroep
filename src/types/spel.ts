export interface Woord {
  id: string
  tekst: string
  groepId: string
}

export interface Groep {
  id: string
  label: string
  kleur: string
}

export type Moeilijkheid = 'Gemakkelijk' | 'Gemiddeld' | 'Moeilijk'

export interface PuzzelData {
  groepen: Groep[]
  woorden: Woord[]
  moeilijkheid: Moeilijkheid
}
