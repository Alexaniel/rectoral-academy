const BUCKET_URL = 'https://rectoral-board.s3.eu-west-1.amazonaws.com';
const IMAGES = {
    logo: {
        horizontal: `${BUCKET_URL}/logos/logo.svg`,
        horizontal_light: `${BUCKET_URL}/logos/logo-light.svg`,
        vertical_light: `${BUCKET_URL}/logos/vertical-logo-light.svg`,
    },
    portrait: {
        main: `${BUCKET_URL}/portraits/main.svg`,
        presentation: `${BUCKET_URL}/portraits/presentation.svg`,
    },
    curses: {
        card_curse: `${BUCKET_URL}/curses/card_curse.svg`,
    },
    illustrations: {
        books_graduate: `${BUCKET_URL}/illustrations/books-graduate.svg`,
        map: `${BUCKET_URL}/illustrations/map.svg`,
    },
    plots: {
        plot_complete: `${BUCKET_URL}/plots/plot-complete.svg`,
        plot_half: `${BUCKET_URL}/plots/plot-half.svg`,
        plot_diagonal: `${BUCKET_URL}/plots/plot-diagonal.svg`,
        lines: `${BUCKET_URL}/plots/lines.svg`,
    },
    memberships: {
        gold: `${BUCKET_URL}/logos/gold.png`,
        platinum: `${BUCKET_URL}/logos/platinum.png`,
        diamond: `${BUCKET_URL}/logos/diamond.png`,
    },
    sponsors: {
        oz: `${BUCKET_URL}/sponsors/oz.png`,
        abru: `${BUCKET_URL}/sponsors/abru.svg`,
        acafe: `${BUCKET_URL}/sponsors/acafe.svg`,
        amigos_por_educacion: `${BUCKET_URL}/sponsors/amigos-por-educacion.svg`,
        axis: `${BUCKET_URL}/sponsors/axis.png`,
        conif: `${BUCKET_URL}/sponsors/conif.jpeg`,
        dominus: `${BUCKET_URL}/sponsors/dominus.svg`,
        funindes: `${BUCKET_URL}/sponsors/funindes.svg`,
        gu: `${BUCKET_URL}/sponsors/gu.svg`,
        mentors_angels: `${BUCKET_URL}/sponsors/mentors-angels.svg`,
        wrw: `${BUCKET_URL}/sponsors/wrw.svg`,
        sapienza: `${BUCKET_URL}/sponsors/sapienza.jpeg`,
        rigu: `${BUCKET_URL}/sponsors/rigu.png`,
        reies: `${BUCKET_URL}/sponsors/reies.svg`,
        kactus: `${BUCKET_URL}/sponsors/kactus.svg`,
    },
};

export default IMAGES;
