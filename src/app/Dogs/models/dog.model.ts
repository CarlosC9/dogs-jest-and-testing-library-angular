export interface DogRandomResponse {
  message: string,
  status: "success"
}

export interface DogsRandomResponse {
  message: string[],
  status: "success"
}

export interface Dog {
  image: string
}
