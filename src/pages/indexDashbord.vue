<template>
    <Breadcrumbs title="Layout Light" />
    <div class="container-fluid">
        <div class="row starter-main">
            <starterMain />
            <starterKit />
            <simpleCard />
        </div>
    </div>
</template>
<script>
import starterMain from "@/components/starterMain.vue"
import starterKit from "@/components/starterKit.vue"
import simpleCard from "@/components/simpleCard.vue"
export default {
    components: {
        starterMain, simpleCard, starterKit
    }
}
</script>