const SignUpBtn = () => {
  return (
    <>
      <button
        className="inline-flex h-10 
        
        animate-background-shine items-center 
        justify-center rounded-md 
        border border-primary-800 
        bg-[linear-gradient(110deg,#E779C1,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-6 font-medium
         text-slate-100 transition-colors 
         focus:outline-none hover:text-secondary focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Sign Up
      </button>
    </>
  );
};

export default SignUpBtn;
