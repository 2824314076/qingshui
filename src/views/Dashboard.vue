<template>
    <div class="bus">
        <div class="busTop bgsize position display">
            <div class="logleft display justifycontent">
                <ul class="display">
                    <li v-for="item in top.data0">{{ item }}</li>
                </ul>
                <ul class="display">
                    <li v-for="item in top.data1">{{ item }}</li>
                </ul>
            </div>
            <div class="buslog position"></div>
        </div>
        <div class="buscenter">
            <div class="busleft bgsize position"></div>
            <div>
                <HomeIndex />
            </div>
            <div class="busright bgsize position"></div>
        </div>
        <div class="busbottom position"></div>
    </div>
</template>

<script lang="ts" setup>
import HomeIndex from '../components/index.vue'
import { ref } from 'vue'
let top = ref(
    {
        data0: ['河流监测', '水旱灾害', '供水保障', '水资源'],
        data1: ['水雨情', '水利工程', '视频监视', '四预']
    }
)
</script>

<style xml:lang="sass" scoped>
.bus {
    width: 100rem
        /* 1920/19.2 */
    ;
    height: 56.25rem
        /* 1080/19.2 */
    ;
    margin: 0;
    padding: 0;
    background: radial-gradient(48% 50% at 50% 50%, rgba(0, 144, 225, 0.25) 2%, rgba(5, 118, 223, 0.03) 100%), #000820;

    .busTop {
        width: 100rem
            /* 1920/19.2 */
        ;
        height: 3.645833rem
            /* 70/19.2 */
        ;
        background-image: url('../assets/top.png');

        .logleft {
            width: 90rem
                /* 1567/19.2 */
            ;
            height: 1.354167rem
                /* 26/19.2 */
            ;
            margin-left: 6rem
                /* 177/19.2 */
            ;

            ul {
                font-size: 1.041667rem
                    /* 20/19.2 */
                ;
                font-weight: 500;
                list-style: none;

                li {
                    width: 4.166667rem
                        /* 80/19.2 */
                    ;
                    height: 1.25rem
                        /* 24/19.2 */
                    ;
                    margin-right: 2.447917rem
                        /* 47/19.2 */
                    ;
                    background: linear-gradient(180deg, #FFFFFF 53%, #CDE4FF 69%, #95CCFF 85%), #FFFFFF;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
            }
        }

        .buslog {
            width: 78.697917rem
                /* 1511/19.2 */
            ;
            height: 12.03125rem
                /* 231/19.2 */
            ;
            top: -6.041667rem
                /* 116/19.2 */
            ;
            left: 12.135417rem
                /* 233/19.2 */
            ;
            opacity: 1;
            background-image: url('../assets/buslog.png');
        }
    }

    .buscenter {
        .busleft {
            top: 0;
            width: 1.666667rem
                /* 32/19.2 */
                /* 50/19.2 */
            ;
            height: 56.25rem
                /* 1080/19.2 */
            ;
            background-image: url(../assets/left.png);
            z-index: 10;
        }

        .busright {
            top: 0;
            right: 0;
            width: 1.666667rem
                /* 32/19.2 */
            ;
            height: 56.25rem
                /* 1080/19.2 */
            ;
            background-image: url(../assets/right.png);
            z-index: 10;

        }

    }

    .busbottom {
        top: 54.166667rem
            /* 1040/19.2 */
        ;
        width: 100rem
            /* 1920/19.2 */
        ;
        height: 2.083333rem
            /* 40/19.2 */
        ;
        background-image: url(../assets/bottom.png);
    }

    .bgsize {
        background-size: 100% 100%;
    }
}
</style>