<template>
  <div class="z-form-item">
    <span 
      v-if="isRequired"
      class="required"> * 
    </span>
    <slot></slot>

  </div>
</template>

<script scoped type="text/ecmascript-6">
  export default {
    name: 'zFormItem',

    inject: ['form'],

    props: {
      prop: {
        type: String
      }
    },

    data () {
      return {
        fields: [],
        isRequired: false,
        rules: []
      }
    },

    beforeDestroy () {
      this.dispatch('zForm', 'on-form-item-remove', this);
    },

    created () {
      this.setRules();
      this.$on('on-form-change', this.onFieldChange);
      this.$on('on-form-blur', this.onFieldBlur);
    },

    mounted () {
      if (this.prop) this.dispatch('zForm', 'on-form-item-add', this);
    },

    methods: {
      setRules () {
        const formRules = this.form.rules;
        const rules = formRules 
          ? formRules[this.prop] 
            ? formRules[this.prop]
            : []
          : [];
        this.rules = rules;
        this.isRequired = rules.every(rule => rule.required);
      },

      onFieldChange (field) {
        
      },

      onFieldBlur (field) {
        console.log(this.form.model);
      }
    }
  }
</script>

<style>
  .z-form-item {
    margin-bottom: 10px;
  }
  .required {
    display: inline-block;
    color: #f00;
  }
</style>
