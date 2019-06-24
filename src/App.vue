<template>
  <div class="app-container">

    <Modal v-model="isShowModal">
      <Form :model="formData" :rules="validateRules">
        <FormItem prop="email">
          <Input v-model="formData.email" @on-change="changeEmail" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem prop="upwd">
          <Input v-model="formData.upwd" @on-change="changeUpwd" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem prop="mark">
          <Input v-model="formData.mark" placeholder="备注"></Input>
        </FormItem>
        <FormItem>
          <Button type="success" @click="submit">提交</Button>
        </FormItem>
      </Form>
    </Modal>

    <Button type="primary" size="middle" v-if="!isShowModal" @click="showModal">显示模态框</Button>
  </div>
</template>

<script scoped type="text/ecmascript-6">
  import Form from './components/form';
  import Hello from './components/test/hello';
  import Button from './components/button';
  import Input from './components/input';
  import Modal from './components/modal';

  export default {
    name: 'APP',

    data () {
      return {
        formData: {
          email: 'zymfe@foxmail.com',
          upwd: '',
          mark: ''
        },
        isShowModal: false,
        isShowAlert: false,
        message: '',
        validateRules: {
          email: [
            { required: true, message: '邮箱不能为空',  trigger: 'blur' },
            { type: 'email',  message: '邮箱格式不正确', trigger: 'blur' }
          ],
          upwd: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ]
        }
      }
    },

    components: {
      Form,
      FormItem: Form.Item,
      Hello,
      Button,
      Input,
      Modal
    },

    created () {
      
    },

    mounted () {
      
    },

    methods: {
      submit () {
        this.$Alert.error({
          message: 'Hello World'
        });
      },

      changeEmail (e) {
        console.log(e);
      },

      changeUpwd (e) {

      },

      showModal () {
        this.isShowModal = true;
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
