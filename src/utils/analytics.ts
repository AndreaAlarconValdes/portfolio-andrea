import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-VMQ47VTXGC';

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
