import type { PuzzelData } from '@/types/spel'

const puzzel001: PuzzelData = {
  moeilijkheid: 'Gemakkelijk',
  groepen: [
    { id: 'fruit', label: 'Fruit', kleur: '#16a34a' },
    { id: 'dieren', label: 'Dieren', kleur: '#2563eb' },
    { id: 'kleuren', label: 'Kleuren', kleur: '#9333ea' },
    { id: 'landen', label: 'Landen', kleur: '#ffc800' },
  ],
  woorden: [
    { id: 'w01', tekst: 'Appel', groepId: 'fruit' },
    { id: 'w02', tekst: 'Banaan', groepId: 'fruit' },
    { id: 'w03', tekst: 'Mango', groepId: 'fruit' },
    { id: 'w04', tekst: 'Peer', groepId: 'fruit' },
    { id: 'w05', tekst: 'Leeuw', groepId: 'dieren' },
    { id: 'w06', tekst: 'Tijger', groepId: 'dieren' },
    { id: 'w07', tekst: 'Olifant', groepId: 'dieren' },
    { id: 'w08', tekst: 'Giraf', groepId: 'dieren' },
    { id: 'w09', tekst: 'Rood', groepId: 'kleuren' },
    { id: 'w10', tekst: 'Blauw', groepId: 'kleuren' },
    { id: 'w11', tekst: 'Groen', groepId: 'kleuren' },
    { id: 'w12', tekst: 'Geel', groepId: 'kleuren' },
    { id: 'w13', tekst: 'Frankrijk', groepId: 'landen' },
    { id: 'w14', tekst: 'Duitsland', groepId: 'landen' },
    { id: 'w15', tekst: 'Spanje', groepId: 'landen' },
    { id: 'w16', tekst: 'Italië', groepId: 'landen' },
  ],
}

export default puzzel001
