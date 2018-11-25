import './lesson_11.scss';
import { trafficLighter } from './scripts/traffic-lighter';

trafficLighter(document.querySelector('#firstLighter'));
trafficLighter(document.querySelector('#secondLighter'), 2000);
trafficLighter(document.querySelector('#thirdLighter'), 500);