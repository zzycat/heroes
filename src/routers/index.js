import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroesList from '@/views/heroes/list'
import WeaponsList from '@/views/weapons/list'
import EquipList from '@/views/equip/list'
import HeroesAdd from '@/views/heroes/add'
import HeroesEdit from '@/views/heroes/edit'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      name: 'home',
      path: '/',
      redirect: {
        name: '/heroes'
      }
    },
    {
      name: 'heros',
      path: '/heroes',
      component: HeroesList
    },
    {
      name: 'weapons',
      path: '/weapons',
      component: WeaponsList
    },
    {
      name: 'equip',
      path: '/equip',
      component: EquipList
    },
    {
      name: 'herosadd',
      path: '/heroesadd',
      component: HeroesAdd
    },
    {
      name: 'herosedit',
      path: '/heroesedit',
      component: HeroesEdit
    }
  ]
})
