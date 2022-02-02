import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
    <div className="nav-container">
        <span>
          <Image src="/6119a8ddf9bf69a32c0806b3_Fill Dark.svg" alt="LH Logo" width={130} height={35} />
        </span>
        <Link href="https://github.com/Nora-ai/lh-assessment">
        <a target="_blank"><button className="nav-button">
            View Repo on Github
        </button></a>
        </Link>
  </div>
    )
}

export default Navbar