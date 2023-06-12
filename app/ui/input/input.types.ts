import { InputHTMLAttributes } from 'react'

export type TypeFieldProp = {
	error?: Error | undefined
}

type TypeField = TypeFieldProp & InputHTMLAttributes<HTMLInputElement>

export interface IField extends TypeField {}
