export interface SvgIconProps {
  name: string
  color?: string
  stroke?: string
  className?: string
  size?: number | string
}

const SvgIcon = (props: SvgIconProps) => {
  const { name, color, stroke = 'none', size = 30, className = '' } = props

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      fill={color}
      className={className}
    >
      <use href={'#icon-' + name} fill={color} stroke={stroke} />
    </svg>
  )
}
export default SvgIcon
