export default function ProfilePhoto() {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-black/30 mx-auto mb-8 md:mx-0">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQF3y8FJrJ5cMw/profile-displayphoto-crop_800_800/B56Z8JxS5xHUAQ-/0/1782575349081?e=1784160000&v=beta&t=sm87xcUHjrGQbp9MKj_-1eR5csMXtsNm3O7Jd5eqHlM"
        alt="Foto de Miguel Valencia"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
