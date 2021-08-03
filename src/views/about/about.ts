/**
 * @description: about入口文件
 */
import 'lib-flexible'
import './about.scss'
import * as $ from 'jquery'

// eslint-disable-next-line import/extensions
import say from '@/utils/sayHello'
import imgSrc from '@/assets/image/43E6CD60BE495FF0D51094AB155EC0BA.png'

say.say('about')

$('img').attr('src', imgSrc)
