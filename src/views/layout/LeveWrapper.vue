<template>
    <!-- Main Area -->
    <main class="content-wrapper col-lg-8 mt-4 mt-lg-0">
        <div class="mb-4">
            <slot name="content-top"></slot>
        </div>
        <div class="mb-4">
            <slot name="content-middle"></slot>
        </div>
        <div>
            <slot name="content-bottom"></slot>
        </div>
     </main>

    <!-- Right Aside -->
    <aside class="col-lg-2 d-none d-lg-block p-3">
        <slot name="aside-right"></slot>
    </aside>
</template>
