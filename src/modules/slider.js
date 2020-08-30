import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


export const CommonSlider = withStyles({
    root: {
      color: '#E90000',
      height: 0,
    },
    thumb: {
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    rail: {
      height: 2,
      opacity: 1,
      backgroundColor: '#5C78E0',
    },
    mark: {
      backgroundColor: '#5C78E0',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    
    
  })(Slider);
  