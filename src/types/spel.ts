export interface Groep {
  id: string
  kleur: string
  woorden: string[]
}

export type Moeilijkheid = 'Gemakkelijk' | 'Gemiddeld' | 'Moeilijk'

export interface PuzzelData {
  moeilijkheid: Moeilijkheid
  dag: number
  groepen: Groep[]
}
