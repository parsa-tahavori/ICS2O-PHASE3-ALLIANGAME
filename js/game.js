/* global Phaser */

// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Nov 2022
// This is the Phaser3 game configuration file

// sene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
// create the new scenes
const splashScene = new splashScene()
const titleScene = new TitleScene()
/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
      arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autocenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
//console.log(game)

//load scenes
//note: remeber any "key" is golbal and can not be reused
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
// the start scene
game.scene.start("splashScene")