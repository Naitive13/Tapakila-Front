export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div>
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl md:grid-cols-12 md:gap-8 md:py-16">
          <div className="place-self-center mr-auto md:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold md:text-5xl text-base-100">
              Your Moment, Our Mission: Events Made Easy
            </h1>
            <p className="mb-6 max-w-2xl font-light opacity-60 md:mb-8 md:text-xl text-base-100">
              Tapakila: All your entertainment, none of the hassle. Concerts,
              sports, theater, and more... grab tickets in seconds with
              transparent pricing and zero stress. Your next unforgettable
              experience is just a click away.
            </p>
            <button className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center rounded-lg btn-primary btn btn-soft">
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg btn btn-soft btn-secondary">
              Create Your Account
            </button>
          </div>
          <div className="hidden lg:flex lg:col-span-5 lg:mt-0">
            <img
              src="https://cdn-ilcfgjf.nitrocdn.com/QQNyydOkklDeFoGGQFALRXpVONafiuXL/assets/images/optimized/rev-e064b4d/www.mvola.mg/wp-content/uploads/2024/04/240411-maj-siteweb_Universel-1309x1536.png"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
