export function ProfileImage() {
    return (
        <div className="relative w-[300px] h-[300px] mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-600 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                    src="/Jesusfoto.svg?height=300&width=300"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

