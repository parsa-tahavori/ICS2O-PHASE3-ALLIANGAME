/* global Phaser */

// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Nov 2022
// This is the Splash Scene
/** 
* This class is the Splash Scene.
  */
class SplashScene extends Phaser.Scene {
  /**
* This method is the construtor.
  */
  constructor() {
    super({ key: "splashScene" })
  }
  /**
* Can be defined on your own Scenes.
* This method is called by the Scene Manager when the scene starts, before preload() and create().
  @param {object} data - any data passed via ScencePlugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setBackgroundcolor("ffffff")
  }
  /**
* Can be defined on your own Scenes.
  *use it to load assets.
  */
  preload() {
    console.log("Splash Scene")
  }
  /**
* can be defined on your own Scenes.
  * use it to create your game objects.
  *@param {object} data - any data passed via ScenePlugin.add() or ScencePlugin.start().
  */
  create(data) {
    //pass
  }
  /**
* this method is called once per game step while the scene is running.
  *@param {number} time - the current time. 
  * @param {number} delta- the delta time in ms since the last frame.
  */
  update(time, delta) {
    this.scene.switch("titleScene")
  }
}

export default SplashScence