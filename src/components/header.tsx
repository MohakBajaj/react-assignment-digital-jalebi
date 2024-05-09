//  Renders the header component. The text you are seeing at top of the page is coming from this component.
export default function Header() {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center p-2">
      <h2 className="text-lg md:text-xl font-semibold -mb-4">
        <span className="text-primary">React</span> Assignment
      </h2>
      <h1 className="p-4 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-primary  text-center font-sans font-bold">
        Digital Jalebi
      </h1>
    </div>
  );
}
