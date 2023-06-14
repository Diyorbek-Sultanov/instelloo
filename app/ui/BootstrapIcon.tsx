import { FC } from 'react'
import * as BootsTrapIcons from 'react-icons/bs'

import { TypeIcons } from '../shared/icons.types'

const BootstrapIcon: FC<{ name: TypeIcons }> = ({ name }) => {
	const IconComponent = BootsTrapIcons[name]

	return <IconComponent fontSize={20} /> || BootsTrapIcons.BsAlignCenter
}

export default BootstrapIcon
