
const Btn = ({view}) => {
    return (
        <>
        <button className='inline-flex h-8 mt-5 animate-background-shine items-center 
        justify-center rounded-md border border-primary-800 
        bg-[linear-gradient(110deg,#E779C1,5%,#1e2631,95%,#000103)] bg-[length:200%_100%] 
        px-6 font-medium 
         text-slate-400 transition-colors focus:outline-none focus:ring-2
          focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
          {view}
        </button>
      </>
    );
};

export default Btn;