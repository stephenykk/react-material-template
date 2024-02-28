import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useActions, useMounted } from '@/hooks'
import { createLogger, showLoading, toast } from '@/utils'

import './Home.scss'

const logger = createLogger('HomePage')

function Home() {
  const userState = useSelector<RootState, RootState['user']>(
    (state) => state.user,
  )
  const [count, setCount] = useState(0)

  const { setUserName } = useActions()

  const handleClick = () => {
    setCount(count + 1)
  }

  const hideLoadingRef = useRef<any>()
  const openLoading = () => {
    hideLoadingRef.current = showLoading()
  }

  const closeLoading = () => {
    hideLoadingRef.current?.()
  }

  const successTips = () => {
    toast.success('data ready', () => console.log('close toast'), 2)
  }
  const errorTips = () => {
    toast.error('data fail')
  }

  useEffect(() => {
    if (!count) return
    setUserName(userState.userName.replace(/\d+$/, '') + count)
  }, [count])

  useMounted(() => {
    logger.info('home page mounted')
  })

  return (
    <div className="home-page">
      <h1>home page</h1>
      <main>
        <div className="count">count: {count}</div>
        <div>user: {userState.userName} </div>
        <button onClick={handleClick}>change user</button>
        <button onClick={openLoading}>show loading</button>
        <button onClick={closeLoading}>hide loading</button>
        <button onClick={successTips}>success toast</button>
        <button onClick={errorTips}>error toast</button>
      </main>
    </div>
  )
}

export default Home
