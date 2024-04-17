import {BallTriangle} from "react-loader-spinner";

const Loader = () => {
  return(
    <>
    <div className="flex bg-white justify-center items-center min-h-screen">
      <BallTriangle
      height="100"
      width="100"
      color="blue"
      ariaLabel="loading"
      />
    </div>
    </>
  )
}

export default Loader;