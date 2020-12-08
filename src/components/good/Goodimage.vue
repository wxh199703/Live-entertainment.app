<template>
  <div>
      <comment :newid="id"></comment>
  </div>
</template>

<script>








import comment from '../sub-components/Comment.vue'
export default {
    data () {
        return {

        }
    },


    props: [ 'id'],

    methods: {

    },

    components: {
        comment
    },
}
</script>

<style>

</style>