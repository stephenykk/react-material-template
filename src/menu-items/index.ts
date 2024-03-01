// project import
import pages from './auth'
import dashboard from './dashboard'
import utilities from './utilities'
import support from './support'
import React from 'react'
import type { ChipOwnProps } from '@mui/material'
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, pages, utilities, support],
}

export type MenuItemType = {
  id: string
  title: string
  type: 'group' | 'item' | 'collapse'
  url: string
  icon?: React.ForwardRefExoticComponent<any>
  breadcrumbs?: boolean
  target?: string
  disabled?: boolean
  external?: boolean
  children: MenuItemType[]
  chip?: ChipOwnProps
}

export default menuItems
