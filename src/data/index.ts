import type { PuzzelData } from '@/types/spel'

// Kleurenpalet (vier vaste groepskleuren)
const K = ['#16a34a', '#2563eb', '#9333ea', '#ffc800'] as const

export const allePuzzels: PuzzelData[] = [
  // === DAG 1 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 1,
    groepen: [
      { id: 'Fruit', kleur: K[0], woorden: ['Appel', 'Banaan', 'Mango', 'Peer'] },
      { id: 'Dieren', kleur: K[1], woorden: ['Leeuw', 'Tijger', 'Olifant', 'Giraf'] },
      { id: 'Kleuren', kleur: K[2], woorden: ['Rood', 'Blauw', 'Groen', 'Geel'] },
      { id: 'Landen', kleur: K[3], woorden: ['Frankrijk', 'Duitsland', 'Spanje', 'Italië'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 1,
    groepen: [
      {
        id: 'Europese hoofdsteden',
        kleur: K[0],
        woorden: ['Lissabon', 'Athene', 'Wenen', 'Praag'],
      },
      {
        id: 'Nederlandse steden',
        kleur: K[1],
        woorden: ['Utrecht', 'Eindhoven', 'Tilburg', 'Breda'],
      },
      { id: 'Belgische steden', kleur: K[2], woorden: ['Gent', 'Brugge', 'Luik', 'Antwerpen'] },
      { id: 'Duitse steden', kleur: K[3], woorden: ['München', 'Hamburg', 'Keulen', 'Frankfurt'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 1,
    groepen: [
      {
        id: 'Mythologische helden',
        kleur: K[0],
        woorden: ['Hercules', 'Odysseus', 'Achilles', 'Perseus'],
      },
      { id: 'Bijbelse figuren', kleur: K[1], woorden: ['Abraham', 'Mozes', 'David', 'Salomo'] },
      {
        id: 'Sprookjesfiguren',
        kleur: K[2],
        woorden: ['Assepoester', 'Roodkapje', 'Rapunzel', 'Sneeuwwitje'],
      },
      { id: 'Superhelden', kleur: K[3], woorden: ['Batman', 'Superman', 'Spiderman', 'Ironman'] },
    ],
  },

  // === DAG 2 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 2,
    groepen: [
      { id: 'Groenten', kleur: K[0], woorden: ['Wortel', 'Broccoli', 'Ui', 'Tomaat'] },
      { id: 'Zeedieren', kleur: K[1], woorden: ['Dolfijn', 'Haai', 'Octopus', 'Kwal'] },
      { id: 'Vervoermiddelen', kleur: K[2], woorden: ['Auto', 'Fiets', 'Trein', 'Vliegtuig'] },
      { id: 'Lichaamsdelen', kleur: K[3], woorden: ['Hand', 'Voet', 'Oog', 'Mond'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 2,
    groepen: [
      {
        id: 'Nederlandse provincies',
        kleur: K[0],
        woorden: ['Friesland', 'Drenthe', 'Zeeland', 'Limburg'],
      },
      { id: 'Valuta', kleur: K[1], woorden: ['Euro', 'Dollar', 'Pond', 'Yen'] },
      { id: 'Muziekgenres', kleur: K[2], woorden: ['Jazz', 'Blues', 'Reggae', 'Soul'] },
      { id: 'Talen', kleur: K[3], woorden: ['Arabisch', 'Mandarijn', 'Swahili', 'Hindi'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 2,
    groepen: [
      { id: 'Griekse goden', kleur: K[0], woorden: ['Zeus', 'Hera', 'Ares', 'Athena'] },
      { id: 'Noorse goden', kleur: K[1], woorden: ['Odin', 'Thor', 'Loki', 'Freya'] },
      { id: 'Egyptische goden', kleur: K[2], woorden: ['Ra', 'Osiris', 'Isis', 'Horus'] },
      {
        id: 'Hindoeïstische goden',
        kleur: K[3],
        woorden: ['Brahma', 'Vishnu', 'Shiva', 'Ganesha'],
      },
    ],
  },

  // === DAG 3 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 3,
    groepen: [
      { id: 'Muziekinstrumenten', kleur: K[0], woorden: ['Piano', 'Gitaar', 'Viool', 'Fluit'] },
      { id: 'Huisdieren', kleur: K[1], woorden: ['Hond', 'Kat', 'Konijn', 'Hamster'] },
      { id: 'Sporten', kleur: K[2], woorden: ['Voetbal', 'Tennis', 'Zwemmen', 'Fietsen'] },
      { id: 'Seizoenen', kleur: K[3], woorden: ['Lente', 'Zomer', 'Herfst', 'Winter'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 3,
    groepen: [
      {
        id: 'Nederlandse schilders',
        kleur: K[0],
        woorden: ['Rembrandt', 'Vermeer', 'Hals', 'Steen'],
      },
      {
        id: 'Vlaamse schilders',
        kleur: K[1],
        woorden: ['Rubens', 'Van Eyck', 'Bruegel', 'Van Dyck'],
      },
      { id: 'Componisten', kleur: K[2], woorden: ['Mozart', 'Beethoven', 'Bach', 'Chopin'] },
      { id: 'Filosofen', kleur: K[3], woorden: ['Plato', 'Aristoteles', 'Socrates', 'Descartes'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 3,
    groepen: [
      { id: 'Kwantumfysici', kleur: K[0], woorden: ['Bohr', 'Heisenberg', 'Schrödinger', 'Dirac'] },
      {
        id: 'Wiskundigen',
        kleur: K[1],
        woorden: ['Euclides', 'Pythagoras', 'Archimedes', 'Fermat'],
      },
      { id: 'Astronomen', kleur: K[2], woorden: ['Copernicus', 'Galileo', 'Kepler', 'Hubble'] },
      { id: 'Uitvinders', kleur: K[3], woorden: ['Edison', 'Tesla', 'Watt', 'Nobel'] },
    ],
  },

  // === DAG 4 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 4,
    groepen: [
      { id: 'Meubels', kleur: K[0], woorden: ['Tafel', 'Stoel', 'Bank', 'Kast'] },
      { id: 'Kledingstukken', kleur: K[1], woorden: ['Broek', 'Shirt', 'Jas', 'Jurk'] },
      { id: 'Beroepen', kleur: K[2], woorden: ['Dokter', 'Leraar', 'Bakker', 'Politieagent'] },
      { id: 'Dranken', kleur: K[3], woorden: ['Water', 'Melk', 'Koffie', 'Thee'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 4,
    groepen: [
      {
        id: 'Nederlandse vogels',
        kleur: K[0],
        woorden: ['Nachtegaal', 'Spreeuw', 'Merel', 'Vink'],
      },
      { id: 'Boomsoorten', kleur: K[1], woorden: ['Eik', 'Berk', 'Beuk', 'Linde'] },
      { id: 'Bloemsoorten', kleur: K[2], woorden: ['Tulp', 'Roos', 'Narcis', 'Hyacint'] },
      { id: 'Vissoorten', kleur: K[3], woorden: ['Zalm', 'Haring', 'Snoek', 'Karper'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 4,
    groepen: [
      { id: 'Edelgassen', kleur: K[0], woorden: ['Helium', 'Neon', 'Argon', 'Krypton'] },
      { id: 'Binnenplaneten', kleur: K[1], woorden: ['Mercurius', 'Venus', 'Aarde', 'Mars'] },
      { id: 'Buitenplaneten', kleur: K[2], woorden: ['Jupiter', 'Saturnus', 'Uranus', 'Neptunus'] },
      { id: 'Manen van Jupiter', kleur: K[3], woorden: ['Io', 'Europa', 'Ganymedes', 'Callisto'] },
    ],
  },

  // === DAG 5 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 5,
    groepen: [
      { id: 'Boerderijdieren', kleur: K[0], woorden: ['Koe', 'Varken', 'Schaap', 'Kip'] },
      { id: 'Keukengerei', kleur: K[1], woorden: ['Pan', 'Mes', 'Vork', 'Lepel'] },
      { id: 'Vormen', kleur: K[2], woorden: ['Cirkel', 'Vierkant', 'Driehoek', 'Rechthoek'] },
      { id: 'Weekdagen', kleur: K[3], woorden: ['Maandag', 'Woensdag', 'Vrijdag', 'Zondag'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 5,
    groepen: [
      {
        id: 'Spaanse steden',
        kleur: K[0],
        woorden: ['Barcelona', 'Sevilla', 'Valencia', 'Bilbao'],
      },
      { id: 'Italiaanse steden', kleur: K[1], woorden: ['Rome', 'Milaan', 'Venetië', 'Napels'] },
      { id: 'Franse steden', kleur: K[2], woorden: ['Parijs', 'Lyon', 'Marseille', 'Bordeaux'] },
      {
        id: 'Britse steden',
        kleur: K[3],
        woorden: ['Londen', 'Manchester', 'Edinburgh', 'Liverpool'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 5,
    groepen: [
      { id: 'Alkalimetalen', kleur: K[0], woorden: ['Lithium', 'Natrium', 'Kalium', 'Cesium'] },
      {
        id: 'Aardalkalimetalen',
        kleur: K[1],
        woorden: ['Beryllium', 'Magnesium', 'Calcium', 'Barium'],
      },
      { id: 'Overgangsmetalen', kleur: K[2], woorden: ['Titanium', 'Koper', 'Zilver', 'Goud'] },
      { id: 'Halogenen', kleur: K[3], woorden: ['Fluor', 'Chloor', 'Broom', 'Jood'] },
    ],
  },

  // === DAG 6 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 6,
    groepen: [
      { id: 'Maanden', kleur: K[0], woorden: ['Januari', 'April', 'Augustus', 'December'] },
      { id: 'Insecten', kleur: K[1], woorden: ['Vlinder', 'Mier', 'Bij', 'Kever'] },
      { id: 'Weerfenomenen', kleur: K[2], woorden: ['Regen', 'Onweer', 'Mist', 'Hagel'] },
      {
        id: 'Kamers in huis',
        kleur: K[3],
        woorden: ['Keuken', 'Badkamer', 'Slaapkamer', 'Woonkamer'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 6,
    groepen: [
      { id: 'Aziatische landen', kleur: K[0], woorden: ['Japan', 'India', 'Vietnam', 'Thailand'] },
      { id: 'Afrikaanse landen', kleur: K[1], woorden: ['Nigeria', 'Kenia', 'Ethiopië', 'Ghana'] },
      {
        id: 'Zuid-Amerikaanse landen',
        kleur: K[2],
        woorden: ['Brazilië', 'Argentinië', 'Colombia', 'Peru'],
      },
      {
        id: 'Oceanische landen',
        kleur: K[3],
        woorden: ['Australië', 'Nieuw-Zeeland', 'Fiji', 'Tonga'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 6,
    groepen: [
      {
        id: 'Architectuurstijlen',
        kleur: K[0],
        woorden: ['Gotiek', 'Renaissance', 'Jugendstil', 'Functionalisme'],
      },
      {
        id: 'Kunstbewegingen',
        kleur: K[1],
        woorden: ['Impressionisme', 'Cubisme', 'Surrealisme', 'Expressionisme'],
      },
      {
        id: 'Literaire stromingen',
        kleur: K[2],
        woorden: ['Romantiek', 'Realisme', 'Naturalisme', 'Symbolisme'],
      },
      { id: 'Muziekperiodes', kleur: K[3], woorden: ['Barok', 'Klassiek', 'Romantisch', 'Modern'] },
    ],
  },

  // === DAG 7 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 7,
    groepen: [
      {
        id: 'Schoolvakken',
        kleur: K[0],
        woorden: ['Wiskunde', 'Biologie', 'Geschiedenis', 'Aardrijkskunde'],
      },
      { id: 'Speelgoed', kleur: K[1], woorden: ['Pop', 'Knuffel', 'Blokken', 'Ballon'] },
      {
        id: 'Keukenapparatuur',
        kleur: K[2],
        woorden: ['Koelkast', 'Oven', 'Magnetron', 'Vaatwasser'],
      },
      { id: 'Europese vogels', kleur: K[3], woorden: ['Ooievaar', 'Ekster', 'Meeuw', 'Duif'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 7,
    groepen: [
      {
        id: 'Nederlandse schrijvers',
        kleur: K[0],
        woorden: ['Multatuli', 'Couperus', 'Vondel', 'Hooft'],
      },
      {
        id: 'Belgische schrijvers',
        kleur: K[1],
        woorden: ['Claus', 'Streuvels', 'De Coster', 'Gezelle'],
      },
      {
        id: 'Nederlandse voetbaliconen',
        kleur: K[2],
        woorden: ['Cruijff', 'Van Basten', 'Gullit', 'Bergkamp'],
      },
      {
        id: "Nederlandse dj's",
        kleur: K[3],
        woorden: ['Tiësto', 'Armin van Buuren', 'Hardwell', 'Afrojack'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 7,
    groepen: [
      { id: 'Griekse letters', kleur: K[0], woorden: ['Alpha', 'Beta', 'Gamma', 'Delta'] },
      {
        id: 'Latijnse uitdrukkingen',
        kleur: K[1],
        woorden: ['Carpe Diem', 'Ad Hoc', 'In Vitro', 'Alma Mater'],
      },
      {
        id: 'Juridische termen',
        kleur: K[2],
        woorden: ['Alibi', 'Habeas Corpus', 'Pro Forma', 'Ex Officio'],
      },
      {
        id: 'Medische begrippen',
        kleur: K[3],
        woorden: ['Diagnose', 'Prognose', 'Symptoom', 'Syndroom'],
      },
    ],
  },

  // === DAG 8 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 8,
    groepen: [
      { id: 'Veldbloemen', kleur: K[0], woorden: ['Roos', 'Zonnebloem', 'Madelief', 'Lavendel'] },
      { id: 'Groenten (2)', kleur: K[1], woorden: ['Paprika', 'Komkommer', 'Sla', 'Bloemkool'] },
      { id: 'Teamsporten', kleur: K[2], woorden: ['Basketbal', 'Volleybal', 'Handbal', 'Rugby'] },
      { id: 'Gereedschappen', kleur: K[3], woorden: ['Hamer', 'Zaag', 'Boor', 'Schroevendraaier'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 8,
    groepen: [
      {
        id: 'Noord-Amerikaanse steden',
        kleur: K[0],
        woorden: ['New York', 'Los Angeles', 'Chicago', 'Toronto'],
      },
      {
        id: 'Zuid-Amerikaanse steden',
        kleur: K[1],
        woorden: ['Buenos Aires', 'São Paulo', 'Lima', 'Bogotá'],
      },
      {
        id: 'Afrikaanse steden',
        kleur: K[2],
        woorden: ['Cairo', 'Nairobi', 'Lagos', 'Addis Abeba'],
      },
      {
        id: 'Oceanische steden',
        kleur: K[3],
        woorden: ['Sydney', 'Melbourne', 'Auckland', 'Brisbane'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 8,
    groepen: [
      {
        id: 'Filmregisseurs',
        kleur: K[0],
        woorden: ['Kubrick', 'Kurosawa', 'Fellini', 'Truffaut'],
      },
      { id: 'Operacomponisten', kleur: K[1], woorden: ['Verdi', 'Puccini', 'Wagner', 'Rossini'] },
      { id: 'Jazzpioniers', kleur: K[2], woorden: ['Miles Davis', 'Coltrane', 'Parker', 'Monk'] },
      { id: 'Rockpioniers', kleur: K[3], woorden: ['Presley', 'Berry', 'Holly', 'Little Richard'] },
    ],
  },

  // === DAG 9 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 9,
    groepen: [
      { id: 'Feestdagen', kleur: K[0], woorden: ['Kerst', 'Pasen', 'Carnaval', 'Sinterklaas'] },
      { id: 'Desserts', kleur: K[1], woorden: ['Taart', 'Pudding', 'Ijs', 'Mousse'] },
      { id: 'Pastelkleuren', kleur: K[2], woorden: ['Paars', 'Oranje', 'Roze', 'Wit'] },
      { id: 'Dansen', kleur: K[3], woorden: ['Tango', 'Wals', 'Salsa', 'Ballet'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 9,
    groepen: [
      { id: 'Wereldrivieren', kleur: K[0], woorden: ['Nijl', 'Amazone', 'Mississippi', 'Yangtze'] },
      { id: 'Gebergten', kleur: K[1], woorden: ['Himalaya', 'Alpen', 'Andes', 'Rockies'] },
      {
        id: 'Meren',
        kleur: K[2],
        woorden: ['Baikalmeer', 'Titicacameer', 'Victoriameer', 'Superieurmeer'],
      },
      { id: 'Woestijnen', kleur: K[3], woorden: ['Sahara', 'Gobi', 'Atacama', 'Namib'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 9,
    groepen: [
      {
        id: 'Nederlandse monarchen',
        kleur: K[0],
        woorden: ['Wilhelmina', 'Juliana', 'Beatrix', 'Willem-Alexander'],
      },
      {
        id: 'Belgische monarchen',
        kleur: K[1],
        woorden: ['Leopold I', 'Albert I', 'Boudewijn', 'Albert II'],
      },
      {
        id: 'Britse vorsten 20e eeuw',
        kleur: K[2],
        woorden: ['George V', 'Edward VIII', 'George VI', 'Elizabeth II'],
      },
      {
        id: 'Scandinavische regeerders',
        kleur: K[3],
        woorden: ['Gustaf', 'Harald', 'Margrethe', 'Frederik'],
      },
    ],
  },

  // === DAG 10 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 10,
    groepen: [
      { id: 'Elektronica', kleur: K[0], woorden: ['Telefoon', 'Computer', 'Tablet', 'Televisie'] },
      { id: 'Kledingaccessoires', kleur: K[1], woorden: ['Riem', 'Sjaal', 'Hoed', 'Handschoenen'] },
      { id: 'Jungleedieren', kleur: K[2], woorden: ['Jaguar', 'Gorilla', 'Anaconda', 'Toekan'] },
      { id: 'Gebouwtypes', kleur: K[3], woorden: ['Kasteel', 'Kerk', 'Molen', 'Vuurtoren'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 10,
    groepen: [
      {
        id: 'Aziatische hoofdsteden',
        kleur: K[0],
        woorden: ['Tokio', 'Peking', 'Seoul', 'Bangkok'],
      },
      {
        id: 'Afrikaanse hoofdsteden',
        kleur: K[1],
        woorden: ['Cairo', 'Nairobi', 'Addis Abeba', 'Accra'],
      },
      {
        id: 'Zuid-Amerikaanse hoofdsteden',
        kleur: K[2],
        woorden: ['Buenos Aires', 'Bogotá', 'Lima', 'Santiago'],
      },
      {
        id: 'Scandinavische hoofdsteden',
        kleur: K[3],
        woorden: ['Oslo', 'Stockholm', 'Kopenhagen', 'Helsinki'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 10,
    groepen: [
      {
        id: 'Hersengebieden',
        kleur: K[0],
        woorden: ['Cortex', 'Cerebellum', 'Thalamus', 'Hippocampus'],
      },
      {
        id: 'Hormonen',
        kleur: K[1],
        woorden: ['Insuline', 'Adrenaline', 'Oxytocine', 'Melatonine'],
      },
      {
        id: 'Neurotransmitters',
        kleur: K[2],
        woorden: ['Dopamine', 'Serotonine', 'GABA', 'Glutamaat'],
      },
      { id: 'Organen', kleur: K[3], woorden: ['Hart', 'Lever', 'Milt', 'Long'] },
    ],
  },

  // === DAG 11 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 11,
    groepen: [
      { id: 'Polaire dieren', kleur: K[0], woorden: ['IJsbeer', 'Pinguïn', 'Walrus', 'Zeehond'] },
      { id: 'Winkels', kleur: K[1], woorden: ['Bakkerij', 'Slagerij', 'Apotheek', 'Boekhandel'] },
      { id: 'Kookmethoden', kleur: K[2], woorden: ['Bakken', 'Koken', 'Grillen', 'Stomen'] },
      { id: 'Sportartikelen', kleur: K[3], woorden: ['Racket', 'Helm', "Ski's", 'Springtouw'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 11,
    groepen: [
      {
        id: 'Italiaanse gerechten',
        kleur: K[0],
        woorden: ['Risotto', 'Ossobuco', 'Tiramisu', 'Carbonara'],
      },
      {
        id: 'Franse gerechten',
        kleur: K[1],
        woorden: ['Bouillabaisse', 'Crème brûlée', 'Ratatouille', 'Coq au vin'],
      },
      {
        id: 'Spaanse gerechten',
        kleur: K[2],
        woorden: ['Paella', 'Gazpacho', 'Tortilla', 'Churros'],
      },
      { id: 'Japanse gerechten', kleur: K[3], woorden: ['Sushi', 'Ramen', 'Tempura', 'Yakitori'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 11,
    groepen: [
      {
        id: 'DNA-nucleotiden',
        kleur: K[0],
        woorden: ['Adenine', 'Thymine', 'Guanine', 'Cytosine'],
      },
      { id: 'Bloedgroepen', kleur: K[1], woorden: ['A', 'B', 'AB', 'O'] },
      {
        id: 'Vitamines',
        kleur: K[2],
        woorden: ['Vitamine A', 'Vitamine C', 'Vitamine D', 'Vitamine K'],
      },
      {
        id: 'Mineralen (voeding)',
        kleur: K[3],
        woorden: ['Calcium', 'IJzer', 'Zink', 'Magnesium'],
      },
    ],
  },

  // === DAG 12 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 12,
    groepen: [
      { id: 'Roofvogels', kleur: K[0], woorden: ['Arend', 'Valk', 'Uil', 'Buizerd'] },
      { id: 'Schoensoorten', kleur: K[1], woorden: ['Pump', 'Laars', 'Slipper', 'Sneaker'] },
      { id: 'Snoepgoed', kleur: K[2], woorden: ['Chocolade', 'Lolly', 'Kauwgom', 'Dropje'] },
      {
        id: 'Landen van Europa',
        kleur: K[3],
        woorden: ['Nederland', 'België', 'Zweden', 'Noorwegen'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 12,
    groepen: [
      {
        id: 'Nederlandse architecten',
        kleur: K[0],
        woorden: ['Berlage', 'Rietveld', 'Oud', 'Dudok'],
      },
      {
        id: 'Belgische schilders (20e eeuw)',
        kleur: K[1],
        woorden: ['Magritte', 'Ensor', 'Delvaux', 'Permeke'],
      },
      {
        id: 'Nederlandse ontdekkingsreizigers',
        kleur: K[2],
        woorden: ['Tasman', 'Barentsz', 'Hudson', 'De Houtman'],
      },
      {
        id: 'Nederlandse denkers',
        kleur: K[3],
        woorden: ['Erasmus', 'Spinoza', 'Grotius', 'Huizinga'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 12,
    groepen: [
      { id: 'Logici', kleur: K[0], woorden: ['Russell', 'Wittgenstein', 'Frege', 'Gödel'] },
      { id: 'Economen', kleur: K[1], woorden: ['Keynes', 'Smith', 'Marx', 'Friedman'] },
      { id: 'Sociologen', kleur: K[2], woorden: ['Weber', 'Durkheim', 'Simmel', 'Bourdieu'] },
      { id: 'Psychologen', kleur: K[3], woorden: ['Freud', 'Jung', 'Skinner', 'Pavlov'] },
    ],
  },

  // === DAG 13 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 13,
    groepen: [
      { id: 'Bomen', kleur: K[0], woorden: ['Eik', 'Den', 'Populier', 'Wilg'] },
      { id: 'Granen', kleur: K[1], woorden: ['Tarwe', 'Gerst', 'Rogge', 'Haver'] },
      {
        id: 'Beroepen (2)',
        kleur: K[2],
        woorden: ['Architect', 'Advocaat', 'Ingenieur', 'Journalist'],
      },
      { id: 'Haardieren', kleur: K[3], woorden: ['Schildpad', 'Cavia', 'Goudvis', 'Papegaai'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 13,
    groepen: [
      { id: 'Nederlandse kazen', kleur: K[0], woorden: ['Gouda', 'Edam', 'Maasdam', 'Leerdammer'] },
      {
        id: 'Italiaanse kazen',
        kleur: K[1],
        woorden: ['Parmezaan', 'Mozzarella', 'Gorgonzola', 'Pecorino'],
      },
      { id: 'Franse kazen', kleur: K[2], woorden: ['Brie', 'Camembert', 'Roquefort', 'Comté'] },
      {
        id: 'Zwitserse kazen',
        kleur: K[3],
        woorden: ['Emmental', 'Gruyère', 'Appenzeller', 'Raclette'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 13,
    groepen: [
      { id: 'Wolkensoorten', kleur: K[0], woorden: ['Cumulus', 'Stratus', 'Cirrus', 'Nimbus'] },
      {
        id: 'Oceaanstromingen',
        kleur: K[1],
        woorden: ['Golfstroom', 'Humboldt', 'Benguela', 'Agulhas'],
      },
      {
        id: 'Klimaatgordels',
        kleur: K[2],
        woorden: ['Tropisch', 'Subtropisch', 'Gematigd', 'Polair'],
      },
      {
        id: 'Geografische fenomenen',
        kleur: K[3],
        woorden: ['Fjord', 'Atol', 'Delta', 'Gletsjer'],
      },
    ],
  },

  // === DAG 14 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 14,
    groepen: [
      {
        id: 'Muziekinstrumenten (2)',
        kleur: K[0],
        woorden: ['Drums', 'Trompet', 'Saxofoon', 'Accordeon'],
      },
      {
        id: 'Dieren van de steppe',
        kleur: K[1],
        woorden: ['Zebra', 'Neushoorn', 'Gnoe', 'Struisvogel'],
      },
      { id: 'Stoffen', kleur: K[2], woorden: ['Katoen', 'Wol', 'Zijde', 'Linnen'] },
      { id: 'Lichaamsorganen', kleur: K[3], woorden: ['Maag', 'Darm', 'Nieren', 'Longen'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 14,
    groepen: [
      { id: 'Griekse eilanden', kleur: K[0], woorden: ['Kreta', 'Rhodos', 'Corfu', 'Mykonos'] },
      { id: 'Italiaanse eilanden', kleur: K[1], woorden: ['Sicilië', 'Sardinië', 'Capri', 'Elba'] },
      {
        id: 'Caraïbische eilanden',
        kleur: K[2],
        woorden: ['Curaçao', 'Aruba', 'Bonaire', 'Jamaica'],
      },
      { id: 'Indonesische eilanden', kleur: K[3], woorden: ['Java', 'Sumatra', 'Bali', 'Borneo'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 14,
    groepen: [
      {
        id: 'Filosofische stromingen',
        kleur: K[0],
        woorden: ['Stoïcisme', 'Existentialisme', 'Empirisme', 'Rationalisme'],
      },
      {
        id: 'Politieke ideologieën',
        kleur: K[1],
        woorden: ['Liberalisme', 'Socialisme', 'Conservatisme', 'Anarchisme'],
      },
      {
        id: 'Economische stelsels',
        kleur: K[2],
        woorden: ['Kapitalisme', 'Communisme', 'Mercantilisme', 'Feudalisme'],
      },
      {
        id: 'Staatsvormtypen',
        kleur: K[3],
        woorden: ['Democratie', 'Oligarchie', 'Theocratrie', 'Dictatuur'],
      },
    ],
  },

  // === DAG 15 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 15,
    groepen: [
      {
        id: 'Dieren van Australië',
        kleur: K[0],
        woorden: ['Kangoeroe', 'Koala', 'Wombat', 'Dingo'],
      },
      { id: 'Broodsoorten', kleur: K[1], woorden: ['Croissant', 'Bagel', 'Ciabatta', 'Pistolet'] },
      {
        id: 'Sportsoorten water',
        kleur: K[2],
        woorden: ['Surfen', 'Roeien', 'Waterpolo', 'Duiken'],
      },
      { id: 'Kleuren (3)', kleur: K[3], woorden: ['Beige', 'Turquoise', 'Bordeaux', 'Oker'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 15,
    groepen: [
      {
        id: 'Renaissancekunstenaars',
        kleur: K[0],
        woorden: ['Leonardo', 'Michelangelo', 'Raphael', 'Botticelli'],
      },
      { id: 'Impressionisten', kleur: K[1], woorden: ['Monet', 'Renoir', 'Degas', 'Pissarro'] },
      {
        id: 'Postimpressionisten',
        kleur: K[2],
        woorden: ['Van Gogh', 'Gauguin', 'Cézanne', 'Seurat'],
      },
      { id: 'Surrealisten', kleur: K[3], woorden: ['Dalí', 'Ernst', 'Miró', 'De Chirico'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 15,
    groepen: [
      {
        id: 'Paleozoïsche periodes',
        kleur: K[0],
        woorden: ['Cambrium', 'Devoon', 'Siluur', 'Perm'],
      },
      {
        id: 'Cenozoïsche tijdvakken',
        kleur: K[1],
        woorden: ['Paleoceen', 'Eoceen', 'Oligoceen', 'Mioceen'],
      },
      {
        id: 'Soorten gesteente',
        kleur: K[2],
        woorden: ['Graniet', 'Basalt', 'Kalksteen', 'Schist'],
      },
      { id: 'Mineralen', kleur: K[3], woorden: ['Kwarts', 'Veldspaat', 'Glimmer', 'Pyriet'] },
    ],
  },

  // === DAG 16 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 16,
    groepen: [
      { id: 'Oceanen', kleur: K[0], woorden: ['Atlantisch', 'Stille', 'Indische', 'Arctische'] },
      { id: 'Haardieren (2)', kleur: K[1], woorden: ['Rat', 'Fret', 'Slang', 'Chinchilla'] },
      { id: 'Bakkerijproducten', kleur: K[2], woorden: ['Taart', 'Koek', 'Brood', 'Croissant'] },
      { id: 'Werkplaats', kleur: K[3], woorden: ['Moer', 'Bout', 'Schroef', 'Spijker'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 16,
    groepen: [
      {
        id: 'Middeleeuwse bouwwerken NL',
        kleur: K[0],
        woorden: ['Ridderzaal', 'Muiderslot', 'Binnenhof', 'Waalse Kerk'],
      },
      {
        id: 'Nederlandse monumenten',
        kleur: K[1],
        woorden: ['Euromast', 'Martinitoren', 'Domtoren', 'Westerkerk'],
      },
      {
        id: 'Bruggen in NL',
        kleur: K[2],
        woorden: ['Erasmusbrug', 'Waalbrug', 'Van Brienenoordburg', 'Zeelandbrug'],
      },
      {
        id: 'Nederlandse parken',
        kleur: K[3],
        woorden: ['Vondelpark', 'Keukenhof', 'Hoge Veluwe', 'Biesbosch'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 16,
    groepen: [
      { id: 'Soorten poëzie', kleur: K[0], woorden: ['Sonnet', 'Haiku', 'Elegie', 'Ode'] },
      {
        id: 'Retorische figuren',
        kleur: K[1],
        woorden: ['Metafoor', 'Metonymia', 'Litotes', 'Hyperbool'],
      },
      {
        id: 'Narratieve perspectieven',
        kleur: K[2],
        woorden: ['Alwetend', 'Ik-perspectief', 'Hij-perspectief', 'Meervoudig'],
      },
      {
        id: 'Literaire genres',
        kleur: K[3],
        woorden: ['Novelle', 'Feuilleton', 'Pamflet', 'Aforisme'],
      },
    ],
  },

  // === DAG 17 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 17,
    groepen: [
      { id: 'Blaasinstrumenten', kleur: K[0], woorden: ['Tuba', 'Hobo', 'Fagot', 'Klarinet'] },
      {
        id: 'Dieren van de zee (2)',
        kleur: K[1],
        woorden: ['Zeester', 'Zeekomkommer', 'Kreeft', 'Garnaal'],
      },
      { id: 'Kaartspelen', kleur: K[2], woorden: ['Hartjes', 'Ruiten', 'Klaver', 'Schoppen'] },
      {
        id: 'Landen van Azië',
        kleur: K[3],
        woorden: ['China', 'Pakistan', 'Indonesië', 'Bangladesh'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 17,
    groepen: [
      {
        id: 'Russische schrijvers',
        kleur: K[0],
        woorden: ['Tolstoj', 'Dostojevski', 'Tsjechov', 'Poesjkin'],
      },
      { id: 'Engelse schrijvers', kleur: K[1], woorden: ['Dickens', 'Austen', 'Woolf', 'Orwell'] },
      { id: 'Franse schrijvers', kleur: K[2], woorden: ['Hugo', 'Flaubert', 'Proust', 'Camus'] },
      {
        id: 'Latinoamerikaanse schrijvers',
        kleur: K[3],
        woorden: ['García Márquez', 'Borges', 'Neruda', 'Allende'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 17,
    groepen: [
      {
        id: 'Computerpioniers',
        kleur: K[0],
        woorden: ['Turing', 'Von Neumann', 'Lovelace', 'Babbage'],
      },
      { id: 'Programmeertalen', kleur: K[1], woorden: ['Python', 'Rust', 'Haskell', 'Erlang'] },
      {
        id: 'Informaticabegrippen',
        kleur: K[2],
        woorden: ['Algoritme', 'Recursie', 'Compilatie', 'Encryptie'],
      },
      { id: 'Computeronderdelen', kleur: K[3], woorden: ['CPU', 'GPU', 'RAM', 'SSD'] },
    ],
  },

  // === DAG 18 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 18,
    groepen: [
      { id: 'Groenten (3)', kleur: K[0], woorden: ['Asperge', 'Prei', 'Venkel', 'Artisjok'] },
      { id: 'Wintersport', kleur: K[1], woorden: ['Skiën', 'Snowboarden', 'Schaatsen', 'Curling'] },
      {
        id: 'Landen van Afrika',
        kleur: K[2],
        woorden: ['Marokko', 'Egypte', 'Zuid-Afrika', 'Tanzania'],
      },
      { id: 'Kledingmerken', kleur: K[3], woorden: ['Nike', 'Adidas', 'Puma', 'Reebok'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 18,
    groepen: [
      {
        id: 'Klassieke muziekwerken',
        kleur: K[0],
        woorden: ['Vier Jaargetijden', 'Carmina Burana', 'Bolero', 'Messias'],
      },
      {
        id: 'Nederlandse volksliedjes',
        kleur: K[1],
        woorden: ['Wilhelmus', 'Sinterklaasje', 'Lang zal ze leven', 'Zie de maan'],
      },
      {
        id: 'Dansen (formeel)',
        kleur: K[2],
        woorden: ['Menuet', 'Gavotte', 'Polonaise', 'Mazurka'],
      },
      {
        id: 'Muziekgenres (2)',
        kleur: K[3],
        woorden: ['Opera', 'Kamermuziek', 'Symfonisch', 'Vocaal'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 18,
    groepen: [
      {
        id: 'Antieke Griekse steden',
        kleur: K[0],
        woorden: ['Sparta', 'Korinthe', 'Thebe', 'Milete'],
      },
      {
        id: 'Romeinse keizers',
        kleur: K[1],
        woorden: ['Augustus', 'Nero', 'Caligula', 'Trajanus'],
      },
      {
        id: "Egyptische farao's",
        kleur: K[2],
        woorden: ['Toetanchamon', 'Ramses', 'Nefertiti', 'Cleopatra'],
      },
      {
        id: 'Middeleeuwse koningen',
        kleur: K[3],
        woorden: ['Karel de Grote', 'Lodewijk XIV', 'Hendrik VIII', 'Richard I'],
      },
    ],
  },

  // === DAG 19 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 19,
    groepen: [
      { id: 'Nachtdieren', kleur: K[0], woorden: ['Uil', 'Vleermuis', 'Egel', 'Wasbeer'] },
      {
        id: 'Soorten pasta',
        kleur: K[1],
        woorden: ['Spaghetti', 'Penne', 'Tagliatelle', 'Farfalle'],
      },
      { id: 'Schoolbenodigdheden', kleur: K[2], woorden: ['Potlood', 'Gum', 'Liniaal', 'Schaar'] },
      {
        id: 'Landen van Z-Amerika',
        kleur: K[3],
        woorden: ['Chili', 'Bolivia', 'Venezuela', 'Ecuador'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 19,
    groepen: [
      {
        id: 'Nederlandse sportlegenden',
        kleur: K[0],
        woorden: ['Marianne Vos', 'Ard Schenk', 'Joop Zoetemelk', 'Jan Timman'],
      },
      {
        id: 'NL olympische kampioenen',
        kleur: K[1],
        woorden: [
          'Fanny Blankers-Koen',
          'Pieter van den Hoogenband',
          'Ellen van Langen',
          'Anton Geesink',
        ],
      },
      {
        id: 'Belgische sportlegendes',
        kleur: K[2],
        woorden: ['Merckx', 'Clijsters', 'Pfaff', 'Van Steenbergen'],
      },
      {
        id: 'Sportdisciplines atletiek',
        kleur: K[3],
        woorden: ['Sprint', 'Hordenlopen', 'Kogelstoten', 'Polsstokhoogspringen'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 19,
    groepen: [
      {
        id: 'Klassieke condimenten',
        kleur: K[0],
        woorden: ['Mosterd', 'Mierikswortel', 'Kappertjes', 'Tamarinde'],
      },
      {
        id: 'Soorten azijn',
        kleur: K[1],
        woorden: ['Balsamico', 'Appelazijn', 'Rijstazijn', 'Sherry-azijn'],
      },
      {
        id: 'Soorten olie',
        kleur: K[2],
        woorden: ['Olijfolie', 'Sesamolie', 'Kokosolie', 'Truffelolie'],
      },
      {
        id: 'Kruiden en specerijen',
        kleur: K[3],
        woorden: ['Kardemom', 'Saffraan', 'Foelie', 'Steranijs'],
      },
    ],
  },

  // === DAG 20 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 20,
    groepen: [
      { id: 'Filmgenres', kleur: K[0], woorden: ['Horror', 'Komedie', 'Thriller', 'Documentaire'] },
      { id: 'Soorten thee', kleur: K[1], woorden: ['Groene', 'Zwarte', 'Kamille', 'Pepermunt'] },
      { id: 'Meubelonderdelen', kleur: K[2], woorden: ['Poot', 'Lade', 'Rug', 'Armleuning'] },
      {
        id: 'Landen van Midden-Oost',
        kleur: K[3],
        woorden: ['Turkije', 'Iran', 'Saoedi-Arabië', 'Israël'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 20,
    groepen: [
      {
        id: 'Beroemde uitspraken (spreker)',
        kleur: K[0],
        woorden: ['Churchill', 'Gandhi', 'Mandela', 'King'],
      },
      {
        id: 'Nobelprijswinnaars Vrede',
        kleur: K[1],
        woorden: ['Walesa', 'Tutu', 'Aung San Suu Kyi', 'Liu Xiaobo'],
      },
      {
        id: 'VN-secretarissen-generaal',
        kleur: K[2],
        woorden: ['Hammarskjöld', 'U Thant', 'Waldheim', 'Annan'],
      },
      {
        id: 'Revolutionaire leiders',
        kleur: K[3],
        woorden: ['Lenin', 'Mao', 'Castro', 'Che Guevara'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 20,
    groepen: [
      {
        id: 'Sterrenstelsels',
        kleur: K[0],
        woorden: ['Melkweg', 'Andromeda', 'Triangulum', 'Magelhaense Wolk'],
      },
      {
        id: 'Beroemde sterren',
        kleur: K[1],
        woorden: ['Sirius', 'Polaris', 'Rigel', 'Betelgeuze'],
      },
      {
        id: 'Typen sterrenstelsels',
        kleur: K[2],
        woorden: ['Elliptisch', 'Spiraal', 'Lenticulair', 'Onregelmatig'],
      },
      {
        id: 'Ruimteverkenners',
        kleur: K[3],
        woorden: ['Voyager', 'Cassini', 'Hubble', 'New Horizons'],
      },
    ],
  },

  // === DAG 21 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 21,
    groepen: [
      {
        id: 'Beroepen zorg',
        kleur: K[0],
        woorden: ['Verpleegkundige', 'Tandarts', 'Apotheker', 'Fysiotherapeut'],
      },
      { id: 'Soorten kaas', kleur: K[1], woorden: ['Jong', 'Belegen', 'Oud', 'Extra belegen'] },
      {
        id: 'Groentesoorten',
        kleur: K[2],
        woorden: ['Koolrabi', 'Pastinaak', 'Raap', 'Knolselderij'],
      },
      { id: 'Schrijfgerei', kleur: K[3], woorden: ['Pen', 'Stift', 'Krijt', 'Markeerstift'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 21,
    groepen: [
      {
        id: 'Taalkundige begrippen',
        kleur: K[0],
        woorden: ['Fonologie', 'Morfologie', 'Syntaxis', 'Pragmatiek'],
      },
      {
        id: 'Leestekens',
        kleur: K[1],
        woorden: ['Komma', 'Puntkomma', 'Gedachtestreepje', 'Aanhalingstekens'],
      },
      {
        id: 'Zinstypen',
        kleur: K[2],
        woorden: ['Mededelend', 'Vragend', 'Uitroepend', 'Gebiedend'],
      },
      {
        id: 'Woordsoorten',
        kleur: K[3],
        woorden: ['Zelfstandig naamwoord', 'Bijvoeglijk naamwoord', 'Werkwoord', 'Bijwoord'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 21,
    groepen: [
      {
        id: 'Soorten contracten',
        kleur: K[0],
        woorden: ['Koopcontract', 'Huurcontract', 'Arbeidscontract', 'Licentie'],
      },
      { id: 'Rechtsbegrippen', kleur: K[1], woorden: ['Gedaagde', 'Eiser', 'Getuige', 'Curator'] },
      {
        id: 'Soorten wet',
        kleur: K[2],
        woorden: ['Grondwet', 'Strafwet', 'Handelswet', 'Belastingwet'],
      },
      {
        id: 'Gerechtelijke procedures',
        kleur: K[3],
        woorden: ['Aanklacht', 'Verhoor', 'Uitspraak', 'Beroep'],
      },
    ],
  },

  // === DAG 22 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 22,
    groepen: [
      {
        id: 'Dieren van de Arktis',
        kleur: K[0],
        woorden: ['Poolvos', 'Rendier', 'Lemming', 'Sneeuwuil'],
      },
      {
        id: 'Soorten pizza',
        kleur: K[1],
        woorden: ['Margherita', 'Quattro Stagioni', 'Diavola', 'Capricciosa'],
      },
      {
        id: 'Wiskunde bewerkingen',
        kleur: K[2],
        woorden: ['Optelling', 'Aftrekking', 'Vermenigvuldiging', 'Deling'],
      },
      {
        id: 'Landen van C-Amerika',
        kleur: K[3],
        woorden: ['Mexico', 'Guatemala', 'Cuba', 'Panama'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 22,
    groepen: [
      { id: 'Nederlandse rivieren', kleur: K[0], woorden: ['Rijn', 'Maas', 'Schelde', 'IJssel'] },
      {
        id: 'Nederlandse meren',
        kleur: K[1],
        woorden: ['IJmeer', 'Veluwerandmeren', 'Reevediep', 'Markermeer'],
      },
      {
        id: 'Nederlandse polders',
        kleur: K[2],
        woorden: ['Haarlemmermeer', 'Flevoland', 'Wieringermeer', 'Noordoostpolder'],
      },
      {
        id: 'Nederlandse duingebieden',
        kleur: K[3],
        woorden: ['Kennemerduinen', 'Meijendel', 'Schoorl', 'Amsterdamse Waterleidingduinen'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 22,
    groepen: [
      {
        id: 'Energiebronnen fossiel',
        kleur: K[0],
        woorden: ['Aardolie', 'Steenkool', 'Aardgas', 'Turf'],
      },
      {
        id: 'Hernieuwbare energie',
        kleur: K[1],
        woorden: ['Windenergie', 'Zonne-energie', 'Waterkracht', 'Getijdenenergie'],
      },
      { id: 'Broeikassgassen', kleur: K[2], woorden: ['CO₂', 'Methaan', 'Lachgas', 'Ozon'] },
      {
        id: 'Milieubegrippen',
        kleur: K[3],
        woorden: ['Biodiversiteit', 'Ecosysteem', 'Voedselketen', 'Habitatverlies'],
      },
    ],
  },

  // === DAG 23 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 23,
    groepen: [
      {
        id: 'Dieren van de zee (3)',
        kleur: K[0],
        woorden: ['Schildpad', 'Manatee', 'Narwal', 'Beluga'],
      },
      {
        id: 'Soorten soep',
        kleur: K[1],
        woorden: ['Tomatensoep', 'Erwtensoep', 'Groentesoep', 'Kippensoep'],
      },
      {
        id: 'Landen van Oost-Europa',
        kleur: K[2],
        woorden: ['Polen', 'Tsjechië', 'Hongarije', 'Roemenië'],
      },
      {
        id: 'Hobbies',
        kleur: K[3],
        woorden: ['Schilderen', 'Fotograferen', 'Tuinieren', 'Breien'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 23,
    groepen: [
      {
        id: 'Beroemde balletwerken',
        kleur: K[1],
        woorden: ['Zwanenmeer', 'Notenkraker', 'Slapende Schoonheid', 'Giselle'],
      },
      {
        id: 'Beroemde operawerken',
        kleur: K[0],
        woorden: ['Traviata', 'Aida', 'Carmen', 'Rigoletto'],
      },
      {
        id: 'Beroemde musicals',
        kleur: K[2],
        woorden: ['Grease', 'Chicago', 'Wicked', 'Hamilton'],
      },
      {
        id: 'Toneelgenres',
        kleur: K[3],
        woorden: ['Tragedie', 'Komedie', 'Vaudeville', 'Melodrama'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 23,
    groepen: [
      {
        id: 'Soorten bacteriën',
        kleur: K[0],
        woorden: ['Coccus', 'Bacillus', 'Spirocheet', 'Vibrio'],
      },
      {
        id: 'Virussoorten',
        kleur: K[1],
        woorden: ['Retrovirus', 'Adenovirus', 'Coronavirus', 'Bacteriofaag'],
      },
      {
        id: 'Celorganellen',
        kleur: K[2],
        woorden: ['Mitochondrium', 'Ribosoom', 'Golgi-apparaat', 'Lysosoom'],
      },
      { id: 'Biologische taxonomie', kleur: K[3], woorden: ['Domein', 'Rijk', 'Stam', 'Klasse'] },
    ],
  },

  // === DAG 24 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 24,
    groepen: [
      {
        id: 'Dieren met schild',
        kleur: K[0],
        woorden: ['Schildpad', 'Armadillo', 'Schildkrab', 'Schelpdier'],
      },
      {
        id: 'Soorten noten',
        kleur: K[1],
        woorden: ['Amandel', 'Walnoot', 'Cashewnoot', 'Pistache'],
      },
      {
        id: 'Beroepen kunst',
        kleur: K[2],
        woorden: ['Schilder', 'Beeldhouwer', 'Fotograaf', 'Graficus'],
      },
      {
        id: 'Huishoudapparaten',
        kleur: K[3],
        woorden: ['Wasmachine', 'Droger', 'Stofzuiger', 'Afzuigkap'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 24,
    groepen: [
      { id: 'Portugese steden', kleur: K[0], woorden: ['Lissabon', 'Porto', 'Braga', 'Coimbra'] },
      {
        id: 'Nederlandse steden (2)',
        kleur: K[1],
        woorden: ['Groningen', 'Maastricht', 'Leiden', 'Nijmegen'],
      },
      {
        id: 'Belgische steden (2)',
        kleur: K[2],
        woorden: ['Hasselt', 'Kortrijk', 'Namen', 'Mechelen'],
      },
      { id: 'Zwitserse steden', kleur: K[3], woorden: ['Zürich', 'Genève', 'Bazel', 'Bern'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 24,
    groepen: [
      {
        id: 'Soorten obligaties',
        kleur: K[0],
        woorden: [
          'Staatsobligatie',
          'Bedrijfsobligatie',
          'Eeuwigdurende obligatie',
          'Nulcouponobligatie',
        ],
      },
      {
        id: 'Economische indicatoren',
        kleur: K[1],
        woorden: ['BBP', 'Inflatie', 'Werkloosheid', 'Handelsbalans'],
      },
      {
        id: 'Beursbegrippen',
        kleur: K[2],
        woorden: ['Dividend', 'Koers', 'Volatiliteit', 'Shortselling'],
      },
      {
        id: 'Financiële instrumenten',
        kleur: K[3],
        woorden: ['Optie', 'Future', 'Swap', 'Warrant'],
      },
    ],
  },

  // === DAG 25 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 25,
    groepen: [
      {
        id: 'Dieren van de savanne',
        kleur: K[0],
        woorden: ['Leeuw', 'Luipaard', 'Jachtluipaard', 'Hyena'],
      },
      { id: 'Soorten brood', kleur: K[1], woorden: ['Roggebrood', 'Volkoren', 'Wit', 'Zuurdesem'] },
      {
        id: 'Outdoor activiteiten',
        kleur: K[2],
        woorden: ['Wandelen', 'Klimmen', 'Kamperen', 'Kajakken'],
      },
      {
        id: 'Landen van Zuidoost-Azië',
        kleur: K[3],
        woorden: ['Vietnam', 'Cambodja', 'Myanmar', 'Laos'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 25,
    groepen: [
      { id: 'Nederlandse politieke partijen', kleur: K[0], woorden: ['VVD', 'D66', 'PvdA', 'CDA'] },
      { id: 'Belgische politieke partijen', kleur: K[1], woorden: ['N-VA', 'PS', 'MR', 'CD&V'] },
      {
        id: 'Europese politieke groeperingen',
        kleur: K[2],
        woorden: ['EVP', 'S&D', 'Renew', 'Groenen'],
      },
      {
        id: 'Nederlandse premiers',
        kleur: K[3],
        woorden: ['Lubbers', 'Kok', 'Balkenende', 'Rutte'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 25,
    groepen: [
      {
        id: 'Griekse tragedieschrijvers',
        kleur: K[0],
        woorden: ['Sophocles', 'Euripides', 'Aeschylus', 'Aristofanes'],
      },
      {
        id: 'Klassieke historieschrijvers',
        kleur: K[1],
        woorden: ['Herodotus', 'Thucydides', 'Livius', 'Tacitus'],
      },
      {
        id: 'Klassieke redevoeraars',
        kleur: K[2],
        woorden: ['Cicero', 'Demosthenes', 'Quintilianus', 'Isocrates'],
      },
      {
        id: 'Klassieke dichters',
        kleur: K[3],
        woorden: ['Homerus', 'Vergilius', 'Ovidius', 'Horatius'],
      },
    ],
  },

  // === DAG 26 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 26,
    groepen: [
      {
        id: 'Dieren van Azië',
        kleur: K[0],
        woorden: ['Panda', 'Tijger', 'Orang-oetan', 'Komodovaraan'],
      },
      {
        id: 'Soorten koekjes',
        kleur: K[1],
        woorden: ['Speculaas', 'Stroopwafel', 'Pepernoot', 'Krakelingen'],
      },
      {
        id: 'Landen van Noord-Europa',
        kleur: K[2],
        woorden: ['Finland', 'Denemarken', 'IJsland', 'Estland'],
      },
      {
        id: 'Soorten muziekinstrumenten (type)',
        kleur: K[3],
        woorden: ['Snaarinstrument', 'Blaasinstrument', 'Slaginstrument', 'Toetsinstrument'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 26,
    groepen: [
      {
        id: 'Belgische historische figuren',
        kleur: K[0],
        woorden: ['Ambiorix', 'Godfrey van Bouillon', 'Margaretha van Parma', 'Egmont'],
      },
      {
        id: 'Nederlandse historische figuren',
        kleur: K[1],
        woorden: [
          'Willem van Oranje',
          'Jan van Oldenbarnevelt',
          'Michiel de Ruyter',
          'Johan de Witt',
        ],
      },
      {
        id: 'Vlaamse schilders (2)',
        kleur: K[2],
        woorden: ['Memling', 'Jordaens', 'Teniers', 'Snyders'],
      },
      {
        id: 'Nederlandse schrijvers (2)',
        kleur: K[3],
        woorden: ['Anne Frank', 'Nescio', 'Reve', 'Hermans'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 26,
    groepen: [
      {
        id: 'Kwantumbegrippen',
        kleur: K[0],
        woorden: ['Superpositie', 'Verstrengeling', 'Golfcollaps', 'Tunneleffect'],
      },
      {
        id: 'Relativiteitsbegrippen',
        kleur: K[1],
        woorden: ['Tijddilatatie', 'Lengtecontractie', 'Ruimtetijd', 'Equivalentieprincipe'],
      },
      {
        id: 'Thermodynamische wetten',
        kleur: K[2],
        woorden: ['Behoud van energie', 'Entropie', 'Absolute nulpunt', 'Nernst-postulaat'],
      },
      {
        id: 'Natuurkundige krachten',
        kleur: K[3],
        woorden: ['Gravitatie', 'Elektromagnetisme', 'Sterke kernkracht', 'Zwakke kernkracht'],
      },
    ],
  },

  // === DAG 27 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 27,
    groepen: [
      {
        id: 'Dieren van het water',
        kleur: K[0],
        woorden: ['Bever', 'Otter', 'Muskusrat', 'Waterrat'],
      },
      { id: 'Soorten vlees', kleur: K[1], woorden: ['Rundvlees', 'Varkensvlees', 'Kip', 'Lam'] },
      {
        id: 'Beroepen techniek',
        kleur: K[2],
        woorden: ['Elektricien', 'Loodgieter', 'Timmerman', 'Metselaar'],
      },
      {
        id: 'Landen van West-Europa',
        kleur: K[3],
        woorden: ['Ierland', 'Portugal', 'Zwitserland', 'Oostenrijk'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 27,
    groepen: [
      {
        id: 'Standaarddansen',
        kleur: K[0],
        woorden: ['Foxtrot', 'Quickstep', 'Viennese Wals', 'Slowwals'],
      },
      {
        id: 'Latijns-Amerikaanse dansen',
        kleur: K[1],
        woorden: ['Rumba', 'Cha-cha', 'Paso Doble', 'Jive'],
      },
      { id: 'Straatdansen', kleur: K[2], woorden: ['Breakdance', 'Popping', 'Locking', 'Krump'] },
      { id: 'Volksdansen', kleur: K[3], woorden: ['Flamenco', 'Tarantella', 'Polka', 'Csárdás'] },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 27,
    groepen: [
      {
        id: 'Antieke wereldwonderen',
        kleur: K[0],
        woorden: ['Colossus', 'Vuurtoren van Alexandrië', 'Hangende tuinen', 'Zeus van Olympia'],
      },
      {
        id: 'Moderne wereldwonderen',
        kleur: K[1],
        woorden: ['Taj Mahal', 'Colosseum', 'Machu Picchu', 'Chichén Itzá'],
      },
      {
        id: 'Beroemde piramides',
        kleur: K[2],
        woorden: ['Cheops', 'Chefren', 'Mykerinos', 'Rode Piramide'],
      },
      {
        id: 'Beroemde tempels',
        kleur: K[3],
        woorden: ['Parthenon', 'Angkor Wat', 'Karnak', 'Borobudur'],
      },
    ],
  },

  // === DAG 28 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 28,
    groepen: [
      {
        id: 'Dieren van de Amazone',
        kleur: K[0],
        woorden: ['Piranha', 'Kaiman', 'Tapir', 'Makaw'],
      },
      { id: 'Soorten kaas (2)', kleur: K[1], woorden: ['Cheddar', 'Brie', 'Feta', 'Halloumi'] },
      {
        id: 'Landen van Z-Afrika',
        kleur: K[2],
        woorden: ['Zuid-Afrika', 'Namibië', 'Botswana', 'Zimbabwe'],
      },
      {
        id: 'Soorten individuele sport',
        kleur: K[3],
        woorden: ['Golf', 'Boogschieten', 'Ruitersport', 'Schermen'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 28,
    groepen: [
      { id: 'Poolse steden', kleur: K[0], woorden: ['Warschau', 'Krakau', 'Wroclaw', 'Gdansk'] },
      {
        id: 'Tsjechische/Slowaakse steden',
        kleur: K[1],
        woorden: ['Praag', 'Brno', 'Bratislava', 'Košice'],
      },
      {
        id: 'Hongaarse/Roemeense steden',
        kleur: K[2],
        woorden: ['Boedapest', 'Debrecen', 'Boekarest', 'Cluj-Napoca'],
      },
      {
        id: 'Baltische hoofdsteden',
        kleur: K[3],
        woorden: ['Tallinn', 'Riga', 'Vilnius', 'Minsk'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 28,
    groepen: [
      {
        id: 'Soorten immuniteit',
        kleur: K[0],
        woorden: ['Aangeboren', 'Verworven', 'Passief', 'Actief'],
      },
      {
        id: 'Soorten vaccins',
        kleur: K[1],
        woorden: ['Levend verzwakt', 'Dood', 'Subunit', 'mRNA'],
      },
      {
        id: 'Immuuncellen',
        kleur: K[2],
        woorden: ['T-cel', 'B-cel', 'Natural killer cel', 'Macrofaag'],
      },
      {
        id: 'Ziekten door virus',
        kleur: K[3],
        woorden: ['Griep', 'Mazelen', 'Waterpokken', 'Hiv'],
      },
    ],
  },

  // === DAG 29 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 29,
    groepen: [
      {
        id: 'Dieren van de oceaan (diep)',
        kleur: K[0],
        woorden: ['Reuzeninktvis', 'Diepzeevis', 'Zeekomkommer', 'Slangenster'],
      },
      { id: 'Soorten saus', kleur: K[1], woorden: ['Ketchup', 'Mayonaise', 'Bbq-saus', 'Aioli'] },
      {
        id: 'Landen van West-Afrika',
        kleur: K[2],
        woorden: ['Senegal', 'Ivoorkust', 'Mali', 'Kameroen'],
      },
      { id: 'Huisdecoratie', kleur: K[3], woorden: ['Gordijn', 'Kleed', 'Schilderij', 'Kussen'] },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 29,
    groepen: [
      {
        id: 'Wiskundige begrippen',
        kleur: K[0],
        woorden: ['Meetkunde', 'Algebra', 'Calculus', 'Statistiek'],
      },
      {
        id: 'Statistische begrippen',
        kleur: K[1],
        woorden: ['Gemiddelde', 'Mediaan', 'Modus', 'Standaarddeviatie'],
      },
      { id: 'Geometrische lichamen', kleur: K[2], woorden: ['Kubus', 'Bol', 'Kegel', 'Cilinder'] },
      {
        id: 'Wiskundige constanten',
        kleur: K[3],
        woorden: ['Pi', 'E (Euler)', 'Phi (gouden snede)', 'I (imaginair)'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 29,
    groepen: [
      {
        id: 'Eerste elementen periodiek systeem',
        kleur: K[0],
        woorden: ['Waterstof', 'Helium', 'Lithium', 'Beryllium'],
      },
      {
        id: 'Radioactieve elementen',
        kleur: K[1],
        woorden: ['Uranium', 'Plutonium', 'Radium', 'Thorium'],
      },
      { id: 'Edelmetalen', kleur: K[2], woorden: ['Goud', 'Zilver', 'Platina', 'Palladium'] },
      {
        id: 'Halfgeleiders',
        kleur: K[3],
        woorden: ['Silicium', 'Germanium', 'Arsenide', 'Indium'],
      },
    ],
  },

  // === DAG 30 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 30,
    groepen: [
      {
        id: 'Dieren van het regenwoud',
        kleur: K[0],
        woorden: ['Luiaard', 'Miereneter', 'Neusbeer', 'Kapucijner aap'],
      },
      { id: 'Soorten bier', kleur: K[1], woorden: ['Pils', 'Stout', 'IPA', 'Witbier'] },
      {
        id: 'Landen van Oost-Afrika',
        kleur: K[2],
        woorden: ['Oeganda', 'Rwanda', 'Mozambique', 'Madagaskar'],
      },
      {
        id: 'Soorten pasta (2)',
        kleur: K[3],
        woorden: ['Linguine', 'Rigatoni', 'Fusilli', 'Gnocchi'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 30,
    groepen: [
      {
        id: 'Werken van Rembrandt',
        kleur: K[0],
        woorden: ['Nachtwacht', 'Staalmeesters', 'De Anatomische Les', 'Zelfportret'],
      },
      {
        id: 'Werken van Van Gogh',
        kleur: K[1],
        woorden: ['Sterrennacht', 'Zonnebloemen', 'De Aardappeleters', 'Irissen'],
      },
      {
        id: 'Werken van Rubens',
        kleur: K[2],
        woorden: ['Kruisafneming', 'Kruisoprichting', 'De drie gratiën', 'Oordeel van Paris'],
      },
      {
        id: 'Werken van Vermeer',
        kleur: K[3],
        woorden: ['Melkmeisje', 'Meisje met de parel', 'De Geograaf', 'Brieflezende vrouw'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 30,
    groepen: [
      {
        id: 'Sprachfamilien (taalfamilies)',
        kleur: K[0],
        woorden: ['Germaans', 'Romaans', 'Slavisch', 'Semitisch'],
      },
      { id: 'Dode talen', kleur: K[1], woorden: ['Latijn', 'Oud-Grieks', 'Sanskrit', 'Akkadisch'] },
      {
        id: 'Talen met eigen schrift',
        kleur: K[2],
        woorden: ['Japans', 'Chinees', 'Arabisch', 'Georgisch'],
      },
      { id: 'Kunsttalen', kleur: K[3], woorden: ['Esperanto', 'Klingon', 'Quenya', 'Interlingua'] },
    ],
  },

  // === DAG 31 ===
  {
    moeilijkheid: 'Gemakkelijk',
    dag: 31,
    groepen: [
      {
        id: 'Dieren van de Middellandse Zee',
        kleur: K[0],
        woorden: ['Tonijn', 'Zwaardvis', 'Murene', 'Dugong'],
      },
      { id: 'Soorten wijn', kleur: K[1], woorden: ['Rood', 'Wit', 'Rosé', 'Champagne'] },
      {
        id: 'Landen van de Balkan',
        kleur: K[2],
        woorden: ['Kroatië', 'Servië', 'Albanië', 'Noord-Macedonië'],
      },
      {
        id: 'Soorten fruit (2)',
        kleur: K[3],
        woorden: ['Vijg', 'Granaatappel', 'Lychee', 'Passievrucht'],
      },
    ],
  },
  {
    moeilijkheid: 'Gemiddeld',
    dag: 31,
    groepen: [
      {
        id: 'Nobelprijswinnaars Literatuur (NL/B)',
        kleur: K[0],
        woorden: ['Maeterlinck', 'Heyse', 'Laxness', 'Pontoppidan'],
      },
      {
        id: 'Bekende wetenschappers NL',
        kleur: K[1],
        woorden: ['Huygens', 'Van Leeuwenhoek', 'Lorentz', 'Van der Waals'],
      },
      {
        id: 'Bekende Belgische wetenschappers',
        kleur: K[2],
        woorden: ['Vesalius', 'Lemaître', 'Prigogine', 'De Duve'],
      },
      {
        id: 'Bekende wetenschappers vrouwen',
        kleur: K[3],
        woorden: ['Curie', 'Franklin', 'Meitner', 'McClintock'],
      },
    ],
  },
  {
    moeilijkheid: 'Moeilijk',
    dag: 31,
    groepen: [
      {
        id: 'Soorten redeneerfouten',
        kleur: K[0],
        woorden: ['Stroman', 'Ad hominem', 'Cirkelredenering', 'Vals dilemma'],
      },
      {
        id: 'Logische connectieven',
        kleur: K[1],
        woorden: ['Conjunctie', 'Disjunctie', 'Implicatie', 'Biconditional'],
      },
      {
        id: 'Argumentatietheorie',
        kleur: K[2],
        woorden: ['Premisse', 'Conclusie', 'Syllogisme', 'Enthymeem'],
      },
      {
        id: 'Epistemologische begrippen',
        kleur: K[3],
        woorden: ['Kennistheorie', 'Rechtvaardiging', 'Falsificatie', 'Paradigma'],
      },
    ],
  },
]
