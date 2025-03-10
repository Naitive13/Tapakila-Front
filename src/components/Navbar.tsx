export default function Navbar() {
  return (
    <div className="shadow-sm navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <a className="text-xl btn btn-ghost">Tapakila</a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 rounded-t-none bg-base-300">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
