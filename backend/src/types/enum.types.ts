type UserRoleEnumT = "root" | "admin" | "moderator" | "user";
type ContentStatusEnumT = "draft" | "published" | "archived";
type ContentStatusWIPEnumT = "planned"|"wip"|"supported"|"unsupported"|"closed";
type ProjectRatingSystemEnumT = "G" | "PG" | "PG13" | "R" | "NC17";

export type {
    UserRoleEnumT,
    ContentStatusEnumT,
    ContentStatusWIPEnumT,
    ProjectRatingSystemEnumT,
}