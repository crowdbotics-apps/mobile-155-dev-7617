import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48953Navigator from '../features/BlankScreen48953/navigator';
import BlankScreen58952Navigator from '../features/BlankScreen58952/navigator';
import BlankScreen58950Navigator from '../features/BlankScreen58950/navigator';
import BlankScreen48947Navigator from '../features/BlankScreen48947/navigator';
import BlankScreen18937Navigator from '../features/BlankScreen18937/navigator';
import BlankScreen28936Navigator from '../features/BlankScreen28936/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen48953: { screen: BlankScreen48953Navigator },
BlankScreen58952: { screen: BlankScreen58952Navigator },
BlankScreen58950: { screen: BlankScreen58950Navigator },
BlankScreen48947: { screen: BlankScreen48947Navigator },
BlankScreen18937: { screen: BlankScreen18937Navigator },
BlankScreen28936: { screen: BlankScreen28936Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
