<template>
    <div class="index">
        <div class="indexleft indexbox position">
            <div class="indexshuihan bgtitle">
                <div class="title">水旱灾害防御</div>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div></div>
            <div class="bgtitle">
                <div class="title">水旱灾害防御</div>
                <div></div>
            </div>
            <div class="bgtitle">
                <div class="title">水旱灾害防御</div>
                <div></div>
            </div>
        </div>
        <div class="indexright indexbox position">
            <div class="bgtitle">
                <div class="title">水旱灾害防御</div>
                <div></div>
            </div>
            <div class="bgtitle">
                <div class="title">水旱灾害防御</div>
                <div></div>
            </div>
            <div class="bgtitle">
                <div class="title">水旱灾害防御</div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>






</script>
<style xml:lang="sass" scoped>
.index {
    .indexbox {
        width: 22.395833rem
            /* 430/19.2 */
        ;
        height: 50rem
            /* 960/19.2 */
        ;

        top: 109px;
        width: 480px;
        height: 960px;
        opacity: 1;
        background: rgba(6, 25, 52, 0.49);
        backdrop-filter: blur(8.16px);
        color: white;
    }

    .indexleft {
        left: 0px;
        padding-left: 1.5625rem
            /* 30/19.2 */
        ;

        .indexshuihan {}
    }

    .indexright {
        right: 0px;
        padding-right: 1.5625rem
            /* 30/19.2 */
        ;
    }

    .title {
        width: 7.8125rem
            /* 150/19.2 */
        ;
        height: 1.041667rem
            /* 20/19.2 */
        ;
        font-size: .9375rem
            /* 18/19.2 */
        ;
        font-weight: 700;
        font-family: shuma;
        align-items: center;
        text-shadow: 0 0 .208333rem
            /* 4/19.2 */
            #0091FF;
        margin-left: 3.072917rem
            /* 59/19.2 */
        ;
        line-height: 1.041667rem
            /* 20/19.2 */
        ;
        padding-top: .520833rem
            /* 10/19.2 */
        ;
    }

    .bgtitle {
        width: 22.864583rem
            /* 439/19.2 */
        ;
        height: 2.03125rem
            /* 39/19.2 */
        ;
        background-image: url(../assets/title.png);
    }
}
</style>