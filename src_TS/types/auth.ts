export interface SingupUser {
  email: string
  password: string
  name: string
  lastName: string
}

export interface LoginUser {
  email: string
  password: string
}

export interface User {
  email: string
  name: string
  lastName: string
}

export interface UserModel {
  id: number
  name: string
  lastName: string
  email: string
  password: string
}

export interface RefreshTokenModel {
  id: number
  userId: number
  refreshToken: string
}