import React, { FC } from "react";
import { Button } from "../../button";
import {
  AiOutlineBuild,
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";

interface indexProps {}

const Sidebar: FC<indexProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineHome className="mr-2 text-lg" /> Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineMessage className="mr-2 text-lg" /> Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineBuild className="mr-2 text-lg" /> Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineUser className="mr-2 text-lg" /> All Aplicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineUnorderedList className="mr-2 text-lg" /> Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineCalendar className="mr-2 text-lg" /> My Schedule
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-orange-400"
            >
              <AiOutlineSetting className="mr-2 text-lg" /> Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none text-red-500 hover:text-red-500"
            >
              <AiOutlineLogout className="mr-2 text-lg " /> Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
