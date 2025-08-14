export default function ImageModal({ image, onClose }) {
  console.log(image)

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative">
        <img src={image} alt="image" className="max-w-full max-h-full" />
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
