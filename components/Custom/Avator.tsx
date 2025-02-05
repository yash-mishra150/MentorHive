import React from "react";

interface AvatarProps {
    src?: string;
    name?: string;
    size?: number;
}

const getRandomColor = (): string => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700", "#FF8C00"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const getInitials = (name?: string): string => {
    if (!name) return "??";
    const parts = name.split(" ");
    return (parts[0]?.charAt(0) || "") + (parts[1]?.charAt(0) || "");
};

const Avatar: React.FC<AvatarProps> = ({ src, name, size = 64 }) => {
    const initials = getInitials(name).toUpperCase();
    const bgColor = getRandomColor();

    return src ? (
        <img
            src={src}
            alt={name}
            className="rounded-full object-cover"
            style={{ width: size, height: size > 5 ? size - 5 : size }}
        />
    ) : (
        <div
            className="rounded-full flex items-center justify-center text-white font-medium"
            style={{
                width: size,
                height: size,
                fontSize: size * 0.4,
                backgroundColor: bgColor,
            }}
        >
            {initials}
        </div>
    );
};

export default Avatar;
