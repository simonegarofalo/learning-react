import avatarDefault from "../assets/avatars/unknown.webp";
import avatarSimone from "../assets/avatars/simone.jpg";
import avatarSalvatore from "../assets/avatars/salvatore.jpg";
import avatarCarmelo from "../assets/avatars/carmelo.jpg";
import avatarGiancarlo from "../assets/avatars/giancarlo.jpg";

export const ATHLETES = [
  {
    id: "ath01",
    name: "Simone",
    avatar: avatarSimone,
    slug: "simone-garofalo",
    stats: {
      age: "29",
      height: "1,83cm",
      weight: "74kg",
      region: "Lombardia",
    },
  },
  {
    id: "ath02",
    name: "Salvatore",
    avatar: avatarSalvatore,
    slug: "salvatore-orlando",
    stats: {
      age: "35",
      height: "1,85cm",
      weight: "84kg",
      region: "Sicilia",
    },
  },
  {
    id: "ath03",
    name: "Carmelo",
    avatar: avatarCarmelo,
    slug: "carmelo-scarantino",
    stats: {
      age: "36",
      height: "1,80cm",
      weight: "82kg",
      region: "Sicilia",
    },
  },
  {
    id: "ath04",
    name: "Giancarlo",
    avatar: avatarGiancarlo,
    slug: "giancarlo-peluso",
    stats: {
      age: "34",
      height: "1,79cm",
      weight: "79kg",
      region: "Campania",
    },
  },
];

export const DEFAULT_ATHLETE = {
  name: "Unknown",
  avatar: avatarDefault,
};
