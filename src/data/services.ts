import websiteDesign from '../assets/services/website-design.svg';
import webDevelopment from '../assets/services/web-development.svg';
import brandIdentity from '../assets/services/brand-identity.svg';
import uiUxDesign from '../assets/services/ui-ux-design.svg';
import motionInteraction from '../assets/services/motion-interaction.svg';
import adsVisibility from '../assets/services/ads-online-visibility.svg';

// Replace an individual asset import to change its illustration independently.
export const services = [
  {
    id: 'website', number: '01', title: 'Website Design', artwork: websiteDesign,
    description: "Create visually distinctive, responsive websites tailored to each client's identity, audience, and goals.",
  },
  {
    id: 'development', number: '02', title: 'Web Development', artwork: webDevelopment,
    description: 'Build fast, functional, scalable websites with modern technologies and carefully engineered interactions.',
  },
  {
    id: 'identity', number: '03', title: 'Brand Identity', artwork: brandIdentity,
    description: 'Develop cohesive visual identities that give businesses and organizations a recognizable digital presence.',
  },
  {
    id: 'experience', number: '04', title: 'UI/UX Design', artwork: uiUxDesign,
    description: 'Design intuitive interfaces and thoughtful user experiences that make digital products easier and more enjoyable to use.',
  },
  {
    id: 'motion', number: '05', title: 'Motion & Interaction', artwork: motionInteraction,
    description: 'Introduce purposeful animation and interactive details that make digital experiences feel responsive, engaging, and memorable.',
  },
  {
    id: 'visibility', number: '06', title: 'Ads & Online Visibility', artwork: adsVisibility,
    description: 'Help businesses and brands reach the right audience through targeted online advertising, improved digital visibility, and effective promotional strategies.',
  },
] as const;

export type Service = (typeof services)[number];
