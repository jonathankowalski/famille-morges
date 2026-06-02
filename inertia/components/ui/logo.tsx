import * as React from 'react'

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src?: string
}

export function Logo({ src = '/images/logo.jpg', alt = 'Espace Famille Morges logo', className, ...props }: LogoProps) {
  return <img src={src} alt={alt} className={className} {...props} />
}

export default Logo
