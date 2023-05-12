import { StaticImageData } from 'next/image'

export interface IFormData {
  readonly name: string
  readonly email: string
  readonly message: string
}

export interface ICardProps {
  readonly title: string
  readonly index: number
  readonly icon: StaticImageData
}
