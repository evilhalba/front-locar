
<v-btn x-small fab style="color: transparent" outlined
       @click="edit(item)"
>
  <icon-fy icon="mdi:note-edit-outline" width="25" height="25"
           style="color: #FEB916; border-radius:3px; border: 2px solid #FEB916"
           dense
           class="mr-2"
  />
</v-btn>


<script>
export default {
  name: "ButtonComponent",
  props: {
    edit: {
      type: Function,
    },
    item:{}
  }
}
</script>

<style scoped>

</style>