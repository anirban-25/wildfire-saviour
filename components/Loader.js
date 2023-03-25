const Loader = () => {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center min-h-[100vh]">
        <h1 className="mt-[-200px]">Fetching Data</h1>
        <div className="flex justify-center items-center py-3">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700" />
      </div>
      </div>
    </div>
  );
};

export default Loader;
