<template>
    <div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        <!-- HEADER -->
        <header class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            <h1
                class="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                GameManager
            </h1>

            <div class="flex items-center gap-4">
                <!-- Seletor de Idioma Customizado -->
                <!--<div class="relative" ref="langMenuRef">
                    <button @click="toggleLangMenu" class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 
                               dark:border-gray-700 bg-white dark:bg-gray-800 text-sm hover:bg-gray-50 
                               dark:hover:bg-gray-700 transition">
                        <span>{{ currentLangFlag }}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div v-if="showLangMenu" class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 
                               border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                        <button @click="changeLanguage('pt-BR')" class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 
                                   flex items-center gap-2 transition">
                            🇧🇷 Português
                        </button>
                        <button @click="changeLanguage('en')" class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 
                                   flex items-center gap-2 transition">
                            🇺🇸 English
                        </button>
                        <button @click="changeLanguage('es')" class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 
                                   flex items-center gap-2 transition">
                            🇪🇸 Español
                        </button>
                    </div>
                </div> -->

                <NuxtLink to="/login"
                    class="text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                    {{ t('auth.login') }}
                </NuxtLink>
            </div>
        </header>




        <!-- HERO -->
        <section class="relative overflow-hidden max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16">
            <div class="flex flex-col justify-center gap-6 z-10">
                <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
                    {{ t('landing.hero.title') }}
                    <span class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {{ t('landing.hero.subtitle') }}
                    </span>
                </h1>

                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                    {{ t('landing.hero.description') }}
                </p>

                <div class="flex flex-wrap gap-4">
                    <NuxtLink to="/register"
                        class="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        {{ t('landing.hero.cta') }}
                    </NuxtLink>

                    <a href="#how" class="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                        {{ t('landing.hero.howItWorks') }}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="flex items-center justify-center relative">
                <div class="w-full max-w-md h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600
                      shadow-2xl flex items-center justify-center text-white">
                    <div class="text-center">
                        <p class="text-sm opacity-80 mb-2">Preview do sistema</p>
                        <p class="text-xl font-bold">Dashboard • Rankings • Jogos</p>
                    </div>
                </div>
            </div>

            <div class="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        </section>

        <!-- COMO FUNCIONA -->
        <section id="how" class="bg-white dark:bg-gray-800 py-24">
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-16">
                    {{ t('landing.steps.title') }}
                </h2>

                <div class="grid md:grid-cols-3 gap-8">
                    <Step number="1" :title="t('landing.steps.step1.title')"
                        :description="t('landing.steps.step1.description')" />
                    <Step number="2" :title="t('landing.steps.step2.title')"
                        :description="t('landing.steps.step2.description')" />
                    <Step number="3" :title="t('landing.steps.step3.title')"
                        :description="t('landing.steps.step3.description')" />
                </div>
            </div>
        </section>

        <!-- BENEFÍCIOS -->
        <section class="py-24">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-4 gap-6">
                    <Benefit :text="t('landing.benefits.benefit1')" />
                    <Benefit :text="t('landing.benefits.benefit2')" />
                    <Benefit :text="t('landing.benefits.benefit3')" />
                    <Benefit :text="t('landing.benefits.benefit4')" />
                </div>
            </div>
        </section>

        <!-- CTA FINAL -->
        <section class="py-24 bg-blue-600 text-white text-center">
            <h3 class="text-3xl font-bold mb-4">
                {{ t('landing.cta.title') }}
            </h3>
            <p class="mb-8 opacity-90">
                {{ t('landing.cta.description') }}
            </p>

            <NuxtLink to="/auth/register"
                class="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition">
                {{ t('landing.cta.button') }}
            </NuxtLink>
        </section>

    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Step from '../../components/Step.vue'
import Benefit from '../../components/Benefit.vue'
import { useRoute, useRouter } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

// Ler idioma da URL
const langFromQuery = computed(() => route.query.lang as string)

// Sincronizar locale com query (unificado)
watch(langFromQuery, (newLang) => {
    if (newLang && ['pt-BR', 'en', 'es'].includes(newLang)) {
        console.log('Setting locale from query:', newLang)
        locale.value = newLang
    }
}, { immediate: true })

onMounted(() => {
    console.log('Current locale:', locale.value)
    console.log('Test translation:', t('landing.hero.title'))
})

const showLangMenu = ref(false)
const langMenuRef = ref<HTMLElement | null>(null)

const currentLangFlag = computed(() => {
    const flags: Record<string, string> = {
        'pt-BR': '🇧🇷',
        'en': '🇺🇸',
        'es': '🇪🇸'
    }
    return flags[locale.value] || '🌐'
})

const toggleLangMenu = (event: Event) => {
    event.stopPropagation()
    showLangMenu.value = !showLangMenu.value
}

const changeLanguage = (lang: string) => {
    console.log('Changing to:', lang)
    locale.value = lang
    console.log('New locale:', locale.value)
    console.log('New translation:', t('landing.hero.title'))
    showLangMenu.value = false

    // Navegar com query param
    router.push({ query: { lang } })
}

// Fechar menu ao clicar fora
const handleClickOutside = (event: Event) => {
    if (langMenuRef.value && !langMenuRef.value.contains(event.target as Node)) {
        showLangMenu.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>