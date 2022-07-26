
let project = new Project('haxejam-2022-summer');

project.addAssets('assets/**', {
  nameBaseDir: 'assets',
  destination: '{dir}/{name}',
  name: '{dir}/{name}'
});

project.icon = 'icon.png';

project.addShaders('shaders/**');

project.addSources('source');

project.addLibrary('aeons');
project.addLibrary('ldtk-haxe-api');
project.addLibrary('deepnightLibs');

project.addDefine('use_ldtk');




resolve(project);