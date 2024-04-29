import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='text-center lg:flex justify-center'>
            <h2 className="text-3xl">Not Found</h2>
            <img className=" " src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?w=740&t=st=1714420639~exp=1714421239~hmac=a6871d8c078ebc6bdb11af921db0c7f858bb59561498624ea9f2e7a7e20db84c" />
            <Link to='/'>
            <button className="btn btn-ghost bg-[#1A4D2E] text-white text-xl">
            Go to Home page</button>
            </Link>
        </div>
    );
};

export default NotFound;