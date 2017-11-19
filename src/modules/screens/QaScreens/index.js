import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import ScreenOne from "./ScreenOne.js";
import ScreenTwo from "./ScreenTwo.js";
import ScreenThr from "./ScreenThr.js";
import ScreenFou from "./ScreenFou.js";
import ScreenFiv from "./ScreenFiv.js";
import ScreenSix from "./ScreenSix.js";
import ResultScreen from "./../ResultScreen/index.js";
import HelpScreen from "./../HelpScreen/index.js"

export default (DrawNav = StackNavigator({
  ScreenOne: { screen: ScreenOne },
  ScreenTwo: { screen: ScreenTwo },
  ScreenThr: { screen: ScreenThr },
  ScreenFou: { screen: ScreenFou },
  ScreenFiv: { screen: ScreenFiv },
  ScreenSix: { screen: ScreenSix },
  ResultScreen: { screen: ResultScreen },
  HelpScreen: { screen: HelpScreen }
}));