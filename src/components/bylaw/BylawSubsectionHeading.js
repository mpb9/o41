export default function SubsectionHeading({ number, title }) {
  return (
    <h3 className="my-1 font-bold text-center underline max-w-[900px]">
      {number}. {title}
    </h3>
  );
}
