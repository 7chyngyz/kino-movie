import React from "react";
import scss from "./BurgerMenu.module.scss";
import { links } from "@/constants/links";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { signIn, signOut, useSession } from "next-auth/react";

const BurgerMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useHeaderStore();
  const { data: session } = useSession();

  return (
    <div className={scss.BurgerMenu}>
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={scss.auth}>
          {session ? (
            <>
              <h1>{session.user?.name}</h1>
              <button onClick={() => signOut()}>logout</button>
            </>
          ) : (
            <button onClick={() => signIn("google")}>login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
