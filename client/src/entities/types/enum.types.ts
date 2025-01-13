type UserRoleEnumT = "user" | "moderator" | "admin" | "root";
type NewsStatusEnumT = "draft" | "published" | "archived";

type UnitEnumT = "B" | "BT" | "KB" | "MB" | "GB" | "TB";

type ProjectStatusEnumT = "planned"|"wip"|"supported"|"unsupported"|"closed";

type ProjectRatingSystemEnumT = "G" | "PG" | "PG13" | "R" | "NC17";

type _StyleEnumT = "html" | "css" | "scss" | "tailwind";
type _CodeEnumT = "js" | "ts" | "py";
type _FrameworkEnumT = "react" | "nextjs" | "nestjs" | "laravel" | "flask";
type _DatabaseEnumT = "prisma" | "graphql" | "postgresql";
type _AdditionalEnumT = "nodejs" | "git" | "figma";
type TechnologyStackEnumT = _StyleEnumT | _CodeEnumT | _FrameworkEnumT | _DatabaseEnumT | _AdditionalEnumT;

type SocialEnumT = "vk" | "telegram" | "twitter" | "facebook" | "discord" | "youtube" | "git" | "boosty";

export type {
    UserRoleEnumT,
    NewsStatusEnumT,
    UnitEnumT,
    ProjectStatusEnumT,
    TechnologyStackEnumT, SocialEnumT, ProjectRatingSystemEnumT,
}