/**
 * AppNavigator
 */

import React, { Component } from "react";
import StartupScreen from "./StartupScreen.js";
import SideBar from "./../SideBar/SideBar.js";
import QaScreen from "./../QaScreens/index.js";

import { DrawerNavigator } from "react-navigation";

const AppNavigator = DrawerNavigator(
  {
    Startup: { screen: StartupScreen },
    QaScreen: { screen: QaScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default AppNavigator;