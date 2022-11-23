/* golbal Phaser*/

// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Nov 2022
// this is the title scene

/*
this class is the title Scene
*/
class TitleScene extends Phaser.Scene{
  /**
this method is the contrutor
*/
  constructor() {
    super({ key: "titleScene"})
  }
  /**
can be defined on your own Scenes. this method is called by the sence manager when the scene starts, before preload() and create().
  @param {object} data- any data passed via Sceneplugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setbackgroundColor("ffffff")
  }
  /**
can be defined your own scenes. use it to load assets.
  */

  preload() {
    console.log("Tilte Scene")
  
  }
  /**
should be overridden by your own scenes.
  this method is called once per game step while the scene is running.
  @param {number} time-the current time.
  @param {number} delta- the delta time in md since the last frame
*/
  update(time, delta) {
    //pass
  }
}

export default TitleScene