const BUCKET_URL = 'https://rectoral-board.s3.eu-west-1.amazonaws.com';

const IMAGES = {
  logo: {
    horizontal: `${BUCKET_URL}/logos/logo.svg`,
    horizontal_light: `${BUCKET_URL}/logos/logo-light.svg`,
    vertical_light: `${BUCKET_URL}/logos/vertical-logo-light.svg`,
  },
  portrait: {
    main: `${BUCKET_URL}/portraits/main.svg`,
  },
};

export default IMAGES;
