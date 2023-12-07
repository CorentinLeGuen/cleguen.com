<template>
    <div>
        <header>
            <title>cleguen | homepage</title>
        </header>
        <h1 class="text-center">{{ $t('welcome') }}</h1>
        <hr />
        <div class="alert alert-danger text-center" role="alert">
            {{ $t('under_construction') }} {{ $t('contact_intro') }} <a class="link-offset-2 link-underline link-underline-opacity-0" style="color: #D16C15;"
                href="mailto:contact@cleguen.com">{{ $t('contact') }}</a>.
        </div>
        <br />
        <div class="alert alert-danger text-center" role="alert">
            {{ $t('under_construction_translate') }}
        </div>
    </div>
</template>