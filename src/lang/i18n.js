import { createI18n } from 'vue-i18n'
import messages from './index'

const i18n = createI18n({
    // fallbackLocale: 'zh',
    globalInjection: true, // 全域注入，讓你在 <template> 可以使用 $t
    // legacy: true, // 讓你可以在 composition API 中使用
    locale: 'zh',
    messages,
})

export default i18n