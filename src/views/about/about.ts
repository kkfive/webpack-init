/**
 * @description: about入口文件
 */
import 'lib-flexible'
import './about.scss'
import * as $ from 'jquery'

import { appJump } from '@/utils/app'
import imgSrc from '@/assets/image/43E6CD60BE495FF0D51094AB155EC0BA.png'

appJump('242', '', '')

$('img').attr('src', imgSrc)
