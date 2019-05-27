import { COLORS, METRICS } from '../../themes';

const defaultNavigatorStyle = {
  headerStyle: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
  },
  headerTintColor: COLORS.black,

  headerLeftContainerStyle: {
    justifyContent: 'center',
    marginLeft: METRICS.spacing
  },
  headerRightContainerStyle: {
    justifyContent: 'center',
    marginRight: METRICS.spacing
  },

  headerTitleStyle: {
    fontWeight: 'bold',
  }
};

export {
  defaultNavigatorStyle
}