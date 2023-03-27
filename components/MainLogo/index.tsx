import Image from 'next/image'

const MainLogo = () => {
  return (
    <div>
      <Image
        src='/logo.png'
        alt='logo'
        width={160}
        height={60}
        priority
      />
    </div>
  )
}

export default MainLogo
