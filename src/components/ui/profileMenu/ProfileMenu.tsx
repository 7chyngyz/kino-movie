"use client";
import scss from "./ProfileMenu.module.scss";
import { FC } from "react";
import { useHeaderStore } from "@/stores/useHeaderStore";

interface ProfileMenuProps {
  logout: () => void;
}

const ProfileMenu: FC<ProfileMenuProps> = ({ logout }) => {
  const { isOpenProfileMenu } = useHeaderStore();
  return (
    <div
      className={
        isOpenProfileMenu
          ? `${scss.ProfileMenu} ${scss.active}`
          : `${scss.ProfileMenu}`
      }
    >
      <div className={scss.content}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileMenu;
