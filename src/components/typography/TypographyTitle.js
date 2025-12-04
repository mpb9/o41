export default function TypographyTitle({ text }) {
  return (
    <div className="flex justify-center mt-4 text-center cursor-default">
      <h1 className="text-2xl md:text-3xl">{text}</h1>
    </div>
  );
}
