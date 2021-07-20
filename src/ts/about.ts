/**
 * @description: about入口文件
 */
import 'lib-flexible'
import '@style/about/index.less'
import * as $ from 'jquery'
import imgSrc from '@image/43E6CD60BE495FF0D51094AB155EC0BA.png'
import say from '@ts/modules/sayHello'

say('about')

$('img').attr('src', imgSrc)
