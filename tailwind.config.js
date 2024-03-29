module.exports = {
    purge: [
        "./components/**/*.tsx",
        "./pages/**/*.tsx",
        "./components/**/*.tsx",
        "./pages/**/*.tsx",
    ],
    theme: {
        screens: {
            '1336px': { 'max': '1439px' }, //From 0 to 1439
            '1150px': { 'max': '1279px' }, //From 0 to 1279
            '1280px': { 'max': '1335px' }, //From 0 to 1335
            'mobile': { 'max': '1149px' }, //From 0 to 1149
            '800px': { 'max': '1023px' }, //From 0 to 1023 
            '640px': { 'max': '799px' }, //From 0 to 799 (including 640)
            'notMobile': '1150px', //Over 1150px
            '1441min': '1441px', //Over 1441
            '1920min': '1920px', //Over 1920

            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontSize: {
            10: '10px',
            12: '12px',
            13: '13px',
            14: '14px',
            15: '15px',
            16: '16px',
            17: '17px',
            18: '18px',
            19: '19px',
            20: '20px',
            21: '21px',
            22: '22px',
            23: '23px',
            24: '24px',
            25: '25px',
            26: '26px',
            27: '27px',
            28: '28px',
            29: '29px',
            30: '30px',
            36: '36px',
            48: '48px',
            64: '64px',
            55: '55px',
        },



        extend: {

            gridTemplateColumns: {
                'listView': 'minmax(100px, 200px) minmax(100px, 1fr) minmax(100px, 200px) minmax(100px, 200px) max(50px)',
            },

            colors: {
                white: "#FFFFFF",
                dark: '#383838',
                gray: {
                    400: '#B5B5B5',
                    500: '#838383',
                    600: '#686868',
                    700: '#525252',
                    800: '#383838',
                },
                transparent: 'rgba(0, 0, 0, 0)'
            },
            rotate: {
                '-180': '-180deg',
                '-90': '-90deg',
                '-45': '-45deg',
                '0': '0',
                '45': '45deg',
                '90': '90deg',
                '135': '135deg',
                '180': '180deg',
                '270': '270deg',
                '30': '30deg',
                '20': '20deg',
            },
            inset: {
                '0': 0,
                '64': '16rem',
                '1/5': '20%',
                '60': '60px',
            },
            maxWidth: {
                'fullscreen': '100%',
                '150px': '150px'
            },
            minWidth: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                '300px': '300px',
                '160px': '160px',
            },
            minHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                '70px': '70px',
                '300px': '300px',
                '400px': '400px',
            },
            maxWidth: {
                '1440px': "1440px"
            },
            fontFamily: {
                'quicksand': ['Quicksand', 'sans-serif', 'Arial'],
                'encode': ['Encode', 'sans-serif', 'Arial'],
            },
            spacing: {
                '14': '3.5rem',
                '13': '3.25rem',
                '19': '4.5rem',
                '1px': '1px',
                '2px': '2px',
                '3px': '3px',
                '4px': '4px',
                '5px': '5px',
                '6px': '6px',
                '7px': '7px',
                '8px': '8px',
                '9px': '9px',
                '10px': '10px',
                '11px': '11px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
                '16px': '16px',
                '17px': '17px',
                '18px': '18px',
                '19px': '19px',
                '20px': '20px',
                '21px': '21px',
                '22px': '22px',
                '23px': '23px',
                '24px': '24px',
                '25px': '25px',
                '26px': '26px',
                '27px': '27px',
                '28px': '28px',
                '29px': '29px',
                '30px': '30px',
                '35px': '35px',
                '36px': '36px',
                '40px': '40px',
                '45px': '45px',
                '50px': '50px',
                '55px': '55px',
                '60px': '60px',
                '65px': '65px',
                '67px': '67px',
                '70px': '70px',
                '80px': '80px',
                '85px': '85px',
                '100px': '100px',
                '110px': '110px',
                '120px': '120px',
                '125px': '125px',
                '135px': '135px',
                '150px': '150px',
                '170px': '170px',
                '200px': '200px',
                '235px': '235px',
                '238px': '238px',
                '250px': '250px',
                '275px': '275px',
                '300px': '300px',
                '325px': '325px',
                '345px': '345px',
                '335px': '335px',
                '350px': '350px',
                '375px': '375px',
                '400px': '400px',
                '450px': '450px',
                '650px': '650px',
                '815px': '815px',
                '32vw': '32vw',
                '57vw': '57vw',
                '70vw': '70vw',
                '50%': '50%',
                '1440px': '1440px',
                '1000px': '1000px',
                '30vh': '30vh',
                '50vh': '50vh',
                '90vh': '90vh',
                '100vh': '100vh',
                '32wp': 'calc(min(1440px, 100vw) * 0.32)',


            },
            borderRadius: {
                'none': '0',
                'sm': '5px',
                default: '10px',
                'lg': '20px',
                'special': '0 0 14px 14px',
                'full': '9999px',
            },
            boxShadow: {
                'card': '0px 5px 20px rgba(0, 0, 0, 0.1)',
                'ontop': '0px -5px 20px rgba(0, 0, 0, 0.1)',
            },

        },
        variants: {},
        plugins: [],
    }
};