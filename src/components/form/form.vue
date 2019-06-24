<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    name: 'zForm',

    provide () {
      return {
        form: this
      }
    },

    props: {
      model: {
        type: Object,
        default () {
          return {};
        }
      },

      rules: {
        type: Object
      }
    },

    data () {
      return {
        fields: []
      }
    },

    created () {
      this.$on('on-form-item-add', field => {
        this.fields.push(field);
      });
      this.$on('on-form-item-remove', field => {
        if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
      });
      console.log('this.fields: ', this.fields);
    },

    mounted () {
      
    }
  }
</script>
