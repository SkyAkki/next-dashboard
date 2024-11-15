import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from 'next/router';
import { headerData } from "@/models/data";
const Header: React.FC = () => {
  const router = useRouter()
  return (
    <header className={`fixed z-10 w-full bg-transparent p-4 ${router.pathname === '/' ? `text-white ${styles.homeHeader} mix-blend-difference` : 'text-black shadow-lg bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">NextJS Dashboard</Link>
        <nav>
          <ul className="flex space-x-4">
            {
              headerData.map((item) => {
                return (
                  <li key={item.id} className="relative">
                    <Link className={styles.headerHover} href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;