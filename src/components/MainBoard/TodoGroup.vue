<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ITodo } from '@/types/ITodo'
const props = defineProps<{
  data: object
}>()

const isExpand = ref(true)
const clickHandler = () => {
  isExpand.value = !isExpand.value
}

// TODO[bug]: WORKAROUND, remove type assert
const items = computed(() => props.data.itemArray as ITodo[])
</script>
<!-- <template>
  <li class="divider" @click="clickHandler">
    <SvgIcon class="icon arrow" name="down-arrow" />
    <template v-if="'listName' in data">
      <span>{{ data.listName }}</span>
    </template>
    <template v-else-if="'isPrevious' in data">
      <span>{{ data.isPrevious ? '先前' : '稍后' }}</span>
    </template>
    <template v-else-if="'isCompleted' in data">
      <span>{{ data.isCompleted ? '已完成' : '未完成' }}</span>
    </template>
    <span>{{ data.todoNum }}</span>
  </li>

  <TodoItem
    v-for="(v, index) in items"
    v-show="isExpand"
    :key="index"
    :data="v"
  />
</template> -->
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
li.divider {
  display: inline-flex;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  background-color: rgba($color: $deep-white, $alpha: 0.9);
  border-radius: 4px;
  & > * {
    margin: 0 5px;
  }
  .icon {
    height: 16px;
    width: 16px;
  }
  &:hover {
    background-color: rgba($color: $deep-white, $alpha: 1);
  }
}
</style>
