import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const useTour = () => {
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');

    if (!hasSeenTour) {
      const driverObj = driver({
        showProgress: true,
        steps: [
          { popover: { title: 'How It Works', description: 'Take a quick interactive tour to learn how to navigate this portfolio.' } },
          { element: '#routes ul', popover: { title: 'Start Exploring', description: 'Navigate the site to discover what I’ve built, how I work, and what I offer.', side: "left", align: 'center' }},
          { element: '#routes li:nth-child(5)', popover: { title: 'Close All Tabs', description: 'Click here to close all open tabs at once.', side: "left", align: 'center' }},
          { element: '#settings', popover: { title: 'Appearance', description: 'Use the settings panel to personalize the look of the site. Play with color modes and visual filters to personalize your experience.', side: "bottom", align: 'start' }},
          { element: '#cv', popover: { title: 'Get My CV', description: 'Get a PDF version of my Curriculum Vitae.', side: "bottom", align: 'start' }},
          { popover: { title: "You're All Set!", description: 'Thanks for taking the tour. Feel free to explore the site at your own pace.' } }
        ],
      
          onDestroyStarted: () => {
            localStorage.setItem('hasSeenTour', 'true');
          }
      });

      driverObj.drive();
    }
  }, []);
};

export default useTour;
