import ReactGA from 'react-ga';
import Router from 'next/router';
import { RouteEvents, GaEventCategory } from 'enums';

export const initGA = () => {
  ReactGA.initialize('UA-xxxxxxxxx-1');

  // Register ga PageViews
  Router.events.on(RouteEvents.RouteChangeComplete, logPageView);

  Router.events.on(RouteEvents.RouteChangeError, ({ cancelled }: { cancelled: boolean }, url: string) =>
      ReactGA.exception({
        trigger: GaEventCategory.PageView,
        fatal: false,
        description: `Failed to go to ${url}`,
        cancelled,
      })
    );
};

export const logPageView = (url: string) => {
  ReactGA.set({
    page: url,
  });

  ReactGA.pageview(url);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({
      category,
      action,
    });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({
      description,
      fatal,
    });
  }
};
