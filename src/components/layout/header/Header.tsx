"use client";
import scss from "./Header.module.scss";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import BurgerButton from "@/components/ui/burgerButton/BurgerButton";
import { useHeaderStore } from "@/stores/useHeaderStore";
import BurgerMenu from "@/components/ui/burgerMenu/BurgerMenu";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useHeaderStore();
  const pathName = usePathname();
  const { data: session } = useSession();

  const goToMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${scss.Header} ${isMenuOpen ? scss.active : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <Link href={"/"}>
                <img src="/ecomovie.png" width={121} height={31} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className={scss.right}>
            <nav className={`${scss.nav} ${isMenuOpen ? scss.active : ""}`}>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={
                        pathName === item.href
                          ? `${scss.link} ${scss.active}`
                          : `${scss.link}`
                      }
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <i></i>
            <div className={scss.menuIcon} onClick={goToMenu}>
              <>
                <BurgerButton />
                <BurgerMenu />
              </>
            </div>
            <div className={scss.auth}>
              {session ? (
                <>
                  {/* <button onClick={() => signOut()} className={scss.profile}>
                    <img src={session.user?.image!} alt="" /> */}
                  {/* </button> */}
                </>
              ) : (
                <>{/* <b onClick={() => signIn("google")}>Login</b> */}</>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
