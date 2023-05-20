import LocalizedStrings from 'localized-strings';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './Translations/en';
import es from './Translations/es';
const LANGUAGES = {
  en,
  es,
};
const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);
        callback(findBestAvailableLanguage?.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};
i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export const strings = new LocalizedStrings({
  en: {
    splash: {
      business: 'Business',
    },

    login: {
      title: 'Welcome Back!',
      description1: 'Sign in to your account. If you ',
      description2: 'havn`t created one. visit our web',
      or: 'OR',
      email: 'Email address',
      password: 'Password',
      button: 'Continue',
      facebook: 'Continue with Facebook ',
      google: 'Continue with Google ',
      apple: 'Continue with Apple ',
    },
    home: {
      Home: 'Home',
      'Booking info': 'Booking info',
      'Booking Completed': 'Booking Completed',
      'Active Booking': 'Active Booking',
      'Booking Cancelled': 'Booking Cancelled',
      'Your Responce': 'Your Responce',
      'Responce rate': 'Responce rate',
      'Coustumer`s responce': 'Coustumer`s responce',
      reviews: 'Reviews',
      Earnings: 'Earnings',
      'Income Earned': 'Income Earned',
      'Income Pending': 'Income Pending',
      'Income Cancelled': 'Income Cancelled',
      'Profile Statics ': 'Profile Statics',
      'Profile Views': 'Profile Views',
    },
    Chat: {
      Chat: 'Chat',
      input: 'To:Company Name',
    },
    order: {
      Heading: 'Bookings',
      'Filter by': 'Filter by',
      'Active Order': 'Active Order',
      'Completed Orders': 'Completed order',
      Cancelled: 'Cancelled Order',

      'Ordered By': 'Ordered By',
      Delivery: 'Delivery',
      'Total hours': 'hours',
      'Total Payment': 'Total Payment',
      button: 'View Details',
      bookingDetails: 'Booking details',
    },
    Notification: {
      Heading: 'Notifications',
      Mark: 'Mark all as read',
    },
    profile: {
      Heading: 'Account overview',
      '1st tab': 'Buyers request',
      '2nd tab': 'Payment',
      '3nd tab': 'Earnings',
      '4nd tab': 'My gigs',
      '5nd tab': 'Settings',
      Buyersrequest: {
        Heading: 'BUYERS REQUEST',
        'booking id': 'Booking id',
        date: 'Date',
        time: 'Time',
        button: 'View Details',
      },

      mygigs: {
        Heading: 'Bookings',
        Filterby: 'Filter by',
        ActiveGigs: 'Active gigs',
        DeletedGigs: 'Deleted gigs',
        PendingGigs: 'Pending gigs',
        ButtonviewDetail: 'View details',
        thingsIncluded: 'Things Included',
        reviews: 'Reviews',
      },
      payment: {
        Heading: 'PAYMENT',
        'income earned': 'Income Earned',
        'income Pending': 'Income Pending',
        ques1: 'Haven`t you connected your',
        ques2: 'bank account yet ?',
        button: 'Connect',
      },
      Earnings: {
        Heading: 'EARNINGS',
        'Monthly Analysis': 'Monthly Analysis',
      },
      settings: {
        Heading: 'SETTINGS',
        '1st tab': 'Edit profile',
        '2st tab': 'Notification',
        '3st tab': 'Password and security',
        '4st tab': 'Location',
        '5th tab': 'Language',

        editprofile: {
          Heading: 'EDIT PROFILE',
          name: 'Name',
          email: 'Email',
          phone: 'Phone No',
          Categories: 'Categories',
          'date of birth': 'Date of Birth(DOB)',
        },
        Notification: {
          Heading: 'NOTIFICATION',
          '1st switch': 'Notification Sound',
          '2st switch': 'Would you like to turn off your notification ?',
          '3st switch': 'Show notification in notification bar ?',
        },
        Passwordandsecurity: {
          Heading: 'PASSWORD AND SECURITY',
          'Current Password': 'Current Password',
          'New Password': 'New Password',
          Passcode: 'passcode',
        },
        Location: {
          heading: 'LOCATION',
          country: 'Country',
          state: 'State',
          city: 'City',
        },
      },
    },

    card: {
      'Booking details card': {
        Heading: 'Booking details',
      },
      BookingRequirements: {
        Heading: 'Booking Requirements',
        'button Reschedule': 'Reschedule',
        'button Deliver now': 'Deliver now',
      },
      BookingdetailsProfile: {
        heading: 'Booking Details',
        button1: 'Talk with buyer',
        button2: 'Accept request',
      },
    },
    common: {
      'save button': 'Save Changes',
    },
  },

  es: {
    splash: {
      business: 'Compañía',
    },
    login: {
      title: 'Contento de verte!',
      description1: 'Iniciar sesión en su cuenta. Si usted',
      description2: 'no creó ninguno. visita nuestro sitio',
      or: 'DÓNDE',
      email: 'Dirección de correo electrónico',
      password: 'Contraseña',
      button: 'seguir',
      facebook: 'continua con Facebook ',
      google: 'continua con Google ',
      apple: 'continua con Apple ',
    },
    home: {
      Home: 'Casa',
      'Booking info': 'Infomación sobre reservas',
      'Booking Completed': 'Reserva completada',
      'Active Booking': 'Reserva activa',
      'Booking Cancelled': "reserva cancelada'",
      'Your Responce': 'Su respuesta',
      'Responce rate': 'Tasa de respuesta',
      'Coustumer`s responce': 'Respuesta del cliente',
      reviews: 'Comentarios',
      Earnings: 'Ganancias',
      'Income Earned': 'Ingreso ganado',
      'Income Pending': 'Ingresos en espera',
      'Income Cancelled': 'Ingreso cancelado',
      'Profile Statics ': 'Perfil estático',
      'Profile Views': 'Visitas al perfil',
    },
    Chat: {
      Chat: 'Conversar',
      input: 'A: Nombre de la empresa',
    },
    order: {
      Heading: 'Reservas',
      'Filter by': 'Filtrado por',
      'Active Order': 'comando activo',
      'Completed Orders': 'Pedido completado',
      Cancelled: 'Orden cancelada',

      'Ordered By': 'ordenar por',
      Delivery: 'Entrega',
      'Total hours': 'Horas totales',
      'Total Payment': 'Pago total',
      button: 'Ver los detalles',
      bookingDetails: 'Detalles de la reserva',
    },
    Notification: {
      Heading: 'Aviso',
      Mark: 'marcar todo como leido',
    },
    profile: {
      Heading: 'Descripción de cuenta',
      '1st tab': 'solicitud de los compradores',
      '2nd tab': 'Pago',
      '3nd tab': 'Ganancias',
      '4nd tab': 'mis conciertos',
      '5nd tab': 'Ajustes',
      Buyersrequest: {
        Heading: 'SOLICITUD DE COMPRADORES',
        'booking id': 'ID de reserva',
        date: 'Fecha',
        time: 'Tiempo',
        button: 'Ver los detalles',
      },
      mygigs: {
        Heading: 'Reservas',
        Filterby: 'filtrado por',
        ActiveGigs: 'conciertos activos',
        DeletedGigs: 'Conciertos eliminados ',
        PendingGigs: 'Conciertos a la espera ',
        ButtonviewDetail: 'Ver los detalles',
        thingsIncluded: 'Cosas incluidas',
        reviews: 'Comentarios',
      },
      payment: {
        Heading: 'PAGO',
        'income earned': 'ingreso ganado',
        'income Pending': 'Ingresos en espera',
        ques1: '¿No has conectado tu',
        ques2: 'cuenta bancaria todavía?',
        button: 'Enlazar',
      },
      Earnings: {
        Heading: 'GANANCIAS',
        'Monthly Analysis': 'Análisis mensual',
      },
      settings: {
        Heading: 'AJUSTES',
        '1st tab': 'Editar perfil',
        '2st tab': 'Notificación',
        '3st tab': 'Contraseña y Seguridad',
        '4st tab': 'Ubicación',
        '5th tab': 'Idioma',

        editprofile: {
          Heading: 'EDITAR PERFIL',
          name: 'apellido',
          email: 'Correo electrónico',
          phone: 'sin teléfono',
          Categories: 'Categorías',
          'date of birth': 'Fecha de nacimiento(FDN)',
        },
        Notification: {
          Heading: 'NOTIFICACIÓN',
          '1st switch': 'Sonido de Notificación',
          '2st switch': '¿Quieres desactivar tu Notificación?',
          '3st switch':
            'Mostrar notificación en la barra de herramientas notification?',
        },
        Passwordandsecurity: {
          Heading: 'CONTRASEÑA Y SEGURIDAD',
          'Current Password': 'Contraseña actual',
          'New Password': 'Nueva contraseña',
          Passcode: 'contraseña',
        },
        Location: {
          heading: 'UBICACIÓN',
          country: 'País',
          state: 'Estado',
          city: 'Pueblo',
        },
      },
    },

    card: {
      'Booking details card': {
        Heading: 'Detalles de la reserva',
      },
      BookingRequirements: {
        Heading: 'Condiciones de reserva',
        'button Reschedule': 'Reprogramar',
        'button Deliver now': 'entregar ahora',
      },
      BookingdetailsProfile: {
        heading: 'Detalles de la reserva',
        button1: 'hablar con el comprador',
        button2: 'Aceptar petición',
      },
    },
    common: {
      'save button': 'Guardar cambios',
    },
  },
});

// const languageDetector = {
//   init: Function.prototype,
//   type: 'languageDetector',
//   async: true,
//   detect: async callback => {
//     const savedDataJson = AsyncStorage.getItem('user-language');
//     const lng = savedDataJson ? savedDataJson : null;
//     const selectLanguage = lng || locale;
//     callback(selectLanguage);
//   },
// };

// i18next
//   .use(languageDetector)
//   .use(reactI18nextModule)
//   .init({fallbackLng: 'en', resources: en, fr});
