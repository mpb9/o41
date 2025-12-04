export default function SubsectionHeading({ number, title }) {
  return (
    <h3 className="mt-2.5 mb-2 font-bold text-center underline max-w-[800px]">
      {number}. {title}
    </h3>
  );
}
