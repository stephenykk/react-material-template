export interface SvgIconProps {
  name: string
  color?: string
  stroke?: string
  className?: string
  size?: number | string
  width?: number
  height?: number
}

const SvgIcon = (props: SvgIconProps) => {
  const {
    name,
    color,
    stroke = 'none',
    size = 30,
    width,
    height,
    className = '',
  } = props

  return (
    <svg
      aria-hidden="true"
      width={width || size}
      height={height || size}
      fill={color}
      className={'icon ' + `icon-${name} ` + className}
    >
      <use href={'#icon-' + name} fill={color} stroke={stroke} />
    </svg>
  )
}
export default SvgIcon
