<template>
    <v-selectpage ref="selectify" :data="list" key-field="id" show-field="name" ></v-selectpage>
</template>

<script>
var options = [
  { id: 1, name: 'chocolate', desc: 'Chocolate' },
  { id: 2, name: 'strawberry', desc: 'Strawberry' },
  { id: 3, name: 'vanilla', desc: 'Vanilla' }
];
export default {
    data(){
        return {list: options}
    },
    mounted: function() {
      console.log('mounted',this.$refs.selectify);
    }
};
</script>