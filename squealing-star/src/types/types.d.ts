export type Ingredient = {
    quantity: string
    name: string
}

export type Recipe = {
    id: number
    category: string
    // difficulty: string
    imgURL: string
    title: string
    preparation: string,
    ingredients: Ingredient[]
}