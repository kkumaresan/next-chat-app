"use client";

import { User } from "lucide-react";
import Link from "next/link";
import React, { FC, useState } from "react";

interface FriendRequestsSidebarOptionProps {
  initialUnseenReqCount: number;
  sessionId: string;
}

const FriendRequestsSidebarOption: FC<FriendRequestsSidebarOptionProps> = ({
  sessionId,
  initialUnseenReqCount,
}) => {
  const [unseenReqCount, setunseenReqCount] = useState<number>(
    initialUnseenReqCount
  );
  return (
    <Link
      href="/dashboard/requests"
      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold group"
    >
      <div className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 border group-hover:border-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[0.625rem] font-medium bg-white">
        <User className="h-4 w-4" />
      </div>
      <p className="truncate">Friend Requests</p>
      {
        unseenReqCount > 0 ? (
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs">{unseenReqCount}</div>
        ) : null
      }
    </Link>
  );
};

export default FriendRequestsSidebarOption;
