Gulp - сборка KDA
Gulp 4

html - components
css - scss, mixins
img - min,webp,svgSprite
js - min
fonts - ....

Команды:

`npm run dev` (gulp --dev) - базовая команда, которая запускает сборку для разработки, используя browser-sync

`npm run build` (gulp build --build) - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`npm run cache` (gulp cache) - команда, которую стоит запускать после `gulp build`, если вам нужно загрузить новые файлы на хостинг без кэширования.

`npm run zip` (gulp zip --build)- команда собирает ваш готовый код в zip-архив.

npm run dev
npm run build

!!!!"html": "node-w3c-validator -f lint -evH -i app/\*_/_.html", - здесь будет не папка app, а название проекта

npm i gulp-cli -g
npm i -D gulp
npm i -D gulp-file-include
npm i -D del
npm i -D gulp-typograf
npm i -D gulp-if
npm i -D sass
npm i -D gulp-sass
npm i -D gulp-clean-css
npm i -D gulp-autoprefixer
npm i -D browser-sync
npm i -D gulp-concat
npm i -D gulp-newer
npm i -D gulp-notify
npm i -D gulp-imagemin
npm i -D gulp-svg-sprite
npm i -D gulp-svg-sprite
npm i -D gulp-group-css-media-queries
npm i -D gulp-webp
npm i -D gulp-webp-html-nosvg
npm i -D gulp-plumber
npm i -D gulp-if
npm i -D gulp-fonter
npm i -D gulp-ttf2woff2
npm i -D gulp-svgmin
npm i -D gulp-version-number
npm i -D gulp-zip
npm i -D webpack
npm i -D webpack-stream
npm i -D babel-loader @babel/core @babel/preset-env webpack
npm i -D terser-webpack-plugin
npm i -D editorconfig-checker
npm i -D gulp-uglify-es
npm i -D gulp-rename

настройка линтеров
https://tproger.ru/articles/podgotovka-okruzhenija-react-prilozhenija-vscode-prettier-eslint-stylelint-husky/

настройки по stylelint
https://github.com/stylelint-scss/stylelint-scss

npm i -D prettier eslint-config-prettier eslint-plugin-prettier
prettier — сам форматер.
eslint-config-prettier — отключает правила, которые могут конфликтовать с prettier.
eslint-plugin-prettier — даёт возможность отображать ошибки связанные с правилами prettier.
"extends": ["react-app", "react-app/jest"],

npm i -D eslint
npm i -D eslint-import-resolver-node
npm i -D eslint-plugin-import
eslint-plugin-import — Данный плагин добавит в ваш проект проверки для импортов и будет следить за тем, чтобы все импортируемые зависимости присутствовали в проекте, подключались в удобном для последующей работы порядке и так далее. Он также входит в CRA.

npm i -D stylelint stylelint-config-standard stylelint-config-clean-order

stylelint — сам линтер.
stylelint-config-standard — содержит согласованные правила написания стилей.
stylelint-order — отвечает за настройку приоритетов и группировки стилей.
stylelint-config-clean-order — правила для написания стилей в правильном порядке. Если есть желание узнать в каком порядке пишутся стили, то можно посмотреть здесь.

"stylelint": "^15.6.0",
"stylelint-order": "^6.0.3",
"stylelint-config-standard-scss": "^9.0.0",

Синхронизация StyleLint и Prettier
npm i -D stylelint-config-prettier - устарело в stylelint v15
stylelint-config-prettier — отключает все правила, которые могут конфликтовать с Prettier.
npm i -D stylelint-config-prettier-scss - увидел, когда искал замену верхнему плагину

Prettier:
"printWidth": 120 - длина строки
"tabWidth": 2 - количество пробелов для отступа
"tabs": false - отступы с помощью табуляции вместо пробелов
"semi": true - точка с запятой в конце операторов
"singleQuote": true - одинарные кавычки вместо двойных
"quoteProps": "as-needed" - «по мере необходимости» запрещает заключать в кавычки имена свойств литерала объекта, которые не являются строго обязательными.
"jsxSingleQuote": true - Используйте одинарные кавычки вместо двойных в JSX.
"trailingComma": "all" - Печатайте конечные запятые везде, где это возможно, в многострочных синтаксических структурах, разделенных запятыми. (Например, однострочный массив никогда не ставит запятые в конце.)
"bracketSpacing": true - Печатать пробелы между скобками в литералах объекта.
"bracketSameLine": false - Поместите '>' многострочного элемента HTML (HTML, JSX, Vue, Angular) в конец последней строки, а не в одиночку на следующей строке (не относится к самозакрывающимся элементам).
"arrowParens": "avoid" - круглые скобки вокруг единственного параметра функции стрелки.
"endOfLine": "auto" - связано с переносами строк в разных операционных системах разные переносы. Сохраняйте существующие окончания строк (смешанные значения в одном файле нормализуются путем просмотра того, что используется после первой строки).

Синхронизация StyleLint и SCSS/SASS
npm i -D stylelint-config-standard-scss

npm i eslint-config-airbnb-base -D

для react
npm i -D stylelint-config-styled-components stylelint-processor-styled-components
stylelint-config-styled-components — эта общая конфигурация автоматически отключит правила, вызывающие неразрешимые конфликты.
stylelint-processor-styled-components — пакет для настройки парсера StyleLint, который будет автоматически определять стилизованные компоненты.
