import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="flex flex-1 items-center">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 flex"
        />
        <span className='hidden md:block'>CloudDocs</span>
      </Link>
      {children}
    </div>
  )
}

export default Header