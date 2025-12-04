export default function ArticleHeading({ number, title }) {
  return (
    <div className="w-full mt-4 text-center max-w-[860px]">
      <hr className="border-stone-950" />
      <h2 className="text-sm font-black tracking-widest pt-0.5">
        ARTICLE {number}
      </h2>
      <hr className="border-stone-950" />
      <h2 className="mt-3 text-xl font-black tracking-normal">{title}</h2>
    </div>
  );
}
