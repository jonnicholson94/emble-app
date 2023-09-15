

export interface NewComment {
    comment_content: string,
    comment_id: string,
    comment_research_id: string | string[] | undefined,
    comment_timestamp: number,
}

export interface CommentType extends NewComment {
    comment_user_id: string
}