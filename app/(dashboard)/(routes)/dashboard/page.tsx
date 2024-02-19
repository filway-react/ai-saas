import { UserButton } from '@clerk/nextjs'
import type { NextPage } from 'next'

const DashboardPage: NextPage = () => {
  return (
    <>
      <h1>Dashboard(protected)</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  )
}

export default DashboardPage
