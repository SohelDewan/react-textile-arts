import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {

  const { googleLogin, githubLogin } = useAuth();

  // Navigation synchronization
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/'

  const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result=>{
          if(result.user){
            navigate(form);
          }
        })
  }
  return (
    <>
      <div className="flex mx-auto items-center gap-2 justify-center mt-4">
        <div className="divider">Contitue with</div>
        <button
          onClick={() =>handleSocialLogin(googleLogin)}
          className="btn text-[#1A4D2E]"
        ><FaGoogle />
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn text-[#1A4D2E]"
        ><FaGithub />
          GitHub
        </button>
        {/* <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn bg-[#1A4D2E] text-white"
        >
          Twitter
        </button> */}
      </div>
    </>
  );
};

export default SocialLogin;
