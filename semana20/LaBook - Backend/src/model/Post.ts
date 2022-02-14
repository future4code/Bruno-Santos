export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface Post {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface getPostByIdOutputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date
}

export function toPostModel(objeto: any): Post{
    return objeto && {
        id: objeto.id,
        photo: objeto.photo,
        description: objeto.description,
        type: objeto.type,
        createdAt: objeto.created_at,
        authorId: objeto.author_id
      }
}
