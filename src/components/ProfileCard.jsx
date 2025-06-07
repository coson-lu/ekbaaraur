import React from "react";

function ProfileCard({ imageSrc, name, title }) {
  return (
    <div className="w-full max-w-xs text-center rounded-sm overflow-hidden shadow-4xl group">
      <div className="w-full aspect-[8/7] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full block h-full object-cover object-top transition-transform duration-250 ease-in-out group-hover:scale-108"
        />
      </div>
      <div className="flex flex-col gap-[0.5vh] py-[2.5vh] bg-stone-700">
        <h2 className="text-xl font-bold text-primary tracking-wide">{name}</h2>
        <p className="text-white-700">{title}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
