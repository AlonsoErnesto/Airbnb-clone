import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
      <Image
        alt='Avatar'
        className='rounded-full'
        width={30}
        height={30}
        src="/images/avatar.png"
      />
    </div>
  )
}

export default Avatar;