import { FunctionButton } from '../components/FunctionButton';
import { InputBox } from "../components/InputBox.1";
import { PasswordBox } from '../components/PasswordBox';
import { RedirectButton } from '../components/RedirectButton';
import { useSignin } from '../hooks/useSignin';
export const Signin=()=>{
    const {
        username,
        setUsername,
        password,
        setPassword,
        loading,
        error,
        handleSignin
    }=useSignin();
    return <div >
        <div className="py-6 px-8 font-sans font-semibold text-custom-red">TweetX</div>
        <div className="px-8">
        <RedirectButton label={"Create account"} to={'/signup'}/>
        <div className="grid grid-cols-9">
        <div className="col-span-3 ">
            <div className="py-14 font-sans font-bold text-custom-black">
                Login
            </div>
            <InputBox onChange={(e)=> setUsername(e.target.value)} placeholder={"Email"} />
            <PasswordBox placeholder={"Password"} onChange={(e)=>setPassword(e.target.value)}/>
            {error && <div className="text-red-500 text-sm pt-2">{error}</div>}
            <div className="flex justify-between items-center py-0">
            <span>Forgot password?</span>
            <FunctionButton onClick={handleSignin} label={loading?"Logging in...":"Login"}/>
            </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-5" >
        <img className="py-2 w-21 h-21 mx-auto mb-10 rounded-lg float-right" src="./src/images/image.png" alt="Image description" />
        </div>
        </div>
    </div>
    </div>
}