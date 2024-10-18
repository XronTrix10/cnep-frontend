/**
 * This page is responsible for handling login and signup
 * @returns {JSX.Element} The page component
 */
const page = (): JSX.Element => {
  return (
    <main className="h-screen flex flex-row px-36 gap-x-20 py-12 *:max-h-screen *:w-1/2">
      <div className=""></div>
      <div className="bg-white/5 border border-white/15 rounded-3xl ">
        <h2 className="text-center font-pacifico text-3xl mt-12 mb-20">
          Continue With
        </h2>

        <div className="flex flex-col gap-y-4 justify-center items-center">
          <button className="px-4 py-2 bg-white rounded-lg text-black w-72">
            Continue with google
          </button>
          <button className="px-4 py-2 bg-white rounded-lg text-black w-72">
            Continue with Facebook
          </button>
          <div className="my-6 flex items-center gap-x-4 justify-center">
            <div className="bg-white/10 w-28 h-px"></div>
            OR
            <div className="bg-white/10 w-28 h-px"></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <input
              type="email"
              className="border border-white/15 bg-white/5 w-72 rounded-lg py-[6px] px-2"
            />
            <button className="px-4 py-2 bg-white rounded-lg text-black w-72">
              Continue with email
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
