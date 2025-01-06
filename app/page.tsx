export default function Home() {
  return (
    <div className="bg-darkblue w-screen h-screen">
      <div className="flex flex-col md:flex-row">
        {/* side bar */}
        <div className="border-2 border-red-600">1</div>
        {/* main content */}
        <div className="flex-1 border-2 border-red-600">2</div>
      </div>
    </div>
  );
}
