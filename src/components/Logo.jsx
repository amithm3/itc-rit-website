import Image from 'next/image'
import logoimg from '@/images/logos/logo-dark.png'
import logoimg52 from '@/images/logos/logo52-dark.png'
import logoimgitc from 'public/android-chrome-512x512.png'

export function Logo(props) {
  const scale = 0.2
  const imageWOriginal = 1080
  const imageHOriginal = 1080
  const ratio = imageHOriginal / imageWOriginal

  const width = (props.width || imageWOriginal) * scale
  const height = width * ratio

  return (
    <div className="flex items-center">
      <Image
        className="rounded-md bg-white"
        src={logoimgitc}
        alt="Innovation & Training Club - RIT"
        width={51}
        height={51}
      />
    </div>
  )
}
