"use client"

import { FC, useState } from 'react'

interface FriendRequestsProps {
  
}

const FriendRequests: FC<FriendRequestsProps> = ({}) => {
  const [friendReqs, setFriendReqs] = useState<number> ()
  return <div>FriendRequests</div>
}

export default FriendRequests