type UserRoleEnumT = "user" | "moderator" | "admin" | "root";
type NewsStatusEnumT = "draft" | "published" | "archived";

type UnitEnumT = "B" | "BT" | "KB" | "MB" | "GB" | "TB";

type ProjectStatusEnumT = "wip" | "early access" | "completed";

type ImageExtensionEnumT = "png" | "jpg" | "jpeg" | "webp" | "avif";
type VideoExtensionEnumT = "mp4" | "webm" | "avi";
type NoteExtensionEnumT = "doc" | "docx" | "pdf" | "txt" | "word" | "js";
type AudioExtensionEnumT = "ogg" | "mp3";
type ArchiveExtensionEnumT = "rar" | "zip";
type ExtensionsEnumT = ImageExtensionEnumT | VideoExtensionEnumT | NoteExtensionEnumT | AudioExtensionEnumT | ArchiveExtensionEnumT;

type ProjectRatingSystemEnumT = "G" | "PG" | "PG-13" | "R" | "NC-17";

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
    ImageExtensionEnumT, VideoExtensionEnumT, NoteExtensionEnumT, AudioExtensionEnumT, ArchiveExtensionEnumT, ExtensionsEnumT,
    TechnologyStackEnumT, SocialEnumT, ProjectRatingSystemEnumT,
}