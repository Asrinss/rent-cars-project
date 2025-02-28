
import MainPage from "../_components/Main/MainPage";
import MainBlog from "../_components/Sections/MainBlog";
import MainOurFilo from "../_components/Sections/MainOurFilo";
import MainOurFleets from "../_components/Sections/MainOurFleets";
import MainTypes from "../_components/Sections/MainTypes";



export default function Home() {
  return (
   <div>
    <MainPage/>
    <div className="h-[550px] md:h-[250px] lg:h-[150px] xl:h-0"></div>
    <MainOurFleets/>
    <MainTypes/>
    <MainOurFilo/>
    <MainBlog/> 
   </div>
  );
}
