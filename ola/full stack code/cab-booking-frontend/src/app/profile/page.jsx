"use client"
import Layout from '@/components/User/Layout/Layout'
import Profile from '@/components/User/Profile/Profile'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout children={<Profile/>}></Layout>
        change3
    </div>
  )
}

export default page