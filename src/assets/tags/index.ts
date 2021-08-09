import DesignPattern from "./DesignPattern"
import FrontEnd from "./FrontEnd"
import Programming from "./Programming"
import ReactIcon from './ReactIcon'
import Testing from "./Testing"
import TypeScript from "./TypeScript"
import Vue from "./Vue"
import Talk from "./Talk"
import Reminiscence from "./Reminiscence"
import All from "./All"
import Book from "./Book"

export default [
  {
    name: 'All',
    component: All,
  },
  {
    name: 'React',
    component: ReactIcon
  },
  {
    name: 'FrontEnd',
    component: FrontEnd
  },
  {
    name: 'TypeScript',
    component: TypeScript
  },
  {
    name: '회고',
    component: Reminiscence
  },
  {
    name: '잡담',
    component: Talk
  },
  {
    name: '독후감',
    component: Book
  },
  {
    name: 'Design Pattern',
    component: DesignPattern
  },
  {
    name: 'Programming',
    component: Programming
  },
  {
    name: 'Testing',
    component: Testing
  },
  {
    name: 'Vue',
    component: Vue
  },
]