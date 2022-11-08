/* global Phaser */

// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Nov 2022
// This is the Phaser3 game configuration file

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  // set background color
  backgroundColor: 0x5f6e7a,
};

const game = new Phaser.Game(config);
console.log(game);
