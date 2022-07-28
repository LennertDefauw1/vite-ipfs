import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { IPFS, create} from 'ipfs-core'


const t = create();
console.log(t)

createApp(App).mount('#app')
