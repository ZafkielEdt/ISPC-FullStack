import { Destination } from "./destination";
import { Experience } from "./experience";
import { Traveler } from "./traveler";

export interface PackageTravel {
    id : number;
    title: string;
    description: string;
    price: number;
    days: number;
    nights: number;
    childs?: Traveler[];
    adults?: Traveler[];
    experiences?: Experience[];
    destination: Destination;
  }

  export const packageTravel = {
    id: 1,
    title: 'Villa maría',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    price: 230040,
    days: 7,
    nights: 6,
    adults: [{
      id: 1,
      name: 'Maria',
      last_name: 'Gonzalez',
      country: 'Argentina',
      dni: 12345678,
      birthDate: new Date(
        1990,
        1,
        1
      ),
    }],
    childs: [{
      id: 1,
      name: 'Juan',
      last_name: 'Gonzalez',
      country: 'Argentina',
      dni: 12345678,
      birthDate: new Date(
        2010,
        1,
        1
      ),
    }],
    experiences: [{
      title: 'Excursión a la Cumbrecita ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      price: 5000,
      gallery: [
        "./assets/img/imagen5.webp", "./assets/img/imagen2.webp", "./assets/img/imagen4.webp"
      ],
    },
    {
      title: 'City tour por Villa María',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      price: 10000,
      gallery: [
        "./assets/img/imagen2.webp", "./assets/img/imagen2.webp", "./assets/img/imagen1.webp"
      ],
    },
    ],
    destination: {
      id: 1,
      name: 'Villa María',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      city: {
        id: 1,
        name: 'Córdoba',
        latitude: -31.416666,
        longitude: -64.183333,
        province: {
          id: 1,
          name: 'Córdoba',
          latitude: -31.416666,
          longitude: -64.183333,

        },
      },
      gallery: [
        "./assets/img/imagen1.webp", "./assets/img/imagen2.webp", "./assets/img/imagen3.webp", "./assets/img/imagen4.webp", "./assets/img/imagen5.webp", "./assets/img/imagen2.webp", "./assets/img/imagen2.webp", "./assets/img/imagen1.webp", "./assets/img/imagen3.webp",
      ],

    }



  };