window.onload = function() {
  (function() {
    var openComment, styles, time, writeStyleChar, writeStyles;

    styles = "/* \n * \"Myself v1.0.3\"\n * Authored by Cesar Daniel\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 11px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* ...\n *\n * Oh, hola No te vi llegar!\n *\n * Estaba a punto de animar un corazon en CSS.\n * Por supuesto, puedes mirar.\n *\n * Voy a hacerlo sencillo\n   solo inyectare este CSS en mi DOM <style> element\n   y luego escribire todo en este <pre> element\n */\n\n pre { \n  position: fixed; width: 60%;\n  top: 30px; bottom: 30px; left: 30%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px\n  rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n *\n/* Un momento, dejame mover\n  esta mi**** un poco*/\n\n pre { left: 40%; }\n\n\n/*\n * Mucho mejor!\n */\n\n\n/* Ok! Tiempo de empezar\n  nuestro asombroso corazon!\n */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 10 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* Vamos a poner un poco de profundidad  */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* Pongamos un mensaje personal\n   para hacerlo mas original. */\n\n#heart i::before {\n  content: 'Este corazon late por la programacion!';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px\n  rgba(0,0,0,0.2);\n}\n\n\n/* \n * Vamos bien. \n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.2;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * Hermoso! Pero no hay corazon \n sin latidos!\n */\n\n/* \n * Un momento... \n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * Preparados...?\n */\n\n#heart, #echo {\n\n/* \n * .listos...!\n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n\n/*\n * ...late!\n */\n  \n}\n\n/* \n *\n * Ya esta!\n *\n * Lo hicimos!\n \n * Dejenme saber que les parecio\n *\n * Rise above and always spread the love.\n *\n *\n *Feliz dia de San Valentin! <3\n * Muchos exitos,\n   Cesar Daniel */";

    openComment = false;

    writeStyleChar = function(which) {
      if (which === '/' && openComment === false) {
        openComment = true;
        styles = $('#style-text').html() + which;
      } else if (which === '/' && openComment === true) {
        openComment = false;
        styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
      } else if (which === ':') {
        styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
      } else if (which === ';') {
        styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
      } else if (which === '{') {
        styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
      } else {
        styles = $('#style-text').html() + which;
      }
      $('#style-text').html(styles);
      return $('#style-tag').append(which);
    };

    writeStyles = function(message, index, interval) {
      var pre;
      if (index < message.length) {
        pre = document.getElementById('style-text');
        pre.scrollTop = pre.scrollHeight;
        writeStyleChar(message[index++]);
        return setTimeout((function() {
          return writeStyles(message, index, interval);
        }), interval);
      }
    };

    $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

    time = window.innerWidth <= 578 ? 64 : 64;

    writeStyles(styles, 0, time);

  }).call(this);
};
