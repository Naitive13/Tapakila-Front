export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col gap-5 justify-center items-stretch py-24 px-5 min-w-full md:flex-row">
      {children}
    </div>
  );
}
