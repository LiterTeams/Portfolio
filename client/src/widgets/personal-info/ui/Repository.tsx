"use client";

export default function Repository({className}:{className?:string;}){
    return(
        <div className={`bg-dark-secondaty p-6 rounded-xl ${className}`}>
            <h2 className="mb-4 text-lg">Repository</h2>
            <div className="grid grid-cols-4 gap-1">
                {/* {repositories.map((item, key) =>
                    <SocialCard key={`repository-${key}`} label={item.label} icon={item.icon} href={item.href} />
                )} */}
            </div>
        </div>
    )
}