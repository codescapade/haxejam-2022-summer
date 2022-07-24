package;

import aeons.core.Game;

import scenes.GameScene;

class Main {
  static function main() {
    new Game({
      title: 'haxejam-2022-summer',
      preload: true,
      startScene: new GameScene(),
      designWidth: 800,
      designHeight: 600
    });
  }
}
